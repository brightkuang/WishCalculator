// pages/primogem/primogem.js
const app = getApp()
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) + 20
var accuracy = 0.00001
var gailv=[0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.066,0.126,0.186,0.246,0.306,0.366,0.426,0.486,0.546,0.606,0.666,0.726,0.786,0.846,0.906,0.966,1]

Page({
  data: {
    navigationbarH: navigationBarHeight,
    name: [],
    wish: [],
    possibility: [0, 0, 0, 0, 0, 0],
    input: [0, 0, 0, 0, 0, 0],
    time: [],
    choutime: [],
    chouname:[],
    lasttime:[],
    loadingHidden: true,
    pools:[],
  },

  onLoad: function () {
    this.setData({
      name: app.globalData.name,
      wish: app.globalData.wish,
      input: app.globalData.input
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
    i = 0
    j = 0
    var choutime=this.data.choutime
    var chouname=this.data.chouname
    var lasttime=this.data.lasttime
    for (i; i < 6; i++) {
      if (app.globalData.wish[i] != 0 && (j==0||(app.globalData.open[i] != choutime[j-1]))) {
        choutime[j] = app.globalData.open[i]
        if(j==0){
          lasttime[j]=choutime[j]-app.globalData.date
        }
        else{
          lasttime[j]=choutime[j]-choutime[j-1]
        }
        chouname[j] = app.globalData.name[i]
        j++;
      }
    }
    this.setData({
      time: time,
      choutime:choutime,
      lasttime:lasttime,
      chouname:chouname
    })
    console.log("time")
    console.log(this.data.choutime)
    console.log("lasttime")
    console.log(this.data.lasttime)
    console.log("name")
    console.log(this.data.chouname)
  },

  input: function (event) {
    var input=this.data.input
    app.globalData.calendar[this.data.choutime[event.currentTarget.dataset.index]-1]=app.globalData.calendar[this.data.choutime[event.currentTarget.dataset.index]-1]+Number(event.detail.value)-Number(this.data.input[event.currentTarget.dataset.index])
    input[event.currentTarget.dataset.index]=event.detail.value
    this.setData({
      input:input
    })
    app.globalData.input=input
  },


  calculate: function () {
    this.setData({
      loadingHidden: false,
    })
    var i=0
    var possibility=this.data.possibility
    for(i;i<6;i++){
      possibility[i]=0
    }
    this.setData({
      possibility:possibility
    })
    var primogem = app.globalData.geminput + app.globalData.fate * 160
    console.log("ans:")
    console.log(app.globalData.before)
    var date = app.globalData.date
    console.log("calculate")
    console.log(app.globalData.date)
    this.today(date, primogem, app.globalData.da, 1, app.globalData.before, 0)
    this.setData({
      loadingHidden: true,
    })
    app.globalData.possibility=this.data.possibility
  },

  today: function (date, ys, d, pregailv, jichou, i) {
    if (pregailv <= accuracy) return;
    if (date == this.data.time[i] && ys >= 160) {
      this.chou(ys - 160, d, pregailv, jichou, date, i)
      return
    }
    else if (date == 110) {
      return;
    }
    else {
      this.today(date + 1, ys + app.globalData.calendar[date], d, pregailv, jichou, i)
      return
    }
  },



  chou: function (ys, d, pregailv, jichou, date, i) {
    //console.log("chou")
    var j = 0
    var k = -1
    //console.log("wish:")
    //console.log(app.globalData.wish)
    //console.log("i=")
    console.log(ys)
    for (j; j<6; j++) {
      if (app.globalData.wish[j] != 0) {
        k=k+1;
      }
      if(k==i)break
    }
    //console.log(j)
    var possibility = this.data.possibility
    if (d == 1) {
      possibility[j] = possibility[j] + (pregailv * gailv[jichou]);
      //console.log(possibility[j])
      this.setData({
        possibility: possibility
      })

      if(this.data.time[i+1]==this.data.time[i]){
        console.log("true")
      this.today(date, ys, 0, pregailv * gailv[jichou], 0, i+1)
      }
      else{
      this.today(date + 1, ys + app.globalData.calendar[date], 0, pregailv * gailv[jichou], 0, i+1)
      }
      this.today(date, ys, 1, pregailv * (1 - gailv[jichou]), jichou + 1, i);
      return
    }
    else {
      possibility[j] = possibility[j] + (pregailv * gailv[jichou] * 0.5);
      //console.log(possibility[j])
      this.setData({
        possibility: possibility
      })
      if(this.data.time[i+1]==this.data.time[i]){
        console.log("true")
      this.today(date, ys, 0, pregailv * gailv[jichou] * 0.5, 0, i+1)
      }
      else{
      this.today(date + 1, ys + app.globalData.calendar[date], 0, pregailv * gailv[jichou] * 0.5, 0, i+1)
      }
      this.today(date, ys, 1, pregailv * gailv[jichou] * 0.5, 0, i);
      this.today(date, ys, 0, pregailv * (1 - gailv[jichou]), jichou + 1, i);
      return
    }
  },

  next: function () {
    wx.navigateTo({
      url: '../result/result',
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  }

})