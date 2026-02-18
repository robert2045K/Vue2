<template>
  <div class = "vote-main">
    <p>支持有人数：{{obj.supNum}}人</p>
    <p>反对人数：{{obj.oppNum}}人</p>
    <p>支持比率：{{ratio}}</p>
  </div>
</template>

<script>
export default {
  name: 'VoteHead',
  //后代组件，获取父组件的上下文数据
  inject:['obj'],
  components: {
  },
  computed:{
    ratio() {
      let total = this.obj.supNum + this.obj.oppNum;
      return total === 0 ? "--" : ((this.obj.supNum/total)*100).toFixed(2) + "%";
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