/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_GA_ID: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
