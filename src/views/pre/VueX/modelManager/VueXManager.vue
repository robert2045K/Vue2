<template>
  <div class = "">
      <div>Root主模块{{num}} \ {{newNum}}</div>
    <div>A模块{{x}} \ {{aNewX}}</div>
    <el-button type="primary" @click="handle">按钮</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters , mapMutations, mapActions} from 'vuex';

export default {
  name: 'VueXManager',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    ...mapMutations(['setNum'], ['a/setX']),
    //...mapActions(['setNumAsync']),
    ...mapActions({
      setNumAsync:'setNumAsync',
      'a/setXAsync':'a/setXAsync',
    }),
    handle(){
      this.setNum({num:100});
      this['a/setX']();

      this.setNumAsync({num:200});
      this['a/setXAsync']();

      //----------------普通写法-----------------
      //派发 通知主模块mutation的setNum方法扫行。
      //this.$store.commit('setNum', {num:100});
      //通知指定模块的mutation执行，比如a模块：模块名/方法名，
      //这里是通知a模块mutation的setX方法执行
      //this.$store.commit('a/setX')
      //通知主模块的异步操作
      //this.$store.dispatch('setNumAsync', {num:200});
      //通知a模块，的异步操作
      //this.$store.dispatch('a/setXAsync')
      //----------------普通写法-----------------




    }
  },
  computed:{
    //--------------取state-----------
    //...mapState(['num']) //数组，只能获取主模块的state
    //这种方法常用
    // ...mapState({
    //   num:'num',
    //   aX:state => state.a.x,
    // })

    //别的方法
    ...mapState(['num']),
    ...mapState('a', ['x']), //a是A模块， x是a模块的state.x
    // ...mapState('a', {
    //    myA:(state) => {
    //      console.log(state);
    //      return state.a;
    //    }
    // }),

    //-----------取getters----
   // ...mapGetters(['newNum', 'a/newX']),
    ...mapGetters({
      newNum:'newNum',
      aNewX:'a/newX',
    })

    //普通写法，有点不方便。
    // num() {
    //   //主模块的num
    //   return this.$store.state.num;
    // },
    // x(){
    //   //a模块的x
    //   return this.$store.state.a.x;
    // },
    // newNum(){
    //   //主模块的newNum
    //   return this.$store.getters.newNum;
    // },
    // newX(){
    //   //a模块的newX
    //   return this.$store.getters['a/newX'];
    // }
  },
  created(){
    //console.log(this.$store)
  }
}
</script>

<style lang="less" scoped>

</style>