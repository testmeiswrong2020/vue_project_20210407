(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2304e2"],{ec5c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-4"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t._f("date")(a.create_at)))]),e("td",[a.user?e("span",{domProps:{textContent:t._s(a.user.email)}}):t._e()]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v("\n              "+t._s(a.product.title)+" 數量："+t._s(a.qty)+"\n              "+t._s(a.product.unit)+"\n            ")])})),0)]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",[a.is_paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])})),0)]),void 0!==t.pagination?e("nav",[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("span",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.getOrders(t.pagination.current_page-1)}}},[t._v("Previous")])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getOrders(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getOrders(t.pagination.current_page+1)}}},[t._v("Next")])])],2)]):t._e()])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("購買時間")]),e("th",[t._v("電子郵件")]),e("th",[t._v("購買款項")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],i={data:function(){return{orders:{},pagination:{}}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("2021_03_23_vue_project","/admin/orders?page=").concat(t);a.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(t){a.orders=t.data.orders,a.pagination=t.data.pagination,a.$store.dispatch("updateLoading",!1)}))}},created:function(){this.getOrders()}},r=i,c=e("2877"),o=Object(c["a"])(r,s,n,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d2304e2.0305d0c3.js.map