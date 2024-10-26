<template>
  <div class="icon-item">
    <div class="icon" @click="onRouteTo(field)" :style="{backgroundColor: bgColor}">
      <span class="iconfont" :class="icon"></span>
    </div>
    <p class="icon-text">{{iconText}}</p>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: 'categoryIconsSub',
  props: {
    bgColor: String,
    icon: String,
    field: String,
    iconText: {
      type: String,
      default() {
        return '分类'
      }
    }
  },
  methods: {
    ...mapMutations(['selectField']),
    onRouteTo(field){
      this.selectField(field)
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.icon-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: .2rem 0;
  .icon {
    @include vh-center;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    .iconfont {
      color: #fff;
      font-size: .26rem;
    }
  }

}

</style>
