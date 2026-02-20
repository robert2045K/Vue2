<template>
  <div class="vote-footer">
    <el-button type="primary" @click="handle('sup')">支持</el-button>
    <el-button type="danger" @click="handle('opp')">反对</el-button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'VoteFooter',
  methods:{
    ...mapMutations(['change']),
    ...mapActions(['changeAsync']),

    handle(type){
      if ( type==='sup') {
        //执行vuex中的mutations里的同步方法。
        //方法1：
        // this.$store.commit('change',{
        //   type,
        //   step: 3,
        // });
        //方式2：
        this.change({type, step: 3})
      } else {
        //执行vuex中的actions里的异步方法。
        //方法1：
        // const res = this.$store.dispatch('changeAsync',{
        //   type,
        //   step: 3,
        // })
        this.changeAsync({type, step: 3})
      }

    }
  }
}
</script>

<style lang="less" scoped>
.vote-footer {
  .el-button {
    margin-right: 10px;
  }
}
</style>