// pages/pools/pools.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const app = getApp()
let navigationBarHeight = (wx.getMenuButtonBoundingClientRect().top) + 20


Page({
  data: {
    navigationbarH: navigationBarHeight,
    barheight: 0,
    name: [],
    wish: [],
    pools: [],
    roma:[],
    index: 0,
    pooladdimagesource: "/images/addD9A7A7.svg"
    
  },

  onLoad:function(){
    this.setData({
      pools:app.globalData.pools,
      wish:app.globalData.wish,
      name:app.globalData.name,
    })
    var that = this
      wx.onThemeChange((result) => {
        if (wx.getSystemInfoSync().theme == "light") {
          that.setData({
            pooladdimagesource: "/images/addD9A7A7.svg"
          })
        } else {
          that.setData({
            pooladdimagesource: "/images/addB6CAF2.svg"
          })
        }
      })
      var j=1
    var roma=this.data.roma
    for(var i=0;i<6;i++){
     if(this.data.wish[i]==1){
       var zi=""
       console.log(j)
       switch(j){
         case 1:zi="Ⅰ" 
         break;
         case 2:zi="Ⅱ"
         break;
         case 3:zi="Ⅲ"
         break;
         case 4:zi="Ⅳ"
         break;
         case 5:zi="Ⅴ"
         break;
         case 6:zi="Ⅵ"
       }
       j++

     }
     roma[i]=zi
    }
    console.log(roma)
    this.setData({
      roma:roma 
    })
  },

  onShow: function () {
    var timer1 = setInterval(() => {
      if (this.data.barheight <= 16) {
        this.setData({
          barheight: this.data.barheight + 0.5
        })
      }
      else if (this.data.barheight <= 22) {
        this.setData({
          barheight: this.data.barheight + 0.25
        })
      }
      else {
        this.setData({
          barheight: this.data.barheight + 0.125
        })
      }
      if (this.data.barheight >= 23) {
        clearInterval(timer1)
      }
    }, 10);
    var that = this
      if (wx.getSystemInfoSync().theme == "light") {
        that.setData({
          pooladdimagesource: "/images/addD9A7A7.svg"
        })
      } else {
        that.setData({
          pooladdimagesource: "/images/addB6CAF2.svg"
        })
      }
  },

  delete: function (event) {
    console.log(event.currentTarget.dataset.index)
    var wish = this.data.wish
    const index = event.currentTarget.dataset.index
    wish[index] = 0
    if (index % 2 == 0) {
      wish[index + 1] = 0
    }
    console.log(wish)
    this.setData({
      wish: wish
    })
    var j=1
    var roma=this.data.roma
    for(var i=0;i<6;i++){
     if(this.data.wish[i]==1){
       var zi=""
       console.log(j)
       switch(j){
         case 1:zi="Ⅰ" 
         break;
         case 2:zi="Ⅱ"
         break;
         case 3:zi="Ⅲ"
         break;
         case 4:zi="Ⅳ"
         break;
         case 5:zi="Ⅴ"
         break;
         case 6:zi="Ⅵ"
       }
       j++

     }
     roma[i]=zi
    }
    console.log(roma)
    this.setData({
      roma:roma 
    })
  },

  add: function (event) {
    console.log(event.detail.value[0])
    console.log(event.detail.value[1])
    var wish = this.data.wish
    const index = event.detail.value[0] * 2
    console.log(index)
    wish[index] = 1
    if (event.detail.value[1] == 1) {
      wish[index + 1] = 1
    }
    console.log(wish)
    this.setData({
      wish: wish
    })
    var j=1
    var roma=this.data.roma
    for(var i=0;i<6;i++){
     if(this.data.wish[i]==1){
       var zi=""
       console.log(j)
       switch(j){
         case 1:zi="Ⅰ" 
         break;
         case 2:zi="Ⅱ"
         break;
         case 3:zi="Ⅲ"
         break;
         case 4:zi="Ⅳ"
         break;
         case 5:zi="Ⅴ"
         break;
         case 6:zi="Ⅵ"
       }
       j++

     }
     roma[i]=zi
    }
    console.log(roma)
    this.setData({
      roma:roma 
    })
  },

  next: function () {
    var sum=0;
    var i = 0;
    for(i;i<6;i++){
      sum=sum+this.data.wish[i]
    }
    console.log(sum)
    if(sum==0){
      Toast({
        message:'请选择至少一个池子',
        position:'bottom',
      });
    }
    else if(sum>=3){
      Toast({
        message:'当前版本最多选择两个池子',
        position:'bottom',
      });
    }
    else{

      for(var i=0;i<=365;i++){
        app.globalData.calendar[i]=0
      }


      app.globalData.wish = this.data.wish
      wx.navigateTo({
        url: '../geminput/geminput',
      })
    }

  },

  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  }

})