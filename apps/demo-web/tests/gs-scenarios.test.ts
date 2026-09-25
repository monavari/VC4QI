// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { SCENARIOS } from '../src/scenarios/index.js';
import { runVerifier } from '../src/store/index.js';
import {
  autoLayout,
  ISSUER_FRAME_HEADER_HEIGHT,
  issuerFrameBodyExtent,
  issuerGroupedLayout,
  rectanglesOverlap,
} from '../src/components/CredentialGraph.js';

describe('demo-web GS scenario verification', () => {
  it('replaces the legacy GS scenario with the two hair-dryer variants', () => {
    const gsScenarioIds = SCENARIOS
      .filter(scenario => scenario.profile === 'D')
      .map(scenario => scenario.id);

    expect(gsScenarioIds).toEqual([
      'gs-hair-dryer-hitl',
      'gs-hair-dryer-external-test-lab-hitl',
    ]);
    expect(gsScenarioIds).not.toContain('gs-scheme-authorization');
  });

  for (const scenarioId of [
    'gs-hair-dryer-hitl',
    'gs-hair-dryer-external-test-lab-hitl',
  ]) {
    it(`${scenarioId} accepts the passing graph and rejects the failing graph`, async () => {
      const scenario = SCENARIOS.find(candidate => candidate.id === scenarioId);
      expect(scenario).toBeDefined();

      const passing = await runVerifier(scenario!, 'passing');
      const unexpectedFailures = passing.results.filter(result => result.status === 'FAIL');
      expect(passing.verified, JSON.stringify(unexpectedFailures, null, 2)).toBe(true);
      expect(passing.results.filter(result => result.code === 'ASSESSMENT_PASSED')).toHaveLength(2);

      const failing = await runVerifier(scenario!, 'failing');
      expect(failing.verified).toBe(false);
      expect(failing.results.map(result => result.code)).toContain('DIGEST_MISMATCH');
    });
  }

  it('preserves the vertical evidence hierarchy for every GS edge', () => {
    for (const scenarioId of [
      'gs-hair-dryer-hitl',
      'gs-hair-dryer-external-test-lab-hitl',
    ]) {
      const scenario = SCENARIOS.find(candidate => candidate.id === scenarioId)!;
      const positions = autoLayout(scenario.nodes, scenario.edges);
      for (const edge of scenario.edges) {
        expect(positions.get(edge.from)!.y).toBeGreaterThan(positions.get(edge.to)!.y);
      }
    }
  });

  it('reorders nodes within a layer to remove a simple crossing', () => {
    const positions = autoLayout(
      [{ id: 'left' }, { id: 'right' }, { id: 'upper-right' }, { id: 'upper-left' }],
      [
        { from: 'left', to: 'upper-left' },
        { from: 'right', to: 'upper-right' },
      ],
    );
    expect(positions.get('upper-left')!.x).toBeLessThan(positions.get('upper-right')!.x);
    expect(positions.get('upper-left')!.y).toBeLessThan(positions.get('left')!.y);
  });

  it('places each issuer in a distinct non-overlapping frame', () => {
    const scenario = SCENARIOS.find(candidate =>
      candidate.id === 'gs-hair-dryer-external-test-lab-hitl')!;
    const layout = issuerGroupedLayout(scenario.nodes, scenario.edges);

    expect(layout.frames).toHaveLength(scenario.actors.length);
    for (let i = 0; i < layout.frames.length; i += 1) {
      const frameA = layout.frames[i]!;
      const expectedIds = scenario.nodes
        .filter(node => node.actorId === frameA.actorId)
        .map(node => node.id)
        .sort();
      expect([...frameA.credentialIds].sort()).toEqual(expectedIds);

      for (let j = i + 1; j < layout.frames.length; j += 1) {
        const frameB = layout.frames[j]!;
        expect(rectanglesOverlap(frameA, frameB)).toBe(false);
      }
    }
  });

  it('detects issuer-frame collisions but permits touching boundaries', () => {
    const frame = { x: 0, y: 0, width: 200, height: 300 };
    expect(rectanglesOverlap(frame, { x: 150, y: 100, width: 200, height: 100 })).toBe(true);
    expect(rectanglesOverlap(frame, { x: 200, y: 0, width: 100, height: 100 })).toBe(false);
  });

  it('constrains credentials to the lower body of their issuer frame', () => {
    const scenario = SCENARIOS.find(candidate =>
      candidate.id === 'gs-hair-dryer-external-test-lab-hitl')!;
    const layout = issuerGroupedLayout(scenario.nodes, scenario.edges);

    for (const frame of layout.frames) {
      expect(issuerFrameBodyExtent(frame)).toEqual([
        [0, ISSUER_FRAME_HEADER_HEIGHT],
        [frame.width, frame.height],
      ]);
      for (const credentialId of frame.credentialIds) {
        expect(layout.credentialPositions.get(credentialId)!.y)
          .toBeGreaterThanOrEqual(ISSUER_FRAME_HEADER_HEIGHT);
      }
    }
  });

  it('preserves each VC hierarchy row after the issuer-positioning pass', () => {
    const scenario = SCENARIOS.find(candidate =>
      candidate.id === 'gs-hair-dryer-external-test-lab-hitl')!;
    const flatPositions = autoLayout(scenario.nodes, scenario.edges);
    const grouped = issuerGroupedLayout(scenario.nodes, scenario.edges);
    const frameByCredential = new Map(grouped.frames.flatMap(frame =>
      frame.credentialIds.map(credentialId => [credentialId, frame] as const)));

    for (const node of scenario.nodes) {
      const frame = frameByCredential.get(node.id)!;
      const relative = grouped.credentialPositions.get(node.id)!;
      expect(frame.y + relative.y).toBe(flatPositions.get(node.id)!.y);
    }
  });
});
