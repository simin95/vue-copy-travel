<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      // 这是配置项，具体设置见文档
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [{
        id: "0001",
        img: "https://source.qunarzz.com/site/images/wap/home/recommend/default_banner.png"
      }, {
        id: "0002",
        img: "https://source.qunarzz.com/site/images/wap/home/recommend/default_banner.png"
      }]
    };
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
