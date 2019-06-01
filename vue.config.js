// vue.config.js
module.exports = {
  css: {
  	extract: {filename: 'css/main.css'}
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
