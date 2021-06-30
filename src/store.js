//官方的 component
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true,
  state: {  //等於data
    messages: [],
    isLoading: false,
    loadingaddtocart: 's',
    products: [],
    productdetail: [],
    brands: [],
    // pagination: {},
    cart: {
      carts: []
    },
    chosedindex:0
  },
  actions: { //等於method
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateLoadingAddToCart(context, status) {
      context.commit('LOADINGADDTOCART', status);
    },
    //取得產品
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;

      context.commit('LOADING', true);
      axios.get(api)
        .then((response) => {
          //不能用this.products去接資料，因為此處的this對應的是window。一定要const vm=this;然後這樣來接資料才可
          context.commit('PRODUCTS', response.data.products);
          context.commit('BRANDS', response.data.products);
          // vm.pagination = response.data.pagination;
          context.commit("LOADING", false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //<<一次只load一頁資料>>
    // getProducts(context, page) { //page = 1  
    //   const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
    //   // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
    //   context.commit('LOADING', true);
    //   axios.get(api).then((response) => {
    //     console.log("getProducts", response);
    //     context.commit('PRODUCTS', response.data.products);
    //     context.commit('CATEGORIES', response.data.products);
    //     context.commit('LOADING', false);
    //     context.commit('PAGINATION', response.data.pagination);
    //   });
    // },
    //取得購物車內容
    getCart(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        // console.log("getCart", response.data.data);
      }).catch(function (error) {
        console.log(error);
      });;
    },
    //加入購物車
    addToCart(context, id, qty = '1') {//qty =1代表未傳入qty的話就會預設傳1
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADINGADDTOCART', id);
      axios.post(url, { data: cart }).then((response) => {
        let message = response.data.message;
        if (response.data.success) {
          context.dispatch("getCart");
          context.dispatch('updateMessage', { message });
        } else {
          context.dispatch('updateMessage', { message, status: 'danger' });
        }
        context.commit('LOADINGADDTOCART', 's');
      });
    },
    //移除購物車內容
    removeCartItem(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then((response) => {
        // console.log("removeCartItemsuccess", response.data.success);
        context.commit('LOADING', false);
        context.dispatch("getCart"); // <<注意!!>> 此處用dispatch叫用getcart
      }).catch(function (error) {
        console.log(error);
      });;
    },
    getProductDetail(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      context.commit('LOADING', true);
      axios.get(url)
        .then((response) => {
          // console.log("getProductDetail", response.data.product);
          context.commit('PRODUCTDETAIL', response.data.product);
          context.commit('LOADING', false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showDifferentJumbotron(context, chosedindex) {
      context.commit('CHOSEDINDEX', chosedindex);
    },
    updateMessage(context, { message, status = 'success' }) { 
      const timestamp = Math.floor(new Date() / 1000);
      // console.log('Alert:', message, status);
      context.commit('MESSAGES', { message, status, timestamp });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessage(context, num) {
      context.commit('REMOVEMESSAGE', num);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGEWITHTIMING', timestamp);
      }, 5000);
    },
  },
  mutations: { 
    LOADING(state, status) {
      state.isLoading = status;
    },
    LOADINGADDTOCART(state, payload) {
      state.loadingaddtocart = payload;
    },
    MESSAGES(state, payload) {
      state.messages.push(payload);
    },
    REMOVEMESSAGE (state, num) {
      state.messages.splice(num, 1);
    },
    REMOVEMESSAGEWITHTIMING(state, timestamp) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === timestamp) {
          state.messages.splice(i, 1);
        }
      });
    },
    //儲存資料得行為放到mustation裡面
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    BRANDS(state, payload) {
      state.brands = payload;
    },
    // PAGINATION(state, payload) {
    //   state.pagination = payload;
    // },
    CART(state, payload) {
      state.cart = payload;
    },
    PRODUCTDETAIL(state, payload) {
      state.productdetail = payload;
    },
    CHOSEDINDEX(state, payload) {
      state.chosedindex = payload;
    },
  },
  getters: { //等於computed
    products(state) {
      return state.products;
    },
    loadingaddtocart(state) {
      return state.loadingaddtocart;
    },
    productdetail(state) {
      return state.productdetail;
    },
    chosedindex(state) {
      return state.chosedindex;
    },
    brands(state) {
      const brands = new Set(); //用set方式可以避免加入重複職
      const categories_1 = new Set();
      const categories_2 = new Set();
      const categories_3 = new Set();
      const categories_4 = new Set();
      let combined2 = [];
      categories_1.add("所有");
      categories_2.add("所有");
      categories_3.add("所有");
      categories_4.add("所有");
      state.products.forEach((item, i) => {
        brands.add(item.category);
        if (item.title.indexOf("包") != -1) {
          categories_1.add(item.category);
        }
        if (item.title.indexOf("錶") != -1) {
          categories_2.add(item.category);
        }
        if (
          item.title.indexOf("指") != -1 ||
          item.title.indexOf("環") != -1 ||
          item.title.indexOf("項") != -1
        ) {
          categories_3.add(item.category);
        }
        if (item.title.indexOf("鞋") != -1) {
          categories_4.add(item.category);
        }
      });
      combined2 = [categories_1, categories_2, categories_3, categories_4];
      state.brands = Array.from(combined2);
      return state.brands;
    },
    // pagination(state) {
    //   return state.pagination;
    // },
    cart(state) {
      return state.cart;
    },
  }
});
