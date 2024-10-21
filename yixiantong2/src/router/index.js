
import AboutView from '../views/AboutView.vue'
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
