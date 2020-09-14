(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{396:function(t,e,a){"use strict";a.r(e);var s=a(22),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" VUeX")]),t._v(" "),a("h2",{attrs:{id:"只有共享数据才能发到vuex中，私有数据data-父子组件props-vuex共有数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只有共享数据才能发到vuex中，私有数据data-父子组件props-vuex共有数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 只有共享数据才能发到vuex中，私有数据data 父子组件props vuex共有数据")]),t._v(" "),a("h3",{attrs:{id:"安装vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装vuex")]),t._v(" "),a("ol",[a("li",[t._v("通过script 形式安装 是不需要全局注册")]),t._v(" "),a("li",[t._v("通过webpack 安装的 需要使用 vue.use(vuex) 来全局注册")])]),t._v(" "),a("h3",{attrs:{id:"实例化vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例化vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例化vuex")]),t._v(" "),a("pre",[a("code",[t._v("`const store=new Vuex.Store({\n\tstate:{      // === 相当于data\n\t\t}，\n\tmutations:{  // ====相当于 methods\n\t},\n\tgetters:{ //=====相当于 计算属性\n\t}\n\t})`\n\nmutations里面的方法是用来操作state里面的数据的\n")])]),t._v(" "),a("h3",{attrs:{id:"引入我们组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入我们组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入我们组件")]),t._v(" "),a("p",[t._v("把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件")]),t._v(" "),a("pre",[a("code",[t._v("\t`new Vue({\n\tel: '#app',\n// router,\ncomponents: { App },\n\ttemplate: '<App/>'，\n\tstore：store //注入全局组件  只要挂在到vm上，久能使用全局属性\n\t})`\n")])]),t._v(" "),a("h3",{attrs:{id:"使用数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用数据")]),t._v(" "),a("ol",[a("li",[t._v("如果想在组件中 访问store 中的数据  只能通过this.$store.state.xxxxxx         // this.$我们定义的vuex的名字.state.变量")]),t._v(" "),a("li",[t._v("如果想改变store中的数据 那么必须使用mutations中的方法来改变")]),t._v(" "),a("li",[t._v("mutations中的函数 里面接受多个参数，但是 第一个参数必须是 state  后面的参数是可以自定义的，"),a("strong",[t._v("最多2个参数")]),t._v(" "),a("strong",[t._v("参数可以为数组和对象         参数为对象=>参数1.a   参数为数组 => 参数1[0]")]),t._v(" "),a("code",[t._v("mutations：{ a(store,参数1){ //修改数据 store.a++//这个是修改store中a的属性 store.a+ +参数1.a } }")])]),t._v(" "),a("li",[t._v("子组件要调用mutations中的方法，只能使用this.$我们定义的vuex的名字.commit('方法名')")]),t._v(" "),a("li",[t._v("getters计算属性中：     不会修改原数据\n"),a("code",[t._v("a(state){ return state.a }")]),t._v("\n使用this.$store.getters.我们定义函数名")])]),t._v(" "),a("h3",{attrs:{id:"总结："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结：","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),a("ol",[a("li",[t._v("state中的数据，不能直接修改，如果想要修改，必须通过mutions")]),t._v(" "),a("li",[t._v("如果组件想要直接从state上获取数据，需要 this.$store.state.xx")]),t._v(" "),a("li",[t._v("如果组件 想要修改数据，必须使用mutations提供的方法，通过this.$store.commit('方法名','唯一的一个参数[')")]),t._v(" "),a("li",[t._v("如果是store中state上的数据，再对外提供的时候，需要做一层包装，那么推荐使用getters,如果需要使用getters,则是this.$store.getters.xxx")])])])},[],!1,null,null,null);e.default=r.exports}}]);