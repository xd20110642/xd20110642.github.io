(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{342:function(e,n,t){"use strict";t.r(n);var r=t(22),v=Object(r.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"拖拽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拖拽","aria-hidden":"true"}},[e._v("#")]),e._v(" 拖拽")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[t("p",[e._v("如何开启拖拽事件")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("若要拖放某个元素，则必须将其的draggable属性设置为true。img和a元素默认为true。")]),e._v(" "),t("pre",[t("code",[e._v('draggable="true"\n')])])])])]),e._v(" "),t("li",[t("p",[e._v("拖放事件和过程")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("拖放的过程中被拖放的对象被称为"),t("code",[e._v("源对象")]),e._v("，过拖放过程中间经过的其他对象被称为"),t("code",[e._v("过程对象")]),e._v("，最终到达的对象称作"),t("code",[e._v("目标对象")]),e._v("。")]),e._v(" "),t("ul",[t("li",[e._v("源对象:\n"),t("ul",[t("li",[t("code",[e._v("dragstart")]),e._v(":源对象开始拖放，开始移动时事件触发")]),e._v(" "),t("li",[t("code",[e._v("drag")]),e._v(":源对象拖放过程中，移动被拖拽对象时触发")]),e._v(" "),t("li",[t("code",[e._v("dragend")]),e._v(":源对象拖放结束，整个拖放操作结束时触发。")])])]),e._v(" "),t("li",[e._v("过程对象:\n"),t("ul",[t("li",[t("code",[e._v("dragenter")]),e._v(":源对象进入过程对象范围内，被拖拽对象进入过程对象时被触发")]),e._v(" "),t("li",[t("code",[e._v("dragover")]),e._v(":源对象在过程对象范围内移动，被拖拽对象在过程对象内移动时触发(拖拽持续移动事件)")]),e._v(" "),t("li",[t("code",[e._v("dragleave")]),e._v(":源对象离开过程对象的范围，被拖拽对象离开目标对象时触发")])])]),e._v(" "),t("li",[e._v("目标对象:\n"),t("ul",[t("li",[t("code",[e._v("drop")]),e._v(":源对象拖放到目标对象中，目标对象完全接受被拖拽对象时触发，可理解为在目标对象内松手时触发。"),t("strong",[e._v("(重要)")])])])])])])])]),e._v(" "),t("li",[t("p",[e._v("dataTransfer对象:")]),e._v(" "),t("ul",[t("li",[e._v("在所有的拖放事件中都提供了一个"),t("code",[e._v("数据传输对象dataTransfer")]),e._v("，主要是用于在源对象和目标对象之间传递数据。")]),e._v(" "),t("li",[e._v("方法:\n"),t("ul",[t("li",[e._v("setData(format, data) 第一个表示要存入的数据类型 第二个参数为要存入的数据\n"),t("ul",[t("li",[e._v("如果给定类型的数据不存在，则将其添加到拖动数据存储的末尾\n"),t("code",[e._v("event.dataTransfer.setData(key,value)")]),e._v(" "),t("code",[e._v("入口key不在官方定义的数据类型中,那么我们传入的key就会被当做新的类型")]),e._v(" "),t("code",[e._v("value只接受string,如果我们要传递对象需要序列化一下")]),e._v(" "),t("code",[e._v("event.dataTransfer.setData('text/plain', 'hello world')")])])])]),e._v(" "),t("li",[e._v("getData(format) 读取传递的数据 就是我们使用的"),t("code",[e._v("key")]),e._v(" "),t("code",[e._v("event.dataTransfer.getData('key');")])]),e._v(" "),t("li",[e._v("clearData() 清空传递数据()")])])])])]),e._v(" "),t("li",[t("p",[e._v("drop 绑定于可拖放区域上。")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("特别注意:我们必须阻止某一 DOM 元素对 dragover 的默认行为，才能使 drop 事件在其上正确执行")])]),e._v(" "),t("pre",[t("code",[e._v('  <div \n   @drop="drop"\n   @dragover="dragover"\n  >\n  </div>\n\n  function (el){\n      el.preventDefault()\n  }\n')])])])])]),e._v(" "),t("li",[t("p",[e._v("整体步骤和流程")]),e._v(" "),t("ul",[t("li",[e._v("数据传递流程如下:\n"),t("ul",[t("li",[e._v("在被拖拽对象的 dropstart 事件中传递消息("),t("strong",[e._v("拖动开始时")]),e._v(")")]),e._v(" "),t("li",[e._v("在拖放区的 drop 事件中获取消息("),t("strong",[e._v("结束拖拽的时候 也就是放开鼠标时")]),e._v(")")]),e._v(" "),t("li",[e._v("在被拖拽对象的 dragend 事件中清除消息 ("),t("strong",[e._v("拖拽结束时 清除传递数据")]),e._v(")")])])]),e._v(" "),t("li",[e._v("不能在被拖拽对象的 dragend 事件中传递消息\n"),t("ul",[t("li",[e._v("Step1: 拖拽对象的 dropstart；")]),e._v(" "),t("li",[e._v("Step2: 拖放区的 drop；")]),e._v(" "),t("li",[e._v("Step3：拖拽对象的 dropend；")])])]),e._v(" "),t("li",[e._v("实现流程\n"),t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000013606988?w=628&h=736"}})]),e._v(" "),t("li",[t("strong",[e._v("特别重要补充流程(拖放事件)")]),e._v(" "),t("ul",[t("li",[e._v("当拖动某个元素时，将依次触发以下事件：\n"),t("ul",[t("li",[t("code",[e._v("dragstart")]),e._v(":被拖动元素开始被拖动时触发")]),e._v(" "),t("li",[t("code",[e._v("drag")]),e._v(":被拖动元素被拖动期间持续触发，类似于"),t("code",[e._v("mousemove")])]),e._v(" "),t("li",[t("code",[e._v("dragend")]),e._v(":停止拖动元素时触发，无论被拖动元素是否放置在有效的目标上")])])]),e._v(" "),t("li",[e._v("当某个元素被拖动放在"),t("strong",[e._v("一个目标元素上时")]),e._v("，放置目标则依次放生以下事件:\n"),t("ul",[t("li",[t("p",[t("code",[e._v("dragenter")]),e._v(":当拖动某个元素进入放置元素时触发")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("dragover")]),e._v(":"),t("code",[e._v("dragenter")]),e._v("触发后，会触发"),t("code",[e._v("dragover")]),e._v("事件，并且如果拖动元素继续在放置目标范围内移动，该事件会持续触发")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("drop或dragleave")]),e._v(": 在"),t("code",[e._v("dragover")]),e._v("事件后，如果是松开鼠标，被拖动元素放到放置目标上，触发"),t("code",[e._v("drop")]),e._v("事件；如果是继续拖动被拖动元素继续移动并离开了放置元素，这个放置目标元素就触发"),t("code",[e._v("dragleave")]),e._v("事件；")]),e._v(" "),t("p",[t("code",[e._v("拖动元素经过各个元素时，这些元素虽然支持放置元素的事件，但是默认是不允许放置的，因此也就不会触发drop事件。需要在允许放置的元素中重写dragenter和dragover事件的默认行为，即使用Event.preventDefault()方法。")])])])])])])])])]),e._v(" "),t("li",[t("p",[e._v("基于vue3.0的拖拽的demo vue2.x版本同理")]),e._v(" "),t("pre",[t("code",[e._v('  <template>\n  <div id="app">\n      <div class="hello">\n          <div class="drag-field"\n          @dragover.prevent\n          @drop="drop2"\n              >\n              <div class="item"\n                  v-for="(item, index) in items" :key="index"\n                  draggable="true"\n                  @dragstart="dragstart($event,item,index)"\n                  @dragend="dragend"\n              >\n                 \n              </div>\n          </div>\n          <div class="drop-field"\n          @dragover.prevent\n          @drop="drop"\n          >\n              <div class="item" v-if="droppedItem !== \'\'"\n              v-for="(item, index) in droppedItem" \n              :key="index"\n              draggable="true"\n              @dragstart="dragstart($event,item,index)"\n              @dragend="dragend"\n              >\n                 \n              </div>\n          </div>\n      </div>\n  </div>\n  </template>\n')])]),e._v(" "),t("hr"),e._v(" "),t("pre",[t("code",[e._v("  import {ref,reactive,computed} from '@vue/composition-api'\n      export default {\n      name: 'app',\n\n      setup(){\n          const droppedItem=reactive([]);\n          const items=reactive([\n                          {\n                              id: 1,\n                              label: '模块一'\n                          },\n                          {\n                              id: 2,\n                              label: '模块二'\n                          },\n                          {\n                              id: 3,\n                              label: '模块三'\n                          }\n                      ]\n          );\n          /**\n          * \n          */\n          function dragstart(event,item,index,status){\n          console.log(\"item\",item)\n          let it=JSON.stringify(item)\n\n          // dataTransfer就是可以通过它来传输被拖动的数据，以便在拖拽结束的时候，对数据进行其他的操作。\n          // 方法设置被拖数据的数据类型和值：\n          event.dataTransfer.setData('item',it)\n          event.dataTransfer.setData('index',index)\n          }\n          function dragover(el){\n          el.preventDefault();\n              // console.log(\"我被持续移动了\",el)  \n          }\n          function drop(event){//这边放\n          // 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）\n          // el.preventDefault();\n          let index=event.dataTransfer.getData('index')\n          let item=JSON.parse(event.dataTransfer.getData('item')) ;\n          console.log(\"item\",item,'index',index)\n          // 删除上面的数据\n          items.splice(index,1);\n          droppedItem.push(item)\n          }\n          function dragend(event){//拖拽结束\n          event.dataTransfer.clearData()\n          }\n          function drop2(){\n          let index=event.dataTransfer.getData('index')\n          let item=JSON.parse(event.dataTransfer.getData('item')) ;\n          console.log(\"item\",item,'index',index)\n          // 删除上面的数据\n          droppedItem.splice(index,1);\n          items.push(item)\n          }\n          return{\n          droppedItem,\n          items,\n          dragstart,\n          dragover,\n          drop,\n          drop2,\n          dragend\n          }\n      },\n      }\n")])])]),e._v(" "),t("li",[t("p",[e._v("综上所述:")]),e._v(" "),t("ul",[t("li",[e._v("完成拖拽步骤\n"),t("ul",[t("li",[t("strong",[e._v("被拖拽的元素")]),e._v("上添加拖拽属性 "),t("code",[e._v('draggable="true"')])]),e._v(" "),t("li",[e._v("在需要"),t("strong",[e._v("放置拖拽元素的地方也就是box")]),e._v(" 阻止dragover的默认事件 event.preventDefault() && 添加 drop事件用户监听 添加数据 用于接收参数 "),t("code",[e._v("event.dataTransfer.getData(key)")])]),e._v(" "),t("li",[e._v("在"),t("strong",[e._v("被拖拽的元素")]),e._v("的开始拖拽事件"),t("code",[e._v("dragstart")]),e._v("中 使用 "),t("code",[e._v("event.dataTransfer.setData(key,value);value只能为string 如果要传递Object需要序列化一下")]),e._v("传递数据")]),e._v(" "),t("li",[e._v("在"),t("strong",[e._v("被拖拽的元素")]),e._v("的接收拖拽事件"),t("code",[e._v("dragend")]),e._v("中 使用 "),t("code",[e._v("event.dataTransfer.clearData()")]),e._v("清除数据")])])])])]),e._v(" "),t("li",[t("p",[e._v("参考文章:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000013606983#articleHeader0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://segmentfault.com/a/1190000013606983#articleHeader0"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/sinat_31231955/article/details/82770147",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/sinat_31231955/article/details/82770147"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.w3school.com.cn/html5/html_5_draganddrop.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3school.com.cn/html5/html_5_draganddrop.asp"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/hjc256/article/details/89021483",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/hjc256/article/details/89021483"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://ytime.github.io/2017/06/13/vue%E4%B8%AD%E5%AE%9E%E7%8E%B0%E6%8B%96%E6%94%BE/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ytime.github.io/2017/06/13/vue%E4%B8%AD%E5%AE%9E%E7%8E%B0%E6%8B%96%E6%94%BE/"),t("OutboundLink")],1),t("strong",[e._v("重要参考文章")])])])])])])},[],!1,null,null,null);n.default=v.exports}}]);