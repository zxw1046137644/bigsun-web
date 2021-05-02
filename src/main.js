import Vue from 'vue';
import App from './App.vue';
import Vuex from  'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/base.scss';
import VueRouter from 'vue-router';
import routes from './js/router';
import axios from 'axios';
import g from './js/gloabls';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(axios)
Vue.prototype.$http = axios

axios.interceptors.request.use(function (config) {
    console.log("拦截器成功")
    console.log(config)
    return config;
}, function (error) {
    console.log("拦截器失败")
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log("响应成功")
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


Vue.prototype.$getHistoryLength = g.w.getHistoryLength();


const router = new VueRouter({
    mode:'history',//去掉链接中/# 线上需要后端配置test
    routes
});


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
