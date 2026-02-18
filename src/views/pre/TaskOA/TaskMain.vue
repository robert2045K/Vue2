<template>
  <div class="task-box">
    <!--头部-->
    <div class="head-box">
      <h2 class="title">Task OA 任务管理系统</h2>
      <el-button type="primary" @click="dialogVisible=true">新增任务</el-button>
    </div>

    <!--标签-->
    <div class="tag-box" @click="changeTagClick">
      <el-tag
          v-for="(item, index) in ['全部', '未完成', '已完成']"
          :key="index"
          :type="selectIndex === index ? '' : 'info'"
          :data-index="index"
      >
        {{item}}
      </el-tag>
    </div>


    <!--表格 stripe是表格的样式：斑马线-->
    <el-table stripe :data="tableData" v-loading="tableLoading">
      <!--el-table-column ， 代表每一列-->
      <el-table-column label="编号" prop="id" min-width="10%"></el-table-column>
      <el-table-column label="任务描述" prop="task" min-width="40%"></el-table-column>
      <el-table-column
          label="状态"
          prop="state"
          :formatter="formatState"
          min-width="10%"></el-table-column>
      <el-table-column
          label="完成时间"
          :formatter="formatTime"
          min-width="25%"></el-table-column>
      <el-table-column label="操作" min-width="15%">
        <!--
          作用域插槽:
          下面2种写法一样的：
          <template #default="{row}">
          <template v-slot="{row}">
        -->
        <template v-slot="{row}">
          <el-popconfirm
              title="确认删除本条任务吗？"
              @confirm="handleRemove(row.id)"
          >
            <template #reference>
              <el-link type="danger">删除</el-link>
            </template>
          </el-popconfirm>

          <el-popconfirm
              title="确认完成本条任务吗？"
              @confirm="handleUpdate(row.id)"
          >
            <template #reference>
              <el-link type="success">完成</el-link>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>

      <template #empty>
            <el-empty description="暂无数据"></el-empty>
        </template>
    </el-table>

    <!--新增窗口-->
    <el-dialog
        title="新增任务"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :before-close="closeDialog">

      <!--表单
          ruleForm是el-form来收集数据的。
          prop是取列数据，对应数据源的变量。
          ruleForm, rules, prop的名字保持一致
      -->
      <el-form :model="ruleForm" :rules="rules" ref="addForm" label-suffix="：">
        <el-form-item label="任务描述" prop="task">
          <el-input
              name="task"
              type="textarea"
              :rows="4"
               v-model="ruleForm.task"></el-input>
        </el-form-item>
        <el-form-item label="预期完成时间" prop="time">
          <el-date-picker
              name="time"
              type="datetime"
              v-model="ruleForm.time"></el-date-picker>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button
            type="primary"
            :loading="confirmLoading"
            @click="submit">确认提交</el-button>
        <el-button @click="closeDialog">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TaskMain',
  data() {
    return {
      tableData:[
         {
           id:1,
           task:'天行健，君子以自强不息',
           state:1,
           time:"2022-12-3 3:30:30",
           complete:"2022-12-29 23:30:30"
         },
         {
           id:2,
           task:'地势坤，君子以厚德载物',
           state:2,
           time:"2022-12-1 16:30:30",
           complete:"2022-12-2 18:30:30"
         },
       ],
      tableLoading: false,
      dialogVisible:false,
      confirmLoading:false,
      selectIndex:0,
      ruleForm:{
        task:'',
        time:''
      },
      rules: {
        task:[{required:true, message:'请输入任务描述', trigger:'blur'}],
        time:[{required:true, message:'请输入时间', trigger:'blur'}]
      }
    }
  },
  methods:{
    //:formatter="formatState", 格式化指定列的显示内容。
    formatState(row) {
      //formatState(row, column, cellValue)
      //column是列对象el-table-column，
      // cellValue是单元格的值
      // console.log(column, cellValue)
      if(+row.state===1){
        return "未完成";
      } else {
        return "已完成";
      }
    },
    //:formatter="formatTime", 格式化指定列的显示内容。
    formatTime({state, time, complete}) {
        time = +state===1 ? time : complete
      return time;
    },
    //关闭Dialog
    closeDialog(){
      this.dialogVisible = false;
      this.$refs.addForm.resetFields();
    },
    async submit(){
      this.$refs.addForm.validate(async valid => {
        if(!valid) return;
        this.confirmLoading = true;

        let {task, time} = this.ruleForm;
        console.log(task, time)

        //模拟成功
        setTimeout(()=>{
          this.confirmLoading = false;
          this.closeDialog();
          this.$message.success("新增成功");
        }, 1000);
      });

      // try {
      //   await this.$refs.addForm.validate();
      //   console.log('success');
      // }catch (error) {
      //   console.log(error)
      // }
    },
    //页卡切换
    changeTagClick(ev) {
      let target = ev.target;
      // el-tag 渲染出来可能是 span，也可能是 div (如果有关闭按钮等)，
      // 且点击时可能点到内部的文字，所以需要向上查找包含 data-index 的元素
      while (target && target !== ev.currentTarget && !target.getAttribute('data-index')) {
        target = target.parentNode;
      }

      if (target && target.getAttribute('data-index')) {
        let index = +target.getAttribute("data-index");
        if(this.selectIndex === index) return;
        this.selectIndex = index;
      }
    },
    handleRemove(){
      console.log('删除')
    },
    handleUpdate(){
      console.log('完成')
    }
  }
}
</script>


<style lang="less" scoped>
.task-box {
  box-sizing: border-box;
  margin: 0 auto;
  width:800px;
}

.head-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  .title {
    font-size: 18px;
    line-height: 40px;
  }
}

.tag-box {
  margin: 10px 0;
  .el-tag {
    margin-right: 10px;
    padding: 0 15px;
    border-radius: 0;
    font-size: 14px;
    cursor:pointer;
  }
}

:deep(.el-form-item__label){
  float:none;
  display:block;
  width:100%;
  text-align: left;
}

:deep(.el-dialog__body){
    padding:10px 20px
}
</style>