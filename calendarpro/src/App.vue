<template>
  <div id="app">
    <my-header>{{headerTitle}}</my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">


</style>
