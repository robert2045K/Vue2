<template>
  <div class="box">
    <TitleCom :level="level"></TitleCom>
    <el-button type="primary">我是按钮</el-button>
  </div>
</template>

<script>
import TitleCom from "@/views/study/pre/components/JsxBase/TitleCom.vue";
export default {
  name: 'NormalDemo',
  components:{
    TitleCom,
  },
  data(){
    return {
      level:4
    }
  },
  mounted(){
    setTimeout(()=>{
      this.level = 1;
    },2000)
  }
}
</script>