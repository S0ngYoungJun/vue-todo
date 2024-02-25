<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo }}
      <button @click="removeTodo(index)">삭제</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos'],
  methods: {
    removeTodo(index) {
      this.$emit('remove', index);
    }
  }
}
</script>
