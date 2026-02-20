<template>
  <div class = "vote-box">
    <div class="header">
      <h2 class="title">Vue真的很好学</h2>
      <span class="num">{{obj.supNum+obj.oppNum}}人</span>
    </div>
    <VoteHead></VoteHead>
    <vote-footer @change="change"  :changefun="change"/>
  </div>
</template>

<script>


import VoteHead from "@/views/study/pre/Vote2/VoteHead.vue";
import VoteFooter from "@/views/study/pre/Vote2/VoteFooter.vue";
export default {
  name: 'VoteMain',
  /**
   *  子组件，访问子组件的方法：基于父组件的上下文通信，
   *  把供后代使用的公用信息，放在祖先的上下文中。
   */
  provide(){
    return {
       obj: this.obj,
       //obj: this.$data,
    };
  },
  components: {
    VoteHead,
    VoteFooter,
  },
  data() {
    return {
      obj: {
        supNum: 30,
        oppNum: 30,
      }
    }
  },
  methods:{
    change(type){
      if (type==='sup'){
        this.obj.supNum++;
        return;
      }
      this.obj.oppNum++;
    }
  }
}
</script>

<style lang="less" scoped>
.vote-box {
  box-sizing: border-box;
  margin: 20px auto;
  padding:10px;
  width:300px;
  border:1px solid #ddd
}

.header {
  display: flex;
  justify-content:space-between;
  align-items:center;

  .title{
      font-size: 18px;
    line-height: 40px;
  }
  .num{
   font-size: 20px;
    color: #c24b4b;
  }
}
</style>