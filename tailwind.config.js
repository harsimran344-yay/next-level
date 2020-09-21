/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }
      'tablet': '768px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: {
        regular: '#de3618',
        dark: '#A52A2A'
      },
      pink: {
        light: '#FFB6C1'
      }
    },
    fontFamily: {
      default: ['OpenSans', 'sans-serif']
    }
  }
}
