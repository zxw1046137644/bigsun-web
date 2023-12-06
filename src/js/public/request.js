import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:9089'

axios.interceptors.request.use(
  function(config) {
    console.log("拦截器成功");
    console.log(config);
    return config;
  },
  function(error) {
    console.log("拦截器失败");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    console.log("响应成功");
    console.log(response);
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
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
