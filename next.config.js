const { i18n } = require('./next-i18next.config')

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, { _isServer }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [],
            rehypePlugins: [],
            jsx: false
          }
        }
      ]
    })

    return config
  }
}

