(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fav-list-fav-list"],{"0131":function(t,i,n){"use strict";n.r(i);var e=n("19fe"),s=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a},"19fe":function(t,i,n){"use strict";n("4160"),n("a434"),n("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{skip:0,limit:10,lists:[],finished:!1}},onLoad:function(){this.getFavLists()},onReachBottom:function(){this.finished?this.toast("没有更多数据了"):this.getFavLists()},methods:{getFavLists:function(){var t=this,i=this.$store.getters.uid,n=this.skip,e=this.limit;this.$api.getFavLists({uid:i,skip:n,limit:e}).then((function(i){console.log(i),t.lists.push.apply(t.lists,i.data),t.lists.forEach((function(t){t.options=!1})),t.skip+=t.limit,t.lists.length>=i.count&&(t.finished=!0)}))},showOptions:function(t){console.log(t),this.lists[t].options=!0,console.log(this.lists[t]),this.$forceUpdate()},del:function(t,i){var n=this,e=t,s=this.$store.getters.uid,o=1;this.$api.fav({goods_id:e,uid:s,is_fav:o}).then((function(t){console.log(t),1==t.code&&(n.toast(t.msg),n.lists.splice(i,1))}))}}};i.default=e},2767:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.col-1[data-v-4fb574ba]{margin:%?30?% 0}.col-1 .box[data-v-4fb574ba]{padding:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;border-bottom:1px solid #f8f8f8;position:relative}.col-1 .box .cover[data-v-4fb574ba]{width:%?240?%;height:%?240?%;-webkit-flex-shrink:0;flex-shrink:0}.col-1 .box .cover img[data-v-4fb574ba]{width:100%}.col-1 .box .info[data-v-4fb574ba]{margin:%?20?%}.col-1 .box .info .title[data-v-4fb574ba]{font-size:%?28?%;color:#333;height:%?140?%}.col-1 .box .info .price-line[data-v-4fb574ba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.col-1 .box .info .price-line .price[data-v-4fb574ba]{color:#e13031;font-size:%?28?%}.col-1 .box .info .price-line .price uni-text[data-v-4fb574ba]{font-size:%?36?%}.col-1 .box .info .price-line .sales[data-v-4fb574ba]{font-size:%?24?%;color:#999}.options[data-v-4fb574ba]{z-index:1000;position:absolute;top:0;bottom:0;right:0;left:0}.options .mask[data-v-4fb574ba]{position:absolute;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3)}.options .op[data-v-4fb574ba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;z-index:1001;position:absolute;top:0;bottom:0;right:0;left:0}.options .op .delete[data-v-4fb574ba]{width:%?140?%;height:%?140?%;background-color:#e13031;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;font-size:%?36?%}',""]),t.exports=i},"3d78":function(t,i,n){"use strict";n.r(i);var e=n("54f5"),s=n("0131");for(var o in s)"default"!==o&&function(t){n.d(i,t,(function(){return s[t]}))}(o);n("603c");var a,r=n("f0c5"),l=Object(r["a"])(s["default"],e["b"],e["c"],!1,null,"4fb574ba",null,!1,e["a"],a);i["default"]=l.exports},"54f5":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"list col-1"},t._l(t.lists,(function(i,e){return n("v-uni-view",{key:i._id,staticClass:"box",on:{longpress:function(i){arguments[0]=i=t.$handleEvent(i),t.showOptions(e)}}},[i.options?n("v-uni-view",{staticClass:"options"},[n("v-uni-view",{staticClass:"mask"}),n("v-uni-view",{staticClass:"op"},[n("v-uni-view",{staticClass:"delete",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del(i.goods_id,e)}}},[t._v("删除")])],1)],1):t._e(),n("v-uni-view",{staticClass:"cover"},[n("img",{attrs:{src:i.img}})]),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"title line-2"},[t._v(t._s(i.name))]),n("v-uni-view",{staticClass:"price-line"},[n("v-uni-view",{staticClass:"price"},[t._v("￥"),n("v-uni-text",[t._v(t._s(i.price))])],1)],1)],1)],1)})),1)],1)},o=[]},"603c":function(t,i,n){"use strict";var e=n("8e39"),s=n.n(e);s.a},"8e39":function(t,i,n){var e=n("2767");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=n("4f06").default;s("1d0a4ff6",e,!0,{sourceMap:!1,shadowMode:!1})}}]);