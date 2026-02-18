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
    return  h(
        'div',
        {
          class:'box',
        },
        [
          h(`h${this.level}`,{on:{click:this.handle}}, ['我是标题']),
          h('el-button',{
            props:{type:'primary'}
          }, ['我是按钮'])
        ]
    )
  },
}
</script>