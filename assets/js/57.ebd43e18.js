(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{325:function(t,e,o){"use strict";o.r(e);var n=o(22),i=Object(n.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h3",{attrs:{id:"history-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#history-api","aria-hidden":"true"}},[t._v("#")]),t._v(" history-api")]),t._v(" "),o("hr"),t._v(" "),o("ul",[o("li",[o("p",[t._v("可以在不刷新页面的前提下动态改变浏览器地址栏中的URL地址，动态修改页面上所显示资源。")])]),t._v(" "),o("li",[o("p",[t._v("window.history 的方法和属性")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("back() forward() go()")])])])]),t._v(" "),o("li",[o("p",[t._v("H5新增api方法:")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("pushState")]),t._v(":添加")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("history.pushState(state, title, url)")]),t._v("; 添加一条历史记录 不刷新页面")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("state")]),t._v(" : "),o("code",[t._v("一个于指定网址相关的状态对象")]),t._v("，"),o("strong",[t._v("popstate事件触发时(由window监听)")]),t._v("，该对象会传入回调函数中。如果不需要这个对象，此处可以填null。")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("title")]),t._v(" : 新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("url")]),t._v(" : 新的网址，必须与前页面处在同一个域。浏览器的地址栏将显示这个网址")]),t._v(" "),o("pre",[o("code",[t._v('  假设当前页面为renfei.org/   \n  执行\n   window.history.pushState(null, null, "/profile/");\n   页面会被修改为\n   profile/ 浏览器不会刷新页面 也不会检查目标页面是否存在\n')])])]),t._v(" "),o("li",[o("p",[t._v("使用:添加hash值，页面只局部加载")]),t._v(" "),o("pre",[o("code",[t._v("  当前URL为:www.baidu.com\n  使用以后 就是\n  window.history.pushState(null,null,'#a');\n  www.baidu.com/#a; 页面不会刷新  但是在浏览器的历史记录里面 就会有 这个记录\n")])])])])]),t._v(" "),o("li",[o("p",[o("code",[t._v("replaceState")]),t._v(":替换")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("history.replaceState(state, title, url)")]),t._v("; 替换当前的历史记录，不刷新页面")]),t._v(" "),o("pre",[o("code",[t._v("  当前的历史记录http://localhost/class/demo.html被替换为http://\n  \n  localhost/class/demo.html?one\n")])])])])]),t._v(" "),o("li",[o("p",[t._v("事件:")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("popstate")]),t._v(": 历史记录发生改变时触发。调用"),o("code",[t._v("history.pushState()")]),t._v("或者"),o("code",[t._v("history.replaceState()")]),t._v("不会触发popstate事件")])]),t._v(" "),o("li",[o("p",[t._v("触发条件:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("当用户点击浏览器的「前进」、「后退」按钮时，就会触发popstate事件。你可以监听这一事件，从而作出反应。")])]),t._v(" "),o("li",[o("p",[t._v("使用\n//监听页面返回 也就是劫持页面的返回\nwindow.addEventListener('popstate',function(){")]),t._v(" "),o("pre",[o("code",[t._v("  },false)\n")])])])])]),t._v(" "),o("li",[o("p",[t._v("实际运用:")]),t._v(" "),o("pre",[o("code",[t._v("  劫持用户点击返回\n  首先进入页面的时候 可以给history里面添加一个hash\n  function pushHistory(){\n      window.history.pushState(null, null, \"#a或者带一个参数?id=1\");\n  }\n  然后监听用户返回 \n  window.addEventListener('popstate',function(){\n          做你想做的事情\n      },false)\n")])])]),t._v(" "),o("li",[o("p",[t._v("参考文章:")])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://www.renfei.org/blog/html5-introduction-3-history-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.renfei.org/blog/html5-introduction-3-history-api.html"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://juejin.im/post/5aebc4a26fb9a07acc11924d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5aebc4a26fb9a07acc11924d"),o("OutboundLink")],1)])])])])},[],!1,null,null,null);e.default=i.exports}}]);