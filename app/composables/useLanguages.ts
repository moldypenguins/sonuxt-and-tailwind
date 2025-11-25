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
