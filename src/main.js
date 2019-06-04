import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import './registerServiceWorker'

// utilities
import './utilities/scrollto.js'
// styles
import './sass/main.scss'

// Global Components
import ellanseLogo from "./components/graphics-svg/ellanse-logo.vue"
Vue.component('ellanse-logo', ellanseLogo)
import ellanseTen from "./components/graphics-svg/ellanse-ten.vue"
Vue.component('ellanse-ten-logo', ellanseTen)
import footer from "./components/block-footer.vue"
Vue.component('block-footer',footer)

// Mixins
import globalMixins from "./mixins/global-mixins.js"
Vue.mixin(globalMixins)

// directives
import bgImage from './directives/bgimage'
Vue.directive('bgimage', bgImage)
import reveal from './directives/reveals'
Vue.directive('reveal', reveal)

Vue.config.productionTip = false



new Vue({
  store,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
