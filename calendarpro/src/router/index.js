import { createRouter, createWebHistory } from 'vue-router'
import Day from '@/views/Day.vue'

const routes = [
  {
    path: '/',
    name: 'day',
    component: Day
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(/* webpackChunkName: "about" */ '../views/Month.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "about" */ '../views/Year.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
