(function(e){function n(n){for(var c,o,u=n[0],i=n[1],d=n[2],s=0,h=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},a={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0581d1d8":"a820fa48","chunk-198bd666":"b5cdd9af","chunk-28a6b184":"ed128b6b","chunk-2d210c47":"ba2c86fc","chunk-2d21a803":"f52ee169","chunk-2d225662":"582bfbe0","chunk-2d2304e2":"400f833d","chunk-30b70ce2":"75b824c9","chunk-31276d10":"5537acf3","chunk-3bf9bfb4":"9ea8f36b","chunk-41e18058":"71384d80","chunk-4897d141":"66aea019","chunk-7b71024e":"fb25940a","chunk-a3c0a2c2":"3e18cfae","chunk-cc44bd5c":"4334415f","chunk-e4c31040":"f2fdccd5"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0581d1d8":1,"chunk-198bd666":1,"chunk-30b70ce2":1,"chunk-31276d10":1,"chunk-3bf9bfb4":1,"chunk-41e18058":1,"chunk-4897d141":1,"chunk-a3c0a2c2":1,"chunk-cc44bd5c":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0581d1d8":"6002325c","chunk-198bd666":"ee056ec5","chunk-28a6b184":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d21a803":"31d6cfe0","chunk-2d225662":"31d6cfe0","chunk-2d2304e2":"31d6cfe0","chunk-30b70ce2":"24d3a9cb","chunk-31276d10":"670ff26e","chunk-3bf9bfb4":"b0467293","chunk-41e18058":"281af119","chunk-4897d141":"06dfc862","chunk-7b71024e":"31d6cfe0","chunk-a3c0a2c2":"868a8fc3","chunk-cc44bd5c":"6002325c","chunk-e4c31040":"31d6cfe0"}[e]+".css",a=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===c||s===a))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],s=d.getAttribute("data-href");if(s===c||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],f.parentNode.removeChild(f),t(r)},f.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var h=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",h.name="ChunkLoadError",h.type=c,h.request=o,t[1](h)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vue_project_20210407/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("456d"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),o=t("bc3a"),a=t.n(o),r=t("2106"),u=t.n(r),i=(t("4989"),t("2f62")),d=(t("15f5"),t("7051"),t("9062")),s=t.n(d),h=(t("e40d"),t("7bb1")),f=t("60d4"),l=t("4c93"),p=t("0a63"),m=t.n(p),b=t("8c4f");c["a"].use(b["a"]);var g=new b["a"]({routes:[{path:"*",redirect:"/home"},{path:"/admin",redirect:"/login",name:"Dashboard",component:function(){return t.e("chunk-0581d1d8").then(t.bind(null,"0c7c"))},children:[{path:"admin-products",name:"AdminProducts",component:function(){return t.e("chunk-e4c31040").then(t.bind(null,"aa93"))},meta:{requiresAuth:!0}},{path:"admin-orders",name:"AdminOrders",component:function(){return t.e("chunk-2d2304e2").then(t.bind(null,"ec5c"))},meta:{requiresAuth:!0}},{path:"admin-coupons",name:"AdminCoupons",component:function(){return t.e("chunk-7b71024e").then(t.bind(null,"37de"))},meta:{requiresAuth:!0}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-41e18058").then(t.bind(null,"a55b"))}},{path:"/",redirect:"/home",name:"Index",component:function(){return t.e("chunk-cc44bd5c").then(t.bind(null,"d504"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-a3c0a2c2").then(t.bind(null,"bb51"))}},{path:"product",name:"Product",component:function(){return t.e("chunk-31276d10").then(t.bind(null,"d2f1"))}},{path:"product/:category/:series",name:"FilterProducts",component:function(){return t.e("chunk-31276d10").then(t.bind(null,"d2f1"))}},{path:"product-detail",name:"ProductDetail",component:function(){return t.e("chunk-3bf9bfb4").then(t.bind(null,"5f47"))}},{path:"coupon-confirm",name:"CouponConfirm",component:function(){return t.e("chunk-28a6b184").then(t.bind(null,"54fc"))}},{path:"checkout",name:"Checkout",component:function(){return t.e("chunk-4897d141").then(t.bind(null,"7cb4"))}},{path:"final-checkout/:orderId",name:"FinalCheckout",component:function(){return t.e("chunk-198bd666").then(t.bind(null,"2974"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-2d210c47").then(t.bind(null,"b8fa"))}},{path:"common-question",name:"CommonQuestion",component:function(){return t.e("chunk-30b70ce2").then(t.bind(null,"54b8"))}},{path:"term-of-use",name:"TermOfUse",component:function(){return t.e("chunk-2d225662").then(t.bind(null,"e3db"))}},{path:"promotion",name:"Promotion",component:function(){return t.e("chunk-2d21a803").then(t.bind(null,"bc7c"))}}]}]}),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("loading",{attrs:{active:e.isLoading},on:{"update:active":function(n){e.isLoading=n}}}),t("router-view")],1)},k=[],O={computed:{isLoading:function(){return this.$store.state.isLoading}}},A=O,D=(t("5c0b"),t("2877")),E=Object(D["a"])(A,v,k,!1,null,null,null),y=E.exports,S=(t("a481"),t("c5f6"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))}),T=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()};t("1c4c"),t("5df3"),t("4f7f");c["a"].use(i["a"]);var _=new i["a"].Store({state:{messages:[],isLoading:!1,loadingaddtocart:"s",products:[],productdetail:[],brands:[],cart:{carts:[]},chosedindex:0},actions:{updateLoading:function(e,n){e.commit("LOADING",n)},updateLoadingAddToCart:function(e,n){e.commit("LOADINGADDTOCART",n)},getProducts:function(e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/products/all");e.commit("LOADING",!0),a.a.get(n).then((function(n){e.commit("PRODUCTS",n.data.products),e.commit("BRANDS",n.data.products),e.commit("LOADING",!1)})).catch((function(e){console.log(e)}))},getCart:function(e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/cart");a.a.get(n).then((function(n){n.data.data.carts&&e.commit("CART",n.data.data)})).catch((function(e){console.log(e)}))},addToCart:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",c="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/cart"),o={product_id:n,qty:t};e.commit("LOADINGADDTOCART",n),a.a.post(c,{data:o}).then((function(n){var t=n.data.message;n.data.success?(e.dispatch("getCart"),e.dispatch("updateMessage",{message:t})):e.dispatch("updateMessage",{message:t,status:"danger"}),e.commit("LOADINGADDTOCART","s")}))},removeCartItem:function(e,n){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/cart/").concat(n);e.commit("LOADING",!0),a.a.delete(t).then((function(n){e.commit("LOADING",!1),e.dispatch("getCart")})).catch((function(e){console.log(e)}))},getProductDetail:function(e,n){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/product/").concat(n);e.commit("LOADING",!0),a.a.get(t).then((function(n){e.commit("PRODUCTDETAIL",n.data.product),e.commit("LOADING",!1)})).catch((function(e){console.log(e)}))},showDifferentJumbotron:function(e,n){e.commit("CHOSEDINDEX",n)},updateMessage:function(e,n){var t=n.message,c=n.status,o=void 0===c?"success":c,a=Math.floor(new Date/1e3);e.commit("MESSAGES",{message:t,status:o,timestamp:a}),e.dispatch("removeMessageWithTiming",a)},removeMessage:function(e,n){e.commit("REMOVEMESSAGE",n)},removeMessageWithTiming:function(e,n){setTimeout((function(){e.commit("REMOVEMESSAGEWITHTIMING",n)}),5e3)}},mutations:{LOADING:function(e,n){e.isLoading=n},LOADINGADDTOCART:function(e,n){e.loadingaddtocart=n},MESSAGES:function(e,n){e.messages.push(n)},REMOVEMESSAGE:function(e,n){e.messages.splice(n,1)},REMOVEMESSAGEWITHTIMING:function(e,n){e.messages.forEach((function(t,c){t.timestamp===n&&e.messages.splice(c,1)}))},PRODUCTS:function(e,n){e.products=n},BRANDS:function(e,n){e.brands=n},CART:function(e,n){e.cart=n},PRODUCTDETAIL:function(e,n){e.productdetail=n},CHOSEDINDEX:function(e,n){e.chosedindex=n}},getters:{products:function(e){return e.products},loadingaddtocart:function(e){return e.loadingaddtocart},productdetail:function(e){return e.productdetail},chosedindex:function(e){return e.chosedindex},brands:function(e){var n=new Set,t=new Set,c=new Set,o=new Set,a=new Set,r=[];return t.add("所有"),c.add("所有"),o.add("所有"),a.add("所有"),e.products.forEach((function(e,r){n.add(e.category),-1!=e.title.indexOf("包")&&t.add(e.category),-1!=e.title.indexOf("錶")&&c.add(e.category),-1==e.title.indexOf("指")&&-1==e.title.indexOf("環")&&-1==e.title.indexOf("項")||o.add(e.category),-1!=e.title.indexOf("鞋")&&a.add(e.category)})),r=[t,c,o,a],e.brands=Array.from(r),e.brands},cart:function(e){return e.cart}}});Object.keys(l).forEach((function(e){Object(h["d"])(e,l[e])})),Object(h["e"])("zh_TW",f),c["a"].component("ValidationObserver",h["a"]),c["a"].component("ValidationProvider",h["b"]),Object(h["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),c["a"].config.productionTip=!1,c["a"].use(u.a,a.a),c["a"].use(i["a"]),c["a"].component("Loading",s.a),c["a"].filter("currency",S),c["a"].filter("date",T),c["a"].use(m.a),a.a.defaults.withCredentials=!0,new c["a"]({router:g,store:_,el:"#app",render:function(e){return e(y)}}),g.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");a.a.post(c).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.e1444d6f.js.map