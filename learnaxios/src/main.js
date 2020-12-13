import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res =>{
//   console.log(res);
// })

axios.all([
  axios({
    baseURL:'http://123.207.32.32:8000',
    url:'/home/multidata'
  }),
  axios({
    baseURL:'http://123.207.32.32:8000',
    url:'/home/data',
    params:{
      type:'sell',
      page:5
    }
  }),
]).then(results =>{
  console.log(results[0]);
  console.log(results[1]);
})