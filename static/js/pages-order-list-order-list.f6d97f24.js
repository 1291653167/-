(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-list-order-list"],{"261f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={1:"待付款",2:"待发货",3:"待收货",6:"待评价",7:"已完成",8:"已取消"},s={data:function(){return{status:0,skip:0,limit:10,lists:[],tag:0,finished:!1,keyWord:""}},filters:{statusText:function(t){return a[t]}},onLoad:function(t){this.status=t.status,this.getLists()},onReachBottom:function(){this.finished?this.toast("没有更多数据加载了"):this.getLists()},methods:{changeStatus:function(t){this.status=t,this.lists=[],this.skip=0,this.getLists()},searchOrder:function(t){var e=this;this.keyWord=t.detail.value,console.log(this.keyWord),this.$api.getOrderListsById({order_id:this.keyWord}).then((function(t){e.lists=t.data}))},getLists:function(){var t=this,e=this.$store.getters.uid,i=this.skip,a=this.limit,s=this.status;this.$api.getOrderLists({skip:i,limit:a,status:s,uid:e}).then((function(e){console.log(e),t.lists.push.apply(t.lists,e.data),t.skip+=e.data.length,t.lists.length>=e.count&&t.finished,0==t.lists.length&&(t.tag=1)}))}}};e.default=s},"2f6a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-217e0320]{width:100%;height:100%}.page .empty[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-top:%?120?%}.page .nav[data-v-217e0320]{height:%?176?%}.page .nav .search[data-v-217e0320]{background-color:#fff;height:%?88?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%}.page .nav .search uni-input[data-v-217e0320]{border:1px solid #c8c7cc;padding:%?12?% %?60?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:%?40?%}.page .nav .search .icon[data-v-217e0320]{position:absolute;top:%?28?%;left:%?50?%}.page .nav .tabs[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?88?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;text-align:center;background-color:#fff}.page .nav .tabs .tab[data-v-217e0320]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-shrink:1;flex-shrink:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .nav .tabs .active uni-text[data-v-217e0320]{color:#dd524d;border-bottom:%?1?% solid #dd524d;height:%?88?%;line-height:%?88?%}.page .list[data-v-217e0320]{margin:%?32?% %?20?%;padding-bottom:%?20?%}.page .list .order-box[data-v-217e0320]{background-color:#fff;padding:%?32?% %?16?%;border-radius:%?24?%;box-shadow:0 %?2?% %?4?% 0 hsla(0,0%,72.9%,.1);margin:%?32?% 0}.page .list .order-box .box-header[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?32?%}.page .list .order-box .box-header .store-info[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex}.page .list .order-box .box-header .store-info .icon-dianpu[data-v-217e0320]{font-size:%?36?%;margin-right:%?10?%}.page .list .order-box .box-header .store-info .store-title[data-v-217e0320]{font-size:%?28?%}.page .list .order-box .box-header .status[data-v-217e0320]{color:#999;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .list .order-box .box-header .status .label[data-v-217e0320]{margin-right:%?10?%}.page .list .order-box .box-body[data-v-217e0320]{padding-bottom:%?32?%}.page .list .order-box .box-body .more-goods .num[data-v-217e0320]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;text-align:right!important;padding-right:%?30?%}.page .list .order-box .box-body .order-pruduct[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .list .order-box .box-body .order-pruduct .image[data-v-217e0320]{width:%?150?%;height:%?150?%;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?24?%;overflow:hidden}.page .list .order-box .box-body .order-pruduct .image uni-image[data-v-217e0320]{width:100%;height:100%}.page .list .order-box .box-body .order-pruduct .content[data-v-217e0320]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.page .list .order-box .box-body .order-pruduct .content .title[data-v-217e0320]{margin-left:%?10?%;font-size:%?28?%;height:%?60?%;line-height:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?400?%}.page .list .order-box .box-body .order-pruduct .num[data-v-217e0320]{color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.page .list .order-box .box-body .order-amount[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.page .list .order-box .box-footer[data-v-217e0320]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?32?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.page .list .order-box .box-footer uni-button[data-v-217e0320]{font-size:%?24?%;height:%?54?%;line-height:%?54?%;border-radius:%?24?%;margin:0 %?4?%;border:1px solid #c8c7cc}.page .list .order-box .box-footer uni-button[data-v-217e0320]:after{border:0}.page .list .order-box .box-footer .btn-red[data-v-217e0320]{border:1px solid #dd524d;color:#dd524d}',""]),t.exports=e},3376:function(t,e,i){var a=i("2f6a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("78c577f6",a,!0,{sourceMap:!1,shadowMode:!1})},"3e1b":function(t,e,i){"use strict";i.r(e);var a=i("261f"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},bfae:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"nav"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"icon icon-search"}),i("v-uni-input",{attrs:{placeholder:"搜索订单","confirm-type":"search"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchOrder.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"tabs"},[i("v-uni-view",{staticClass:"tab",class:0==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(0)}}},[i("v-uni-text",[t._v("全部")])],1),i("v-uni-view",{staticClass:"tab",class:1==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(1)}}},[i("v-uni-text",[t._v("待付款")])],1),i("v-uni-view",{staticClass:"tab",class:3==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(3)}}},[i("v-uni-text",[t._v("待收货")])],1),i("v-uni-view",{staticClass:"tab",class:7==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(7)}}},[i("v-uni-text",[t._v("已完成")])],1)],1)],1),t.lists.length<=0&&1==t.tag?i("v-uni-view",{staticClass:"empty"},[i("v-uni-view",{staticClass:"title"},[t._v("您还没有相关订单")])],1):i("v-uni-view",{staticClass:"list"},t._l(t.lists,(function(e,a){return i("v-uni-view",{key:e._id,staticClass:"order-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAuth("/pages/order-detail/order-detail?id="+e._id)}}},[i("v-uni-view",{staticClass:"box-header"},[i("v-uni-view",{staticClass:"store-info"},[i("v-uni-text",{staticClass:"icon icon-store"}),i("v-uni-text",{staticClass:"store-title"},[t._v("商城专营店")]),i("v-uni-text",{staticClass:"icon icon-pull-left"})],1),i("v-uni-view",{staticClass:"status"},[i("v-uni-text",{staticClass:"label"},[t._v(t._s(t._f("statusText")(e.status)))]),i("v-uni-text",{staticClass:"icon icon-delete"})],1)],1),i("v-uni-view",{staticClass:"box-body bottom"},[1==e.goods.length?i("v-uni-view",t._l(e.goods,(function(e){return i("v-uni-view",{key:e.goods_id,staticClass:"order-pruduct"},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:e.img,mode:""}})],1),i("v-uni-text",{staticClass:"content"},[i("v-uni-text",{staticClass:"title line-2"},[t._v(t._s(e.name))]),i("v-uni-text",[t._v(t._s(e.attr))])],1),i("v-uni-text",{staticClass:"num"},[t._v("x"+t._s(e.num))])],1)})),1):i("v-uni-view",[i("v-uni-view",{staticClass:"order-pruduct more-goods"},[t._l(e.goods,(function(t){return i("v-uni-view",{key:t.goods_id,staticClass:"image"},[i("v-uni-image",{attrs:{src:t.img}})],1)})),i("v-uni-view",{staticClass:"num"},[t._v("x"+t._s(e.goods.length))])],2)],1),i("v-uni-view",{staticClass:"order-amount"},[t._v("共计: ￥"+t._s(e.all_amount))])],1),i("v-uni-view",{staticClass:"box-footer"},[1==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("去付款")]):t._e(),1==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("取消订单")]):t._e(),2==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("去发货")]):t._e(),3==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("查看物流")]):t._e(),3==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("收货确认")]):t._e(),6==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("去评价")]):t._e(),7==e.status?i("v-uni-button",{staticClass:"btn-red"},[t._v("删除订单")]):t._e()],1)],1)})),1)],1)},n=[]},f5b7:function(t,e,i){"use strict";i.r(e);var a=i("bfae"),s=i("3e1b");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("f87d");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"217e0320",null,!1,a["a"],o);e["default"]=l.exports},f87d:function(t,e,i){"use strict";var a=i("3376"),s=i.n(a);s.a}}]);