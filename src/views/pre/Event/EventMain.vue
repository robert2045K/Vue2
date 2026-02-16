<template>
  <div>
    <div>父组件的Y: {{y}}</div>
    <EventDemo @AAA="fn1" @click="fn2"></EventDemo>
    <span>---------------------------------------------------</span>


    <EventDemo2 @click.native="fn2"></EventDemo2>
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
