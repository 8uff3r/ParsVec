// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-lazy-load",
    "@nuxt/image",
  ],
  runtimeConfig: {
    public: {
      PB_ENDPOINT: process.env.PB_ENDPOINT || "https://pb.8uff3r.tech",
    },
  },
  ssr: true,
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  app: {
    head: {
      meta: [
        {
          name: "darkreader-lock",
        },
      ],
    },
  },
  image: {
    domains: [
      "images.unsplash.com",
    ],
    alias: {
      unsplash: "https://images.unsplash.com",
    },
    quality: 80,
    presets: {
      homepost: {
        modifiers: {
          width: 150,
          height: 50,
        },
      },
    },
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
    defaultImage: "/gray.jpg",

    // To remove class set value to false
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",
  },
});
