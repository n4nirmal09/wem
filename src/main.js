import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import './registerServiceWorker'

import './sass/main.scss'

// Global Components
import ellanseLogo from "./components/graphics-svg/ellanse-logo.vue"
Vue.component('ellanse-logo', ellanseLogo)
import ellanseTen from "./components/graphics-svg/ellanse-ten.vue"
Vue.component('ellanse-ten-logo', ellanseTen)

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
