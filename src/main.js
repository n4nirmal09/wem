import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'
import './registerServiceWorker'

import './sass/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')