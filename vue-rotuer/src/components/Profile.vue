<template>
  <div>
    <h2>
       我是Profile组件
    </h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
name:'Profile',
created () {
  console.log('Profile created');
},
destroyed () {
  console.log('Profile dertroyed');
}
}
</script>

<style>

</style>