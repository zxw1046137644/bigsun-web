import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routes from './js/router';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)


const router = new VueRouter({
    routes
});


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
