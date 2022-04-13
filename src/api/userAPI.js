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

// 修改密码的 API 接口
export const updatePwdAPI = (data) => {
  return request.post('/my/updatepwd', qs.stringify(data))
}

// 获取用户信息的 API 接口
export const getUserInfoAPI = (data) => {
  return request.get('/my/userInfo', qs.stringify(data))
}

// 更新用户信息的 API 接口
export const updateUserInfoAPI = (data) => {
  return request.post('/my/userInfo', qs.stringify(data))
}

// 更新用户头像的 API 接口
export const updateUserIconAPI = (data) => {
  return request.post('/my/update/avatar', qs.stringify(data))
}
