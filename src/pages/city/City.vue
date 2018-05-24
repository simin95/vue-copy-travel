<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";

import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      alphabet: [],
      // 用于Alphabet组件和List组件传值
      letter: ""
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios
        .get("/api/city.json")
        .then(this.handleGetCityInfoSucc)
        .catch(console.log("数据获取失败哦"));
    },
    handleGetCityInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        console.log(data);
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      console.log(letter);
      this.letter = letter;
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
