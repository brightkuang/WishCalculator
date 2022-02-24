// index.js
var util = require('../../utils/util.js');
const app = getApp()
var date =
  Page({
    data: {
      hide: true,
      addimagesource: "/images/titlelight1.svg"
    },

    onLoad() {
      app.globalData.date = util.formatTime(new Date())
      var that = this
      wx.onThemeChange((result) => {
        if (wx.getSystemInfoSync().theme == "light") {
          that.setData({
            addimagesource: "/images/titlelight1.svg"
          })
        } else {
          that.setData({
            addimagesource: "/images/titledark1.svg"
          })
        }
      })
    },
    onShow: function () {
      var that = this
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          addimagesource: "/images/titlelight1.svg"
        })
      } else {
        that.setData({
          addimagesource: "/images/titledark1.svg"
        })
      }
    },

    start: function () {
      wx.navigateTo({
        url: '../pools/pools',
      })
    },

    more: function () {
      this.setData({
        hide: false
      })
    },

    hidemore: function () {
      console.log("hide")
      this.setData({
        hide: true
      })
    },

    aboutus: function () {
      wx.navigateTo({
        url: '../aboutus/aboutus',
      })
    },


    howtouse: function () {
      wx.navigateTo({
        url: '../howtouse/howtouse',
      })
    }

  })