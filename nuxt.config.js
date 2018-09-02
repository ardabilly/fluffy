module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fluffy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Event management dashboard' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.rawgit.com/necolas/normalize.css/master/normalize.css' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Open+Sans:300,400|Playfair+Display:700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
  /*
  ** Global Plugin
  */
  plugins: [
    { src: '~/plugins/calendar.js', ssr: false },
    { src: '~/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/vuex.js', ssr: false },
  ],
  /*
  ** Global Module
  */
  modules: [
    
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader')
        const { options: {loaders} } = vueLoader || { options: {} }

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      }
    }
  }
}

const changeLoaderOptions = (loaders) => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}
