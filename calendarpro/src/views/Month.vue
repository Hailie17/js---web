<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-else>
      <card-list :data="monthData"></card-list>
    </div>
  </div>
</template>

<script>
import getDay from '@/services'
import { onMounted, computed, watch } from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'
import ErrorTip from '@/components/ErrorTip'
import CardList from '@/components/MonthPage/List/index.vue'

export default {
  name: 'MonthPage',
  components: { CardList, ErrorTip},
  setup() {
    const store = useStore(),
          state = store.state
    onMounted(() => {
      getDay(store, 'month', getNowDate('month'))
    })
    watch(() => {
      return state.monthData
    }, () => {
      store.commit('setErrorCode', 0)
    })
    return {
      monthData: computed(() => state.monthData),
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped></style>