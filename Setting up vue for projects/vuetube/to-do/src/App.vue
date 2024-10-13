<template>
  <div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/todo.vue";
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  background: #101010;
  color: aliceblue;
}
</style>
