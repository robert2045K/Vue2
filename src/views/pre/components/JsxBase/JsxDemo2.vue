<script>
export default {
  data() {
    return {
      level:4,
    };
  },
  mounted() {
    // setTimeout(()=>{
    //    this.level = 1;
    // },2000)
  },

  methods:{
    handle(){
      this.level = 1
    }
  },

  //jsx
  render(h) {
    return <div class='box'>
      {  h(`h${this.level}`,null, ["我是标题"])  }
      <el-button type="primary" nativeOn-click={this.handle}>
        我是按钮
      </el-button>
    </div>
  }


}
</script>