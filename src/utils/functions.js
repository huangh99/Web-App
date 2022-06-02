// 格式化时间
export const timeFormat = function(time) {
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  return year + '/' + month + '/' + day
}

// 生成随机整数（可以指定范围）
export const randomNum = function(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10)
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    default:
      return 0
  }
}

// 音频时间转换
export function formatSeconds(value) {
  var secondTime = parseInt(value) // 秒
  var minuteTime = 0 // 分
  if (secondTime > 60) {
    minuteTime = parseInt(secondTime / 60)
    secondTime = parseInt(secondTime % 60)
  }
  if (secondTime < 10) {
    secondTime = '0' + secondTime
  }
  if (minuteTime < 10) {
    minuteTime = '0' + minuteTime
  }
  var result = minuteTime + ':' + secondTime
  return result
}
