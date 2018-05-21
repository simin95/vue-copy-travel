<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉111",
        desc: "假期的最好享受方式，全身心放松自己"
      }, {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉222",
        desc: "假期的最好享受方式，全身心放松自己"
      }, {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉333",
        desc: "假期的最好享受方式，全身心放松自己"
      }, {
        id: "0004",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉111",
        desc: "假期的最好享受方式，全身心放松自己"
      }, {
        id: "0005",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉222",
        desc: "假期的最好享受方式，全身心放松自己"
      }, {
        id: "0006",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        title: "泡温泉333",
        desc: "假期的最好享受方式，全身心放松自己"
      }]
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
    display flex
    overflow hidden
    height 1.9rem
    // background red
    .item-img-wrapper
      .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
      // background blue
      flex 1
      padding .1rem
      // 用于确定flex的item最小宽度
      min-width 0
      // background yellowgreen
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
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .1rem
        color #ffffff
</style>
