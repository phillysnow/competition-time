const pkg = require('./package')

export default () => {
  return {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
      title: 'nuxt-fire | Demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/github-buttons.js'],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa','@nuxtjs/firebase'],

    buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],

    vuetify: {
      // treeShake: false,
      // customVariables: ['~/assets/style/variables.scss'],
      defaultAssets: {
        icons: false
      },
      theme: {
        dark: false,
        themes: {
          light: {
            primary: '#3b8070',
            secondary: '#35495e'
          }
        }
      }
    },

    /*
     ** Nuxt.js Middleware
     */
    router: {
      middleware: ['testMiddleware']
    },

    //Nuxt-Fire Module Options
    firebase: {
      config: {
        apiKey: "AIzaSyAUhEYQm6ALh8TRS7Z7moRGTtPC7rGf8b8",
        authDomain: "competition-time-54e43.firebaseapp.com",
        databaseURL: "https://competition-time-54e43.firebaseio.com",
        projectId: "competition-time-54e43",
        storageBucket: "competition-time-54e43.appspot.com",
        messagingSenderId: "664633265774",
        appId: "1:664633265774:web:87ac32f554cae36608e07f",
        measurementId: "G-JH6P8D1K0F",
        fcmPublicVapidKey:
          'BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w'
      },
      onFirebaseHosting: false,
      services: {
        auth: {
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChanged'
          },
          ssr: true
        },
        firestore: true,
        functions: {
          // emulatorPort: 12345
        },
        storage: true,
        realtimeDb: true,
        performance: true,
        analytics: true,
        remoteConfig: {
          settings: {
            fetchTimeoutMillis: 60000,
            minimumFetchIntervalMillis: 43200000
          },
          defaultConfig: {
            welcome_message: 'Welcome'
          }
        },
        messaging: {
          createServiceWorker: true
        }
      }
    },

    pwa: {
      workbox: {
        importScripts: [
          '/firebase-auth-sw.js'
        ],
        // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
        // only set this true for testing and remember to always clear your browser cache in development
        dev: process.env.NODE_ENV === 'development'
      }
    },

    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
    }
  }
}
