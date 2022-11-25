import axios from 'axios';







export default {
    post: axios.post,
    put: axios.put,
    get: (url, data = {}) => {
      return axios.get(url, {
        params: data,
      });
    },
  };