<template>
  <div class = "vote-main">
    <p>支持有人数：{{supNum}}人</p>
    <p>反对人数：{{oppNum}}人</p>
    <p>支持比率：{{ratio}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  name: 'VoteHead',
  //后代组件，获取父组件的上下文数据
  components: {
  },
  computed:{
    ...mapState(['supNum', 'oppNum']),
    //...mapGetters(['ratio']),
    ...mapGetters({
      ratio: 'ratio',
    })
    // ratio() {
    //   return this.$store.getters.ratio
    // }
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