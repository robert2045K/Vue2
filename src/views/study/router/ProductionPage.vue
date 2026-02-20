<template>
<div class="production-page">
  产品中心
</div>
</template>

<script>
export default {
  name: 'HomePage',
  created(){
    //获取本页面的地址栏参数，this.$route.query,
    // 注意：是route, 不是router.
    // this.$route.query， 拿网页地址栏？号后面的参数， 以对象形式返回。
    //console.log(this.$route.query);


    //通过name,params传参，这里接收参数。
    console.log(this.$route.params);
  }
}
</script>

<style lang="less" scoped>

</style>