import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index.vue';
import List from '@/pages/List.vue';
import Detail from '@/pages/Detail.vue';
import City from '@/pages/City.vue';
import Search from '@/pages/Search.vue';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
