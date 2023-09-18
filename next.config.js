const { resolve } = require('path');
const { i18n } = require('./next-i18next.config');
const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
const { version } = require('./package');

const localesDir = resolve('public/locales');

// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 3600,
  },
  env: {
    VERSION: version,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/static/:path*',
  //       destination: '' // Proxy to Backend
  //     },
  //     ...(isDev ? [{ source: '/api/:path*', destination: '' }] : []),
  //   ]
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/platform',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ]
  // },
  webpack(config, context) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: /\.jsx?$/,
        use: ['@svgr/webpack'],
      },
    );

    if (!context.isServer && context.dev) {
      config.plugins.push(new I18NextHMRPlugin({ localesDir }))
    }

    return config
  },
}
