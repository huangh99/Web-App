export const timeFormat = function(time) {
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  return year + '/' + month + '/' + day
}

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
