<template>
  <div class="child-box">
    子组件
  </div>
</template>

<script>
export default {
  name: "ChildDemo",
  /**
   * 子组件基于OptionsAPI中的props，来接收父组件传递过来的属性。
   * props是数组，包含了，需要接收，的属性名
   * props接收的数据，挂到本组件实例上（用this来访问）， this.n,  this.x
   * props接收的数据， 做了响应式处理。
   * 如果父组件传了8个参数，子组件只接收2个，其他的子组件不处理。
   *
   * 子组件不充许, 修改父组件的传来的的参数。因为改了会更新视图。
   * 可以用一个变量来接收父组件传来的参数。比如：在data新增一个变量x2来接收x
   *
   * 属性校验
   * required 是否必传
   * type  属性值的类型
   * default 默认值
   * */
  //props: ['n', 'x'],
  props: {
    n: {
      required: true, //是否必传
      type: String, //类型
    },
    x: {
      required: true,
      type: Number,
      default: 100  //默认值
    },
    y: {
      required: true,
      type: [Number, String],
    },
    arr: {
      required: true,
      type: Array
    },
    //自定义校验。
    phone:{
      validator(value) {
        let reg = /^1[3-9]\d{9}$/;
        return reg.test(value);
      }
    }

  },
  inheritAttrs: false,
  data() {
    return {
      x2 : this.x, //用一个变量来接收父组件传来的参数。 如果父组件传的属性参数在父组件变了，子组件的x2变量也跟着改变。
    }
  },
  created() {
    console.log(this.x, this.n)
    //*****子组件不充许修改父组件的传来的的参数。*****
    //this.x = 200
  }
}
</script>

<style lang="less" scoped>

</style>