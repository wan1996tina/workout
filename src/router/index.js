import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import(/* webpackChunkName: "information" */ '../views/Information.vue')
  },
  {
    path: '/workout',
    name: 'Workout',
    component: () => import(/* webpackChunkName: "workout" */ '../views/Workout.vue')
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import(/* webpackChunkName: "timer" */ '../views/Timer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
