<template>
  <div id="StudyView">
    <!--<personal-info/>-->
    <!--第3调用-->
    <!--<tab-demo/>-->

    <!--调用子组件-->
    <ChildDemo
        class="AAA"
        style="color: red"
        id="child1"
        n="10"
        :x="20"
        :y="y"
        :arr="[100, 200]"
        phone="13421569875"
    ></ChildDemo>
  </div>
</template>

<script>
//import PersonalInfo from './views/PersonalInfo.vue';
//第1，导入
//import TabDemo from './views/TabDemo.vue';
import ChildDemo from "@/views/pre/main/tabs/ChildDemo.vue";
export default {
  name: 'StudyView',
  components: {
    ChildDemo,
    //PersonalInfo,
    //第2，注册
    //TabDemo
  },
  data() {
    return {
      y: 100
    }
  }
}
</script>

<style lang="less">

</style>
