//官方的 component
import Vue from 'vue';
import VueRouter from 'vue-router';
//自訂的分頁 component

//通过 Vue.use() 啟用
Vue.use(VueRouter);


//設定頁面路徑
export default new VueRouter({
  routes: [
    {
      //網頁路徑亂輸入的話，一律導到login畫面
      path: '*',
      // redirect: 'product'
    },

    //登入後畫面router
    {
      path: '/admin',
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
      // redirect: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
      //   {
      //     path: 'product_detail',
      //     name: 'ProductDetail',
      //     component: () => import('./views/ProductDetail.vue'),
      //   },
      //   {
      //     path: 'checkout',
      //     name: 'Checkout',
      //     component: () => import('./views/Checkout.vue'),
      //   },
      //   {
      //     path: 'customer_order',
      //     name: 'CustomerOrder',
      //     component: () => import('./views/CustomerOrder.vue'),
      //   },
      //   {
      //     path: 'customer_checkout/:orderId',
      //     name: 'CustomerCheckout',
      //     component: () => import('./views/CustomerCheckout.vue'),
      //   },

      ],
    },

    // {
    //     path: '/',
    //     name: 'Dashboard',
    //     component:() => import('./views/Dashboard.vue'), 
    //     children: [
    //         {
    //             path: 'customer_order',
    //             name: 'CustomerOrder',
    //             component:() => import('./views/CustomerOrder.vue'), 
    //         },
    //         {
    //             path: 'customer_checkout/:orderId',
    //             name: 'CustomerCheckout',
    //             component:() => import('./views/CustomerCheckout.vue'), 
    //         },
    //     ],
    // },
  ],
});