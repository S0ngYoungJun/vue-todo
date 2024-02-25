<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 입력하세요">
    <button @click="addTodo">추가</button>
    <p>{{ newTodo }}</p> <!-- 입력한 문자가 보여질 부분 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('add', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>
