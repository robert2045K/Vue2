<template>
  <div class = "vote-box">
    <div class="header">
      <h2 class="title">Vue真的很好学</h2>
      <span class="num">{{ x + y }}人</span>
    </div>
    <VoteHead></VoteHead>
    <vote-footer />
  </div>
</template>

<script>


import VoteHead from "@/views/pre/VueX/Base/VoteHead.vue";
import VoteFooter from "@/views/pre/VueX/Base/VoteFooter.vue";
import {mapState} from "vuex";
export default {
  name: 'VoteMain',
  provide(){
    return {
       //obj: this.$data,
    };
  },
  components: {
    VoteHead,
    VoteFooter,
  },
  data() {
    return {
    }
  },
  methods:{
  },
  computed:{
    ...mapState({
      x: "supNum",
      y(state){
        return state.oppNum
      },
    }),

    // supNum() {
    //   return this.$store.state.supNum
    // },
    // oppNum() {
    //   return this.$store.state.oppNum
    // }
  }
}
</script>

<style lang="less" scoped>
.vote-box {
  box-sizing: border-box;
  margin: 20px auto;
  padding:10px;
  width:300px;
  border:1px solid #ddd
}

.header {
  display: flex;
  justify-content:space-between;
  align-items:center;

  .title{
      font-size: 18px;
    line-height: 40px;
  }
  .num{
   font-size: 20px;
    color: #c24b4b;
  }
}
</style>