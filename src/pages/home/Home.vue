<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import axios from "axios";
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    // 头部
    HomeHeader,
    // 滑动条
    HomeSwiper,
    // 8个图标
    HomeIcons
  },
  data() {
    return {
      lastcity: "上海",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  // computed() {
  // ...mapState(["city"]);
  // },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc)
        .catch(console.log("数据获取失败"));
    },
    getHomeInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.dat && res.data) {
        // const data = res.data;
        console.log(res);
      }
    }
  },
  mounted() {
    // this.lastcity = this.city;
    // this.getHomeInfo();
  },
  activated() {
    if (this.lastcity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style>

</style>
