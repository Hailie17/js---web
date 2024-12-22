<template>
  <div id="app">
    <my-header>{{headTitle}}</my-header>
    <router-view/>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import Tab from '@/components/Tab'
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';
import {computed} from 'vue'


export default {
  name: 'App',
  components: {
    MyHeader,
    Tab
  },
  setup(){
    const store = useStore(),
          state = store.state,
          router = useRouter()
    router.push('/')
    return computed(() => state).value // {}
  }
}
</script>

<style lang="scss">


</style>
