<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h2>{{$store.getters.more25stu}}</h2>
    <h2>{{$store.getters.more25stulength}}</h2>
    <h2>{{$store.getters.MoreAgeStu(32)}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更新数据</button>

    <hello-vuex />
  </div>
</template>

<script>
  import HelloVuex from './components/Hello vuex.vue'

  export default {
    components: {
      HelloVuex
    },methods:{
    increment(){
      this.$store.commit('increment')
    },decrement(){
      this.$store.commit('decrement')
    },
    updateInfo(){
      this.$store.dispatch('aupdateInfo','payload').then(res => {
        console.log(res);
        console.log('完成');
      })
    }
    },
  }
</script>
<style>

</style>