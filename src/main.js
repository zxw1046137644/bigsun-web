import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/base.scss';
import VueRouter from 'vue-router';
import routes from './js/router';
import request from './js/public/request'
import g from './js/gloabls';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.use(request)
// Vue.prototype.$http = request


Vue.prototype.$getHistoryLength = g.w.getHistoryLength();


const router = new VueRouter({
    mode: 'hash',//去掉链接中/# 线上需要后端配置test
    routes
});

router.beforeEach((to, from, next) => {
    const outerPaths = ['/NotLogin'];
    const rolePaths = ['/tools'];
    // if (rolePaths.includes(to.path)) {
    if (localStorage.getItem('sitename') !== '这是一个localStorage' && !outerPaths.includes(to.path)) {
        console.log(to.path)
        console.log(localStorage.getItem('sitename'))
        console.log(!outerPaths.includes(to.path))
        localStorage.setItem('sitename', '这是一个localStorage')
        next('/NotLogin')
    } else {
        next()
    }
})

new Vue({
    render: h => h(App),
    router
}).$mount('#root')
