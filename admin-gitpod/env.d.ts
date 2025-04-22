interface ImportMetaEnv {
  readonly VITE_REACT_APP_SERVER_URL: string;
  // add more env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
