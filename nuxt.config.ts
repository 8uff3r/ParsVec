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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
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
