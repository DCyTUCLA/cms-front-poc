/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_STRAPI_URL: string;
  PUBLIC_STRAPI_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
