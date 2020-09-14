(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{319:function(t,n,a){"use strict";a.r(n);var e=a(22),r=Object(e.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),a("h3",{attrs:{id:"声明变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 声明变量")]),t._v(" "),a("pre",[a("code",[t._v("\t块级作用域需要用{} 包裹起来 如果不使用{}默认为顶层作用域\n\t1.let 变量不能重复声明\n\tfuntion XXX(param){\n\t\tlet param=param //报错\n\t\tparam=param //正确\n\t}\n\t\n\t2.const声明只读常量,（对于基本类型，一旦声明就不能改变，但是对于引用类型可以改变）\n\tconst a=1; \n\ta=2 //报错\n\tconst foo={}\n\tfoo.a=1 //正确\n\t\n\t3.顶层对象和全局对象 window顶层 全局var \n\tES5中 顶层对象和全局对象是相同的 \n\tvar a=1 === window.a\n\tES6中\n\tlet a=1 ;//全局对象\n\twindow.a //undefinde \n\t4. 暂时性死区\n\n\t\tvar a=1;\n\t\tfunction test(){\n\t\t\tconsole.log(a)\n\t\t}\n\t\ttest()//1\n\t\tvar a=1;\n\t\tfunction test(){\n\t\t\tconsole.log(a);\n\t\t\tlet a=2\n\t\t}\n\t\ttest()//报错 \n\t\t因为只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。\n\t\t上面代码中，存在全局变量a，但是块级作用域内let又声明了一个局部变量a，导致后者绑定这个块级作用域，所以在let声明变量前，对a赋值会报错。\n\t\tES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。\n")])]),t._v(" "),a("h3",{attrs:{id:"变量的解构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的解构","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量的解构")]),t._v(" "),a("pre",[a("code",[t._v("1.数组和对象的解构\n")])]),t._v(" "),a("h3",{attrs:{id:"字符串的拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的拓展","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串的拓展")]),t._v(" "),a("pre",[a("code",[t._v("1.查找字符是在一个字符串中\n\t1.1 indexof()判断是否存在不存在返回-1，否则返回当前下标\n\t1.2 includes()返回布尔值 表示是否查找到了\n\t1.3 startsWith() 返回布尔值 是否在头部找到\n\t1.4 endsWith(） 返回布尔值 是否咋子尾部找到\n\t\n\tlet s = 'Hello world!';\n\ts.startsWith('Hello') // true\n\ts.endsWith('!') // true\n\ts.includes('o') // true\n2.模板字符串\n\t${}来定义变量\n\t`${}`\t\n")])]),t._v(" "),a("h3",{attrs:{id:"函数拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数拓展","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数拓展")]),t._v(" "),a("pre",[a("code",[t._v("1.函数参数变量是默认声明的不能用let 或const 再次声明\nfunction Person（x）{\n\tlet x=1'//error\n\tconst x=1 //error\n\tx=x//true\n}\t\t\n2.解构和默认参数链接  使用对象解构\nfunction foo({x,y=5}) {\n\tconsole.log(x,y)\n}\nfoo({}) //undefined 5\nfoo({x:1})//1 5\nfoo({x:1,y:2}) //1 3\n3.箭头函数\n1.this 指向的就近原则 ，实际原因是箭头函数根本没有自己的vthis\n导致内部的this就是外层代码块的this\n")])]),t._v(" "),a("h3",{attrs:{id:"数组拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组拓展","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组拓展")]),t._v(" "),a("pre",[a("code",[t._v("1.扩展运算符\n...[1,2,3]\t\n2.类数组 转换为 真数组\nArray.from()\n3.转化为数组\nArray.of(3,10,3)\n4. 查找符合条件对的数组成员\narr.find((n) => n<0)\n[1, 4, -5, 10].find((n) => n < 0)  // -5\n5. 拉平多维数组\narr.flat(变量) //变量是默认拉平几次 Infinity 强制转化换为1维数组\n备注:数组的浅拷贝\narr2=arr1.concat()\n")])]),t._v(" "),a("h3",{attrs:{id:"对象拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象拓展","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象拓展")]),t._v(" "),a("pre",[a("code",[t._v("1.属性简洁\nconst foo='bar'       \nconst baz={foo}\t <==>  const bar ={foo:foo}  其value要为变量才行\n\n2.方法简写\nconst o={\t\t\t\t\t\tconst o={\n\tmethod(){\t\t\t\t\tmethod:function(){\n\t              <===>\n\t}\t\t\t\t\t\t\t\t}\n}\t\n3. 对象的key只能为string或者symbol\t\t\t\t\t\t\t\t}\n")])]),t._v(" "),a("h3",{attrs:{id:"对象的新增方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的新增方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象的新增方法")]),t._v(" "),a("pre",[a("code",[t._v("1. Object.is() 判断对象是否相等\n2. Object.assign(目标,需要被合并的对象) 对象的合并  浅拷贝\nconst target={a:1,b:1};\nconst source1={b:2,c:2}\nObject.assign(target,source1);\n")])]),t._v(" "),a("h3",{attrs:{id:"symbol数据类型-（独一无二）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol数据类型-（独一无二）","aria-hidden":"true"}},[t._v("#")]),t._v(" symbol数据类型  （独一无二）")]),t._v(" "),a("p",[t._v("他是第6种数据类型\n基本的数据类型:Number、undefined(定义了没有赋值)、null(没有定义)、string、boolean、\n引用类型:Object\nvar a=Symbol(xxx);")]),t._v(" "),a("h3",{attrs:{id:"set数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" set数据结构")]),t._v(" "),a("p",[t._v("成员唯一没重复的值  类似于数组(类数组)")]),t._v(" "),a("pre",[a("code",[t._v("1.var a= new Set(); // new Set([1,2,3])\n2.方法\n\t1. add() 添加某一个值  返回set本身\n\t2. delete(value)：删除某一个值  返回布尔值 \n\t3. has（value）返回一个布尔值，表示该值是否为Set的成员。\t\n\t4. clear()：清除所有成员，没有返回值。\n\n3.提供了一种 数组去重的方法\nfunction(arr){\nreturn Array.from(new Set(arr))\n}\n")])]),t._v(" "),a("h3",{attrs:{id:"拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拦截器","aria-hidden":"true"}},[t._v("#")]),t._v(" 拦截器")]),t._v(" "),a("pre",[a("code",[t._v('1.var proxy = new Proxy(需要监听的对象, 方法);\n2. get方法 用来拦截对目标对象的访问请求\n\tvar person = {\n\t \tname: "张三"\n\t};\t\n\tvar proxy = new Proxy(person, {\n\t  get: function(target, property) {\n\t    if (property in target) {//判断对象是否存在属性\n\t      return target[property];\n\t    } else {\n\t      throw new ReferenceError("Property \\"" + property + "\\" does not exist.");\n\t    }\n\t  }\n\t});\n')])]),t._v(" "),a("h3",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[t._v("#")]),t._v(" class")]),t._v(" "),a("pre",[a("code",[t._v("1.是基于原型链继承的\n2.类只能继承一个类\n3.construction(){} 其实就是我们es5所定义的构造函数 是定义不是共享的属性和方法 原型上定义的是共享方法\n\n\tconstruction(name){          ===      function A(name){\n\t\tthis.name=name\t\t\t\t\t\tthis.name=name\n\t\t}\t\t\t\t\t\t\t\t\t}   \t\t\t\t\t\t\t\n\n\n\n4.继承中使用super()来对父类传值\n\t\t\n\t\tclass Person{\n\t\tconstructor(x,y){\n\t\t\tthis.a=x;\n\t\t\tthis.b=y\n\t\t}\n\t\tsayHi(){\n\t\t\tconsole.log(this.a)\n\t\t}\n\t}\n\n\tclass Son extends Person{\n\t\t//  在子类普通方法中通过super调用父类的方法时，**方法内部的this指向当前的子类实例**。\n\t\t//  super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。\n\t\tconstructor(z,h,n,p){\n\t\t\tsuper(z,h);\n\t\t\tthis.n=n;\n\t\t\tthis.p=p\n\t\t}\n\t\tsayHi2(){ \n\t\t\t//在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。\n\t\t\t// 相当于super 和 this 都是指向的当前的方法\n\t\t\tsuper.sayHi()\n\t\t\tthis.sayHi();\n\t\t\t\n\t\t}\n\t}\n")])]),t._v(" "),a("ul",[a("li",[t._v("在class和模块中注意事项\n类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。\n"),a("ul",[a("li",[a("p",[t._v("所以这个就是在react中需要绑定this的原因:")]),t._v(" "),a("pre",[a("code",[t._v("function display(){\n\tconsole.log(this)   ;//全局对象 window\n}\ndisplay()\n")])]),t._v(" "),a("hr"),t._v(" "),a("pre",[a("code",[t._v("隐式绑定\nvar obj = {\nname: 'Saurabh',\ndisplay: function(){\nconsole.log(this.name); // 'this' 指向 obj\n}\n};\n\nobj.display(); // Saurabh \n\nvar name = \"uh oh! global\";\nvar outerDisplay = obj.display; // outerDisplay指针指向的是obj.display 这块地址  赋值\nouterDisplay=function(){\n\tconsole.log(this.name)\n}\nouterDisplay(); // uh oh! global   ===> 这样调用等于是 window.outerDisplay()    因为window可以省略  所以this指向的是全局window \n")])]),t._v(" "),a("p",[a("strong",[t._v("我们没有指定一个具体的上下文对象。这是一个"),a("code",[t._v("没有所有者对象的纯函数调用")]),t._v("。在这种情况下，display() 内部的 this 值回退到默认绑定。现在这个 this 指向全局对象，在严格模式下，它指向 undefined。")])])])])])]),t._v(" "),a("hr"),t._v(" "),a("pre",[a("code",[t._v('\t明确绑定:\n\t我们可以使用 明确绑定方法，将 this 的值通过 bind() 方法绑定到函数上。\n\tvar name = "uh oh! global";\n\tobj.display = obj.display.bind(obj); \n\tvar outerDisplay = obj.display;\n\touterDisplay();\n\t// Saurabh\n')])]),t._v(" "),a("hr"),t._v(" "),a("pre",[a("code",[t._v('\treact 丢失原因：\n\t<button type="button" onClick={this.handleClick}>Click Me</button>\n\t等于\n\tvar xx=this.handleClick;\n\t调用的时候\n\txx();//因为没有指定上下文 所以 会回滚 并且是严格模式 this指向undefined 所以报错\n\t这个时候 就需要我们手动指定 this的指向 \n\t使用 bind 或者箭头函数\n')])]),t._v(" "),a("p",[t._v("参考文章:\n1."),a("a",{attrs:{href:"https://juejin.im/post/5afa6e2f6fb9a07aa2137f51"}},[t._v("https://juejin.im/post/5afa6e2f6fb9a07aa2137f51")])])])},[],!1,null,null,null);n.default=r.exports}}]);