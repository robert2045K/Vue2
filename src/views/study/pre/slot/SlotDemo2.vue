<template>
  <div class="demo-box">
    <!--
       命名插槽：基于name给插槽设置名字
       用来区分不同的插槽
       不设置名字，就是默认名字default， 父组件传过来的没有指定slot名字，都会传给default插槽。
    -->
    <slot name="head"></slot>
    <p>我是子组件哈</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slot-demo2',

}
</script>

<style lang="less">

</style>