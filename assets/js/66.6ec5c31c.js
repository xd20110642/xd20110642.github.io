(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{335:function(e,n,l){"use strict";l.r(n);var t=l(22),r=Object(t.a)({},function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h3",{attrs:{id:"rest参数和拓展运算符"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#rest参数和拓展运算符","aria-hidden":"true"}},[e._v("#")]),e._v(" rest参数和拓展运算符")]),e._v(" "),l("ul",[l("li",[e._v("rest参数（形式为“...变量名”）解决传入的参数数量不一定，本身就是数组，数组的相关的方法都可以用")])]),e._v(" "),l("p",[e._v("rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。 rest参数只包括那些没有给出名称的参数")]),e._v(" "),l("pre",[l("code",[e._v("// \nfunction add(...values){//代表用values来接收多余的参数 写法就是 ...变量名 \n    ...values 代表了所有传入add函数的参数。\n    values就相当于我们声明的变量  === [1,2,3]\n\n}\nadd(1,2,3)\n")])]),e._v(" "),l("p",[l("strong",[e._v("rest参数后面不能再有其他参数（即只能是最后一个参数,否则会报错")])]),e._v(" "),l("ul",[l("li",[l("p",[e._v("拓展运算符:三个点（...）它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用")]),e._v(" "),l("pre",[l("code",[e._v("  var people=['张三','李四','王五']; \n\n  //sayHello函数本来接收三个单独的参数people1，people2和people3\n\n  function sayHello(people1,people2,people3){\n\n      document.write(`Hello ${people1},${people2},${people3}`);\n\n  } \n\n  //但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数\n\n  sayHello(...people);   //输出：Hello 张三,李四,王五  \n\n  //而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法\n\n  sayHello.apply(null,people);   //输出：Hello 张三,李四,王五\n")])])])]),e._v(" "),l("hr"),e._v(" "),l("ul",[l("li",[e._v("参考文章\n"),l("ul",[l("li",[l("a",{attrs:{href:"https://www.cnblogs.com/wangdan0915/p/7799219.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章1"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://blog.csdn.net/m0_37355951/article/details/72851050",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章2"),l("OutboundLink")],1)])])])])])},[],!1,null,null,null);n.default=r.exports}}]);