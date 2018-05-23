<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      alphabet: []
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
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
