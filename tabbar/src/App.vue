<template>
  <div id="app">
    <tab-bar>
    <tab-bar-item path='/home' activeColor="deepPink">
      <img slot="item-icon" src="../src/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../src/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor="deepPink">
      <img slot="item-icon" src="../src/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../src/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart' activeColor="deepPink">
      <img slot="item-icon" src="../src/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../src/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor="deepPink">
      <img slot="item-icon" src="../src/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../src/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBarItem from './components/tabbar/TabBar-item.vue'
  import TabBar from './components/tabbar/TabBar.vue'
  export default {
    name: 'App',
    components: {
      TabBar,
        TabBarItem
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>