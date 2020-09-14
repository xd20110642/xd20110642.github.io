(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{416:function(t,e,n){"use strict";n.r(e);var r=n(22),a=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"vue设置proxy跨域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue设置proxy跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" vue设置proxy跨域")]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[t._v("设置proxy跨域本质是使用node-express框架跨域(因为只有浏览器才会有跨域,服务端是没有跨域的)")])]),t._v(" "),n("li",[n("p",[t._v("设置config文件夹下的index.js文件")]),t._v(" "),n("pre",[n("code",[t._v("  // 将所有以 /api 开头的请求通过 jsonplaceholder 代理\n  proxyTable: {\n  '/api': {\n  target: 'http://www.abc.com',  //目标接口域名\n  changeOrigin: true,  //是否跨域\n  pathRewrite: {\n      '^/api': ''   //重写接口\n  }\n   },\n      /api/posts/1 用 http://jsonplaceholder.typicode.com/posts/1 代理。\n  因为我们正式的接口没有/api 这个选项  所以在请求的时候 需要将他去除掉  这个就是重写的意义 (如果有的话 那么就可以不用重写 如果有多余了 那么也需要将其抹掉)\n\n    proxyTable: {\n      '/api': {\n      target: 'http://www.abc.com',  //目标接口域名\n      changeOrigin: true,  //是否跨域\n      pathRewrite: {\n          '^/api': '/api'   //重写接口\n      }\n      },   \n      如果有api 就可以不用重写了\n      'http://localhost:8080/api' ===> 'http://www.abc.com/api'\n")])])]),t._v(" "),n("li",[n("p",[t._v("参考文章")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/wancheng7/p/8987694.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考1"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://hq5544.github.io/vue-webpack/proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考2"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/wangqiao170/p/9284524.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考3"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://segmentfault.com/q/1010000012607105",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考4"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/jikangjian/article/details/80798677",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考5"),n("OutboundLink")],1)])])])])},[],!1,null,null,null);e.default=a.exports}}]);