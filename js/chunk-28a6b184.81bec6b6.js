(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a6b184"],{"54fc":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-4 pb-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-sm-6 col-lg-12 mb-5"},[e("h3",[t._v("購物車清單")]),0===t.cart.carts.length?e("div",[e("div",{staticClass:"border-top mb-3"}),e("div",{staticClass:"row justify-content-center align-items-center"},[e("h6",[t._v("購物車是空的 ? 還不逛好逛滿買起來 !")]),e("div",{staticClass:"w-100"}),e("router-link",{attrs:{to:"/product"}},[e("button",{staticClass:"btn btn-primary"},[t._v("\n                現在就去逛逛 !\n              ")])])],1),e("div",{staticClass:"border-top mt-3"})]):t._e(),e("div",{},[t.cart.carts.length>0?e("table",{staticClass:"table table-sm"},[t._m(0),e("tbody",t._l(t.cart.carts,(function(r,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle w-50"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-2"},[e("img",{staticClass:"img-fluid pr-3 py-1 pl-1",staticStyle:{width:"80px",height:"60px"},attrs:{src:"".concat(r.product.imageUrl),alt:""}})]),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"d-flex align-items-center h-100"},[e("span",{staticClass:"text-nowrap"},[t._v(t._s(r.product.title))]),r.coupon?e("div",{staticClass:"text-success"},[t._v("\n                        已套用優惠券\n                      ")]):t._e()])])])]),e("td",{staticClass:"align-middle w-25"},[e("div",{class:["".concat(t.windowWidth>1024?"d-inline-flex":"")]},[r.product.origin_price>r.product.price?e("del",{staticClass:"pr-1"},[t._v("\n                         "+t._s(t._f("currency")(r.product.origin_price))+"\n                       ")]):t._e(),r.product.origin_price<=r.product.price?e("div",[t._v("\n                       "+t._s(t._f("currency")(r.product.origin_price))+"\n                       ")]):t._e(),r.product.origin_price>r.product.price?e("div",{staticClass:"text-success"},[t._v("\n                       "+t._s(t._f("currency")(r.product.price))+"\n                       ")]):t._e()])]),e("td",{staticClass:"align-middle w-25"},[t._v("\n                  "+t._s(r.qty)+"/"+t._s(r.product.unit)+"\n                ")]),e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.removeCartItem(r.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])])])})),0),t._m(1)]):t._e()])]),e("div",{staticClass:"col-md-6 col-sm-6 col-lg-6"},[e("h3",[t._v("優惠券折扣")]),e("div",{staticClass:"input-group mb-3 input-group-sm mt-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addCouponCode.apply(null,arguments)}}},[t._v("\n              套用優惠碼\n            ")])])]),e("p",{staticClass:"text-success mt-n3"},[t._v("現在輸入 SS10 即可享有折扣價喔!")])]),e("div",{staticClass:"col-md-6 col-sm-6 col-lg-6"},[e("h3",[t._v("購物車總計")]),e("table",{staticClass:"table table-sm"},[e("tbody",[e("tr",[e("td",{staticClass:"text-left",attrs:{colspan:"3"}},[t._v("小計")]),e("td",{staticClass:"align-middle text-right font-weight-normal"},[t._v("\n                "+t._s(t._f("currency")(t.cart.total))+"\n              ")])])]),e("tfoot",[e("tr",{staticClass:"font-weight-bold"},[e("td",{staticClass:"text-left",attrs:{colspan:"3"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!=t.cart.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v("\n                "+t._s(t._f("currency")(t.cart.final_total))+"\n              ")])]):t._e()])]),e("router-link",{attrs:{to:"/checkout",event:0!==t.cart.carts.length?"click":"",disabled:0===t.cart.carts.length}},[e("button",{staticClass:"btn btn-primary float-right",attrs:{disabled:0===t.cart.carts.length}},[t._v("\n            前往結帳\n          ")])])],1)])])])},a=[function(){var t=this,e=t._self._c;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("單價")]),e("th",[t._v("數量")]),e("th")])},function(){var t=this,e=t._self._c;return e("tfoot",{staticClass:"border-top"},[e("tr")])}],n=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),c=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={data:function(){return{coupon_code:"",windowWidth:window.innerWidth}},methods:o(o({},Object(c["b"])(["getCart"])),{},{removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/coupon"),r={code:t.coupon_code.toUpperCase().trim()};t.$store.dispatch("updateLoading",!0),this.$http.post(e,{data:r}).then((function(e){var r=e.data.message;e.data.success?(t.getCart(),t.$store.dispatch("updateMessage",{message:r})):t.$store.dispatch("updateMessage",{message:r,status:"danger"}),t.$store.dispatch("updateLoading",!1)}))}}),computed:o({},Object(c["c"])(["cart"])),mounted:function(){var t=this;window.onresize=function(){t.windowWidth=window.innerWidth}}},u=l,d=r("2877"),p=Object(d["a"])(u,s,a,!1,null,null,null);e["default"]=p.exports},"8e6e":function(t,e,r){var s=r("5ca1"),a=r("990b"),n=r("6821"),c=r("11e9"),i=r("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,s=n(t),o=c.f,l=a(s),u={},d=0;while(l.length>d)r=o(s,e=l[d++]),void 0!==r&&i(u,e,r);return u}})},"990b":function(t,e,r){var s=r("9093"),a=r("2621"),n=r("cb7c"),c=r("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=s.f(n(t)),r=a.f;return r?e.concat(r(t)):e}},ade3:function(t,e,r){"use strict";function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function n(t){var e=a(t,"string");return"symbol"===s(e)?e:String(e)}function c(t,e,r){return e=n(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return c}))}}]);
//# sourceMappingURL=chunk-28a6b184.81bec6b6.js.map