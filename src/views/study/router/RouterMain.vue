<template>
  <div class="home-page">
    <!--
       导航
       router-link 相当于a标签。 其实编译后，router-link就会变成a标签。
    -->
    <div class="nav-box">
      <router-link to="/">首页</router-link>
      <router-link to="/production">产品中心</router-link>
      <router-link to="/personal">个人中心</router-link>
    </div>

    <!--路由容器-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'RouterMain'
}
</script>

<style lang="less" scoped>
.el-button,
.el-input,
.el-input__inner {
  border-radius: 0 !important;
}

.nav-box {
  a {
    margin-right:10px;
  }
}
</style>