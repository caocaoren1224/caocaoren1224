(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/getLocation/getLocation"],{"0c21":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{latitude:"",longitude:"",covers:[{latitude:"",longitude:""}]}},onLoad:function(){var e=this;t.getLocation({type:"wgs-84",success:function(t){e.latitude=t.latitude,e.longitude=t.longitude,e.covers[0].latitude=e.latitude,e.covers[0].longitude=e.longitude}})},methods:{}};e.default=n}).call(this,n("543d")["default"])},"11f8":function(t,e,n){"use strict";n.r(e);var u=n("0c21"),i=n.n(u);for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},"543e":function(t,e,n){"use strict";(function(t,e){var u=n("4ea4");n("07c1");u(n("66fd"));var i=u(n("d3d0"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},6998:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},i=[]},d3d0:function(t,e,n){"use strict";n.r(e);var u=n("6998"),i=n("11f8");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a=n("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=c.exports}},[["543e","common/runtime","common/vendor"]]]);