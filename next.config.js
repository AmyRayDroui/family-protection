/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'he', 'ru'],
    defaultLocale: 'he',
    localeDetection: false,
  },
}

const createNextPluginPreval = require('next-plugin-preval/config')
const withNextPluginPreval = createNextPluginPreval()

module.exports = withNextPluginPreval(nextConfig)
