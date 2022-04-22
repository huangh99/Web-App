import request from '@/utils/request'
import qs from 'qs'

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

// 获取文章详情的 API（形参中的 id 是文章的 id）
export const getArticleDetailAPI = (id) => {
  return request.get(`/article/detail/${id}`)
}

// 点赞文章的 API 接口
export const setStarArticleAPI = articleId => {
  return request.post('/article/star', qs.stringify({
    target: articleId
  }))
}

// 取消点赞文章的 API 接口
export const cancelStarArticleAPI = articleId => {
  return request.post('/article/cancelstar', qs.stringify({
    target: articleId
  }))
}

// 关注作者的 API 接口
export const setFollowAuthorAPI = authorId => {
  return request.post('/article/follow', qs.stringify({
    target: authorId
  }))
}

// 取消关注作者的 API 接口
export const cancelFollowAuthorAPI = authorId => {
  return request.post('/article/cancelfollow', qs.stringify({
    target: authorId
  }))
}

// 获取文章评论信息的 API 接口
export const getCommentsAPI = (articleId) => {
  return request.get(`/article/comments/${articleId}`)
}

// 发表文章评论信息的 API 接口
export const postCommentAPI = (articleId, content) => {
  return request.post('/article/comment', qs.stringify({
    articleId: articleId,
    content: content
  }))
}

// 点赞文章评论的 API 接口
export const addCommentLikeAPI = (commentId) => {
  return request.post('/article/comment/addlike', qs.stringify({
    commentId: commentId
  }))
}

// 取消点赞文章评论的 API 接口
export const cancelCommentLikeAPI = (commentId) => {
  return request.post('/article/comment/cancellike', qs.stringify({
    commentId: commentId
  }))
}

// 获取问题信息的 API 接口
export const getQuestionListAPI = (cateId) => {
  return request.get(`/article/questions/${cateId}`)
}
