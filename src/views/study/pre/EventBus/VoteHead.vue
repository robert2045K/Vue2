<template>
  <div class = "vote-main">
    <p>支持有人数：{{vm.supNum}}人</p>
    <p>反对人数：{{vm.oppNum}}人</p>
    <p>支持比率：{{ratio}}</p>
  </div>
</template>

<script>
import vm from "@/EventBus.js";
export default {
  name: 'VoteHead',
  components: {
  },
  created() {
    this.vm = vm;
  },
  computed:{
    ratio() {
      let total = vm.supNum + vm.oppNum;
      return total === 0 ? "--" : ((vm.supNum / total) * 100).toFixed(2) + "%";
    }
  }
}
</script>

<style lang="less" scoped>
.vote-main {
  p {
    padding: 5px;
    line-height: 20px;
    font-size:14px
  }
}
</style>