<template>
  <div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "@/views/TodoList/TodoList.vue";
export default {
  name: 'TodoMain',
  components: {
    TodoList
  },
}
</script>

<style lang="less" scoped>

</style>