module.exports = {
  title: "Vega Testas",
  description: "Vega Testas, gydytoja homeopatė Eglė Aukštakalnienė.",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "lt-LT", // this will be set as the lang attribute on <html>
      title: "Vega Testas",
      description: "Vega testas, gydytoja homeopatė Eglė Aukštakalnienė."
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Вега тест",
      description: "Вегето-резонансное тестирование (вега тест)"
    },
    "/en/": {
      lang: "en-GB",
      title: "Vega Test",
      description: "Vega test, homeopath Eglė Aukštakalnienė"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "kalba",
        // label for this locale in the language dropdown
        label: "lietuvių",
        // config for Service Worker
        // algolia docsearch options for current locale
        algolia: {},
        nav: [{
            text: "Apie",
            link: "/about/"
          },
          {
            text: "Konsultacijos",
            link: "/konsultacija/"
          },
          {
            text: "Klausimai",
            link: "/klausimai/"
          }
        ]
        // sidebar: {
        //   '/': [/* ... */],
        //   '/nested/': [/* ... */]
        // }
      },
      "/ru/": {
        selectText: "язык",
        label: "русский",
        serviceWorker: {
          updatePopup: {
            message: "Страница обновлена.",
            buttonText: "refresh"
          }
        },
        nav: [{
            text: "Вега тест",
            link: "/ru/"
          },
          {
            text: "Эгле Аукштакальнене",
            link: "/ru/about/"
          }
        ],
        algolia: {},
        sidebar: {
          "/ru/": [
            /* ... */
          ],
          "/zh/nested/": [
            /* ... */
          ]
        }
      },
      "/en/": {
        selectText: "language",
        label: "english",
        nav: [{
            text: "About",
            link: "/en/about/"
          },
          {
            text: "Consultations",
            link: "/en/consultation/"
          }
        ],
        algolia: {},
        sidebar: {
          "/en/": [
            /* ... */
          ],
          "/zh/nested/": [
            /* ... */
          ]
        }
      }
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-131742364-1"
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "Puslapio turinys paseno.",
            buttonText: "Atnaujinti"
          },
          "/en/": {
            message: "New content is available.",
            buttonText: "Refresh"
          },
          "/ru/": {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      }
    ]
  ]
};