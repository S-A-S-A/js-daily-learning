import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com';   //baseURL表示基础域名（路径）
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    config.params = {
        ...config.params,               // 用解构赋值，不覆盖，只添加，对象克隆， ...config.params代表之前传过来的params放这儿，后面再拼接上appkey: "aptx4869_1546515490571"  
        appkey: "aptx4869_1546515490571"   //覆盖
    }
    return config;

}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios;