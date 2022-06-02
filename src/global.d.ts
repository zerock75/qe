export {}
declare global {
  interface Window {
    // NODE_ENV: string;
    // VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    // VUE_ROUTER_BASH: string | undefined;
    api: {
      saveTextFile (text: string): Promise<string>;
      loadTextFile(): Promise<string>;
    }
  }
}
