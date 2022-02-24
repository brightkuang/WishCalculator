// pages/how-to-use/howtouse.js
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) -25
const app = getApp()

Page({
  data: {
   returnH:navigationBarHeight,
   addimagesource:"/images/return.svg"
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

  },


  onShow:function(){
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

  return:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  }
})