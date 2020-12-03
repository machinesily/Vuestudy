<template>
  <div id="app">
    <router-link to="/home" active-class="active">首页</router-link>
    <router-link to="/about" active-class="active">关于</router-link>
    <!-- <router-link :to="'/user/'+userId" tag="button" active-class="active">用户</router-link>
    <router-link :to="{path:'/Profile',query:{name:'xxx',age:21,height:1.92}}" tag="button">档案</router-link> -->
    <button @click="UserClick">用户</button>
    <button @click="ProfileClick">档案</button>
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: 'xxx'
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
      },
      UserClick() {
        this.$router.push('/user/' + this.userId)
      },
      ProfileClick() {
        this.$router.push({
          path: '/Profile',
          query: {
            name: 'kkk',
            age: 30,
            height: 1.88
          }
        })
      }
    },

  }
</script>

<style>
  .active {
    color: #bfa;
  }
</style>