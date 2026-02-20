<template>
  <div class = "vote-box">
    <div class="header">
      <h2 class="title">Vue真的很好学</h2>
      <span class="num">{{supNum+oppNum}}人</span>
    </div>
    <!--父组件向子组件传递参数supNum,oppNum,  子组件通过props来接收-->
    <VoteHead :supNum="supNum" :oppNum="oppNum"></VoteHead>

    <!--
    方法1： @change="change" 向子组件事件池中注入自定义事件change方法，
            注意change方法，是父组件的。  子组件只负责派发事件，通知父组件执行change方法，达到子调用改变父的目的。
    方法2： 通过:changefun="change"， 把change函数传给子组件。子组件接收到change函数， 并执行change函数
       -->
    <vote-footer @change="change"  :changefun="change"/>
  </div>
</template>

<script>
import VoteHead from "@/views/study/pre/Vote/VoteHead.vue";
import VoteFooter from "@/views/study/pre/Vote/VoteFooter.vue";
export default {
  name: 'VoteMain',
  components: {
    VoteHead,
    VoteFooter,
  },
  data() {
    return {
      supNum: 10,
      oppNum: 20,
    }
  },
  methods:{
    change(type){
      if (type==='sup'){
        this.supNum++;
        return;
      }
      this.oppNum++;
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