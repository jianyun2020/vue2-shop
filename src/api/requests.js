import axios from 'axios'
import nprogress from 'nprogress'

import "nprogress/nprogress.css"

let requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    nprogress.start();
    return config;
})

// 相应拦截器
requests.interceptors.response.use(
    (res) => {
        nprogress.done();
        return res.data;
    },
    (err) => {
        alert("服务器响应数据失败")
    }
)

export default requests;