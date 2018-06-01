<template>
  <div :class="[todo-item,todo.completed? 'completed' : '']">
    <!-- 新todo行 -->
    <input 
    type="checkbox" 
    class="toggle"
    v-model="todo.completed"
    >
  <label>{{todo.content}}</label>
  <button @click="deleteTodo" class="destroy">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type:Object,
      required:true,
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del',this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item 
  width 70%
  height 80px
  font-size 20px
  padding-left 10%
</style>
