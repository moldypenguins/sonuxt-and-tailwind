import mkcert from 'vite-plugin-mkcert'
import UnheadVite from '@unhead/addons/vite'
import env from './env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-charts',
    'nuxt-llms',
    'nuxt-og-image',
    'nuxt-qrcode'
  ],

  devServer: {
    host: env.DEVSERVER_HOST,
    port: env.DEVSERVER_PORT,
    https: env.DEVSERVER_HTTPS
  },

  debug: env.NODE_ENV === 'debug',

  devtools: { enabled: env.NODE_ENV !== 'production' },

  content: { build: { markdown: { highlight: { theme: { default: 'github-light', dark: 'github-dark' } } } } },

  colorMode: { preference: 'light' },

  css: ['~/assets/css/main.css'],

  fonts: { provider: 'bunny' },

  icon: { provider: 'iconify', collections: ['bi', 'flag', 'lucide', 'simple-icons'] },

  ui: { theme: { colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral'] } },

  router: { options: { scrollBehaviorType: 'smooth' } },

  routeRules: {
    '/api/**': { cors: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  // By default, Nuxt 4 auto-imports stores from app/stores
  pinia: { storesDirs: ['./data/stores'] },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true
  },

  compatibilityDate: '2025-01-15',

  experimental: {
    asyncContext: true,
    asyncEntry: true,
    clientFallback: true,
    crossOriginPrefetch: true,
    enforceModuleCompatibility: true,
    parseErrorData: true,
    payloadExtraction: true,
    renderJsonPayloads: true,
    restoreState: true,
    typescriptPlugin: true,
    viewTransition: true
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: false
    },
    // https://nitro.build/guide/websocket
    experimental: { websocket: true, openAPI: true }
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
    builder: 'vite'
  },

  eslint: {
    config: {
      standalone: false,
      formatters: true,
      nuxt: { sortConfigKeys: true },
      typescript: { strict: true }
    }
  },

  vite: {
    logLevel: 'info',
    plugins: [
      mkcert(),
      UnheadVite({
        treeshake: { enabled: false },
        transformSeoMeta: { imports: true }
      })
    ]
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json', language: 'en-US', dir: 'ltr' },
      { code: 'fr', name: 'French', file: 'fr.json', language: 'fr-FR', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: { fallbackLocale: 'en' }
  },

  llms: {
    domain: env.SITE_URL
    /*
    title: environment.site.title,
    description: environment.site.description,
    sections: [
      {
        title: 'English Docs',
        description: 'English document collection',
        contentCollection: 'docs_en'
      },
      {
        title: 'French Docs',
        description: 'French document collection',
        contentCollection: 'docs_fr'
      }
    ]
    */
  }
})
