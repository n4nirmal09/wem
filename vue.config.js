// vue.config.js
module.exports = {
  css: {
  	extract: {filename: 'css/main.css'}
  },

  pwa: {
    iconPaths:{
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/mstile-150x150.png',
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/ko/',
        '/landing/',
        '/ko/landing/',
        '/message/',
        '/ko/message/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
