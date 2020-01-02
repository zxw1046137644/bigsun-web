import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.scss';
import VueRouter from 'vue-router';
import routes from './js/router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.prototype.$http = axios
Vue.use(VueAxios,axios)


const router = new VueRouter({
    // mode:'history',//去掉链接中/# 线上需要后端配置
    routes
});


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
