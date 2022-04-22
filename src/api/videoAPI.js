import request from '@/utils/request'
import qs from 'qs'

// 获取视频列表信息的 API 接口
export const getVideoInfoAPI = (currentPage, cateId) => {
  return request.get('/video/list', {
    params: {
      page: currentPage,
      cateId: cateId
    }
  })
}

// 获取视频详细信息的 API 接口
export const getVideoDetailAPI = (id) => {
  return request.get(`/video/detail/${id}`)
}

// 点赞视频的 API 接口
export const setStarVideoAPI = videoId => {
  return request.post('/video/star', qs.stringify({
    target: videoId
  }))
}

// 取消点赞视频的 API 接口
export const cancelStarVideoAPI = videoId => {
  return request.post('/video/cancelstar', qs.stringify({
    target: videoId
  }))
}

// 获取视频评论信息的 API 接口
export const getCommentsAPI = (videoId) => {
  return request.get(`/video/comments/${videoId}`)
}

// 发表视频评论信息的 API 接口
export const postCommentAPI = (videoId, content) => {
  return request.post('/video/comment', qs.stringify({
    videoId: videoId,
    content: content
  }))
}

// 点赞视频评论的额 API 接口
export const addCommentLikeAPI = (commentId) => {
  return request.post('/video/comment/addlike', qs.stringify({
    commentId: commentId
  }))
}

// 取消点赞视频评论的 API 接口
export const cancelCommentLikeAPI = (commentId) => {
  return request.post('/video/comment/cancellike', qs.stringify({
    commentId: commentId
  }))
}
