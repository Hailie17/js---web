<template>
  <div id="app">
    <my-header>{{headTitle}}</my-header>
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
