(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-list-search-list"],{1391:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{col:!0,skip:0,key:"",lists:[],finished:!1}},onLoad:function(e){this.key=e.key,this.getproductLists()},onReachBottom:function(){console.log(1),this.finished?this.toast("已经没有数据"):this.getproductLists()},methods:{getproductLists:function(){var e=this,t=this.key,i=this.skip;this.$api.getSearchListt({keyword:t,skip:i,limit:10}).then((function(t){e.lists.push.apply(e.lists,t.data),e.finished=e.lists.length>=t.count,e.skip+=10}))}}};t.default=a},"139b":function(e,t,i){"use strict";i.r(t);var a=i("4a53"),n=i("76b8");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("d2e5");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"862288f4",null,!1,a["a"],s);t["default"]=c.exports},"1f9c":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-862288f4]{width:100%;height:100%}.page .header[data-v-862288f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;background-color:#fff}.page .header .search[data-v-862288f4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 %?15?%;position:relative}.page .header .search uni-input[data-v-862288f4]{background-color:#f8f8f8;padding:%?10?% %?80?%;border-radius:%?60?%}.page .header .search .icon[data-v-862288f4]{position:absolute;top:%?15?%;left:%?20?%}.page .header .right[data-v-862288f4]{width:%?90?%;text-align:center}.page .header .right .icon[data-v-862288f4]{font-size:%?48?%}.page .col-2[data-v-862288f4]{margin:%?30?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page .col-2 .box[data-v-862288f4]{-webkit-box-flex:0;-webkit-flex:0 0 calc(50% - %?10?%);flex:0 0 calc(50% - %?10?%);background-color:#fff;margin-bottom:%?20?%;border-radius:%?12?%;overflow:hidden}.page .col-2 .box .cover[data-v-862288f4]{width:100%}.page .col-2 .box .cover img[data-v-862288f4]{width:100%}.page .col-2 .box .info[data-v-862288f4]{margin:%?20?%}.page .col-2 .box .info .title[data-v-862288f4]{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:%?28?%;color:#333}.page .col-2 .box .info .price-line[data-v-862288f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?20?%}.page .col-2 .box .info .price-line .price[data-v-862288f4]{color:#e13031;font-size:%?28?%}.page .col-2 .box .info .price-line .price uni-text[data-v-862288f4]{font-size:%?36?%}.page .col-2 .box .info .price-line .sales[data-v-862288f4]{font-size:%?24?%;color:#999}.page .col-1[data-v-862288f4]{margin:%?30?% 0}.page .col-1 .box[data-v-862288f4]{padding:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;border-bottom:1px solid #f8f8f8}.page .col-1 .box .cover[data-v-862288f4]{width:%?240?%;height:%?240?%;-webkit-flex-shrink:0;flex-shrink:0}.page .col-1 .box .cover img[data-v-862288f4]{width:100%}.page .col-1 .box .info[data-v-862288f4]{margin:%?20?%}.page .col-1 .box .info .title[data-v-862288f4]{font-size:%?28?%;color:#333;height:%?140?%}.page .col-1 .box .info .price-line[data-v-862288f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page .col-1 .box .info .price-line .price[data-v-862288f4]{color:#e13031;font-size:%?28?%}.page .col-1 .box .info .price-line .price uni-text[data-v-862288f4]{font-size:%?36?%}.page .col-1 .box .info .price-line .sales[data-v-862288f4]{font-size:%?24?%;color:#999}',""]),e.exports=t},2883:function(e,t,i){var a=i("1f9c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("171ebcf1",a,!0,{sourceMap:!1,shadowMode:!1})},"4a53":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"list",class:[e.col?"col-2":"col-1"]},e._l(e.lists,(function(t){return i("v-uni-view",{key:t._id,staticClass:"box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.to("/pages/product/product?id="+t._id)}}},[i("v-uni-view",{staticClass:"cover"},[i("img",{attrs:{src:t.img}})]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line-2"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"price-line"},[i("v-uni-view",{staticClass:"price"},[e._v("￥"),i("v-uni-text",[e._v(e._s(t.price))])],1),i("v-uni-view",{staticClass:"sales"},[e._v("销量:  "+e._s(t.sales))])],1)],1)],1)})),1)],1)},o=[]},"76b8":function(e,t,i){"use strict";i.r(t);var a=i("1391"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},d2e5:function(e,t,i){"use strict";var a=i("2883"),n=i.n(a);n.a}}]);