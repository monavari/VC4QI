// SPDX-License-Identifier: Apache-2.0
declare module 'virtual:demo-resources' {
  interface BindingResources {
    manifest: unknown;
    profiles: Record<string, unknown>;
    files: {
      uri: string;
      mediaType: string;
      origin: string;
      version: string;
      digestSRI: `sha384-${string}`;
      text: string;
    }[];
    /** Status lists kept from an earlier time (same identifiers as current ones). */
    archive?: BindingResources['files'];
  }
  const resources: { rm: BindingResources; cal: BindingResources; gs: BindingResources };
  export default resources;
}
