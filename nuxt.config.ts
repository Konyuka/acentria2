export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        // {
        //   rel: 'preload',
        //   href: '/assets/media/2b3f1035ed87a788-s.p.woff',
        //   as: 'font',
        //   type: 'font/woff',
        //   crossorigin: 'anonymous',
        //   'data-next-font': 'size-adjust'
        // },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          integrity: "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
        }
      ],
      script: [
        {
          src: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          defer: true,
          crossorigin: "anonymous",
          nomodule: true
        },
        {
          src: "/cdn.optimizely.com/js/23791891397.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/code.jquery.com/jquery-3.6.0.min.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/webpack-e258b5a0693b6e62.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/framework-b9c846036eb5fff6.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/main-5bdc049aea558eb3.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/pages/_app-da3203ade56070c8.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/7dae1ac5-8f0ec41df98e4108.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/88fffc7f-32ae5cc8a23f2915.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/701-d8a1890344396c34.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/5127-e978395aef35730b.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/6445-0f7fa761d8fff882.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/9378-8dabc91967d9b82f.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/4353-9c4a9a038b9d379d.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/195-18348552c031fb77.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/4035-c9ec4bd2887f6acf.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/636-e8db56515c6abe7e.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/2695-be9ba43ecf279d7a.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/4956-fae6f823322e9ddf.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/3620-1dc7c59edee62f11.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/8285-8044bf913ad99f5d.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/pages/index-0c1866d9621cf71d.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/chunks/v4.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/gpomiYuEi5Hk7liTdwws_/_buildManifest.js",
          defer: true,
          crossorigin: "anonymous"
        },
        {
          src: "/_next/static/gpomiYuEi5Hk7liTdwws_/_ssgManifest.js",
          defer: true,
          crossorigin: "anonymous"
        }
      ]
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
