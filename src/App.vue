<template>
  <div id="app">
    <div class="rem_box">我是rem_box</div>
    <div class="rem_bg"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="less">

.rem_box {
  font-size: 0.3rem;
}
.rem_bg {
  width: 2rem;
  height: 2rem;
  background-color: red;
}

</style>
