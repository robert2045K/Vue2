<template>
  <div class = "vote-box">
    <div class="header">
      <span class="num">{{ x }}</span>
      <h2 class="title">Vue真的很好学</h2>
      <span class="num">{{ vm.supNum + vm.oppNum }}人</span>
    </div>
    <VoteHead></VoteHead>
    <vote-footer/>
  </div>
</template>

<script>
import VoteHead from "@/views/study/pre/EventBus/VoteHead.vue";
import VoteFooter from "@/views/study/pre/EventBus/VoteFooter.vue";
export default {
  name: 'VoteMain',
  components: {
    VoteHead,
    VoteFooter,
  },
  data() {
    return {
      x: 0,
    }
  },
  created() {

    //添加事件监听，到EventBus上
    this.vm.$on("BBB", ()=>{
      this.x++;
    })
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