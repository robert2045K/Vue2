<template>
  <div class="vote-box">
    <el-button>按钮</el-button>
    <el-input></el-input>
    <el-input></el-input>
    <VoteTest></VoteTest>
  </div>
</template>

<script>
import VoteTest from "@/views/pre/Vote/VoteTest.vue";
export default {
  name: 'VoteDemo',
  components:[
    VoteTest
  ]
}
</script>

<style lang="less" scoped>
.el-button{
  border-radius: 0px;
  background:red;
}

//这样写不可以修改到样式。
//.el-input__inner {
//  border:1px solid red;
//}

// 由于scoped只给根元素el-input， 添加css唯一id。那么el-input内部所有的元素都没添加css的id
// el-input__inner作为el-input内的一个元素, 也没有添加id。
// 所以修改.el-input__inner的样式不生效。
// .el-input__inner在控制台寻找。
//解决方案：
//基于:deep(), 样式穿透， 就是编写的样式不要再设置属性选据器了。
// :deep(.xxx){}
//前身：/deep/

//样式穿透
:deep(.el-input__inner ) {
  border:1px solid red;
}


</style>