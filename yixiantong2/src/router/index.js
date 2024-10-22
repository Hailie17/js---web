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
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})

export default router
