// Browser stub — JSON Schema validation (AJV/node:fs) is not used in the demo.
export const SCHEMA_IDS = { DCC: '', RMC: '' };
export function validate(_doc: unknown, _schemaId: string) {
  return { valid: true, errors: [] as string[] };
}
