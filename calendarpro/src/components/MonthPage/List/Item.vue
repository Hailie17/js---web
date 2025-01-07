<template>
  <div class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`../../assets/images/${item.img}.jpg`)" :alt="item.name">
        <div class="mask">
          <h1>{{ item.name }}</h1>
          <h2>{{ item.festival }}</h2>
        </div>
      </div>
      <div class="content-wrap">
        <h1>假期描述: {{ item.desc || '无说明' }}</h1>
        <h2>拼假建议： {{ item.rest || '无建议' }}</h2>
      </div>
    </div>
  </div>
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