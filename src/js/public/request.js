import axios from "axios";
import Vue from "vue";
import {Loading} from 'element-ui';
import {throwNoCurrentInstance} from "vue-router/src/composables/utils";

// axios.defaults.baseURL = 'http://localhost:9089'

let reqNum = 0
let elLoadingComponent
let errMessage = []

// let errMessageList = (message) => {
//     errMessage.push(message)
// }
function errMessageList(message) {
    let t = false
    if (errMessage.length == 0) {
        errMessage.push(message)
        return !t
    } else {
        errMessage.push(message)
        return !errMessage.includes(message)
    }
}

function startLoading() {
    if (reqNum === 0) {
        elLoadingComponent = Loading.service(options);
    }
    reqNum++
}

function endLoading() {
    // 延迟 300ms 再调用 closeLoading 方法, 合并300ms内的请求
    // 当有请求中嵌套请求的情况也也可开启延时来解决
    // setTimeout(closeLoading, 300)
    closeLoading()
}

function closeLoading() {
    if (reqNum <= 0) return
    reqNum--
    if (reqNum === 0) {
        console.log('结束loading')
        Vue.nextTick(function () {
            // DOM 更新了
            errMessage = []
            elLoadingComponent.close()
        })
    }
}


const options = {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
}

axios.interceptors.request.use(
    function (config) {
        // console.log("拦截器成功", config);
        startLoading()
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
        // console.log(response.config.url, data)

        endLoading()
        if (!response.data.status) {
            Vue.prototype.$message.error(response.data.message)
            throw new Error()
        }
        return data;
    },
    function (error) {
        // 对响应错误做点什么
        endLoading()
        errMessageList(error.toString()) ? Vue.prototype.$message.error(error.toString()) : ''
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
