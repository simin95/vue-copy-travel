<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      // 这是配置项，具体设置见文档
      swiperOption: {
        // autoplay: true,
        pagination: ".swiper-pagination",
        loop: true
      }
      // swiperList: []
    };
  },
  computed: {
    showSwiper () {
      return this.swiperList.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: red !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 25%
  .swiper-img
    width: 100%
</style>
