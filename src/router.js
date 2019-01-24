import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
// import Login from "./components/login.vue";
// import Register from "./components/register.vue";
import read from "./components/read.vue";
import collection from "./components/collection.vue";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
const routes = [
    {
        path: "/Collection",
        component: collection
    },
    {
        path: "/Read",
        component: read
    },
    // 重定向
    {
        path: '/', 
        redirect: '/Read' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;