// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL
  // },
  privateRuntimeConfig: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
  },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
