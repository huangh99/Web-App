import request from '@/utils/request'
import qs from 'qs'

// 登录的 API 接口
export const loginAPI = (data) => {
  return request.post('/api/login', qs.stringify(data))
}

// 注册的 API 接口
export const logonAPI = (data) => {
  return request.post('/api/logon', qs.stringify(data))
}
