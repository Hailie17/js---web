<template>
  <div :class="['tab-item',{current: cityInfo.cityId === cityInfo}]"></div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'TabSub',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {

  }
}
</script>
