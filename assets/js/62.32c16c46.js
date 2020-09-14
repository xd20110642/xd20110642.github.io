(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{329:function(o,n,v){"use strict";v.r(n);var e=v(22),_=Object(e.a)({},function(){var o=this,n=o.$createElement,v=o._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h3",{attrs:{id:"js全局环境变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js全局环境变量","aria-hidden":"true"}},[o._v("#")]),o._v(" js全局环境变量")]),o._v(" "),v("ul",[v("li",[v("p",[o._v('JavaScript 全局环境分为两个部分："'),v("code",[o._v("声明环境记录")]),o._v('"和"'),v("code",[o._v("对象环境记录")]),o._v('"')])]),o._v(" "),v("li",[v("p",[v("code",[o._v("声明环境记录")]),o._v(":"),v("strong",[o._v("会把在当前作用域中声明的变量以key-value的形式保存起来，一组key-value对也叫一个binding")]),o._v("("),v("code",[o._v("binding也就是一个帮的this的过程")]),o._v(")")])]),o._v(" "),v("li",[v("p",[o._v('"'),v("code",[o._v("对象环境记录")]),o._v('"和"'),v("code",[o._v("声明环境记录")]),o._v('"相似，'),v("strong",[o._v("不过还多做了一件事，就是把这些bindings同步到一个对象中 (即全局对象)，因此这些变量不仅可以通过变量名访问到，还可以通过全局对象的属性访问到")])])]),o._v(" "),v("li",[v("p",[v("code",[o._v("var")]),o._v("和"),v("code",[o._v("function")]),o._v('关键字声明的变量会在"'),v("code",[o._v("对象环境记录")]),o._v('"中创建bindings(也就是绑定在window对象中)')]),o._v(" "),v("pre",[v("code",[o._v("  var a=1 let b=2;\n a//1\n window.a//1\n b//2\n window.b undefined\n")])])]),o._v(" "),v("li",[v("p",[v("code",[o._v("const")]),o._v(", "),v("code",[o._v("let")]),o._v("和"),v("code",[o._v("class")]),o._v('关键字声明的对象会在"'),v("code",[o._v("声明环境记录")]),o._v('"中创建bindings (局部作用域也就是当前环境的顶层对象 不是window对象)')]),o._v(" "),v("pre",[v("code",[o._v("  window.foo=1\n  let foo=2\n  foo//2获取的是声明环境记录中的foo\n  foo=3;//修改foo\n  foo//3 修改的是声明环境中的foo\n  window.foo//1没有修改到\n")])])]),o._v(" "),v("li",[v("p",[v("strong",[o._v('修改/访问变量值时，"声明环境记录"的优先级更高')])])]),o._v(" "),v("li",[v("p",[o._v('为什么 JavaScript 全局环境会分成两个部分呢？一般认为全局对象是个错误， 所以在新规范中的const, let, class等只会在"声明环境记录"中创建 bindings。')])])])])},[],!1,null,null,null);n.default=_.exports}}]);