/// <reference types="vite/client" />

// JSON-LD context files imported as JSON modules (Vite resolves these as JSON).
declare module '*.jsonld' {
  const value: Record<string, unknown>;
  export default value;
}
