// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-lazy-load',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './shadcn/components/ui/'
  },
  // "radix-vue/nuxt",
  runtimeConfig: {
    public: {
      PB_ENDPOINT: process.env.PB_ENDPOINT || '/pb_api/'
    }
  },
  ssr: true,
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },

  routeRules: {
    '/pb_api/**': { proxy: 'http://127.0.0.1:8090/**' }
  },
  app: {
    head: {
      meta: [
        {
          name: 'darkreader-lock'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },

  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder
    defaultImage: '/gray.jpg',

    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad'
  }
});
