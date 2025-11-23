import mkcert from 'vite-plugin-mkcert'
import UnheadVite from '@unhead/addons/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
    'nuxt-llms',
    'nuxt-og-image'
  ],

  devServer: {
    host: process.env.NUXT_DEVSERVER_HOST || 'localhost',
    port: parseInt(process.env.NUXT_DEVSERVER_PORT || '3000'),
    https: process.env.NUXT_DEVSERVER_HTTPS ? true : false
  },

  devtools: { enabled: (process.env.NODE_ENV || 'local') !== 'production' },

  colorMode: { preference: 'light' },

  content: { experimental: { sqliteConnector: 'native' } },

  css: ['~/assets/css/main.css'],

  fonts: { provider: 'google' },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  routeRules: {
    //'/api/**': { cors: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  future: {
    compatibilityVersion: 5,
    typescriptBundlerResolution: true
  },

  compatibilityDate: '2025-01-15',

  /*
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
    typescriptPlugin: true
  },
  */

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    },
    esbuild: {
      options: {
        target: 'esnext',
        minify: false
      }
    },
    // https://nitro.build/guide/websocket
    experimental: { websocket: true }
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
    builder: 'vite'
  },

  eslint: {
    checker: {
      configType: 'flat',
      lintOnStart: false
    },
    config: {
      standalone: false,
      nuxt: { sortConfigKeys: true }
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
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'French', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: { fallbackLocale: 'en' }
  }
  /*
  llms: {
    domain: stringifyParsedURL(site_url),
    title: site_name,
    description: site_description
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
  }
  */
})
