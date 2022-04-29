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
