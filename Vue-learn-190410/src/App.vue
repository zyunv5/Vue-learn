<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiInfo"/>
    <!-- 导航 -->
    <app-nav/>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
export default {
  name: "App",
  components:{
    "app-header":Header,
    "app-nav":Nav,
  },
  data(){
    return{
      poiInfo:{}
    }
  },
  created(){
    fetch("/api/goods").then(res=>{
      // console.log(res);//得到的是一个流格式，需要转化一下
      return res.json()
    })
    .then(res=>{
      // console.log(res);
        this.poiInfo=res.data
        console.log(this.poiInfo);
    })
  },
};
</script>

<style>

</style>
