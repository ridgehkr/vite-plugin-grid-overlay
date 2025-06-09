declare module 'vite' {
  export interface Plugin {
    name: string;
    apply?: any;
    transformIndexHtml?: any;
  }
}
