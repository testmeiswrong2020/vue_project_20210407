(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a6b184"],{"54fc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-4 pb-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-6 col-lg-12 mb-5"},[s("h3",[t._v("購物車清單")]),0===t.cart.carts.length?s("div",[s("div",{staticClass:"border-top mb-3"}),s("div",{staticClass:"row justify-content-center align-items-center"},[s("h6",[t._v("購物車是空的 ? 還不逛好逛滿買起來 !")]),s("div",{staticClass:"w-100"}),s("router-link",{attrs:{to:"/product"}},[s("button",{staticClass:"btn btn-primary"},[t._v("\n                現在就去逛逛 !\n              ")])])],1),s("div",{staticClass:"border-top mt-3"})]):t._e(),s("div",{},[t.cart.carts.length>0?s("table",{staticClass:"table  table-sm"},[t._m(0),s("tbody",t._l(t.cart.carts,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"align-middle w-50"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-2"},[s("img",{staticClass:"img-fluid pr-3 py-1 pl-1",staticStyle:{width:"80px",height:"60px"},attrs:{src:""+e.product.imageUrl,alt:""}})]),s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"d-flex align-items-center h-100"},[s("span",{staticClass:"text-nowrap "},[t._v(t._s(e.product.title))]),e.coupon?s("div",{staticClass:"text-success"},[t._v("\n                        已套用優惠券\n                      ")]):t._e()])])])]),s("td",{staticClass:"align-middle w-25"},[s("div",{class:[t.windowWidth>1024?"d-inline-flex":""]},[e.product.origin_price>e.product.price?s("del",{staticClass:"pr-1"},[t._v("\n                         "+t._s(t._f("currency")(e.product.origin_price))+"\n                       ")]):t._e(),e.product.origin_price<=e.product.price?s("div",[t._v("\n                       "+t._s(t._f("currency")(e.product.origin_price))+"\n                       ")]):t._e(),e.product.origin_price>e.product.price?s("div",{staticClass:"text-success"},[t._v("\n                       "+t._s(t._f("currency")(e.product.price))+"\n                       ")]):t._e()])]),s("td",{staticClass:"align-middle w-25"},[t._v("\n                  "+t._s(e.qty)+"/"+t._s(e.product.unit)+"\n                ")]),s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.removeCartItem(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0),t._m(1)]):t._e()])]),s("div",{staticClass:"col-md-6 col-sm-6 col-lg-6"},[s("h3",[t._v("優惠券折扣")]),s("div",{staticClass:"input-group mb-3 input-group-sm mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addCouponCode(e)}}},[t._v("\n              套用優惠碼\n            ")])])]),s("p",{staticClass:"text-success mt-n3"},[t._v("現在輸入 SS10 即可享有折扣價喔!")])]),s("div",{staticClass:"col-md-6 col-sm-6 col-lg-6"},[s("h3",[t._v("購物車總計")]),s("table",{staticClass:"table  table-sm"},[s("tbody",[s("tr",[s("td",{staticClass:"text-left",attrs:{colspan:"3"}},[t._v("小計")]),s("td",{staticClass:"align-middle text-right font-weight-normal"},[t._v("\n                "+t._s(t._f("currency")(t.cart.total))+"\n              ")])])]),s("tfoot",[s("tr",{staticClass:"font-weight-bold"},[s("td",{staticClass:" text-left",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!=t.cart.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),s("td",{staticClass:"text-right text-success"},[t._v("\n                "+t._s(t._f("currency")(t.cart.final_total))+"\n              ")])]):t._e()])]),s("router-link",{attrs:{to:"/checkout",event:0!==t.cart.carts.length?"click":"",disabled:0===t.cart.carts.length}},[s("button",{staticClass:"btn btn-primary float-right",attrs:{disabled:0===t.cart.carts.length}},[t._v("\n            前往結帳\n          ")])])],1)])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",[t._v("品名")]),s("th",[t._v("單價")]),s("th",[t._v("數量")]),s("th")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tfoot",{staticClass:"border-top"},[s("tr")])}],r=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),n=s("2f62");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={data:function(){return{coupon_code:"",windowWidth:window.innerWidth}},methods:o(o({},Object(n["b"])(["getCart"])),{},{removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/coupon"),s={code:t.coupon_code.toUpperCase().trim()};t.$store.dispatch("updateLoading",!0),this.$http.post(e,{data:s}).then((function(e){var s=e.data.message;e.data.success?t.getCart():t.$store.dispatch("updateMessage",{message:s,status:"danger"}),t.$store.dispatch("updateLoading",!1)}))}}),computed:o({},Object(n["c"])(["cart"])),mounted:function(){var t=this;window.onresize=function(){t.windowWidth=window.innerWidth}}},d=l,u=s("2877"),p=Object(u["a"])(d,a,c,!1,null,null,null);e["default"]=p.exports},"8e6e":function(t,e,s){var a=s("5ca1"),c=s("990b"),r=s("6821"),n=s("11e9"),i=s("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,s,a=r(t),o=n.f,l=c(a),d={},u=0;while(l.length>u)s=o(a,e=l[u++]),void 0!==s&&i(d,e,s);return d}})},"990b":function(t,e,s){var a=s("9093"),c=s("2621"),r=s("cb7c"),n=s("7726").Reflect;t.exports=n&&n.ownKeys||function(t){var e=a.f(r(t)),s=c.f;return s?e.concat(s(t)):e}},ade3:function(t,e,s){"use strict";function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=chunk-28a6b184.ed128b6b.js.map