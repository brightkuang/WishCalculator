// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    ishidden: false,
    texthidden: true,
    text2hidden: true,
    name: "",
    hidden: 1,
    backgroundcolor: "#ffffff",
    imgsrc: "/images/book2.png",
    fontsize: 160,
    top: 600,
    stars: [0, 0, 0, 0, 0],
    number: 0,
  },


  ended: function () {
    var timer1 = setInterval(() => {
      this.setData({
        fontsize: this.data.fontsize - 10
      })
      if (this.data.fontsize == 100) {
        clearInterval(timer1)
      }
    }, 20);
    this.setData({
      backgroundcolor: "#666666",
      ishidden: true,
      texthidden: false
    })
    console.log("ended")
    this.setData({
      hidden: 0
    })
    setTimeout(() => {
      this.setData({
        hidden: 1
      })
    }, 800);
    setTimeout(() => {
      var timer2 = setInterval(() => {
        this.setData({
          top: this.data.top + 10
        })
        if (this.data.top == 700) {
          clearInterval(timer2)
        }
      }, 20);
      this.setData({
        backgroundcolor: "#ffffff",
        hidden: 0,
        imgsrc: "/images/book1.png",
        text2hidden: false
      })
      setTimeout(() => {
        this.setData({
          hidden: 1
        })
      }, 800);
      setTimeout(() => {
        this.setData({
          number: this.data.number + 1
        })
        setTimeout(() => {
          this.setData({
            number: this.data.number + 1
          })
          setTimeout(() => {
            this.setData({
              number: this.data.number + 1
            })
            setTimeout(() => {
              this.setData({
                number: this.data.number + 1
              })
              setTimeout(() => {
                this.setData({
                  number: this.data.number + 1
                })
              }, 400);

            }, 400);

          }, 400);

        }, 400);

      }, 800);
    }, 2000);
  },


})
