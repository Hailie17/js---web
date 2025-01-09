<template>
  <li class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`../../../assets/images/${item.name}.jpg`)" :alt="item.name">
        <div class="mask">
          <h1>{{ item.name }}</h1>
          <h2>{{ item.startday }}</h2>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped></style>