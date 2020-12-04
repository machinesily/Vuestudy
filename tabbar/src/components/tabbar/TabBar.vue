<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
components:{

}
}
</script>

<style>

.tab-bar{
  display: flex;
  position: fixed;
  /* right: 0; */
  width: 100%;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}

</style>