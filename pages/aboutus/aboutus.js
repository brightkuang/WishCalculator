// aboutus.js
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) - 25
const app = getApp()
const centralx = 375;
const centraly = 1300;
var direction = 0;

Page({
  data: {
    returnH: navigationBarHeight,
    addimagesource: "/images/return.svg",
    direction: 0,
    lengtha: 0,
    dega: 0,
    pxa: 0,
    pya: centraly,
    lengthb: 0,
    degb: 0,
    pxb: 0,
    pyb: 0,
    lengthc: 0,
    degc: 0,
    pxc: 0,
    pyc: 0
  },

  onLoad() {

    var that = this

    if (wx.getSystemInfoSync().theme == "light") {
      that.setData({
        addimagesource: "/images/return.svg"
      })
    } else {
      that.setData({
        addimagesource: "/images/returndark.svg"
      })
    }

    wx.startDeviceMotionListening({
      interval: 'game',
      sucess: function () {
        console.log(e)
      }
    })
    var that = this
    wx.onDeviceMotionChange(function (res) {
      var alpha = (parseFloat(res.alpha) + direction) * Math.PI / 180
      var beta = parseFloat(res.beta) * Math.PI / 180
      var gamma = parseFloat(res.gamma) * Math.PI / 180
      that.setData({
        dega: (180 * Math.atan2((Math.cos(alpha) * Math.cos(beta) + Math.cos(alpha) * Math.cos(beta)), (Math.sin(alpha) * Math.cos(gamma) + Math.sin(alpha) * Math.cos(gamma))) / Math.PI),
        lengtha: 300 * Math.sqrt(Math.sin(alpha) * Math.sin(alpha) * Math.cos(gamma) * Math.cos(gamma) + Math.cos(alpha) * Math.cos(alpha) * Math.cos(beta) * Math.cos(beta)),
        pxa: (centralx - (that.data.lengtha / 2)),
        degb: 180 * (Math.atan2(Math.cos(beta) * (Math.cos(alpha) - Math.sin(alpha)), Math.cos(gamma) * (Math.cos(alpha) + Math.sin(alpha)))) / Math.PI,
        lengthb: 150 * Math.sqrt(((Math.cos(beta) * (Math.sin(alpha) - Math.cos(alpha))) * (Math.cos(beta) * (Math.sin(alpha) - Math.cos(alpha)))) + ((Math.cos(gamma) * (-Math.cos(alpha) - Math.sin(alpha))) * (Math.cos(gamma) * (-Math.cos(alpha) - Math.sin(alpha))))),
        pxb: (centralx + (75 * Math.cos(gamma) * (Math.sin(alpha) - Math.cos(alpha)))) - (that.data.lengthb / 2),
        pyb: (centraly + (75 * Math.cos(beta) * (Math.sin(alpha) + Math.cos(alpha)))),
        degc: (180 * Math.atan2(-(Math.sin(alpha) * Math.cos(beta) + Math.cos(alpha) * Math.cos(beta)), (Math.cos(alpha) * Math.cos(gamma) - Math.sin(alpha) * Math.cos(gamma))) / Math.PI),
        lengthc: 150 * Math.sqrt(((Math.cos(beta) * (Math.sin(alpha) + Math.cos(alpha))) * (Math.cos(beta) * (Math.sin(alpha) + Math.cos(alpha)))) + ((Math.cos(gamma) * (Math.cos(alpha) - Math.sin(alpha))) * (Math.cos(gamma) * (Math.cos(alpha) - Math.sin(alpha))))),
        pxc: (centralx + (75 * Math.cos(gamma) * (Math.sin(alpha) + Math.cos(alpha)))) - (that.data.lengthc / 2),
        pyc: (centraly + (75 * Math.cos(beta) * (-Math.sin(alpha) + Math.cos(alpha))))
      })
 
      if (Math.abs(res.alpha) <= 10) {
        setTimeout(() => {
               console.log(res.alpha)
          if (Math.abs(res.alpha) <= 10) {
          wx.navigateTo({
            url: '../caidan/caidan',
          })
        }
        }, 200);

      }
    })

  },

  onShow: function () {
    var that = this

    if (wx.getSystemInfoSync().theme == "light") {
      that.setData({
        addimagesource: "/images/return.svg"
      })
    } else {
      that.setData({
        addimagesource: "/images/returndark.svg"
      })
    }

  },



  bindtap1: function () {
    wx.switchTab({
      url: '../tuandui/tuandui'
    })
  },
  bindtap2: function () {
    wx.switchTab({
      url: '../linian/linian'
    })
  },
  bindtap3: function () {
    wx.switchTab({
      url: '../fangshi/fangshi'
    })
  },
  return: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})
