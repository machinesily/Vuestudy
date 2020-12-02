<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button" active-class="active">用户</router-link>
    <router-view></router-view>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        userId:'xxx'
      }
    },
    methods: {
      homeClick() {
        this.$router.push('/home')
        console.log("homeClick")
      },
      aboutClick() {
        this.$router.push('/about')
        console.log("aboutClick")
      }
    },

  }
</script>

<style>
  .active {
    color: #bfa;
  }
</style>