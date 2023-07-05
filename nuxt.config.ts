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
  ],
  runtimeConfig: {
    public: {
      PB_ENDPOINT: process.env.PB_ENDPOINT || "",
    },
  },
  ssr: true,
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  // app: {
  //   head: {
  //     script: [{ src: "/assets/preline/dist/preline.js", body: true, defer: true }],
  //   },
  // },
});
