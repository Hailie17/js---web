<template>
  <div class="view-item">
    <router-link :to="{path: '/detail', query: {field: 'view', id: data.id}}">
      <div class="img">
        <img :src="data.img" :alt="data.name" class="view-img">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{data.score}}</span>
        </p>
        <p class="others">
          <span class="item">
            <span class="price">￥ {{data.default_price}}</span>
            <span class="item">{{data.city_name}}</span>
          </span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "@/components/ScrollWrapper/Sub/Stars.vue";
export default {
  name: 'ViewListSub',
  components: {
    Stars
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.view-item {
  width: 50%;
  padding: .1rem;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    .view-img {
      width: 100%;
      min-height: 1.1rem;
    }
  }
  .info {
    .title {
      @include ellipsis;
      height: .3rem;
      font-size: .16rem;
      line-height: .3rem;
      color: #000;
    }
    .stars {
      height: .3rem;
      line-height: .3rem;
      font-size: .14rem;
      color: #ccc;
      .active, .score {
        color: $starColor;
      }
    }
    .others {
      display: flex;
      justify-content: center;
      height: .3rem;
      line-height: .3rem;
    }
  }
}
</style>
