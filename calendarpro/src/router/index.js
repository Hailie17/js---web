import { createRouter, createWebHistory } from 'vue-router'
import Day from '@/views/Day.vue'

const routes = [
  {
    path: '/',
    name: 'Day',
    component: Day
  },
  {
    path: '/month',
    name: 'Month',
    component: () => import(/* webpackChunkName: "about" */ '../views/Month.vue')
  },
  {
    path: '/year',
    name: 'Year',
    component: () => import(/* webpackChunkName: "about" */ '../views/Year.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
