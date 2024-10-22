<template>
  <div class="about">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: '一线生活'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
@import '@/assets/styles/variables.scss';

.about {
  .header {
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    h1 {
      font-size: .18rem;
    }
  }
}
</style>
