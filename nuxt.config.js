const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vuetify', ssr: true },
    { src: '@/plugins/notice', ssr: false },
    { src: '@/plugins/axios', ssr: true }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    retry: { retries: 3 },
    prefix: '/ng/api',
    credentials: true,
    debug: true
  },

  proxy: {
    '/ng/api/': {
      target: 'http://180.141.91.221:7000'
      // pathRewrite: {
      //   '^/api/': '/ng/api/'
      // }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
