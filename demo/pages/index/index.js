// index.js
// 获取应用实例
const app = getApp()
var   _api = require("../../api/js/api.js"),_rewx = require("../../api/js/rewx.js");
Page({
  data: {
    dots:true,
    autoplay:true,
    interval:5000,
    banner_list:[]
  },
  onLoad() {
    
    var that=this;
    (0, _api.IndexData)().then(function (t) {
      console.log(t)
      that.setData({
        banner_list:t.store_list
      })
      console.log(t.store_list);
    });

    (0, _rewx.post)("/applet/store/getdetail", { store_id: 1 }).then(function (t) {
      console.log(t)
      that.setData({
        
      })
    });

    (0, _rewx.get)("/applet/index/index").then(function (t) {
      console.log(t)
      that.setData({
        
      })
    });


    wx.request({
      url: 'https://xxx.com/applet/store/getdetail',
      data: {
        x: ''
      },
      method:"POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
})
