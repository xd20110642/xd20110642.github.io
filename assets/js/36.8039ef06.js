(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{305:function(e,n,t){"use strict";t.r(n);var o=t(22),r=Object(o.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"vue强制刷新子组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue强制刷新子组件","aria-hidden":"true"}},[e._v("#")]),e._v(" vue强制刷新子组件")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("v-if")]),e._v(" 在切换时，元素及它的绑定数据和组件都会被销毁并重建")]),e._v(" "),t("pre",[t("code",[e._v("  <template>\n      <my-component v-if=\"renderComponent\"></my-component>\n  </template>\n  <script>\n      import MyComponent from './MyComponent.vue';\n      export default {\n          components: { MyComponent },\n          data() {\n              return {\n                  renderComponent: true\n              };\n          },\n          methods: {\n              forceRerender(){\n                  this.renderComponent = false;\n                  this.$nextTick().then(()=>{\n                      this.renderComponent = true;\n                  });\n              }\n          },\n          mounted(){\n              this.forceRerender();\n          }\n      };\n  <\/script>\n")])])]),e._v(" "),t("li",[t("p",[e._v("使用"),t("code",[e._v("$forceUpdate")]),e._v("强制重新渲染")]),e._v(" "),t("p",[e._v("如果要在组件内部中进行强制刷新，则可以调用this.$forceUpdate()强制重新渲染组件，从而达到更新目的。")])]),e._v(" "),t("li",[t("p",[e._v("使用key 利用diff算法来完成")])])])])},[],!1,null,null,null);n.default=r.exports}}]);