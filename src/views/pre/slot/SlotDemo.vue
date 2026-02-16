<template>
  <div class="demo-box">
    <p>我是子组件哈</p>
    <!--预留插槽位置-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slot-demo',

}
</script>

<style lang="less">

</style>