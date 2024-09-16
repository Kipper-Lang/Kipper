// declare "locale" on the global object
export {};

declare global {
  interface Window {
    locale: Record<string, any>;
    localeKey: string;
  }
}
