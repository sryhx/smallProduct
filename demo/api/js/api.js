var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
  return typeof e;
} : function(e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _rewx = require("./rewx.js"), app = getApp(),IndexData = function (i) {
  return (0, _rewx.post)("/applet/index/index", i).then(function (o) {
    return new Promise(function (e, n) {
      e(o);
    });
  });
}
module.exports={
  IndexData:IndexData
}