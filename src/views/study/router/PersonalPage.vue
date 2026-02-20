<template>
  <div class="personal-box" style="display: flex">
    <!--个人中心
    <el-button type="primary" @click="handleClick">跳转</el-button> -->


    <div class="left">
      <router-link to="/personal/order">我的订单</router-link>
      <router-link to="/personal/profile">我的信息</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props:['x', 'y'],
  // beforeRouteEnter (to, from, next) {
  //    console.log("444-个人中心页面， B:beforeRouteEnter", to, from, next)
  //    next();
  // },
  beforeCreate(){
    console.log('个人中心的钩子函数开始执行， 生命周期开始。')
  },
  created(){
    //获取本页面的地址栏参数，this.$route.query,
    console.log("B:created");
  },

  methods:{
    /**
     * 跳转方法以，都在VueRouter.prototype上，也就是实例this.$router的prototype上，直接用就可以了。
     * push 跳转， 并新增一条历史记录
     * replace， 跳转， 并替换当前历史记录
     * go(n) 跳转到指定索引对应的路由地址，不会新增记录。
     * back 回退 go(-1)
     * forward 前进  go(1)
     * */
    handleClick(){
      /**路由跳转方法**/
      //this.$router.push('/production');
      // this.$router.replace('/production');
      //this.$router.push({path:'/'});
      /**
       * 路由信息。
       * */
      //console.log(this.$route)

      /**路由传参*/
      //方式1：
      //this.$router.push('/production' + '?id=123' + '&name=张三');

      //方式2：
      // this.$router.push({
      //   path:'/production',
      //   query:{
      //     id:123,
      //     name:'张三'
      //   }
      // })

      //方式3：通过name进行传参。
      //通过name， params传参，
      // 可以隐式传递参数。传的参数不显示在地址栏。
      // this.$router.push({
      //   name:'production',
      //   params:{
      //     id:123,
      //     name:'张三'
      //   }
      // })


    }
  }
}
</script>

<style lang="less" scoped>
.personal-box {
  .left{
     a{
       display: block;
       line-height: 30px;
     }
  }
}
</style>