// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  nitro: {
    devProxy: {
      "/appwrite": {
        target: process.env.APPWRITE_ENDPOINT,
        changeOrigin: true,
        cookieDomainRewrite: "127.0.0.1",
        cookiePathRewrite: "/",
      },
    },
  },

  modules: [
    "nuxt-appwrite",
    "@nuxtjs/tailwindcss",
    "nuxt-proxy",
    "@nuxtjs/harlem",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  appwrite: {
    endpoint: "http://127.0.0.1:3000/appwrite",
    project: process.env.APPWRITE_PROJECT_ID,
  },
  runtimeConfig: {
    appwrite: {
      endpoint: "http://127.0.0.1:3000/appwrite",
      project: "649af401cc2b049c3126",
      guardRoutes: ["/profile", "/api/user/profile", "/api/post/new"],
      guardRoutesRedirectURL: "/signin",
      guardSkipRoutes: ["/signin", "/signup"],
      guardSkipRedirectRoute: "/",
      apiKey: process.env.APPWRITE_API_KEY,
    },
    public: {
      appwrite: {
        endpoint: "http://127.0.0.1:3000/appwrite",
        project: process.env.APPWRITE_PROJECT_ID,
      },
    },
    // appwriteCustom: {
    // },
  },
  ssr: true,
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  app: {
    head: {
      script: [{ src: "/assets/preline/dist/preline.js", body: true, defer: true }],
    },
  },
});

// export default defineNuxtConfig({
//   // devtools: { enabled: true },
//   modules: [
//     "nuxt3-appwrite",
//     "@nuxtjs/tailwindcss",
//   ],
//   ssr: true,
//   appwrite: { guardSSR: true, guardRoutes: ["/profile", "/dashboard"], guardRoutesRedirectURL: "/signin" },
//   tailwindcss: {
//     cssPath: "~/assets/css/input.css",
//   },
//   head: { script: [{ src: "/vendor/preline/dist/preline.js", body: true, defer: true }] },
//   runtimeConfig: {
//     public: {
//       APPWRITE_ENDPOINT: "https://cloud.appwrite.io/v1",
//       APPWRITE_PROJECT_ID: "649af401cc2b049c3126",
//     },
//   },
// });
