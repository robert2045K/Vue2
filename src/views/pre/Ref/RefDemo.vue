<template>
  <div class="refdemo-box">
    <!--给元素设置一个ref属性， 在视图编译的时候，会把创建的真实DOM，
    以ref属性值（btn）作为成员，
    DOM元素作为成员值，
    赋值给实例的$refs对象。
    $refs = {
      btn: button这个Dom元素。
    }
    -->
    <button ref="btn">我是子组件的按钮</button>

    <!--给循环创建的元素设置相同的ref属性值， 最后存储所有的DOM元素。 -->
    <div class="box" v-for="(item, index) in 5" :key="index" ref="box">
      {{item}}
    </div>

    <!--循环创建元素，动态绑定ref属性值： $refs对象中有box1-5这几个成员， 分别存储一个数组，数组只有一个元素是对应的DOM元素 -->
    <!--<div class="box" v-for="(item, index) in 5" :key="index" ref="`box${index}`">
      {{item}}
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'RefDemo',
  // 最早也要在mounted中，才可以获取DOM元素。
  mounted() {
    console.log(this.$refs.btn);
  }
}
</script>

<style lang="less">

</style>