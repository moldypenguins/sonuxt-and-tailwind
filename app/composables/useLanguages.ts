// Purpose: Language helpers for i18n routing and selection.
// Convention: Comments concise and intent-focused; avoid hardcoded strings.
// Notes: Use `@nuxtjs/i18n` APIs and `i18n/locales/*.json` for messages.
export function useLanguages() {
  const language = useCookie('nuxt-ui-language', { default: () => 'en' })
  const languages = computed(() =>
    [
      {
        label: 'English',
        icon: 'flag:gb-4x3',
        value: 'en',
        onSelect: () => (language.value = 'en')
      },
      {
        label: 'French',
        icon: 'flag:fr-4x3',
        value: 'fr',
        onSelect: () => (language.value = 'fr')
      }
    ].map((l) => ({ ...l, active: language.value === l.value }))
  )

  return {
    language,
    languages
  }
}
