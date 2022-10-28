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
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0', 
      title: 'My App',
      meta: [
        { name: 'description', content: '磐陽祭2022「ソフトウェア研究会」のWebサイトです。' },
        { name: 'keywords', content: '磐陽祭,高専祭,文化祭,福島工業高等専門学校,福島高専,福島' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ソフトウェア研究会 | 磐陽祭2022' },
        { property: 'og:description', content: '磐陽祭2022「ソフトウェア研究会」のWebサイトです。' },
        { property: 'og:site_name', content: 'ソフトウェア研究会 | 磐陽祭2022' },
        { property: 'og:url', content: 'https://banyosai2022.onrender.com/' },
        { property: 'og:image', content: '/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/img/icon.webp" },
      ],
    }
  }
})
