<template>
  <div id="app">
    <my-header>{{headTitle}}</my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import { useStore } from 'vuex';
import {computed} from 'vue'


export default {
  name: 'App',
  components: {
    MyHeader
  },
  setup(){
    const store = useStore(),
          state = store.state
    return computed(() => state).value // {}
  }
}
</script>

<style lang="scss">


</style>
