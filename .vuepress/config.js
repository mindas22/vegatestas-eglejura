module.exports = {
  title: 'Vega Testas',
  description: 'Vega Testas, gydytoja homeopatė Eglė Aukštakalnienė.',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'lt-LT', // this will be set as the lang attribute on <html>
      title: 'Vega Testas',
      description: 'Vega testas, gydytoja homeopatė Eglė Aukštakalnienė.'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Вега тест',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'kalba',
        // label for this locale in the language dropdown
        label: 'lietuvių',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "Puslapis atnaujintas",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'pradžia', link: '/' },
          { text: 'Eglė Aukštakalnienė', link: '/about/' },
          { text: 'vega testas', link: '/vega-testas/' },
          { text: 'homeopatija', link: '/homeopatija/' },
          { text: 'klausimai', link: '/klausimai/' }
        ],
        // sidebar: {
        //   '/': [/* ... */],
        //   '/nested/': [/* ... */]
        // }
      },
      '/ru/': {
        selectText: 'язык',
        label: 'русский',
        serviceWorker: {
          updatePopup: {
            message: "Страница обновлена.",
            buttonText: "refresh"
          }
        },
        nav: [
          { text: 'Вега тест', link: '/ru/' },
          { text: 'Эгле Аукштакальнене', link: '/ru/about/' }
        ],
        algolia: {},
        sidebar: {
          '/ru/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      }
    },
  },
  ga: 'UA-131742364-1'
}