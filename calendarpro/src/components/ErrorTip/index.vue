<template>
  <div class="error-tip">
    <img src="@/assets/images/bg.jpg" alt="">
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>
import errorData from '@/data/error'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: 'ErrorTip',
  setup() {
    const store = useStore()
    return {
      errorCode: computed(() => store.state.errorCode),
      errorData
    }
  }
}
</script>

<style lang="scss" scoped>
.error-tip {
  display: flex;
  font-display: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img {
    width: 0.5rem;
  }
  p {
    margin-top: .15rem;
    font-size: .14rem;
    color: #999;
  }
}
</style>