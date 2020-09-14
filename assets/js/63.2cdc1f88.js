(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{332:function(n,o,t){"use strict";t.r(o);var s=t(22),e=Object(s.a)({},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"js调用栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js调用栈","aria-hidden":"true"}},[n._v("#")]),n._v(" js调用栈")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("执行上下文:当前JavaScript代码被解析和执行是所在环境的抽象概念")]),n._v(" "),t("ul",[t("li",[n._v("执行上下文的类型:\n"),t("ul",[t("li",[t("code",[n._v("全局执行上下文")]),n._v(":这是默认的，最基础的执行上下文。"),t("strong",[n._v("不在任何函数中的代码都位于全局执行上下文中。")]),n._v(" "),t("ul",[t("li",[n._v("共有两个过程：1.创建有全局对象，在浏览器中这个全局对象就是window对象。2.将this指针指向这个全局对象。一个程序中只能存在一个执行上下文")])])]),n._v(" "),t("li",[t("code",[n._v("函数执行上下文")]),n._v(":每次调用函数时，都会为该函数创建一个新的执行上下文。\n"),t("ul",[t("li",[n._v("每个函数都拥有自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在多个函数执行上下文，这些函数执行上下文按照特定的顺序执行一系列步骤，后文具体讨论。(栈执行顺序 先进后出  后进先出)")])])])])])])]),n._v(" "),t("li",[t("p",[n._v("执行栈:"),t("strong",[t("code",[n._v("执行栈，也叫调用栈")]),n._v("，具有LIFO（Last in, First out 后进先出）"),t("code",[n._v("栈结构")]),n._v(",")]),n._v(" "),t("strong",[n._v("用于存储在代码执行期间创建的所有执行上下文。")])]),n._v(" "),t("pre",[t("code",[n._v("  let a = 'Hello World!';\n  function first() {  \n  console.log('Inside first function');  ---1\n  second();  \n  console.log('Again inside first function');  ---2\n  }\n  function second() {  \n  console.log('Inside second function');  ---3\n  }\n  first();  \n  console.log('Inside Global Execution Context'); ---4\n  //代码运行结果\n  1 3 2 4\n  //调用顺序\n  第一步:\n  首先:创建一个全局上下文 里面包括了 这时候 全局上下文在 栈底 \n  let a = 'Hello World!'; console.log('Inside Global Execution Context');\n  第二步:\n  在全局上下文中调用了一个函数 这个时候 就需要创建一个函数执行上下文了\n  这个上下文是first,它的上下文里面包括了: (这个时候 first上下文被推入了栈中,到了栈顶)\n  console.log('Inside first function');  console.log('Again inside first function'); second();  \n  第三步:\n  在first上下文中又调用了second函数  所以又开始创建了一个新的函数上下文second\n  包括了(这个时候 second上下文被推入了栈中,到了栈顶)\n  console.log('Inside second function');\n  第4步 然后开始依次执行倒序执行 这个就是栈的特点:**先进后出 后进先出**:\n   第三步执行完毕 移除second 上下文  依次类推\n")])])])]),n._v(" "),t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1332080/201812/1332080-20181225155822028-960093150.jpg"}}),n._v(" "),t("pre",[t("code",[n._v('   例二:\n   function A(){\n        console.log("this is A");\n        function B(){\n            console.log("this is B");\n        }\n        B();\n    }\n    A();\n    //结果\n    this is A\n    this is B\n    首先 A() ;A 函数执行了，A执行环境入栈。\n    A函数执行时，遇到了 B()，B 又执行了，B入栈。\n    B中没有可执行的函数了，B执行完 出栈。\n    继续执行A， A中没有可执行的函数了，A执行完 出栈。\n')])]),n._v(" "),t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000015600585?w=891&h=257"}}),n._v(" "),t("ul",[t("li",[n._v("参考文章:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/lhh520/p/10175420.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.cnblogs.com/lhh520/p/10175420.html"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000015600582",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://segmentfault.com/a/1190000015600582"),t("OutboundLink")],1)])])])])])},[],!1,null,null,null);o.default=e.exports}}]);