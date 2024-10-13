<template>
  <li class="d-flex align-item-center list-group-item">
    <button
      v-if="!isEditing"
      class="btn boder-0 text-left flex-grow-1"
      :class="{ completed }"
      @click="$emit('on-toggle')"
    >
      {{ todoString }}
    </button>
    <form v-else @submit.prevent="endEditing()" class="flex-grow-1">
      <input
        @blur="startEditing()"
        v-model="newTodoString"
        type="text"
        class="form-control text-center "
       
      />
    </form>
    <button @click="startEditing()" class="btn btn-outline-primary">
      edit
    </button>
    <button @click="$emit('on-delete')" class="btn btn-outline-primary">
      delete
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todoString: String,
    completed: Boolean,
  },
  data() {
    return {
      isEditing: false,
      newTodoString: "",
    };
  },
  methods: {
    startEditing() {
      if (!this.isEditing) {
        this.newTodoString = this.todoString;
        this.isEditing = true;
      } else {
        this.endEditing();
      }
    },
    endEditing() {
      this.isEditing = false;
      this.$emit('on-edit', this.newTodoString);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
