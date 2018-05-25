<template>
  <div class="icons">

    <!-- <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
      </div>
      <p class="icon-desc">景点门票</p>
    </div> -->

    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false
      }
    };
  },
  computed: {
    // 当前下标对应的数据应该展示在轮播图的第几页
    pages() {
      const pages = [];
      // console.log(this.iconList);
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixin.styl';
  @import '~styles/varibies.styl'
  // @import "src/assets/styles/varibles.styl"
  // @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
    // background: green
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow: hidden
      float left
      // flex: 0 1 auto
      width: 25%
      height: 0
      padding-bottom: 25%
      // background: red
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        // background: blue
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
