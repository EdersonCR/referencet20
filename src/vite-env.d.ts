/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_THEME?: 't20' | 'ghanor';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
