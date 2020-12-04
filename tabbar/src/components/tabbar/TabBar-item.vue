<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="styleColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      styleColor(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
        // console.log(1111);
      }
    },
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }


</style>