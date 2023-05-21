(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f372acb"],{2621:function(t,e){e.f=Object.getOwnPropertySymbols},"3ba0":function(t,e,r){"use strict";r("b395")},"7cb4":function(t,e,r){"use strict";r.r(e);r("7f7f");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-4 pb-5"},[e("div",{staticClass:"container"},[t._m(0),e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(r){var s=r.invalid;return[e("section",{staticClass:"row justify-content-center mt-4"},[e("div",{staticClass:"col-md-6"},[e("h5",{staticClass:"mb-2 text-center"},[t._v("訂單資訊")]),e("form",{staticClass:"needs-validation"},[e("div",{staticClass:"d-inline-flex"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.errors,a=r.classes;return[e("div",{staticClass:"form-group mr-3"},[e("label",{staticClass:"text-dark",attrs:{for:"username"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:a,attrs:{type:"text",name:"收件人姓名",id:"username",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.errors,a=r.classes;return[e("div",{staticClass:"form-group"},[e("label",{staticClass:"text-dark",attrs:{for:"usertel"}},[t._v("收件人電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:a,attrs:{type:"tel",name:"收件人電話",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.errors,a=r.classes;return[e("div",{staticClass:"form-group"},[e("label",{staticClass:"text-dark",attrs:{for:"useremail"}},[t._v("電子信箱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:a,attrs:{type:"email",name:"電子信箱",id:"useremail",placeholder:"請輸入電子信箱",required:""},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.errors,a=r.classes;return[e("div",{staticClass:"form-group"},[e("label",{staticClass:"text-dark",attrs:{for:"useraddress"}},[t._v("收件人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:a,attrs:{type:"text",name:"收件人地址",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("div",{staticClass:"form-group"},[e("label",{staticClass:"text-dark mr-1",attrs:{for:"comment"}},[t._v("留言 ")]),t._v("(選填)\n              "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"comment",cols:"30",rows:"4"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),e("span",{staticClass:"text-danger"})]),e("div",{staticClass:"text-right"})],1)]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card shadow"},[e("h5",{staticClass:"my-3 text-center"},[t._v("您的訂單")]),e("div",{staticClass:"container"},[e("table",{staticClass:"table"},[e("thead",[e("th",[t._v("商品")]),e("th"),e("th",[t._v("小計")])]),e("tbody",t._l(t.cart.carts,(function(r,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle",attrs:{colspan:"2"}},[t._v("\n                      "+t._s(r.product.title)+" X "+t._s(r.qty)+"\n                    ")]),e("td",{staticClass:"align-middle text-right"},[t._v("\n                      "+t._s(t._f("currency")(r.final_total))+"\n                    ")])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-left font-weight-bold",attrs:{colspan:"2"}},[t._v("\n                      總計\n                    ")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])])])]),e("div",{staticClass:"container mb-3 mt-auto"},[e("form",{staticClass:"text-dark"},[e("div",{staticClass:"form-row align-items-around"},[e("legend",{staticClass:"font-weight-bold col-form-label col-sm-2 float-left pt-0 text-nowrap"},[t._v("\n                      配送方式\n                    ")]),e("div",{staticClass:"col-sm-10 text-right"},[e("div",{staticClass:"form-check mr-3"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios1",value:"option1",checked:""}}),e("label",{staticClass:"form-check-label",attrs:{for:"gridRadios1"}},[t._v("\n                          超商付款\n                        ")])]),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios2",value:"option2"}}),e("label",{staticClass:"form-check-label",attrs:{for:"gridRadios2"}},[t._v("\n                          信用卡付款\n                        ")])])])])]),e("button",{staticClass:"btn btn-success w-100 mt-3",attrs:{disabled:s},on:{click:function(e){return e.preventDefault(),t.createOrder.apply(null,arguments)}}},[t._v("\n                送出訂單\n              ")])])])])])])]}}])})],1)])},a=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"row text-center"},[e("div",{staticClass:"col-md-4 col-sm-12"},[e("div",{staticClass:"alert alert-primary alert-rounded mb-2",attrs:{role:"alert"}},[t._v("\n          1.輸入訂單資料\n        ")])]),e("div",{staticClass:"col-md-4 col-sm-12"},[e("div",{staticClass:"alert alert-light border-primary text-primary alert-rounded mb-2",attrs:{role:"alert"}},[t._v("\n          2.金流付款\n        ")])]),e("div",{staticClass:"col-md-4 col-sm-12"},[e("div",{staticClass:"alert alert-light border-primary text-primary alert-rounded mb-2",attrs:{role:"alert"}},[t._v("\n          3.完成\n        ")])])])}],o=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),n=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:l(l({},Object(n["b"])(["getCart"])),{},{createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/order"),r=t.form;t.$store.dispatch("updateLoading",!0),t.$http.post(e,{data:r}).then((function(e){var r=e.data.message;e.data.success?(t.$router.push("/final-checkout/".concat(e.data.orderId)),t.$store.dispatch("getCart"),t.$store.dispatch("updateMessage",{message:r})):t.$store.dispatch("updateMessage",{message:r,status:"danger"}),t.$store.dispatch("updateLoading",!1)}))}}),computed:l({},Object(n["c"])(["cart"]))},u=c,d=(r("3ba0"),r("2877")),m=Object(d["a"])(u,s,a,!1,null,null,null);e["default"]=m.exports},"7f7f":function(t,e,r){var s=r("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in a||r("9e1e")&&s(a,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8e6e":function(t,e,r){var s=r("5ca1"),a=r("990b"),o=r("6821"),n=r("11e9"),i=r("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,s=o(t),l=n.f,c=a(s),u={},d=0;while(c.length>d)r=l(s,e=c[d++]),void 0!==r&&i(u,e,r);return u}})},"990b":function(t,e,r){var s=r("9093"),a=r("2621"),o=r("cb7c"),n=r("7726").Reflect;t.exports=n&&n.ownKeys||function(t){var e=s.f(o(t)),r=a.f;return r?e.concat(r(t)):e}},ade3:function(t,e,r){"use strict";function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function o(t){var e=a(t,"string");return"symbol"===s(e)?e:String(e)}function n(t,e,r){return e=o(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b395:function(t,e,r){}}]);
//# sourceMappingURL=chunk-1f372acb.e85cb331.js.map