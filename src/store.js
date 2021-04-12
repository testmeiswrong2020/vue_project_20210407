//官方的 component
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  //等於data
    isLoading: false,
    currentPage: 0,
    products: [],
    categories: [],
    pagination: {},
    cart: {
      carts: []
    },
  },
  actions: { //等於method
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    //取得產品
    getProducts(context, page) { //page = 1  
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
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
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        console.log("getCart", response.data.data);
      });
    },
    //移除購物車內容
    removeCartItem(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then((response) => {
        // console.log("removeCartItemsuccess", response.data.success);
        context.commit('LOADING', false);
        if (response.data.success) {
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
      let categories_1 = [];
      let categories_2 = [];
      let categories_3 =[];
      let categories_4 =[];
      let combined2 =[];
      categories_1.push("所有");
      categories_2.push("所有");
      categories_3.push("所有");
      categories_4.push("所有");
      payload.forEach((item) => {
        if(item.title.indexOf('包')!=-1&&categories_1.includes(item.category) === false){
          categories_1.push(item.category);
        }
        if(item.title.indexOf('錶')!=-1&&categories_2.includes(item.category) === false){
          categories_2.push(item.category);
        }
        if(item.title.indexOf('指')!=-1&&categories_3.includes(item.category) === false){
          categories_3.push(item.category);
        }

        if(item.title.indexOf('鞋')!=-1&&categories_4.includes(item.category) === false){
          categories_4.push(item.category);
        }
  
      });
       combined2 = [categories_1,categories_2,categories_3,categories_4];
      // console.log("----",combined2);
      state.categories = Array.from(combined2);
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: { //等於computed
    products(state) {
      return state.products;
    },
 
    categories(state) {
      return state.categories;
    },
    pagination(state) {
      return state.pagination;
    },
    cart(state) {
      return state.cart;
    },
  }
});
