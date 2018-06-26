/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/website/',
  }
} : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michael Diego | Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Michael Diego&apos;s website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
    ]
  },
  /*
  ** Modules
  */
  modules: [
    ['nuxt-sass-resources-loader', './assets/scss/main.scss', '@nuxtjs/sitemap']
  ],
  /*
  ** Router config
  */
  ...routerBase,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
