import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 根路径的name写法
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
