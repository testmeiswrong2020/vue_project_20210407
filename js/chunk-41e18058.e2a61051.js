(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41e18058"],{5868:function(t,s,e){},a55b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("form",{staticClass:"form-signin mt-4",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal text-center"},[t._v("請先登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control mt-1",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),e("button",{staticClass:"btn btn mt-3 btn-primary btn-block",attrs:{type:"submit"}},[t._v("\n    登入\n    ")])])])},n=[],r={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;this.$http.post(t,s.user).then((function(t){if(t.data.success){var e=t.data.token,a=t.data.expired;document.cookie="hexToken=".concat(e,";expires=").concat(new Date(a),";"),s.$router.push("/admin/admin-products")}}))}}},o=r,i=(e("a754"),e("2877")),u=Object(i["a"])(o,a,n,!1,null,"9b6b26a2",null);s["default"]=u.exports},a754:function(t,s,e){"use strict";e("5868")}}]);
//# sourceMappingURL=chunk-41e18058.e2a61051.js.map