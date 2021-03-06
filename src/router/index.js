import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/home'
import Commont from '../views/comment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Home2
    }, {
      path: 'comment',
      component: Commont
    }, {
      path: 'material',
      component: () => import('../views/material')
    }, {
      path: 'articles',
      component: () => import('../views/articles')
    }, {
      path: 'publish',
      component: () => import('../views/publish')
    }, {
      path: 'publish/:articleId',
      component: () => import('../views/publish')
    }, {
      path: 'account', // 账户信息
      component: () => import('../views/account') // 按需加载
    }]
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
