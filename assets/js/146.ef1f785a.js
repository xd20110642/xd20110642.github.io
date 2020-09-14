(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{415:function(e,t,n){"use strict";n.r(t);var v=n(22),o=Object(v.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"mpvue小程序框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mpvue小程序框架","aria-hidden":"true"}},[e._v("#")]),e._v(" mpvue小程序框架")]),e._v(" "),n("hr"),e._v(" "),n("h3",{attrs:{id:"全局函数-也就是app函数-这个对应到的时-app-vue里面的函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局函数-也就是app函数-这个对应到的时-app-vue里面的函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 全局函数 也就是app函数 这个对应到的时 App.vue里面的函数")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("created   =====> onLaunch    是一样的可以全局调用一次    全局数据初始化   获取用户信息   created早于 onlaunch 完成")])]),e._v(" "),n("li",[n("p",[e._v("onshow方法")]),e._v(" "),n("pre",[n("code",[e._v(" `\n onshow(options){//接受一个参数 可以通过这个参数来获取场景值\n \tconsole.log(option)\n }\n")])]),e._v(" "),n("p",[e._v("`\n来判断用户是通过什么渠道进入 我们的小程序的")])])]),e._v(" "),n("p",[e._v("##page文件夹")]),e._v(" "),n("ol",[n("li",[e._v("并且每一个都是inde.vue  和main.js文件")]),e._v(" "),n("li",[e._v("每一个文件夹下面必须有一个 main.js 用来当配置文件\n"),n("ol",{attrs:{start:"3"}},[n("li",[n("code",[e._v("import Vue from 'vue' import App from './index' const app = new Vue(App) app.$mount()")])])])])]),e._v(" "),n("p",[e._v("##注意事项")]),e._v(" "),n("ol",[n("li",[e._v("只能使用 "),n("code",[e._v('<button open-type="getUserInfo">授权用户信息</button>')]),e._v("  来获取用户信息")])]),e._v(" "),n("p",[e._v("##使用ui框架")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("首先在github上面将框架clone下来")])]),e._v(" "),n("li",[n("p",[e._v("然后将其中的dist目录，放置到mpvue产生的dist目录下。（可将ui框架的dist目录重命名）")])]),e._v(" "),n("li",[n("p",[e._v("然后在页面的package.json文件种加入")]),e._v(" "),n("pre",[n("code",[e._v(' "usingComponents": { \n "i-button": "../../dist/button/index" //这里就是我们引入的组件\n }\n')])])]),e._v(" "),n("li",[n("p",[e._v("使用就是即可")]),e._v(" "),n("pre",[n("code",[e._v('<i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>\n')])])])]),e._v(" "),n("p",[e._v("##爬坑日记")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("使用微信轮播图组件时，必须将相关的相关信息写在里面组件的上面，不能使用定义在data()里面的变量")])]),e._v(" "),n("li",[n("p",[e._v("不能使用微信官方提供的小程序组件的名字 来令名组件  否则会出错")])]),e._v(" "),n("li",[n("p",[e._v("每添加一个页面，也就是pages  必须重新运行 也就是npm run dev 如果不重新运行 就会报错")])]),e._v(" "),n("li",[n("p",[e._v("在设置tar栏的时候 图片不会被自动引入 需要自己 手动引入，  "),n("strong",[e._v("并且在配置文件中，不能有空格")])])]),e._v(" "),n("li",[n("p",[e._v("跳转页面是 使用相对路径 也就是 a页面相对于b页面的路径  wx.navigateTo() 不能跳转 tab下面配置的页面")])]),e._v(" "),n("li",[n("p",[e._v("设置不同页面的文字，需要在pages文件下面 添加main.json {xxx:xxx} 就可以了")])]),e._v(" "),n("li",[n("p",[e._v("用户授权获取用户头像")]),e._v(" "),n("pre",[n("code",[e._v(' <button open-type="getUserInfo" @getuserinfo="自定义函数">用户授权</button>\n methods:{\n \t登陆函数\n }\n')])])]),e._v(" "),n("li",[n("p",[e._v("mpvue里面使用微信官方提供的api 如果有多层嵌套必须使用 只能使用箭头函数 只用 this 否者会报错")]),e._v(" "),n("pre",[n("code",[e._v("\t\tsuccess: res =>{ //这样this才能只能指向全局vue  如果是（res） 那么this为null\n                console.log(res);\n                // console.log(this.addBook)\n                if(res.result){\n                  console.log(res.result);\n                 console.log(this)  //\n                }\n            },\n")])])]),e._v(" "),n("li",[n("p",[e._v("使用fly.js请求数据 一定要带上 httP://xxxx 否者会找不到路径")])]),e._v(" "),n("li",[n("p",[e._v("获取跳转页面的参数 在生命周期函数里面 使用 this.$root.$mp.query.我们需要获取的字段  目前：测试只能在mouth生命周期里面获取")])]),e._v(" "),n("li",[n("p",[e._v("使用跳转页面，  跳转页面必须在app.json文件里面注册 才能使用否则会报错  "),n("strong",[e._v("切记 只要是在pages文件夹里面新增的页面，都需要在app.json文件里面去注册 否则会报错")])])]),e._v(" "),n("li",[n("p",[e._v("使用路由插件 跳转")])]),e._v(" "),n("li",[n("pre",[n("code",[e._v("this.$router.psuh('pages/xx/main')\t\t\n")])])]),e._v(" "),n("li",[n("p",[e._v("不要在vue的created生命周期里获取数据,只要小程序开启,整个项目的所有页面里created生命周期里的方法都会执行一遍,所以不要使用这个生命周期,一般可以写在mounted生命周期里,或者原生的onLoad生命周期里")])]),e._v(" "),n("li",[n("p",[e._v("关于使用switch组件的信息-------\x3e 当check触发事件的时候判断是否选中 那么需要传入一个参数")]),e._v(" "),n("pre",[n("code",[e._v("\t getPhone(e){\n \tif(e.target.value){  e.target.value是 true或者是false\n\t//通过e.target.value来判断是否选中而不是通过原生的 e.detail.value来判断是否是选中\n    \n \t\t}else{\n\t\t}\n}\n")])])]),e._v(" "),n("li",[n("p",[e._v("注意：使用百度地图的api时，ak是字符串")])]),e._v(" "),n("li",[n("p",[e._v("通过组件传递字符串 \" 'xxx' \" 这样xxx就是字符串")])]),e._v(" "),n("li",[n("p",[e._v("可以在全局样式里面 给\t"),n("strong",[e._v("page设置样式")]),e._v("   相当于body")])]),e._v(" "),n("li",[n("p",[e._v("通过计算属性来判断 是否给定样式")]),e._v(" "),n("pre",[n("code",[e._v("可以通过传入的给组件的内容来判断\n  props:['score','num'],\ncomputed:{\nright(){\n    if(this.num){\n        return true;\n    }else{\n        return false;\n    }\n}\n \n:class=\"{a:right}\" //动态判断给定样式\n")])])]),e._v(" "),n("li",[n("p",[e._v("使用vuex的注意事项")]),e._v(" "),n("pre",[n("code",[e._v("需要将其挂载到main.js中：\n并且添加到 原型链上\nVue.prototype.$store=store;  这样就不会报错了\n参考链接：https://blog.csdn.net/qq_31393401/article/details/80728523\n")])])]),e._v(" "),n("li",[n("p",[e._v("使用iviewui 微信小程序ui框架的时候注意事项：")]),e._v(" "),n("pre",[n("code",[e._v("\t需要将其放置到static静态资源 目录下面，才能正确的引入\n\t然后在配置一个main.json 文件里面使用引入组件即可\n")])])])])])},[],!1,null,null,null);t.default=o.exports}}]);