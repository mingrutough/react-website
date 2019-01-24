import axios from 'axios';
import { message } from 'antd';
let config = {
    baseURL: `${$domain}/api`,
    timeout: 10000,
    withCredentials: true
};

const axiosInstance = axios.create(config);
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
  if (response.data.callStatus === 'FAILED') { 
    message.error(response.data.msg);
  }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;