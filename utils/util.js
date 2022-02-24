var day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function outDay(m,d){
  var sum = 0
  var i=0
  for (i;i<m-1;i++) {

      sum += day[i]
  }
  return sum + d
};

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return outDay(month,day)
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime:formatTime
}
