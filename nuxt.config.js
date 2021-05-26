export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'StreamR',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap"},
        {
          rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
        },
        {
          rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Reggae+One&display=swap"
        }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
      'bootstrap-vue/nuxt',
      '@nuxtjs/axios',
      // '@nuxtjs/pwa',
      '@nuxtjs/auth',
      '@nuxtjs/dotenv',
      // 'nuxt-buefy',
      // 'nuxt-lazy-load',
    
  ],
  axios: {
    baseUrl: process.env.API_URL || 'https://api.themoviedb.org',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `/3/authentication/token/validate_with_login?${process.env.API_KEY}`,
            method: "post",
            propertyName: "data"
          }
        }
      },
      local2:{
        endpoints: {
          login: {
            url: `/3/authentication/guest_session/new?api_key=${process.env.API_KEY}`,
            method: "get",
            propertyName: "data"
          }
        }
      }
    }

  },
    bootstrapVue: {
      icons: true,
      componentPlugins: [
        'SidebarPlugin',
        'NavbarPlugin',
        'LayoutPlugin',
        'FormPlugin',
        'FormCheckboxPlugin',
        'FormInputPlugin',
        'FormRadioPlugin',
        'ToastPlugin',
        'ModalPlugin',
        'CardPlugin',
        'FormPlugin',
        'ButtonPlugin',
        'LayoutPlugin',
        'AlertPlugin',
        'FormSelectPlugin',
        'ButtonPlugin',
        'IconsPlugin',
        'FormTextareaPlugin',
        'OverlayPlugin',
        'ListGroupPlugin'
      ],
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
