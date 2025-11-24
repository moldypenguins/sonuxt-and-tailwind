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

  content: {
    experimental: { sqliteConnector: 'native' },
    build: { markdown: { highlight: { theme: { default: 'github-light', dark: 'github-dark' } } } }
  },

  colorMode: { preference: 'light' },

  css: ['~/assets/css/main.css'],

  fonts: {
    provider: 'google'
    /*
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
      fallbacks: {
        'serif': ['Lucida Serif'],
        'sans-serif': ['Lucida Sans'],
        'monospace': ['Lucida Console'],
        'cursive': ['Lucida Handwriting']
      }
    }
    */
  },

  icon: { provider: 'iconify' },

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral']
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  routeRules: {
    //'/api/**': { cors: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000',
      siteTitle: 'Sonuxt & Tailwind',
      siteDescription: 'A NuxtUI and TailwindCSS Starter Template.'
    }
  },

  future: {
    compatibilityVersion: 5,
    typescriptBundlerResolution: true
  },

  compatibilityDate: '2025-01-15',

  experimental: {
    /*
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
    */
    viewTransition: true
  },

  nitro: {
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
})
