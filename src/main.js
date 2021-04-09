
import Vue from 'vue';

import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

//install fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Loading from 'vue-loading-overlay';// Import component
import 'vue-loading-overlay/dist/vue-loading.css';// Import stylesheet
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize('zh_TW', TW);
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});
import VueCarousel from 'vue-carousel';

import router from './router';
import App from './App.vue';
import './bus';
import currencyFilter from './filters/currency.js';
import dateFilter from './filters/date.js';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.component("Loading",Loading);//以global全域方式啟用loading 特效
Vue.filter("currency",currencyFilter);
Vue.filter('date', dateFilter);
Vue.use(VueCarousel);

//
//此行作用為加入cookie
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    //如果需要驗證
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`; //此Api用於 檢查用戶是否仍持續登入
    //因為this.$http只能用在元件內，現在是在router內，故改成用axios
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        //回覆true則放行
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});

