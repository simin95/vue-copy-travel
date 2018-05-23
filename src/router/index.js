import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/Home";
import City from "@/pages/city/City";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 根路径的name写法
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    }
  ]
});
