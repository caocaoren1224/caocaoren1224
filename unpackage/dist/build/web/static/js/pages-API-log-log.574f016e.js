(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-log-log"],{1366:function(e,a,t){"use strict";t.r(a);var i=t("a125"),n=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(a,e,(function(){return i[e]}))}(r);a["default"]=n.a},"13ea":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?t("v-uni-view",{staticClass:"uni-card__cover"},[t("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?t("v-uni-view",{staticClass:"uni-card__header"},[t("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("title")}}},[e.thumbnail?t("v-uni-view",{staticClass:"uni-card__header-avatar"},[t("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),t("v-uni-view",{staticClass:"uni-card__header-content"},[t("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?t("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),t("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("extra")}}},[t("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),t("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("content")}}},[e._t("default")],2),t("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("actions")}}},[e._t("actions")],2)],2)},n=[]},"5ae1":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #ebeef5}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=a},7568:function(e,a,t){"use strict";t.r(a);var i=t("13ea"),n=t("b729");for(var r in n)["default"].indexOf(r)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(r);t("eba9");var d=t("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"44c0d81e",null,!1,i["a"],void 0);a["default"]=c.exports},"90a4":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return i}));var i={uniCard:t("7568").default},n=function(){var e=this.$createElement,a=this._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"uniUi-page-head"},[a("v-uni-view",{staticClass:"uniUi-page-head-title"},[this._v("log")])],1),a("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[a("v-uni-text",{staticClass:"uni-h6"},[this._v("console对象是 JavaScript 的原生对象，可向控制台输出信息。主要用于调试程序表单项。")]),a("br"),a("v-uni-text",{staticClass:"uni-h6"},[this._v("console.log() 用于在控制台输出信息。")]),a("br"),a("v-uni-text",{staticClass:"uni-h6"},[this._v("console.info() 是 console.log() 的别名，用法完全一样。只不过info会在输出信息的前面，加上一个蓝色图标的表单项。")]),a("br"),a("v-uni-text",{staticClass:"uni-h6"},[this._v("console.debug()与 console.log() 类似，会在控制台输出调试信息。默认情况下，输出的信息不会显示的表单项。")]),a("br"),a("v-uni-text",{staticClass:"uni-h6"},[this._v("console.warn()也是在控制台输出信息，输出信息时，在最前面加一个黄色三角，表示警告的表单项。")]),a("br"),a("v-uni-text",{staticClass:"uni-h6"},[this._v("console.error()也是在控制台输出信息，输出信息时，在最前面加一个红色的叉，表示出错。")]),a("br")],1)],1)},r=[]},"98dc":function(e,a,t){var i=t("5ae1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("1d76c63e",i,!0,{sourceMap:!1,shadowMode:!1})},a125:function(e,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={onLoad:function(){console.log("打印日志1"),console.debug("打印日志2"),console.info("打印日志3"),console.warn("打印日志4"),console.error("打印日志5")},data:function(){return{}},methods:{}};a.default=i},b45e:function(e,a,t){"use strict";t.r(a);var i=t("90a4"),n=t("1366");for(var r in n)["default"].indexOf(r)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(r);var d=t("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"c5bfefee",null,!1,i["a"],void 0);a["default"]=c.exports},b729:function(e,a,t){"use strict";t.r(a);var i=t("d960"),n=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(a,e,(function(){return i[e]}))}(r);a["default"]=n.a},d960:function(e,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};a.default=i},eba9:function(e,a,t){"use strict";var i=t("98dc"),n=t.n(i);n.a}}]);