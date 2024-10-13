<template>
    <form @submit.prevent="addTodo()" class="col-12 col-lf-6">
        <input v-model="newTodo" type="text" class="form-control" palceholder="enter a todo">
    </form>
</template>

<script>
export default {
    data(){
        return {
            newTodo : ""
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.length>1){
                this.$emit('on-addTodo', this.newTodo)
            }
            this.newTodo =""
        }
    }
}
</script>

<style>
</style>