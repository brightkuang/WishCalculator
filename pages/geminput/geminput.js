// pages/geminput/geminput.js
const app = getApp()
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) + 20
Page({
  data: {
    dachecked: false,
    ykchecked: false,
    dcchecked: false,
    dykchecked: false,
    sy:0,
    navigationbarH: navigationBarHeight,
    name: [],
    wish: [],
    dyktime: [],
    roma: [],
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

    this.setData({
      name: app.globalData.name,
      wish: app.globalData.wish,
    })
    var j = 1
    var roma = this.data.roma
    for (var i = 0; i < 6; i++) {
      if (this.data.wish[i] == 1) {
        var zi = ""
        console.log(j)
        switch (j) {
          case 1: zi = "Ⅰ"
            break;
          case 2: zi = "Ⅱ"
            break;
          case 3: zi = "Ⅲ"
            break;
          case 4: zi = "Ⅳ"
            break;
          case 5: zi = "Ⅴ"
            break;
          case 6: zi = "Ⅵ"
        }
        j++

      }
      roma[i] = zi
    }
    console.log(roma)
    this.setData({
      roma: roma
    })
    var dyktime = this.data.dyktime
    var i = 0
    var j = 0
    for (i; i < 6; i++) {
      if ((j == 0 || (app.globalData.open[i] != dyktime[j - 1]))) {
        dyktime[j] = app.globalData.open[i]
        j++
      }
    }
    this.setData({
      dyktime: dyktime
    })
    console.log("dyktime")
    console.log(this.data.dyktime)


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
        activecolor: "#F2DFEB",
        inactivecolor: "#2a346d"
      })
    }
  },



  geminput: function (event) {
    app.globalData.geminput = Number(event.detail.value)
  },

  fateinput: function (event) {
    app.globalData.fate = Number(event.detail.value)
  },

  beforeinput: function (event) {
    app.globalData.before = Number(event.detail.value)
  },

  daswitchChange({ detail }) {
    app.globalData.da = Number(detail)
    this.setData({
      dachecked: detail
    });
  },

  ykswitchChange({ detail }) {
    if (detail == 1) {
      var i = app.globalData.date;
      for (i; i < 365; i++) {
        app.globalData.calendar[i] = app.globalData.calendar[i] + 90
      }
    } else {
      var i = app.globalData.date;
      for (i; i < 365; i++) {
        app.globalData.calendar[i] = app.globalData.calendar[i] - 90
      }
    }
    this.setData({
      ykchecked: detail
    });
  },

  dykswitchChange({ detail }) {
    if (detail == 1) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1] + 1320
      }
    } else {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1] - 1320
      }
    }
    this.setData({
      dykchecked: detail
    });
  },

  dcswitchChange({ detail }) {
    if (detail == 1) {
      var i = app.globalData.date;
      for (i; i < 365; i++) {
        app.globalData.calendar[i] = app.globalData.calendar[i] + 60
      }
    } else {
      var i = app.globalData.date;
      for (i; i < 365; i++) {
        app.globalData.calendar[i] = app.globalData.calendar[i] - 60
      }
    }
    this.setData({
      dcchecked: detail
    });
  },

  syonChange(event) {
    console.log(this.data.sy)
    var num=0
    switch(this.data.sy){
      case 0:num=0
      break;
      case 9:num=150
      break;
      case 18:num=300
      break;
      case 27:num=450
      break;
      case 36:num=600
      break;
    }
    if (event.detail == 0) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1] - num+0
      }
    } else if(event.detail == 9) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1]- num+150
      }
    }else if(event.detail == 18) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1]- num+300
      }
    }else if(event.detail == 27) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1]- num+450
      }
    }else if(event.detail == 36) {
      var i = 0;
      for (i; i < this.data.dyktime.length; i++) {
        app.globalData.calendar[this.data.dyktime[i] - 1] = app.globalData.calendar[this.data.dyktime[i] - 1]- num+600
      }
    }
    this.setData({
      sy:event.detail
    })
  },


  next: function () {
    wx.navigateTo({
      url: '../primogem/primogem',
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  },

  calendar: function () {
    wx.navigateTo({
      url: '../calendar/calendar',
    })
  }

})