
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@/modules/crawler',
    '@/modules/static'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'https://at-bug-preview-netlify.cdn.prismic.io/api/v2',
    preview: '/preview/' // because we use nuxt generate
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
       config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
