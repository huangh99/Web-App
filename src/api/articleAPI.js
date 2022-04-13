import request from '@/utils/request'
// import qs from 'qs'

// 获取文章信息的 API 接口
export const getArticleInfoAPI = (data) => {
  // return request.get('/article/list', qs.stringify(data))
  return request.get('/article/list', data)
}
