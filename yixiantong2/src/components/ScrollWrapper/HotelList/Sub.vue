<template>
  <div class="hotel-item">
    <router-link :to="{path: '/detail',query: {field: 'hotel', id: data.id}}">
      <div class="img">
        <img class="hotel-img" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="score">{{data.score}}</p>
        <p class="area">{{data.area}}</p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{data.default_price}}</span>
          </span>
          <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelListSub',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.hotel-item {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: .1rem;
    box-sizing: border-box;
    .hotel-img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: .1rem .1rem 0 1.2rem;
    box-sizing: border-box;
    .title {
      @include ellipsis;
      font-size: .18rem;
      color: #000;
      line-height: .2rem;
    }
    .score {
      @include ellipsis;
      font-size: .14rem;
      color: #999;
    }
    .others {
      display: flex;
      margin-top: .1rem;
      justify-content: space-between;
      line-height: .25rem;
      .item {
        font-size: .14rem;
        &:nth-child(1) {
          color: $defaultGreen;
          .price {
            font-size: .2rem;
          }
        }
      }
    }
  }
}
</style>
