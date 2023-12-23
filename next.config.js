const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [ path.join(__dirname, 'styles') ],
  },
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
  generateBuildId: async () => {
    const commitFetch = await fetch('https://git.theclashfruit.me/api/v1/repos/TheClashFruit/Website/commits?sha=main&limit=1')
    const commitData = await commitFetch.json()

    return commitData[0].sha
  },
  redirects: async () => {
    return [
      {
        source: '/post/:year/:permalink',
        destination: '/post/:permalink',
        permanent: true,
      },
    ]
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=5184000; includeSubDomains'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=5184000; includeSubDomains'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig


/*
 i18n: {
   locales: ['en', 'hu', 'fr', 'de'],
   defaultLocale: 'en'
 },
*/