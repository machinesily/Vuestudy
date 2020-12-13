import { Promise } from 'core-js'
import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    student:[
      {name:'xxx',age:21},
      {name:'kkk',age:35},
      {name:'aaa',age:31}
    ],
    info:{
      name:'cjf',age:21,height:1.92
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    updateInfo(state){
      state.info.name='xxx'
    }
  },
  getters: {
    more25stu(state){
      return state.student.filter(s => s.age > 25)
    },
    more25stulength(state,getters){
      return getters.more25stu.length
    },
    MoreAgeStu(state){
      return (age) => state.student.filter(s => s.age > age)
    }
  },
  actions: {
    // aupdateInfo(context,payload){
    //  setTimeout(() => {
    //   context.commit('updateInfo')
    //   console.log(payload.message);
    //   payload.seccess()
    //  }, 1000);
    // }
    aupdateInfo(context,payload){
      return new Promise((resolve)=>{
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);

          resolve('55555')
        }, 1000);
      })
    }
  },
  modules: {}
})