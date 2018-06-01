<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
        <Tabs></Tabs>
    </div>
</template>

<script>
import Header from "./todo/header.vue"
import Footer from "./todo/footer.vue"
import Todo from "./todo/todo.vue"
import Item from "./todo/item.vue"
import Tabs from "./todo/tabs.vue"
export default {
    components: {
        Header,
        Footer,
        Todo,
        Item,
        Tabs
    }
};
</script>

<style lang="stylus" scoped>
</style>

