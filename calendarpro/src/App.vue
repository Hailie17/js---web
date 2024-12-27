<template>
  <div id="app">
    <my-header>{{headTitle}}</my-header>
    <search-input :placeholder="placeholder" :maxlength="maxlength" />
    <router-view/>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import Tab from '@/components/Tab'
import SearchInput from '@/components/SearchInput'
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';
import {computed, watch} from 'vue'


export default {
  name: 'App',
  components: {
    MyHeader,
    SearchInput,
    Tab
  },
  setup(){
    const store = useStore(),
          state = store.state,
          router = useRouter()
    router.push('/')
    watch(() => {
      return router.currentRoute.value.name
    }, (v) => {
      store.commit('setHeadTitle', v)
      store.commit('setMaxLength', v)
      store.commit('setPlaceholder', v)

    })
    return computed(() => state).value // {}
    //333
  }
}
</script>

<style lang="scss">


</style>
