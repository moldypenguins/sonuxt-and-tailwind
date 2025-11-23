// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export default withNuxt(pluginVue, pluginPrettier)
