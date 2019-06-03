// vue.config.js
module.exports = {
  css: {
  	extract: {filename: 'css/main.css'}
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/wem'
    : '/',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/ko/',
        '/landing',
        '/ko/landing',
        '/message',
        '/ko/message'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
