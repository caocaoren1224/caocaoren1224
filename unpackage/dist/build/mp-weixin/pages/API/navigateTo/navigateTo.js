(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/navigateTo/navigateTo"],{"35a4":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},c=[]},"60c3":function(e,t,n){"use strict";n.r(t);var a=n("7b8e"),c=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=c.a},7561:function(e,t,n){"use strict";n.r(t);var a=n("35a4"),c=n("60c3");for(var u in c)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(u);var o=n("f0c5"),i=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=i.exports},"7b8e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},methods:{navigate:function(){e.navigateTo({url:"../test/test?id=1&name=uniapp",events:{acceptDataFromOpenedPage:function(e){console.log(e)},someEvent:function(e){console.log(e)}},success:function(e){e.eventChannel.emit("acceptDataFromOpenedPage",{data:"data from starter page"})}})}}};t.default=n}).call(this,n("543d")["default"])},de64:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("07c1");a(n("66fd"));var c=a(n("7561"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["de64","common/runtime","common/vendor"]]]);