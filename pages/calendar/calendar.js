// index.js
// 获取应用实例
const app = getApp()
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) + 20
var day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function outDay(m,d){
  var sum = 0
  var i=0
  for (i;i<m-1;i++) {

      sum += day[i]
  }
  return sum + d
};
Page({
  data: {
    date: '',
    show: false,
    navigationbarH: navigationBarHeight,
    ziti:"",
    formatter(day) {
      day.bottomInfo=(app.globalData.calendar[outDay(day.date.getMonth()+1,day.date.getDate())])
      return day;
    },
    mydate:0,
    textValue:0,
  },

  onLoad: function () {
    var that = this
    wx.onThemeChange((result) => {
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          ziti:"#D9A7A7"
        })
      } else {
        that.setData({
          ziti:"#B6CAF2"
        })
      }
    })
  },
  onShow: function () {
    var that = this
    if (wx.getSystemInfoSync().theme == "light") {
      that.setData({
        ziti:"#D9A7A7"
      })
    } else {
      that.setData({
        ziti:"#B6CAF2"
      })
    }
  },
  formatDate(date) {
    date = new Date(date);
    console.log(`${date.getMonth() + 1}${date.getDate()}`)
    console.log(outDay(date.getMonth()+1,date.getDate()))
    this.setData({
      mydate:outDay(date.getMonth()+1,date.getDate()),
    })
    this.setData({
      textValue:app.globalData.calendar[this.data.mydate]
    })
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  input: function (event) {
    app.globalData.calendar[this.data.mydate] = Number(event.detail.value)
  },

  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  },



});
