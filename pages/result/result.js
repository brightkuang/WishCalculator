// pages/result/result.js\
const app = getApp()
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) + 20

Page({

  data: {
    navigationbarH: navigationBarHeight,
    name: [],
    wish: [],
    possibility: [0, 0, 0, 0, 0, 0],
    time: [],
    total:0,
    payname:["648","328","198","098 ","030 ","006 "],
    pay:[0,0,0,0,0,0],
    firstpay:[false,false,false,false,false,false],
    paytotal:0,
    lasting:0,
    activecolor: "#8C3565",
    inactivecolor: "#dad2d6"
  },
  onLoad: function () {

    var that = this
    wx.onThemeChange((result) => {
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          activecolor: "#8C3565",
          inactivecolor: "#dad2d6"
        })
      } else {
        that.setData({
          activecolor: "#B6CAF2",
          inactivecolor: "#2a346d"
        })
      }
    })

    var total=0
    for(var k=0;k<6;k++){
      total=total+Number(app.globalData.input[k])
    }
    this.setData({
      total:total,
      lasting:total,
      possibility: app.globalData.possibility,
      name: app.globalData.name,
      wish: app.globalData.wish,
    })

    var time = this.data.time
    var i = 0
    var j = 0
    for (i; i < 6; i++) {
      if (app.globalData.wish[i] != 0) {
        time[j] = app.globalData.open[i]
        j++;
      }
    }
    this.setData({
      time: time,
    })
    var that = this
    wx.onThemeChange((result) => {
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          
        })
      } else {
        that.setData({
         
        })
      }
    })
  },

  onShow: function () {

    var that = this
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          activecolor: "#8C3565",
          inactivecolor: "#dad2d6"
        })
      } else {
        that.setData({
          activecolor: "#B6CAF2",
          inactivecolor: "#2a346d"
        })
      }
  },

  paychange(event) {
    console.log(event)
    var pay = this.data.pay
    pay[event.currentTarget.dataset.index]=Number(event.detail)
    this.setData({
      pay: pay
    });
    console.log(this.data.pay)
    this.count()
  },

  payonChange(event) {
    console.log(event)
    var firstpay = this.data.firstpay
    if(Number(event.detail)==1){
    firstpay[event.currentTarget.dataset.index]=true
    }
    else{
      firstpay[event.currentTarget.dataset.index]=false
    }
    this.setData({
      firstpay: firstpay
    });
    console.log(this.data.firstpay)
    this.count()
  },




  end: function () {
    wx.navigateBack({
      delta: 4,
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  },

  count: function(){
    var lasting=this.data.total
    var pay=this.data.pay
    var firstpay=this.data.firstpay
    if(pay[0]!=0&&firstpay[0]==true){
      lasting=lasting-12960-(pay[0]-1)*8080
    }
    else{
      lasting=lasting-(pay[0])*8080
    }
    if(pay[1]!=0&&firstpay[1]==true){
      lasting=lasting-6560-(pay[1]-1)*3880
    }
    else{
      lasting=lasting-(pay[1])*3880
    }
    if(pay[2]!=0&&firstpay[2]==true){
      lasting=lasting-3960-(pay[2]-1)*2240
    }
    else{
      lasting=lasting-(pay[2])*2240
    }
    if(pay[3]!=0&&firstpay[3]==true){
      lasting=lasting-1960-(pay[3]-1)*1090
    }
    else{
      lasting=lasting-(pay[3])*1090
    }
    if(pay[4]!=0&&firstpay[4]==true){
      lasting=lasting-600-(pay[4]-1)*330
    }
    else{
      lasting=lasting-(pay[4])*330
    }
    if(pay[5]!=0&&firstpay[5]==true){
      lasting=lasting-120-(pay[5]-1)*60
    }
    else{
      lasting=lasting-(pay[5])*60
    }
    console.log(lasting)
    this.setData({
      lasting:lasting
    })
  }

})