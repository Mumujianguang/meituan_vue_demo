import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/views/pages/main/index';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: mainPage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/layout/Login')
    },{
      path: '/city',
      name: 'city',
      component: () => import('@/views/pages/cityPage/index')
    }
  ]
})
