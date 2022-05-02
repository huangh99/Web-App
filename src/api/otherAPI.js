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

// 新增待办事项的 API 接口
export const addTodoEventAPI = (content, date, time) => {
  return request.post('/more/addtodo', qs.stringify({
    content: content,
    date: date,
    time: time
  }))
}

// 获取待办事项列表的 API 接口
export const getTodoListAPI = () => {
  return request.get('/more/todolist')
}

// 获取歌曲信息的 API 接口
export const getSongInfoAPI = () => {
  return request.get('/more/song')
}

// 发布提问信息的 API 接口
export const publicQuestion = (content, cate) => {
  return request.post('/more/inquiry', qs.stringify({
    content: content,
    cate: cate
  }))
}

// 获取提问信息列表的 API 接口
export const getInquiryListAPI = (page) => {
  return request.get('/more/inquiry', {
    params: {
      page: page
    }
  })
}

// 获取提问详情的 API 接口
export const getInquiryDetailAPI = (id) => {
  return request.get('/more/inquiry/detail/' + id)
}

// 发布回答的 API 接口
export const publicAnswerAPI = (content, id) => {
  return request.post('/more/inquiry/answer', qs.stringify({
    content: content,
    questionId: id
  }))
}

// 获取回答信息的 API 接口
export const getAnswerListAPI = (questionId, page) => {
  return request.get('/more/inquiry/answer', {
    params: {
      questionId: questionId,
      page: page
    }
  })
}

// 点赞回答的 API 接口
export const starAnswerAPI = (answerId) => {
  return request.post('/more/inquiry/answer/star', qs.stringify({
    answerId: answerId
  }))
}

// 取消点赞回答的 API 接口
export const cancelStarAnswerAPI = (answerId) => {
  return request.post('/more/inquiry/answer/cancelStar', qs.stringify({
    answerId: answerId
  }))
}

// 更新阅读次数的 API 接口
export const updateReadNumberAPI = (questionId) => {
  return request.post('/more/inquiry/readNum', qs.stringify({
    questionId: questionId
  }))
}
