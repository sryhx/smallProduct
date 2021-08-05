Page({
  data: {
    login: [],
    user:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经授权过
              // wx.switchTab({
              //   url: '../../home/index'
              // })
            }
          });
        }
      }
    })
    this.register()
  },
  
  bindGetUserInfo: function (e) {
    var _this = this
    // console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      this.login()
      _this.user=e.detail.userInfo
   
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }

  },

  // 登录
  login() {
    var _this = this
    wx.login({
      success: (res) => {
        wx.request({
          url: 'https://api.it120.cc/zhangshujie/user/wxapp/login',
          data: {
            code: res.code
          },
          success: (result) => {
            console.log(result)
            if (result.data.code === 0) {
              wx.setStorage({
                data: result.data.data.token,
                key: 'token',
              })
            }
            if (result.data.code == 10000) {
              _this.register()
            }
          }
        })
      }
    })
  },

  // 注册
  register() {
    var _this = this
    wx.login({
      success: (res => {
        wx.request({
          url: "https://api.it120.cc/zhangshujie/user/wxapp/register/simple",
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res)
            _this.login()
          }
        })
      })
    })

  }
})