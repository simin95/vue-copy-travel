<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scpoed>
@import '~@/assets/styles/varibies.styl'
/* scoped使得此css文件仅在本组件中生效 */
/* 此处固定设置1rem = html font-size = 50px (在reset.css文件中设置) */
.header
  display: flex
  height: .86rem //86px,在2倍屏上应写为43px,对应.86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    height: .86rem
    line-height: .86rem
    vertical-align: center
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    padding-left: .2rem
    background: #fff
    border-radius .1rem
    margin: .12rem .2rem
    height: .64rem
    line-height: .64rem
    color: #ccc
  .header-right
    width: 1.2rem
    float: right
    height: .86rem
    line-height: .86rem
    vertical-align: center
    text-align: center
    .arrow-icon
      margin-left: -.08rem
      font-size: .24rem
</style>
