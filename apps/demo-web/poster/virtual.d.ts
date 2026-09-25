// SPDX-License-Identifier: Apache-2.0
declare module 'virtual:rm-v1-resources' {
  const resources: {
    manifest: unknown;
    files: {
      uri: string;
      mediaType: string;
      origin: string;
      version: string;
      digestSRI: `sha384-${string}`;
      text: string;
    }[];
  };
  export default resources;
}
