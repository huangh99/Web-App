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

// 获取文章搜索提示的 API 接口
export const getArticleSearchTipsAPI = (data) => {
  return request.get('/article/search', {
    params: {
      kw: data
    }
  })
}

// 获取文章搜索结果的 API 接口
export const getArticleSearchResultAPI = (data1, data2) => {
  return request.get('/article/searchlist', {
    params: {
      kw: data1,
      page: data2
    }
  })
}
