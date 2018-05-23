<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixin.styl';

  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    // overflow hidden
    // height 1.9rem
    // background red
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 25%
      .item-img
        width 100%
    .item-info
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        // margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .1rem
        color #ffffff
</style>
