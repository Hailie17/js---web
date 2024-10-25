<template>
  <div class="current-city">
    <span>当前城市：</span>
    <router-link :to="{name: path}">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{this.cityName}}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'CurrentCity',
  data() {
    return {
      path: 'Index'
    }
  },
  computed: {
    ...mapState(['cityName'])
  }
}

</script>

<style lang="scss" scoped></style>

