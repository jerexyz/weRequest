module.exports=function(t){function e(n){if(o[n])return o[n].exports;var c=o[n]={i:n,l:!1,exports:{}};return t[n].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){function o(){wx.showToast({title:"加载中",icon:"loading",mask:!0,duration:6e4})}function n(){wx.hideToast()}t.exports={show:o,hide:n}},function(t,e,o){function n(t,e){M?c(t,e):(e.count++,wx.checkSession({success:function(){M=!0},fail:function(){C=""},complete:function(){e.count--,c(t,e)}}))}function c(t,e){C||e.isLogin?"function"==typeof t&&t():b?setTimeout(function(){c(t,e)},300):(b=!0,e.count++,wx.login({complete:function(){e.count--,"function"==typeof e.complete&&0==e.count&&e.complete()},success:function(o){if(o.code){var n;n="function"==typeof g.data?g.data():g.data||{},n[g.codeName]=o.code,e.count++,l({url:g.url,data:n,method:g.method,isLogin:!0,success:function(e){C=e,M=!0,"function"==typeof t&&t(),wx.setStorage({key:m,data:C})},complete:function(){e.count--,"function"==typeof e.complete&&0==e.count&&e.complete(),b=!1}})}else wx.showModal({title:"登录失败",content:"请稍后重试",showCancel:!1}),console.error(o),b=!1},fail:function(t){wx.showModal({title:"登录失败",content:t.errMsg||"请稍后重试",showCancel:!1}),console.error(t),b=!1}}))}function i(t){return"function"==typeof t.beforeSend&&t.beforeSend(),void 0===t.reLoginLimit?t.reLoginLimit=0:t.reLoginLimit++,void 0===t.count&&(t.count=0),t.showLoading&&(h.show(),t.complete=function(t){return function(){h.hide(),"function"==typeof t&&t.apply(this,arguments)}}(t.complete)),t}function u(t){t.count++,t.data||(t.data={}),t.url!=g.url&&(t.data[m]=C),t.method=t.method||"GET";var e=t.url.startsWith("http")?t.url:x+t.url;"GET"!=t.method&&(e.indexOf("?")>=0?e+="&"+m+"="+C:e+="?"+m+"="+C),wx.request({url:e,data:t.data,method:t.method,header:t.header||{},dataType:t.dataType||"json",success:function(e){if(200==e.statusCode)if(t.isLogin){var o="";try{o=g.success(e.data)}catch(t){}o?t.success(o):r(t,e)}else if(y(e.data)&&t.reLoginLimit<S)C="",wx.removeStorage({key:m,complete:function(){c(function(){l(t)},t)}});else if(w(e.data)&&"function"==typeof t.success){var n=null;try{n=L(e.data)}catch(t){console.error("Function successData occur error: "+t)}t.success(n),(!0===t.cache||"function"==typeof t.cache&&t.cache(n))&&wx.setStorage({key:t.url,data:n})}else r(t,e);else r(t,e)},fail:function(e){wx.showModal({title:"请求失败",content:e.errMsg,showCancel:!1}),r(t,e)},complete:function(){t.count--,"function"==typeof t.complete&&0==t.count&&t.complete()}})}function a(t){t.count++,t.formData||(t.formData={}),t.formData[m]=C,t.dataType=t.dataType||"json",wx.uploadFile({url:x+t.url,filePath:t.filePath||"",name:t.name||"",formData:t.formData,success:function(e){if(200==e.statusCode&&"uploadFile:ok"==e.errMsg){if("json"==t.dataType)try{e.data=JSON.parse(e.data)}catch(o){return r(t,e),!1}y(e.data)&&t.reLoginLimit<S?(C="",wx.removeStorage({key:m,complete:function(){c(function(){d(t)},t)}})):w(e.data)&&"function"==typeof t.success?t.success(L(e.data)):r(t,e)}else r(t,e)},fail:function(e){wx.showModal({title:"请求失败",content:e.errMsg,showCancel:!1}),r(t,e)},complete:function(){t.count--,"function"==typeof t.complete&&0==t.count&&t.complete()}})}function r(t,e){if("function"==typeof t.fail)t.fail(e);else{var o="";if("function"==typeof T)try{o=T(e.data)}catch(t){}else"string"==typeof T&&(o=T);var n="";if("function"==typeof v)try{n=v(e.data)}catch(t){}else"string"==typeof v&&(n=v);wx.showModal({title:o||"操作失败",content:n||"服务器异常，请稍后重试",showCancel:!1})}"function"==typeof k&&k(t,e),console.error(e)}function s(t,e){t.cache?wx.getStorage({key:t.url,success:function(e){"function"==typeof t.cache&&t.cache(e.data)?"function"==typeof t.success&&t.success(e.data):!0===t.cache&&"function"==typeof t.success&&t.success(e.data)},fail:function(){e()}}):e()}function f(t){m=t.sessionName||"session",y=t.loginTrigger||function(){return!1},g=Object.assign({},{method:"GET",codeName:"code"},t.codeToSession),w=t.successTrigger||function(){return!0},x=t.urlPerfix||"",L=t.successData||function(t){return t},T=t.errorTitle||"操作失败",v=t.errorContent||!1,S=t.reLoginLimit||3,k=t.errorCallback||null,M=t.doNotCheckSession||!1;try{C=wx.getStorageSync(m)||""}catch(t){}}function l(t){t=i(t),s(t,function(){n(function(){u(t)},t)})}function d(t){t=i(t),n(function(){a(t)},t)}function p(t){C=t,M=!0}const h=o(0);var m="session",y=function(){return!1},g={},w=function(){return!0},x="",L=function(t){return t},T="操作失败",v=function(t){return t},S=3,k=null,C="",M=!1,b=!1;t.exports={init:f,request:l,uploadFile:d,setSession:p}}]);