1. 一个.vue文件可以导出为一个组件,也可解析后作为网页显示

2. .vue文件模版
- template组件,用于显示内容,渲染过后显示内容
- script标签,写js代码,导入导出组件,data(),methods
- style标签,scoped属性表示css只在本页起效
```html
<template> </template>

<script>
export default {}
</script>

<style scoped></style>
```

3. Router中的routes模版
```javascript
import Vue from "vue"
import Router from "vue-router"
import Foo from "@/test/foo"
import Bar from "@/test/bar"

Vue.use(Router)

new Router({
    routes: [
        // 这里是数组
        {
            path:"/foo",
            name:"/foo",
            component:Foo,
            children: [
                // bar为foo的子路由
                {
                    // 此处foo和bar处于同意目录
                    path:"bar",
                    name:"bar",
                    component:Bar
                }
            ]
        }
    ]
})
```

4. 编程式路由
不使用router-link,自定义跳转方法
定义跳转方法: $router.push("path?id=123")
查看ID方法:$route.query.id
```javascript
// 跳转方法
export default {
    methods: {
        gotoGoods() {
            this.$router.push("/goods?goodsId=apple")
        }
    }
}
// 查看Id
$route.query.goodsId
```

5. 组件的运用
组件可以当作标签使用
新建一个.vue模版就可以做组件
在新页面导入组件分为三步
```html
<template>
    <div>
        <!-- 复用组件 -->
        <my-header></my-header>
    </div>
</template>

<script>
// 导入组件 
import MyHeader from "@/components/myHeader"
// 导出组件
export default {
    // App为当前页面
    name:"App",
    components: {
        MyHeader
    }
}
</script>
```

