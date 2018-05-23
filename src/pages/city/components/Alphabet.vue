<template>
  <ul class="list">
    <li class="item" v-for="(item,index) of cities" :key="index">{{index}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibies.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    // background red
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
