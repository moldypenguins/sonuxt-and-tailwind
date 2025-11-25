// runtime/composables/useThemes.ts
import { reactive } from 'vue'
import themesConfig from '#build/themes.config'

const _themesConfig = reactive(themesConfig)
export const useThemes = () => _themesConfig
