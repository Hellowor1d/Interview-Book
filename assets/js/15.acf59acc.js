(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{66:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"q-浏览器加载白屏是什么原因？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q-浏览器加载白屏是什么原因？","aria-hidden":"true"}},[a._v("#")]),a._v(" Q: 浏览器加载白屏是什么原因？")]),r("h2",{attrs:{id:"a"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a","aria-hidden":"true"}},[a._v("#")]),a._v(" A:")]),r("p",[r("code",[a._v("Author: @heaven")])]),r("h3",{attrs:{id:"请求发出前可能有："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求发出前可能有：","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求发出前可能有：")]),r("ul",[r("li",[a._v("资源不合法，如跨域，https 用 http 等等，csp 等等")]),r("li",[a._v("请求队列太多或者本资源优先级不够高，资源被 delay")]),r("li",[a._v("dns 出问题，劫持，自己开了代理，dns 服务器挂了等等")])]),r("h3",{attrs:{id:"请求发送过程中可能有："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求发送过程中可能有：","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求发送过程中可能有：")]),r("ul",[r("li",[a._v("没有到达服务器，如 cdn 挂了")]),r("li",[a._v("到达服务器但是没有到达处理程序，如在队列里堆积，403，401 等等")]),r("li",[a._v("到达了处理程序，但 500 了（假设 500 也算白屏的话，因为可能有只是 catch 了错误，啥也没干）")]),r("li",[a._v("成功运行，但是迟迟没有返回，如代码本身耗时久，死循环，rpc 慢等等")])]),r("h3",{attrs:{id:"请求返回之后可能有："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求返回之后可能有：","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求返回之后可能有：")]),r("ul",[r("li",[a._v("解析阶段跪了，如要 json 返回了一段 text，json/js 不合规范等等")]),r("li",[a._v("执行阶段跪了，如 render 挂了（假设没有针对这一情况做处理，那么就白屏了），死循环，也有可能是纯粹代码写错了，比如 data 写成了 date，css 写错比如设置了 display：none 等等")])]),r("h3",{attrs:{id:"其它："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它：","aria-hidden":"true"}},[a._v("#")]),a._v(" 其它：")]),r("ul",[r("li",[a._v("突然断网了")]),r("li",[a._v("客户端的锅")])]),r("h2",{attrs:{id:"roast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roast","aria-hidden":"true"}},[a._v("#")]),a._v(" Roast:")]),r("p",[a._v("这个题分阶段阐述更为清晰，笼统的讲述容易有所遗漏。\n思考时，需要考虑到用户环境、前端部署、后端服务三个方面的内容。")])])}],!1,null,null,null);t.default=s.exports}}]);