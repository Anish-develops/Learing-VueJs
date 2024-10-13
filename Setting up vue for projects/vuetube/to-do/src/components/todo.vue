<template>
  <div class="container">
    <div class="row">


      <div class="col-12">
        <p class="display-3">Vue ToDo list</p>
      </div>
    </div>
    <div class="row">
        <createTodo @on-addTodo = "addTodo($event)"/>
    </div>
    <div class="row">
        <div class="col-12 col-lg-6">
            <ul class="list-group">
                <Todo v-for="(todo, index) in todos" :key="index"
                :todoString = "todo.todoString"
                :completed = "todo.completed"
                @on-delete="deleteTodo(todo)"
                @on-toggle="toggleTodo(todo)"
                @on-edit="editTodo(todo,$event)"
                />
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Todo from "./individualTodo.vue"
import createTodo from "./createTodo.vue";
export default {
    components :{
        Todo,
        createTodo
    },

  data() {
    return {
      todos: [
        { todoString: "some task for hardcoding", completed: false },
        { todoString: "task no 1", completed: false },
        { todoString: "some task for hardcoding", completed: false },
        { todoString: "some task for hardcoding", completed: false },
        { todoString: "some task for hardcoding", completed: false },
        { todoString: "some task for hardcoding", completed: false },
        { todoString: "some task for hardcoding", completed: false },
      ],
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todos.push({
        todoString: newTodo,
        completed: false,
      });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    editTodo(todo, newTodoString) {
      todo.todoString = newTodoString;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo !== deleteTodo);
    },
  },
  name: "to-do",
};
</script>

<style></style>
