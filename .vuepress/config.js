module.exports = {
  title: 'Vega Testas - Eglė Aukštakalnienė',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Atnaujinta', // string | boolean
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      updatePopup: { 
         message: "New content is available.", 
         buttonText: "Refresh" 
      }
    },
    nav: [
      { text: 'Vega Testas', link: '/' },
      { text: 'Apie Eglę', link: '/about' },
      { text: 'Homeopatija', link: '/homeopatija' },
      {
        text: 'kalba',
        items: [
          { text: 'Lietuvių', link: '/language/chinese/' },
          { text: 'Rusų', link: '/language/japanese/' }
        ]
      }
    ]
  }
}