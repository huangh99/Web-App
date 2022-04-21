import request from '@/utils/request'
import qs from 'qs'

// 签到的 API 接口
export const setSignInAPI = (date) => {
  return request.post('/more/signin', qs.stringify({
    date: date
  }))
}

// 获取签到信息的 API 接口
export const getSignInAPI = (month, year) => {
  return request.get('/more/signin', {
    params: {
      month: month,
      year: year
    }
  })
}
