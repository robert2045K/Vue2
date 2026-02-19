<template>
  <div class="todoBox">
    <div class="handle">
      <el-input v-model.trim="text" placeholder="请输入任务"></el-input>
      <el-button type="primary" @click="submit">新建任务</el-button>
    </div>

    <ListItem
        v-for="item in list"
        :key="item.id"
        :info="item"
        @remove="removeHandle"
        @update="updateHandle"
    ></ListItem>
  </div>
</template>

<script>
const store = {
  get(){
    let data = localStorage.getItem('todoList');
    let value = [];
    if(data){
      data = JSON.parse(data);
      if( +new Date() - data.time < 24*60*60*1000){
        value = data.value;
      }else {
        localStorage.removeItem('todoList');
      }
    }
    return value;
  },
  set(value) {
    let data = {time: +new Date(), value};
    localStorage.setItem('todoList', JSON.stringify(data));
  }
}

import ListItem from "@/components/todoList/ListItem.vue";
export default {
  name: 'TodoList',
  components: {
    ListItem
  },
  data(){
    return {
      text:'',
      list:store.get(), //从缓存中获取
    }
  },
  methods:{
    submit(){
      if(!this.text){
        this.$message.warning('请输入任务');
        return;
      }
      this.list.push({
        id:+new Date(),
        text:this.text
      });
      this.text = '';
      this.$message.success('新增成功');
      store.set(this.list);
    },
    //删除。
    removeHandle(id){
      this.list = this.list.filter(item => +item.id !== id);
      store.set(this.list);
    },
    //修改。
    updateHandle(id, text){
      this.list = this.list.map((item)=>{
        if(+item.id === +id){
          item.text = text;
        }
        return item;
      });
      store.set(this.list);
    }
  }
}
</script>

<style lang="less" scoped>
.todoBox {
  box-sizing: border-box;
  margin:20px auto;
  padding:10px;
  width:400px;
  border:1px solid #ddd;

  .handle {
    padding-bottom: 20px;
    border-bottom: 1px dashed #ddd;
    display: flex;
    justify-content:space-between;;
    align-items:center;

    .el-button {
      margin-left:20px
    }
  }

}
</style>