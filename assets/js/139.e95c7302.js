(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{410:function(e,t,r){"use strict";r.r(t);var s=r(22),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"组件通信被触发多次"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件通信被触发多次","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件通信被触发多次")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("在一个公司项目中使用事件总线作为组件通信,后面意外发现   "),r("code",[e._v("在使用A组件使用this.bus.$emit触发事件的时候")]),e._v(" "),r("code",[e._v("在B组件中使用this.bus.$on()监听事件 会被触发2次")]),e._v(" 。然后百思不得其解，查阅相关文章和资料。")]),e._v(" "),r("p",[e._v("产生的原因是:\n"),r("code",[e._v("this.$root.Bus.$on")]),e._v("实际是向Bus容器中添加一个事件监听器，当页面跳转时，原来的vue组件被注销，但是原来vue组件向Bus容器中添加的事件监听器并不会被移除。因此，当下次进入这个vue组件对应的页面时，执行到"),r("code",[e._v("this.$root.Bus.$on")]),e._v("时，又会向Bus容器中添加一个重复的事件监听器，以此类推，导致Bus容器中有很多个一模一样的事件监听器，从而导致事件只被触发一次，但是回调函数被执行多次的现象。")]),e._v(" "),r("ul",[r("li",[e._v("解决方法\n"),r("ul",[r("li",[r("p",[e._v("在vue组件的beforeDetory钩子函数中将本vue组件往Bus容器中添加的时间监听器全部手动移除。")]),e._v(" "),r("pre",[r("code",[e._v("    beforeDetory(){\n        this.bus.$off('监听的事件名')\n    }\n")])])]),e._v(" "),r("li",[r("p",[e._v("在每次调用方法前先解绑事件( bus.$off ) 然后在重新绑定( bus.$on )")]),e._v(" "),r("pre",[r("code",[e._v("    this.bus.$off('xx')\n    this.bus.$on('xx',() => {\n\n    })\n")])])])])]),e._v(" "),r("li",[e._v("参考文章")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/4bf32e518750",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jianshu.com/p/4bf32e518750"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Pasoul/blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Pasoul/blog/issues/12"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_37893784/article/details/88943519",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/qq_37893784/article/details/88943519"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_26963495/article/details/86489063",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/qq_26963495/article/details/86489063"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/issues/3399",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/issues/3399"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/fde85549e3b0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jianshu.com/p/fde85549e3b0"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);