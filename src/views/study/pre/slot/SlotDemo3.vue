<template>
  <div class="demo-box">
    <slot name="head" :c="c"></slot>
    <p>我是子组件哈{{a+b+c}}</p>
    <slot :a="a" :b="b"></slot>
  </div>
</template>

<script>
export default {
  name: 'slot-demo3',
  data() {
    return {
       a: 10,
       b: 20,
       c: 60,
    }
  }
}
</script>

<style lang="less">

</style>