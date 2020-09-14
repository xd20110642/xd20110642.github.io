(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{357:function(e,r,v){"use strict";v.r(r);var n=v(22),_=Object(n.a)({},function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"重学数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重学数据类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 重学数据类型")]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("原始类型\n"),v("ul",[v("li",[e._v("Null：只包含一个值：null")]),e._v(" "),v("li",[e._v("Undefined：只包含一个值：undefined")]),e._v(" "),v("li",[e._v("Boolean：包含两个值：true和false")]),e._v(" "),v("li",[e._v("Number：整数或浮点数，还有一些特殊值（-Infinity、+Infinity、NaN）")]),e._v(" "),v("li",[e._v("String：一串表示文本值的字符序列")]),e._v(" "),v("li",[e._v("Symbol：一种实例是唯一且不可改变的数据类型")])])]),e._v(" "),v("li",[e._v("引用类型\n"),v("ul",[v("li",[e._v("Object，Array、Function")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[v("p",[e._v("原始类型的不可变性")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("在JavaScript中，每一个变量在内存中都需要一个空间来存储。")])]),e._v(" "),v("li",[v("p",[e._v("内存空间又被分为两种，栈内存与堆内存。")])]),e._v(" "),v("li",[v("p",[e._v("栈内存:")]),e._v(" "),v("ul",[v("li",[e._v("存储的值大小固定")]),e._v(" "),v("li",[e._v("空间较小")]),e._v(" "),v("li",[e._v("可以直接操作其保存的变量，运行效率高")]),e._v(" "),v("li",[e._v("由系统自动分配存储空间")])])]),e._v(" "),v("li",[v("p",[e._v("JavaScript中的原始类型的值被直接存储在栈中，在变量定义时，栈就为其分配好了内存空间")])]),e._v(" "),v("li",[v("p",[e._v("由于栈中的内存空间的大小是固定的，那么注定了存储在栈中的变量就是不可变的("),v("strong",[e._v("原始类型的数值是不能改变的")]),e._v(")")]),e._v(" "),v("pre",[v("code",[e._v(" let str='name'\n str+=6  ===> 'name6'\n 我们执行了str += '6'的操作，实际上是在栈中又开辟了一块内存空间用于存储'ConardLi6'，然后将变量str指向这块空间，所以这并不违背不可变性的特点\n")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/28/16afa4dd38de23b8?imageslim",alt:""}})])])])]),e._v(" "),v("li",[v("p",[e._v("引用类型可变性")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("堆内存：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("存储的值大小不定，可动态调整")])]),e._v(" "),v("li",[v("p",[e._v("空间较大，运行效率低")])]),e._v(" "),v("li",[v("p",[e._v("无法直接操作其内部存储，使用引用地址读取")])]),e._v(" "),v("li",[v("p",[e._v("通过代码进行分配空间\n"),v("strong",[e._v("相对于上面具有不可变性的原始类型，我习惯把对象称为引用类型，引用类型的值实际存储在堆内存中，它在栈中只存储了一个固定长度的地址，这个地址指向堆内存中的值")])]),e._v(" "),v("p",[e._v('var obj1 = {name:"ConardLi"}\nvar obj2 = {age:18}\nvar obj3 = function(){...}\nvar obj4 = [1,2,3,4,5,6,7,8,9]')])])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/28/16afa4df7faa4630?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])])])]),e._v(" "),v("li",[v("p",[e._v("复制\n*原始类型")]),e._v(" "),v("pre",[v("code",[e._v("  var name = 'ConardLi';\n  var name2 = name;\n  name2 = 'code秘密花园';\n  console.log(name); // ConardLi;\n")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/28/16afa4e25a85befd?imageslim",alt:""}})]),e._v(" "),v("ul",[v("li",[v("p",[e._v("引用类型")]),e._v(" "),v("pre",[v("code",[e._v("  var obj = {name:'ConardLi'};\n  var obj2 = obj;\n  obj2.name = 'code秘密花园';\n  console.log(obj.name); // code秘密花园\n")])])])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/28/16afa4e49b1e49fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),v("br"),e._v("\n当我们复制引用类型的变量时，实际上复制的是栈中存储的地址，所以复制出来的obj2实际上和obj指向的堆中同一个对象。因此，我们改变其中任何一个变量的值，另一个变量都会受到影响，这就是为什么会有深拷贝和浅拷贝的原因。")])]),e._v(" "),v("li",[v("p",[e._v("值传递和引用传递")]),e._v(" "),v("ul",[v("li",[e._v("JS的基本类型，是按值传递的。")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("当我们使用=将这些变量赋值到另外的变量，实际上是将对应的值拷贝了一份，然后赋值给新的变量。我们把它称作值传递")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("函数的形参是被调用时所传实参的副本。修改形参的值并不会影响实参")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("js种，参数传递只有一种规则:按值传递，基于值的复制。原始类型复制的是值本身，所以这两份数据互不影响；引用类型复制的是引用值，所以形参和实参指向同一个对象，通过一个饮用修改了对象，那么通过另外一个引用访问的对象就是修改后的对象")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("值类型传递就是两个变量，毫无关系。  引用类型就是两个变量，但是内存地址是一个。")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("数参数传递的并不是变量的引用，而是变量拷贝的副本，当变量是原始类型时，这个副本就是值本身，当变量是引用类型时，这个副本是指向堆内存的地址。")])])])]),e._v(" "),v("hr"),e._v(" "),v("p",[v("strong",[e._v("ECMAScript中所有函数的参数都是按值传递的。")])]),e._v(" "),v("ul",[v("li",[e._v("参考文章\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://juejin.im/post/5cec1bcff265da1b8f1aa08f#heading-34",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章1"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000005794070",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章2"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://blog.fundebug.com/2017/08/09/explain_value_reference_in_js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章3"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章4"),v("OutboundLink")],1)])])])])])},[],!1,null,null,null);r.default=_.exports}}]);