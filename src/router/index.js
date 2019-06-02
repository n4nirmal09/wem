import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/en/',
      name: 'landing-en',
      component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
      meta: { lang: 'en' }
    },
    {
      path: '/kor/',
      name: 'landing-kor',
      component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
      meta: { lang: 'kor' }
    }
  ],
})

// For language checking
router.beforeEach((to, from, next) => {
    
    if (to.matched.some(record => record.meta.lang === 'en')) {
      store.dispatch('changeLang','en')
      next()
    } else if (to.matched.some(record => record.meta.lang === 'kor')) {
      store.dispatch('changeLang','kor')
      next()
    }
    next()
})
