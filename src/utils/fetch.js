import axios from 'axios';

let config = {
    baseURL: `${$domain}/api`,
    timeout: 10000,
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
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;