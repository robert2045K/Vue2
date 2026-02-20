<script>
  export default {
    props:['level'],
    render (h) {
      return   h(`h${this.level}`,null, ["我是标题"])
    }
  }
</script>