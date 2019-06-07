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
      name: 'home-en',
      component: Home,
      meta: { lang: 'en' }
    },
    {
      path: '/ko/',
      name: 'home-kor',
      component: Home,
      meta: { lang: 'kor' }
    },
    {
      path: '/landing/',
      name: 'landing-en',
      component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
      meta: { lang: 'en' }
    },
    {
      path: '/ko/landing/',
      name: 'landing-kor',
      component: () => import(/* webpackChunkName: "landing-kor" */ '../views/Landing.vue'),
      meta: { lang: 'kor' }
    },
    {
      path: '/message/',
      name: 'message-en',
      component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
      meta: { lang: 'en' }
    },
    {
      path: '/ko/message/',
      name: 'message-kor',
      component: () => import(/* webpackChunkName: "message-kor" */ '../views/Message.vue'),
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
