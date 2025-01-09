<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-else>
      <card-list :data="yearData"></card-list>
    </div>
  </div>
</template>

<script>
import getDay from '@/services'
import {onMounted, computed, watch} from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'

import CardList from '@/components/YearPage/List/index.vue'
import ErrorTip from '@/components/ErrorTip'

export default {
  name: 'YearPage',
  components: { CardList},
  setup(){
    const store = useStore(),
          state = store.state
    onMounted(()=> {
      getDay(store, 'year', getNowDate('year'))
    })
    // 当yearData改变时，将错误码置为 0
    watch(() => {
      return state.yearData
    }, () => {
      store.commit('setErrorCode', 0)
    })
    return {
      yearData: computed(() => state.yearData),
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped></style>