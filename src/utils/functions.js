const timeFormat = function(time) {
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  return year + '/' + month + '/' + day
}

export default timeFormat
