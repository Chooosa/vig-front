const HttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeDetection: false,
  },
  defaultNS: 'common',
  ns: [
    'common',
    'home',
    'about',
    'projects',
    'services',
    'news',
    'vacancies',
    'contacts',
  ],
  use: process.browser ? [HttpBackend] : [],
}
