
module.exports = {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: "@/plugins/swiper.js",  ssr: false },
    '@/plugins/argon',
    '@/plugins/vue-highlightjs'
    ],
  /*
   ** Global CSS
   */
  css: [
      "swiper/dist/css/swiper.css"
  ],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
      sass: [
          '@/assets/mainStyle.sass'
      ]
      
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-highlightjs'],
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
