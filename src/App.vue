<template>
  <div id="app">
    <h1>할 일 관리 앱</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(newTodo) {
      if (newTodo.trim()) {
        this.todos.push(newTodo);
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
