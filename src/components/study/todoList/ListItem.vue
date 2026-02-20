<template>
  <div class="itemBox">
      <div class="content">
        <el-input size="mini" v-show="isUpdate" v-model="text"></el-input>
        <span textCom v-show="!isUpdate">{{text}}</span>
      </div>
      <div class="handle">
        <el-popconfirm title="确认删除吗？" @confirm="handleConfirm">
          <el-button type="danger" size="mini" slot="reference">删除</el-button>
        </el-popconfirm>

        <el-button type="success" size="mini" @click="handle">
          {{isUpdate ? "保存" : "修改"}}
        </el-button>

        <el-button type="info" size="mini" v-show="isUpdate" @click="cancelClick">取消</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props:{
    info:{
      type:Object,
      required:true
    },
  },
  data(){
    return {
      isUpdate:false,
      text: this.info.text,
    }
  },
  components: {
  },
  methods:{
    handleConfirm(){
      this.$emit('remove', this.info.id)
    },
    handle(){
      if(this.isUpdate)
      {
        if (!this.text){
          this.$message.warning('请输入任务');
          return
        }
        if (this.info.text !== this.text) {
          this.$emit('update', this.info.id, this.text);
        }

        this.isUpdate = false;
      }else{
        this.isUpdate = true;
      }
    },
    //取消修改
    cancelClick(){
      this.isUpdate = false;
      this.text = this.info.text;
    }
  }
}
</script>

<style lang="less" scoped>
.itemBox {
  margin: 15px 0;
  .content {
    margin-bottom:5px;
    .textCon {
      line-height: 30px;
      font-size:14px;
    }

    .el-input {
      width: 200px;
    }
  }

  .handle {
    .el-button {
      margin-right: 10px;
    }
  }
}
</style>