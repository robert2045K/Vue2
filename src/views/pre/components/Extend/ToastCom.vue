<template>
  <div class="toast-box">
    <h2 class="title">温馨提示</h2>
    <div class="content">{{text}}</div>
  </div>
</template>

<script>
/**
 * 模仿弹窗提示
 * */
export default {
  name: 'ToastCom',
  props:{
    text:{
      type: String,
      dafault:"",
    }
  },
  mounted(){
    //
   this.timer = setTimeout(()=>{
        this.$destroy();
        clearTimeout(this.timer);
    },2000)
  },

  methods: {

  },

  destroyed() {
    clearTimeout(this.timer);
    document.body.removeChild(this.$el);
  }
}
</script>

<style lang="less" scoped>
 .toast-box{
   position:fixed;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 999;
   box-sizing: border-box;
   padding: 10px 20px;
   padding-bottom: 20px;
   width: 150px;
   min-height: 150px;
   background: rgba(0,0,0,0.5);
   color:#fff;

   .title {
      line-height: 30px;
    }
   .content{
     font-size: 14px;
     line-height: 25px;
   }
 }
</style>