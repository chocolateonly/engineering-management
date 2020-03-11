import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/manager'
  },
  {
    path: '/manager',
    name: 'Manager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "manager" */ '../views/Manager.vue')
  },
  {
    path: '/leader',
    name: 'Leader',
    component: () => import(/* webpackChunkName: "leader" */ '../views/Leader.vue')
  },
  {
    path: '/boss',
    name: 'Boss',
    component: () => import(/* webpackChunkName: "boss" */ '../views/Boss.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "boss" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
