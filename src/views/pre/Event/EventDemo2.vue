<template>
  <div class="event-box">
      <button @click="handle">
        我是子组件按钮
        <span>{{value}}</span>
      </button>
  </div>
</template>


<script>
export default {
  //子组件注册接收value属性
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
  //修改v-model传进来的属性名，事件名
    model :{
      prop: "value",
      event: "input",
    },
    methods: {
        //
        handle() {
          // 通知自定义事件池中，名字是input的自定义事件执行
          //input事件是父组组定义的：请查看EventMain.vue, 查看这一行代码：<EventDemo2 :value="y" @input="y = $event"></EventDemo2>
           this.$emit("input", 100);
        } // 通知自定义事件池中，名字是AAA的自定义事件执行
    }
}
</script>



<style>

</style>