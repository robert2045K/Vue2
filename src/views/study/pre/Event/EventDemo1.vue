<template>
  <div class="event-box">
      <button @click="handle">我是子组件按钮</button>
  </div>
</template>


<script>
export default {
  created() {
    /**
     * this.$listeners: 存储实例事件池中所有的自定义事件。
     * */
    console.log(this.$listeners)
  },
  methods: {
    handle() {
      // 通知自定义事件池中，名字是AAA的自定义事件执行
      //方法1：
      this.$emit("AAA", 100);
      //方法2：可以接收到方法的返回值
      const {AAA} = this.$listeners;
      const res = AAA(100)
      console.log(res)
    },
  }
}
</script>



<style>

</style>