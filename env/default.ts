import type Environment from './env'

const _default: Environment = {
  // Node Environment [ local, debug, development, production ]
  NODE_ENV: 'local',

  SITE_URL: 'https://local.domain.com',
  SITE_TITLE: 'Sonuxt & Tailwind',
  SITE_DESCRIPTION: 'A production-ready NuxtUI and TailwindCSS starter template.',

  DEVSERVER_HOST: 'localhost',
  DEVSERVER_PORT: 3000,
  DEVSERVER_HTTPS: false,

  SESSION_NAME: 'sonuxt-and-tailwind-session',
  SESSION_PASSWORD: '',

  // https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#provider-instance
  // https://ai-sdk.dev/cookbook/node/mcp-tools
  // https://github.com/mcp/io.github.github/github-mcp-server
  // https://aistudio.google.com/api-keys
  GOOGLE_AI_API_KEY: ''
}

export default _default
