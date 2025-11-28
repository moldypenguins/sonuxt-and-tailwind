/**
 * @name index.d.ts
 * @version 2025/11/28
 * @summary Environment declaration
 **/

export default interface Environment {
  NODE_ENV: 'local' | 'debug' | 'development' | 'production'

  SITE_URL: string
  SITE_TITLE: string
  SITE_DESCRIPTION: string

  DEVSERVER_HOST: string
  DEVSERVER_PORT: number
  DEVSERVER_HTTPS: boolean

  SESSION_NAME: string
  SESSION_PASSWORD: string

  GOOGLE_AI_API_KEY: string
}

export type { Environment }
