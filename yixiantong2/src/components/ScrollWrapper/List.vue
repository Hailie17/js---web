<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import  {mapState} from "vuex";
import {ListModel, listModel} from '@/modules/list'

export default {
  name: 'ListScrollWrapper',
  components: {

  },
  data(){
    return {

    }
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper)
    this.getListDatas(this.cityId, this.field)
  },
  methods: {
    getListDatas(cityId, field) {
      const listModel = new ListModel()
      listModel.getListDatas(cityId, field).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
