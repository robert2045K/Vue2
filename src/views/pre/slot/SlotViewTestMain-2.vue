<template>
  <div>

    <!--SlotDemo是子组件， 子组件包含了内容，这是传给插槽的内容-->
    <SlotDemo>
      <!--传递给插槽的内容-->
      <button>确定</button>
      <button>取消</button>
    </SlotDemo>
    <span>--------------------------------------</span>

    <SlotDemo2>
      <!--传递给插槽的内容-->
      <button>哈哈哈</button>
      <button>呵呵呵</button>
      <!--指定插槽的名字-->
      <span slot="head">我是abc</span>
    </SlotDemo2>
    <span>--------------------------------------</span>

    <SlotDemo2>
      <!--
        传递给插槽的内容
        v-slot只能给template加
      -->
      <template v-slot:default>
        <button>哈哈哈</button>
        <button>呵呵呵</button>
      </template>
      <!--简写 #head -->
      <template v-slot:head>
        <!--指定插槽的名字-->
        <span slot="head">我是abc</span>
        <span slot="head">你也是abc</span>
      </template>
    </SlotDemo2>
    <span>--------------------------------------</span>

    <!--
    插槽的内容，访问子组件变量。
    v-slot="scoped",  scoped是变量，随意取。
    v-slot="{a, b}"  也可以用结构赋值。
    -->
    <SlotDemo3>
        <template v-slot="scoped">
          <button>中中中{{scoped.a + scoped.b}}</button>
        </template>
        <template #head="param">
          <button>在在在{{param.c}}}</button>
        </template>
    </SlotDemo3>
  </div>
</template>

<script>
import SlotDemo from "@/views/pre/slot/SlotDemo.vue";
import SlotDemo2 from "@/views/pre/slot/SlotDemo2.vue";
import SlotDemo3 from "@/views/pre/slot/SlotDemo3.vue";
export default {
  components:{
    SlotDemo,
    SlotDemo2,
    SlotDemo3
  }

}
</script>

<style lang="less">

</style>