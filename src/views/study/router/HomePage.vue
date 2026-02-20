<template>
  <div class="home-page">
    首页的内容
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  //切换路由的钩子函数。
  // beforeRouteEnter (to, from, next) {
  //   console.log("444--home页面：A:beforeRouteEnter，进入home页面", to, from, next)
  //   next();
  // },
  //
  //
  // //切换路由的钩子函数。
  // beforeRouteLeave (to, from, next) {
  //   console.log("11111-home页面：A:beforeRouteLeave， 离开home页面", to, from, next)
  //   next();
  // },
  beforeDestroy(){
    console.log("A:beforeDestroy");
  },
  destroyed(){
    console.log("A:destroyed");
  }
}
</script>

<style lang="less" scoped>

</style>