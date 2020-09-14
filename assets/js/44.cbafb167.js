(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{313:function(n,e,t){"use strict";t.r(e);var l=t(22),o=Object(l.a)({},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"节流和防抖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节流和防抖","aria-hidden":"true"}},[n._v("#")]),n._v(" 节流和防抖")]),n._v(" "),t("hr"),n._v(" "),t("ul",[t("li",[t("p",[n._v("防抖 ==> 当持续触发某事件时，一定时间间隔内没有再触发事件时，事件处理函数才会执行一次，如果设定的时间间隔到来之前，又一次触发了事件，就重新开始延时 (类比为电梯关门 没有人进来会等待5s 如果在其中的时间 有人重新进入 那么又会触发等待5s)")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("普通防抖")]),n._v(" "),t("pre",[t("code",[n._v("    //使用闭包的原理\n    function debounce(fn, wait) {\n        //创建了 不会被清除会被依次累加  \n            let timeout = null\n            return function() {\n                if(timeout !== null) clearTimeout(timeout)     \n                timeout = setTimeout(() => {\n                    // 相当于把fn里面的this 就等于了 我们传入的this\n                    fn.call(this)\n                },wait);\n            }\n        }\n    //需要使用的方法   \n    function handle() {   \n         console.log(Math.random())\n    }\n    window.addEventListener('scroll', debounce(handle, 1000))\n")])])]),n._v(" "),t("li",[t("p",[n._v("vue防抖")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("普通用法")]),n._v(" "),t("p",[n._v("在组件里面or公共方法里面")]),n._v(" "),t("pre",[t("code",[n._v("  function debounce(fn,wait=1000){\n      let timer=null;\n      return  function(){\n          if(timer) clearTime(timer);\n          timer=setTimeout(() => {\n              fn.call(this)\n          },wait)\n      }\n  }\n  //使用  \n  top:debounce(callblank)  ==== top:function(){}\n  top(){\n      debounce(callblank)() //这个是调用debounce返回的匿名函数\n  }\n  ===\n  debounce() 返回值是一个匿名函数 就是 return funtion这一块 如果要使用 需要再次声明和使用\n")])])])])])])]),n._v(" "),t("li",[t("p",[n._v("节流:当持续触发事件时，有规律的每隔一个时间间隔执行一次事件处理函数。(就相当于电梯每隔5s就要关闭一次门  不关心 是否有人进入)")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("普通节流")]),n._v(" "),t("pre",[t("code",[n._v("   //delay 延迟定时器多久触发    atleast 设置间隔时间\n   function throttle(fn, delay,atleast) { \n      let timer = null  //定时器\n      let previous = null  // 记录时间\n      return function () {\n          let now = +new Date() //获取到最新的时间\n          if (!previous) previous = now //赋值给记录时间\n          if (atleast && now - previous > atleast) {//如果有间隔时间 并且时间差大于了 间隔时间 那么就调用函数 记录时间为最新时间 清除定时器 否则没有间隔时间 那么就等待定时器调用\n              fn()\n              previous = now\n              clearTimeout(timer)\n          } else {\n              clearTimeout(timer)\n              timer = setTimeout(function () {\n                  fn.call(this)\n                  previous = null\n              }, delay)\n          }\n      }   \n  }       \n  function handle() {           \n          console.log(Math.random())      \n  }\n   window.addEventListener('scroll', throttle(handle, 1000))\n")])])])])])])])},[],!1,null,null,null);e.default=o.exports}}]);