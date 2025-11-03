/// <reference types="vite/client" />

// Define as novas variáveis de ambiente
interface ImportMetaEnv {
  readonly VITE_APIFOOTBALL_KEY: string;
  readonly VITE_APIFOOTBALL_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}