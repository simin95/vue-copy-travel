<template>
  <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    // 头部
    HomeHeader,
    // 滑动条
    HomeSwiper,
    // 8个图标
    HomeIcons,
    // 推荐页面
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      // city: "",
      lastcity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios
        // .get("/static/mock/city.json")
        .get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc)
        .catch(console.log("数据获取失败"));
    },
    getHomeInfoSucc(res) {
      console.log(res);
      res = res.data;
      console.log(233);
      console.log(res.ret);
      // console.log(res.data);
      if (res.ret && res.data) {
        const data = res.data;
        // this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.lastcity = this.city;
    this.getHomeInfo();
  },
  // 使用keep-alive标签后可使用此生命周期钩子
  // 若城市没有变化，则不去重复发ajax请求
  activated() {
    console.log("activated");
    console.log(this.lastcity);
    console.log(this.city);
    if (this.lastcity !== this.city) {
      this.lastcity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style>

</style>
