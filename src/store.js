//官方的 component
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: [],
    categories: [],
    pagination: {},
    cart:{
      carts:[]
    },
    // carts_length:"0"
    // isLoading_removeCart: false,
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    //取得產品
    getProducts(context, page) { //page = 1 
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        console.log("getProducts", response);
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('LOADING', false);
        context.commit('PAGINATION', response.data.pagination);
      });
    },
    //取得購物車內容
    getCart(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        if( response.data.data.carts){
          context.commit('CART', response.data.data);
        }
        console.log("getCart", response.data.data);
      });
    },
    //移除購物車內容
    removeCartItem(context,id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then((response) => {
        // console.log("removeCartItemsuccess", response.data.success);
        context.commit('LOADING', false);
        if(response.data.success){
          // this.$bus.$emit("message:push", response.data.message, "success");
          context.dispatch("getCart"); // <<注意!!>> 此處用dispatch叫用getcart
        } 
        // else{
        //   this.$bus.$emit("message:push", response.data.message, "danger");
        // }
      });
    },



  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    //儲存資料得行為放到mustation裡面
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
  },
});
