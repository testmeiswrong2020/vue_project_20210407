(function(n){function e(e){for(var c,o,u=e[0],i=e[1],d=e[2],h=0,f=[];h<u.length;h++)o=u[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(c=!1)}c&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},o={app:0},r={app:0},a=[];function u(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-0581d1d8":"5cd4783e","chunk-198bd666":"b73f76d0","chunk-28a6b184":"123b4c58","chunk-2d210c47":"d1e196da","chunk-2d21a803":"dd0a39f2","chunk-2d225662":"379e4fc6","chunk-2d2304e2":"0305d0c3","chunk-30b70ce2":"3f3f7ce9","chunk-31276d10":"7d711201","chunk-41e18058":"e2a61051","chunk-4897d141":"5f52ff5a","chunk-7b71024e":"6cca8a76","chunk-8ecd8602":"6d8dc71d","chunk-a3c0a2c2":"ab45fe9e","chunk-cc44bd5c":"803b7183","chunk-e4c31040":"5306a313"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-0581d1d8":1,"chunk-198bd666":1,"chunk-30b70ce2":1,"chunk-31276d10":1,"chunk-41e18058":1,"chunk-4897d141":1,"chunk-8ecd8602":1,"chunk-a3c0a2c2":1,"chunk-cc44bd5c":1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0581d1d8":"6002325c","chunk-198bd666":"ee056ec5","chunk-28a6b184":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d21a803":"31d6cfe0","chunk-2d225662":"31d6cfe0","chunk-2d2304e2":"31d6cfe0","chunk-30b70ce2":"24d3a9cb","chunk-31276d10":"670ff26e","chunk-41e18058":"281af119","chunk-4897d141":"06dfc862","chunk-7b71024e":"31d6cfe0","chunk-8ecd8602":"a6d356aa","chunk-a3c0a2c2":"868a8fc3","chunk-cc44bd5c":"6002325c","chunk-e4c31040":"31d6cfe0"}[n]+".css",r=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===c||h===r))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],h=d.getAttribute("data-href");if(h===c||h===r)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete o[n],s.parentNode.removeChild(s),t(a)},s.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){o[n]=0})));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise((function(e,t){c=r[n]=[e,t]}));e.push(c[2]=a);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(n);var f=new Error;d=function(e){h.onerror=h.onload=null,clearTimeout(s);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,t[1](f)}r[n]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/vue_project_20210407/",i.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var s=h;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("456d"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),o=t("bc3a"),r=t.n(o),a=t("2106"),u=t.n(a),i=(t("4989"),t("2f62")),d=(t("15f5"),t("7051"),t("9062")),h=t.n(d),f=(t("e40d"),t("7bb1")),s=t("60d4"),l=t("4c93"),p=t("0a63"),m=t.n(p),b=t("8c4f");c["a"].use(b["a"]);var k=new b["a"]({routes:[{path:"*",redirect:"/home"},{path:"/admin",redirect:"/login",name:"Dashboard",component:function(){return t.e("chunk-0581d1d8").then(t.bind(null,"0c7c"))},children:[{path:"admin-products",name:"AdminProducts",component:function(){return t.e("chunk-e4c31040").then(t.bind(null,"aa93"))},meta:{requiresAuth:!0}},{path:"admin-orders",name:"AdminOrders",component:function(){return t.e("chunk-2d2304e2").then(t.bind(null,"ec5c"))},meta:{requiresAuth:!0}},{path:"admin-coupons",name:"AdminCoupons",component:function(){return t.e("chunk-7b71024e").then(t.bind(null,"37de"))},meta:{requiresAuth:!0}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-41e18058").then(t.bind(null,"a55b"))}},{path:"/",redirect:"/home",name:"Index",component:function(){return t.e("chunk-cc44bd5c").then(t.bind(null,"d504"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-a3c0a2c2").then(t.bind(null,"bb51"))}},{path:"product",name:"Product",component:function(){return t.e("chunk-31276d10").then(t.bind(null,"d2f1"))}},{path:"product/:category/:series",name:"FilterProducts",component:function(){return t.e("chunk-31276d10").then(t.bind(null,"d2f1"))}},{path:"product-detail",name:"ProductDetail",component:function(){return t.e("chunk-8ecd8602").then(t.bind(null,"5f47"))}},{path:"coupon-confirm",name:"CouponConfirm",component:function(){return t.e("chunk-28a6b184").then(t.bind(null,"54fc"))}},{path:"checkout",name:"Checkout",component:function(){return t.e("chunk-4897d141").then(t.bind(null,"7cb4"))}},{path:"final-checkout/:orderId",name:"FinalCheckout",component:function(){return t.e("chunk-198bd666").then(t.bind(null,"2974"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-2d210c47").then(t.bind(null,"b8fa"))}},{path:"common-question",name:"CommonQuestion",component:function(){return t.e("chunk-30b70ce2").then(t.bind(null,"54b8"))}},{path:"term-of-use",name:"TermOfUse",component:function(){return t.e("chunk-2d225662").then(t.bind(null,"e3db"))}},{path:"promotion",name:"Promotion",component:function(){return t.e("chunk-2d21a803").then(t.bind(null,"bc7c"))}}]}]}),g=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("loading",{attrs:{active:n.isLoading},on:{"update:active":function(e){n.isLoading=e}}}),t("router-view")],1)},v=[],O={computed:{isLoading:function(){return this.$store.state.isLoading}}},y=O,_=(t("5c0b"),t("2877")),w=Object(_["a"])(y,g,v,!1,null,null,null),A=w.exports;c["a"].prototype.$bus=new c["a"];t("a481"),t("c5f6");var D=function(n){var e=Number(n);return"$".concat(e.toFixed(0).replace(/./g,(function(n,e,t){var c=e&&"."!==n&&(t.length-e)%3===0?", ".concat(n).replace(/\s/g,""):n;return c})))},C=function(n){var e=new Date(1e3*n);return e.toLocaleDateString()};t("1c4c"),t("5df3"),t("4f7f");c["a"].use(i["a"]);var x=new i["a"].Store({state:{isLoading:!1,products:[],productdetail:[],brands:[],cart:{carts:[]},chosedindex:0},actions:{updateLoading:function(n,e){n.commit("LOADING",e)},getProducts:function(n){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/products/all");n.commit("LOADING",!0),r.a.get(e).then((function(e){n.commit("PRODUCTS",e.data.products),n.commit("BRANDS",e.data.products),n.commit("LOADING",!1)})).catch((function(n){console.log(n)}))},getCart:function(n){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/cart");r.a.get(e).then((function(e){e.data.data.carts&&n.commit("CART",e.data.data)})).catch((function(n){console.log(n)}))},removeCartItem:function(n,e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/cart/").concat(e);n.commit("LOADING",!0),r.a.delete(t).then((function(e){n.commit("LOADING",!1),n.dispatch("getCart")})).catch((function(n){console.log(n)}))},getProductDetail:function(n,e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/product/").concat(e);n.commit("LOADING",!0),r.a.get(t).then((function(e){n.commit("PRODUCTDETAIL",e.data.product),n.commit("LOADING",!1)})).catch((function(n){console.log(n)}))},showDifferentJumbotron:function(n,e){n.commit("CHOSEDINDEX",e)}},mutations:{LOADING:function(n,e){n.isLoading=e},PRODUCTS:function(n,e){n.products=e},BRANDS:function(n,e){n.brands=e},CART:function(n,e){n.cart=e},PRODUCTDETAIL:function(n,e){n.productdetail=e},CHOSEDINDEX:function(n,e){n.chosedindex=e}},getters:{products:function(n){return n.products},productdetail:function(n){return n.productdetail},chosedindex:function(n){return n.chosedindex},brands:function(n){var e=new Set,t=new Set,c=new Set,o=new Set,r=new Set,a=[];return t.add("所有"),c.add("所有"),o.add("所有"),r.add("所有"),n.products.forEach((function(n,a){e.add(n.category),-1!=n.title.indexOf("包")&&t.add(n.category),-1!=n.title.indexOf("錶")&&c.add(n.category),-1==n.title.indexOf("指")&&-1==n.title.indexOf("環")&&-1==n.title.indexOf("項")||o.add(n.category),-1!=n.title.indexOf("鞋")&&r.add(n.category)})),a=[t,c,o,r],n.brands=Array.from(a),n.brands},cart:function(n){return n.cart}}});Object.keys(l).forEach((function(n){Object(f["d"])(n,l[n])})),Object(f["e"])("zh_TW",s),c["a"].component("ValidationObserver",f["a"]),c["a"].component("ValidationProvider",f["b"]),Object(f["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),c["a"].config.productionTip=!1,c["a"].use(u.a,r.a),c["a"].use(i["a"]),c["a"].component("Loading",h.a),c["a"].filter("currency",D),c["a"].filter("date",C),c["a"].use(m.a),r.a.defaults.withCredentials=!0,new c["a"]({router:k,store:x,el:"#app",render:function(n){return n(A)}}),k.beforeEach((function(n,e,t){if(n.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");r.a.post(c).then((function(n){n.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(n,e,t){"use strict";t("9c0c")},"9c0c":function(n,e,t){}});
//# sourceMappingURL=app.3e344bd4.js.map