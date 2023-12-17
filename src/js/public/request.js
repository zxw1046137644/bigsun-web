import axios from "axios";
import Vue from "vue";

// axios.defaults.baseURL = 'http://localhost:9089'

axios.interceptors.request.use(
    function (config) {
        console.log("拦截器成功",config);
        Vue.prototype.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
        return config;
    },
    function (error) {
        console.log("拦截器失败");
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        let data = JSON.parse(JSON.stringify(response.data.data))
        console.log(response.config.url, data)
        if (!response.data.status) {
            Vue.prototype.$message.error(response.data.message)
        }
        Vue.prototype.$loading().close()
        return data;
    },
    function (error) {
        // 对响应错误做点什么
        Vue.prototype.$message.error(error.toString())
        return Promise.reject(error);
    }
);

export default axios;

// export default {
//     post: axios.post,
//     put: axios.put,
//     get: (url, data = {}) => {
//       return axios.get(url, {
//         params: data,
//       });
//     },
//   };
