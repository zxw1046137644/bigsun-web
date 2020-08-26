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


Vue.prototype.$getHistoryLength = g.w.getHistoryLength();
const router = new VueRouter({
    mode:'history',//去掉链接中/# 线上需要后端配置test
    routes
});


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
