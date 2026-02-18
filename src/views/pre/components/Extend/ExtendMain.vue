<template>
  <div>
  </div>
</template>


<script>
export default {
  components:{
  },
  mounted(){
    //this.$toast在global.js用Vue.extend封装了。
    this.$toast("你好")
  }
}
</script>