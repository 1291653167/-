(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-create-order-create-order"],{3225:function(t,e,i){var a=i("4fbf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("93957cce",a,!0,{sourceMap:!1,shadowMode:!1})},"4fbf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-textarea[data-v-7978b735]{height:100%;font-size:%?28?%}.page[data-v-7978b735]{width:100%;height:100%}.page .address[data-v-7978b735]{background:#fff url(/static/address-line.png);background-repeat-y:no-repeat;background-position:0 100%;background-size:%?128?% %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?16?% %?32?%;font-size:%?28?%}.page .address .content[data-v-7978b735]{color:#333;font-weight:700}.page .address .detail[data-v-7978b735]{color:#666}.page .box[data-v-7978b735]{background-color:#fff;border-radius:%?24?%;margin:%?32?% 0;padding:0 %?32?%}.page .box .box-header[data-v-7978b735]{padding:%?16?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .box .box-header .icon[data-v-7978b735]{font-size:%?28?%}.page .box .box-header .icon-store[data-v-7978b735]{font-size:%?40?%;margin-right:%?10?%}.page .box .box-header .store-title[data-v-7978b735]{font-size:%?28?%}.page .box .product[data-v-7978b735]{margin-bottom:%?32?%}.page .box .product .product-info[data-v-7978b735]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .box .product .product-info .image[data-v-7978b735]{width:%?150?%;height:%?150?%;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?24?%;overflow:hidden}.page .box .product .product-info .image uni-image[data-v-7978b735]{height:100%;width:100%}.page .box .product .product-info .content[data-v-7978b735]{margin-left:%?10?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.page .box .product .product-info .content .title[data-v-7978b735]{font-size:%?28?%}.page .box .product .product-info .content .sku[data-v-7978b735]{font-size:%?24?%}.page .box .product .product-info .num[data-v-7978b735]{font-size:%?28?%;color:#ccc}.page .box .product .product-price[data-v-7978b735]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.page .box .cell[data-v-7978b735]{padding:0}.page .box .cell .label[data-v-7978b735]{font-size:%?28?%}.page .box .cell .content[data-v-7978b735]{text-align:right;font-size:%?24?%}.page .fix-bar[data-v-7978b735]{position:fixed;bottom:0;right:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;padding:0 %?32?%;height:%?88?%}.page .fix-bar .price[data-v-7978b735]{font-size:%?36?%;color:#e13130}.page .fix-bar uni-button[data-v-7978b735]{margin:0;background-color:#e13031;height:%?80?%;color:#fff;margin:%?4?% 0;line-height:%?80?%;border-radius:%?80?%;font-size:%?28?%}',""]),t.exports=e},"72fd":function(t,e,i){"use strict";i.r(e);var a=i("dc13"),s=i("e079");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("88f0");var r,o=i("f0c5"),c=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"7978b735",null,!1,a["a"],r);e["default"]=c.exports},"82e4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{address:"",cart_id:"",type:"",order:"",desc:""}},onLoad:function(t){this.cart_id=t.cart_id,this.type=t.type,this.getAddress(),this.getCheckOrder()},methods:{getAddress:function(){var t=this,e=this.$store.getters.uid;this.$api.getDefaultAddress({uid:e}).then((function(e){t.address=e.data[0]}))},getCheckOrder:function(){var t=this,e=this.$store.getters.uid,i=this.$store.getters.token,a=this.cart_id,s=this.type;this.$api.checkOrder({uid:e,token:i,cart_id:a,type:s}).then((function(e){console.log(e),t.order=e.data}))},pay:function(){var t=this,e=this.$store.getters.uid,i=this.$store.getters.token,a=this.cart_id,s=this.desc,n=this.address;this.$api.submitOrder({uid:e,token:i,cart_id:a,desc:s,address:n}).then((function(e){if(console.log(e),1==e.code){var i=e.data,a=t.order.all_amount;uni.redirectTo({url:"/pages/pay/pay?orderId="+i+"&all_amount="+a})}else t.toast(e.msg)}))}}};e.default=a},"88f0":function(t,e,i){"use strict";var a=i("3225"),s=i.n(a);s.a},dc13:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",[t._v(t._s(t.address.name))]),i("v-uni-text",[t._v(t._s(t.address.tel))])],1),i("v-uni-view",{staticClass:"detail"},[t._v(t._s(t.address.addr_text)+t._s(t.address.detail))])],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-text",{staticClass:"icon icon-pull-left"})],1)],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"box-header"},[i("v-uni-text",{staticClass:"icon icon-store"}),i("v-uni-text",{staticClass:"store-title"},[t._v("商城专营店")]),i("v-uni-text",{staticClass:"icon icon-pull-left"})],1),t._l(t.order.goods,(function(e,a){return i("v-uni-view",{key:e._id,staticClass:"product"},[i("v-uni-view",{staticClass:"product-info"},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:e.img,mode:""}})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title line-2"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"sku"},[t._v(t._s(e.attr))])],1),i("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(e.num))])],1),i("v-uni-view",{staticClass:"product-price"},[i("v-uni-text",[t._v("￥"+t._s(e.price))])],1)],1)})),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("配送时效")]),i("v-uni-view",{staticClass:"content"},[t._v("按时配送")])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("退换无忧")]),i("v-uni-view",{staticClass:"content"},[t._v("自签收后7天内退货,15天内换货,可免费享1次上门取件服务")])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("备注")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-textarea",{attrs:{placeholder:"请填写备注"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1)],2),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("商品金额")]),i("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(t.order.base_money))])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("运费")]),i("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(t.order.shipping))])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("促销立减")]),i("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(t.order.reduction))])],1)],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("发票")]),i("v-uni-view",{staticClass:"content"},[t._v("开发票")])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"label"},[t._v("支付方式")]),i("v-uni-view",{staticClass:"content"},[t._v("在线支付")])],1)],1),i("v-uni-view",{staticClass:"fix-bar"},[i("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.order.all_amount))]),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1)},n=[]},e079:function(t,e,i){"use strict";i.r(e);var a=i("82e4"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a}}]);