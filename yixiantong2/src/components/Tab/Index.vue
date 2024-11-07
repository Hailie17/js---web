<template>
  <nav class="tab">
    <tab-sub v-for="(item, indx) of cityDatas" :cityInfo="item" :key="indx"></tab-sub>
  </nav>
</template>

<script>
import TabSub from './Sub.vue'
import cityDatas from '@/assets/data/cities'
export default {
  name: 'Tab',
  components: {
    TabSub
  },
  data (){
    return {
      cityDatas
    }
  }
}
</script>
