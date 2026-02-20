<template>
  <div class="vote-footer">
    <el-button type="primary" @click="handle('sup')">支持</el-button>
    <el-button type="danger" @click="handle('opp')">反对</el-button>
  </div>
</template>

<script>
export default {
  name: 'VoteFooter',
  props:["changefun"],
  methods:{
    handle(type){
      //方法1
      //this.$emit('change',type);
      // this.$listeners.change(type);

      //方法2：
      //this.changefun(type)

      //方法3 用$parent拿到父组件实例
      this.$parent.change(type);
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