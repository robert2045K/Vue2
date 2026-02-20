<template>
  <div class="vote-footer">
    <el-button type="primary" @click="handle('sup')">支持</el-button>
    <el-button type="danger" @click="handle('opp')">反对</el-button>
    <el-button type="warning" @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'VoteFooter',
  methods:{
    handle(type){
      //vm.$emit("change", type);
      this.vm.change(type)
    },
    test() {
      this.vm.$emit('BBB');
    }
  },
  created(){
  },
}
</script>

<style lang="less" scoped>
.vote-footer {
  .el-button {
    margin-right: 10px;
  }
}
</style>