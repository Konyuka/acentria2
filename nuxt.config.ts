export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/assets/media/2b3f1035ed87a788-s.p.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
          'data-next-font': 'size-adjust'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          integrity: "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
      ],
      script: [
        // { src: "/assets/plugins/mediabox/mediabox.min.js", body: true },
      ],
    },
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
    '@/assets/css/variables.css',
    '@/assets/css/8184c082007826aa.css',
    '@/assets/css/ee102810659ef561.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
