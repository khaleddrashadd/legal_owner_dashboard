import { createI18n } from 'vue-i18n';

const messages = {
  English: {},
  العربية: {}
};
const i18n = createI18n({
  locale: 'English',
  fallbackLocale: 'English',
  messages,
  // Set legacy to false to use Composition API mode
  legacy: false
});

export default i18n;
