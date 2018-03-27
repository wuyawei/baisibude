
let baseUrl="http://api.budejie.com/api/api_open.php";

const request = (params = {}, method = "GET", header = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl,
      data: params,
      method: method,
      header: header ? header : "application/json",
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime,
  request
}
