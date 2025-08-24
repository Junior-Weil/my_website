/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
