import axios from 'axios'
import store from '@/store/index'
import { Toast } from 'vant'
const request = axios.create({
  // 指定请求的根路径
  baseURL: 'http://127.0.0.1:3007'
})

request.interceptors.request.use(
  config => {
    // 获取token值
    const tokenStr = store.state.tokenInfo.token
    // 判断tokenStr值是否为空
    if (tokenStr) {
      // 添加身份认证字段
      config.headers.Authorization = tokenStr
    }
    // 展示 loading 效果
    Toast.loading({
      message: '加载中...', // 文本内容
      duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
      forbidClick: true
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  error => {
    Toast.fail({
      message: '请求失败！',
      forbidClick: true
    })
    // Toast.clear()
    return Promise.reject(error)
  }
)

export default request
