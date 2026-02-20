<template>
  <div>
      <RefDemo ref="AAA"></RefDemo>

  </div>
</template>

<script>
import RefDemo from "@/views/study/pre/Ref/RefDemo.vue";
export default {
  name: 'RefMain',
  components: {
    RefDemo,
  },
  mounted() {
    //获取的是子组件的实例。挂在子组件this上的变量，都可以通过this.$refs.AAA访问。
    console.log(this.$refs.AAA);
  }
}
</script>

<style lang="less">

</style>