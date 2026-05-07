# Tutorial 1 — Issue and Verify a Digital Calibration Certificate

This tutorial walks through the full three-layer DCC credential chain using the
TypeScript library. You will:

1. Build an `AccreditationCredential` (NAB → CAB)
2. Build a `CapabilityCredential` (NAB → CAB, scope projection)
3. Issue a `DigitalCalibrationCertificate` (CAB → instrument owner)
4. Verify the chain with the six-rule engine

## Prerequisites

```bash
pnpm install          # from repo root
cd packages/core-ts
```

## Step 1 — Create key pairs

```typescript
import { generateKeyPair } from '@qi-vc/core/issuer';

const nabKey  = await generateKeyPair('did:web:dakks.de#key-1');
const cabKey  = await generateKeyPair('did:web:testlab.example#key-1');
```

## Step 2 — Build and sign the AccreditationCredential

```typescript
import { issue } from '@qi-vc/core/issuer';

const accreditation = await issue({
  credential: {
    '@context': ['https://www.w3.org/ns/credentials/v2',
                 'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld'],
    type: ['VerifiableCredential', 'AccreditationCredential'],
    id: 'https://dakks.de/credentials/accreditation/D-K-12345-67-89',
    issuer: { id: 'did:web:dakks.de', name: 'DAkkS' },
    validFrom: '2025-09-01T00:00:00Z',
    validUntil: '2030-09-01T00:00:00Z',
    credentialSubject: {
      id: 'did:web:testlab.example',
      scheme: 'ISO/IEC 17025:2017',
      accreditationReference: 'D-K-12345-67-89',
      scope: [{
        measurand: 'pressure',
        allowedMethods: ['DKD-R 6-1:2014'],
        range: { from: 0, to: 1000, unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' } },
        uncertainty: { type: 'relativePercent', maxRelativePercent: 0.05 },
      }],
    },
  },
  keyPair: nabKey,
});
```

## Step 3 — Build and sign the CapabilityCredential

```typescript
import { computeHashBinding } from '@qi-vc/core/canonicalize';

const accHash = await computeHashBinding(accreditation);

const capability = await issue({
  credential: {
    '@context': ['https://www.w3.org/ns/credentials/v2',
                 'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld'],
    type: ['VerifiableCredential', 'CapabilityCredential'],
    id: 'https://dakks.de/credentials/capability/D-K-12345-67-89/dcc',
    issuer: { id: 'did:web:dakks.de', name: 'DAkkS' },
    validFrom: '2025-09-01T00:00:00Z',
    validUntil: '2030-09-01T00:00:00Z',
    credentialSubject: {
      id: 'did:web:testlab.example',
      constraints: {
        credentialType: 'DigitalCalibrationCertificate',
        scopeEntries: [{
          measurand: 'pressure',
          allowedMethods: ['DKD-R 6-1:2014'],
          range: { from: 0, to: 600, unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' } },
          uncertainty: { type: 'relativePercent', maxRelativePercent: 0.05 },
        }],
      },
    },
    evidence: [{
      id: 'https://dakks.de/credentials/accreditation/D-K-12345-67-89',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: accHash },
    }],
  },
  keyPair: nabKey,
});
```

## Step 4 — Issue the DCC

```typescript
const capHash = await computeHashBinding(capability);

const dcc = await issue({
  credential: {
    '@context': ['https://www.w3.org/ns/credentials/v2',
                 'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld'],
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    id: 'urn:uuid:dcc-tutorial-001',
    issuer: { id: 'did:web:testlab.example', name: 'TestLab GmbH' },
    validFrom: new Date().toISOString(),
    credentialSubject: {
      id: 'urn:item:pressure-transducer-001',
      measurementResults: [{
        measurand: 'Pressure',
        usedMethods: [{ name: 'DKD-R 6-1:2014', reference: 'DKD-R 6-1:2014' }],
        results: [{
          data: {
            quantity: {
              value: 300,
              unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' },
              uncertainty: { expandedUncertainty: 0.15, coverageFactor: 2, coverageProbability: 0.95 },
            },
          },
        }],
      }],
    },
    evidence: [{
      id: 'https://dakks.de/credentials/capability/D-K-12345-67-89/dcc',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: capHash },
    }],
  },
  keyPair: cabKey,
});
```

## Step 5 — Verify the chain

```typescript
import { verify } from '@qi-vc/core/verifier';

const docStore = {
  [String(capability.id)]: capability,
  [String(accreditation.id)]: accreditation,
};

const trustRegistry = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  type: ['VerifiableCredential', 'TrustRegistryCredential'],
  id: 'https://dakks.de/trust-registry',
  issuer: 'did:web:dakks.de',
  credentialSubject: {
    id: 'https://dakks.de/trust-registry#list',
    registryEntries: [{ id: 'did:web:dakks.de' }],
  },
};

const result = await verify(dcc, {
  fetchDocument: async (uri) => docStore[uri],
  resolveTrustRegistry: async () => trustRegistry,
  resolveKey: async () => new Uint8Array(cabKey.publicKey),
  skipRules: [4],   // skip status-list check (no live status server)
});

console.log(result.verified);  // true
result.results.forEach(r => console.log(`Rule ${r.rule}: ${r.status} — ${r.detail}`));
```

## Expected output

```
true
Rule 0: PASS — eddsa-rdfc-2022 Data Integrity proof verified
Rule 1: PASS — Domain issuer did:web:testlab.example == CapabilityCredential subject
Rule 2: PASS — AccreditationCredential issuer did:web:dakks.de is trusted
Rule 2: PASS — CapabilityCredential derivation valid
Rule 3: PASS — Temporal validity check passed
Rule 5: PASS — domain→capability hashBinding verified
Rule 5: PASS — capability→accreditation hashBinding verified
Rule 6: PASS — DCC measurement results within CapabilityCredential scope
```

## What the scope check verifies (Rule 6)

For the `pressure` measurand the algorithm checks:

| Check | Value | Scope bound | Result |
|-------|-------|-------------|--------|
| Method | `DKD-R 6-1:2014` | `[DKD-R 6-1:2014]` | ✓ |
| Range | 300 kPa | 0–600 kPa | ✓ |
| Uncertainty | U = 0.15 kPa at 300 kPa = 0.05% | ≤ 0.05% | ✓ |

See `packages/core-ts/src/scope/index.ts` and paper §6.2 for the full algorithm.

## Python equivalent

The same chain can be issued and verified using the Python library:

```bash
cd packages/core-py
python -c "
from qi_vc_core.issuer import generate_key_pair, issue
from qi_vc_core.verifier import verify, VerifyOptions
# ... same steps as above
"
```

See `packages/core-py/tests/test_verifier.py` for complete working examples.
