(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{302:function(t,e,n){"use strict";n.r(e);var r=n(22),s=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"vue动态引入js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue动态引入js","aria-hidden":"true"}},[t._v("#")]),t._v(" vue动态引入js")]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[t._v("使用原生创建script标签")]),t._v(" "),n("pre",[n("code",[t._v("  在main.js中 \n   function loadScript(url='') {\n     var script=document.createElement('script');\n     script.type='text/javascript';\n     script.onload=function(){\n          //实例化vue\n     }\n     script.src=url\n    document.getElementsByTagName('head')[0].appendChild(script);\n   }\n   这样就保证了 一定是文件加载完毕以后 才会实例化vue 就可以避免 方法找不到 而导致的报错\n")])])])])])},[],!1,null,null,null);e.default=s.exports}}]);