<template>
  <div class = "vote-main">
    <p>支持有人数：{{supNum}}人</p>
    <p>反对人数：{{oppNum}}人</p>
    <p>支持比率：{{ratio}}%</p>
     <!--用$parent拿到父组件实例-->
    <p>支持有人数：{{$parent.supNum}}人</p>
    <p>反对人数：{{$parent.oppNum}}人</p>
    <p>支持比率：{{ratio}}%</p>
  </div>
</template>

<script>
export default {
  name: 'VoteHead',

  //接收父组件的参数。 注意，当传过的的参数是动态数据，那么父组件的动态向应数据改了，子组件也会接收到，父组件更改后的数据。
  //也就是父组件传的是响应数据，子组件也是同一个响应数据。
  props : {
    supNum: {
      type: Number,
      default: 0
    },
    oppNum: {
      type: Number,
      default: 0
    },
  },
  components: {
  },
  computed:{
    ratio() {
      let {supNum,oppNum} = this;
      let total = supNum + oppNum;
      return total === 0 ? "--" : ((supNum/total)*100).toFixed(2) + "%";
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