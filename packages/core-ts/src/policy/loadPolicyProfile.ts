// SPDX-License-Identifier: Apache-2.0
import type { JsonObject } from '../types.js';
import type { PolicyProfile } from './types.js';

export function loadPolicyProfile(document: JsonObject): PolicyProfile {
  if (typeof document.id !== 'string') {
    throw new Error('Policy profile requires id.');
  }
  if (!Array.isArray(document.targetCredentialTypes)) {
    throw new Error('Policy profile requires targetCredentialTypes.');
  }
  return document as unknown as PolicyProfile;
}
