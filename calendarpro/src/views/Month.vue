<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-else>
      
    </div>
  </div>
</template>

<script>
import getDay from '@/services'
import { onMounted, computed, watch } from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'

export default {
  name: 'MonthPage',
  setup() {
    const store = useStore(),
          state = store.state
    onMounted(() => {
      getDay(store, 'month', getNowDate('month'))
    })
    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped></style>