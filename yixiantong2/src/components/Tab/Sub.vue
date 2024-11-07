<template>
  <div @click="onTabClick(cityInfo)" :class="['tab-item',{current: cityInfo.cityId === cityInfo}]">
    <span>{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: 'TabSub',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    ...mapMutations(['selectCity']),
    onTabClick(cityInfo){
      this.selectCity(cityInfo)
    }
  }
}
</script>
