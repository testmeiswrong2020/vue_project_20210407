//官方的 component
import Vue from 'vue';
import VueRouter from 'vue-router';

//通过 Vue.use() 啟用
Vue.use(VueRouter);


//設定頁面路徑
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      //網頁路徑亂輸入的話，一律導到login畫面
      path: '*',
      redirect: '/home'
    },

    //登入後畫面router
    {
      path: '/admin',
      redirect: '/login',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      //使用children來製作巢狀router
      children: [
        {
          path: 'admin-products',
          name: 'AdminProducts',
          component: () => import('./views/AdminProducts.vue'),
          //    meta: { requiresAuth: true }需要放在內部是為了確保進入product頁面前是需要驗證的
          meta: { requiresAuth: true },
        },
        //
        {
          path: 'admin-orders',
          name: 'AdminOrders',
          component: () => import('./views/AdminOrders.vue'),
          //    meta: { requiresAuth: true }需要放在內部是為了確保進入product頁面前是需要驗證的
          meta: { requiresAuth: true },
        },
        //
        {
          path: 'admin-coupons',
          name: 'AdminCoupons',
          component: () => import('./views/AdminCoupons.vue'),
          //    meta: { requiresAuth: true }需要放在內部是為了確保進入product頁面前是需要驗證的
          meta: { requiresAuth: true },
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
        //登入前畫面router
    {
      path: '/',
      redirect: '/home',
      name: 'Index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'product',
          name: 'Product',
          component: () => import('./views/Product.vue'),
        },
        {
          path: 'product/:category/:series',
          name: 'FilterProducts',
          component: () => import('./views/Product.vue')
        },
        {
          path: 'product-detail',
          name: 'ProductDetail',
          component: () => import('./views/ProductDetail.vue'),
        },
        {
          path: 'coupon-confirm',
          name: 'CouponConfirm',
          component: () => import('./views/CouponConfirm.vue'),
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: () => import('./views/Checkout.vue'),
        },
        {
          path: 'final-checkout/:orderId',
          name: 'FinalCheckout',
          component: () => import('./views/FinalCheckout.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('./views/Contact.vue'),
        },
        {
          path: 'common-question',
          name: 'CommonQuestion',
          component: () => import('./views/CommonQuestion.vue'),
        },
        {
          path: 'term-of-use',
          name: 'TermOfUse',
          component: () => import('./views/TermOfUse.vue'),
        },
        {
          path: 'promotion',
          name: 'Promotion',
          component: () => import('./views/Promotion.vue'),
        },

      ],
    },
  ],
});