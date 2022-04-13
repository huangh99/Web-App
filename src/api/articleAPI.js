import request from '@/utils/request'
// import qs from 'qs'

// 获取文章信息的 API 接口
export const getArticleInfoAPI = (data) => {
  // return request.get('/article/list', qs.stringify(data))
  return request.get('/article/list', data)
}

// 获取文章分类信息的 API 接口
export const getArticleTabsAPI = (data) => {
  // return request.get('/article/list', qs.stringify(data))
  return request.get('/article/categories', data)
}
