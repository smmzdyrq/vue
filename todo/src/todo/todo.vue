<template>
  <section class="real-app">
    <!-- 中间部分 -->
    <input 
    type="text" 
    @keyup.enter="addTodo" 
    autofocus="autofocus"
    placeholder="要做什么呢?"
    class="add-input">

    <Item
    :todo="todo"
    v-for="todo in todos" 
    :key="todo"
    @del="deleteTodo"
    >
    </Item>
  </section>
</template>

<script>
import Item from "./item.vue"
import Tabs from "./tabs.vue"
let id=0
export default {
  props: {
    todo: {
      type:Object,
      require:true
    }
  },
  data () {
    return {
      todos:[],
      filter:"all"
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id:id++,
        content: e.target.value.trim(),
        completed: false
      }),
      e.target.value = ''
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
    }
  },
  components: {
    Item,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
.add-input
  width 70%
  height 80px
  font-size 20px
  padding-left 10%
</style>

