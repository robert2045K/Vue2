<template>
  <div>
    <div>父组件的Y: {{y}}</div>
    <EventDemo @AAA="fn1" @click="fn2"></EventDemo>
    <span>---------------------------------------------------</span>

    <!--
         @click.native，给子组件的根元素添加一个原生事件click，
         注意：是根元素， 这样点击所有的子元素都触发，因为子元素都捕获了click事件。
    -->
    <!--<EventDemo2 @click.native="fn2"></EventDemo2>-->

    <span>---------------------------------------------------</span>
    <!--v-model双向绑定的原理-->
    <input type="text" v-model="y">
    <input type="text" :value="y" @input="y = $event.target.value">
    {{y}}
    <span>---------------------------------------------------</span>

    <!--
      给组件绑定v-model
         相当于给组件设置了一个value的属性，属性值是绑定的状态值。
         给组件实例的事件池中，注入了一个input事件，绑定的方法是"x=$event"

         $event基于$emit通知事件扫行的时候， 传递的第一个实参值。
    -->
    <!--写法1-->
    <!--<EventDemo2 v-model="y"></EventDemo2>-->
    <!--写法2. 写法1和写法2是等价的-->
    <EventDemo2 :value="y" @input="y = $event"></EventDemo2>
    父组件中的Y:{{y}}
  </div>
</template>

<script>
import EventDemo from "@/views/pre/Event/EventDemo1.vue";
import EventDemo2 from "@/views/pre/Event/EventDemo2.vue";
export default {
  name: 'EventMain',
  components: {
    EventDemo,
    EventDemo2
  },
  data() {
    return {
      y: 30,
    };
  },
  methods: {
    fn1(val){
      this.y = val;
      console.log(val)
      return "@@@"
    },
    fn2(){
        console.log("Fn2")
    }

  }
}
</script>

<style lang="less">

</style>
