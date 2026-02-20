<template>
  <div class="personal-box">
    <h2 class="title">哈哈哈{{x+y}}</h2>
    <button @click="change">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'personal-info',
  data() {
    return {
      x:10,
      y:20,
    }
  },
  methods:{
    change() {
      this.x += 10;
      this.y += 2;
    }
  }

}
</script>

<style lang="less" scoped>
.personal-box {
  .title {
    font-size: 20px;
    color: red;
  }
}
</style>
