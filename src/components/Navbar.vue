<template>
  <div>
    <div class="">
      <!--container-->
      <loading :active.sync="isLoading"></loading>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="nav-link">
          <h3 class="text-dark font-weight-bold">Luxury</h3>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li></li>
            <li class="nav-item mr-2">
              <a href="#/product" class="nav-link">商品</a>
            </li>
            <li class="nav-item mr-2">
              <a href="#/promotion" class="nav-link">最新消息</a>
            </li>
            <li class="nav-item mr-2">
              <a href="#/contact" class="nav-link">門市位置</a>
            </li>

            <li class="nav-item mr-2 d-none">
              <a href="#/login" class="nav-link">會員登入</a>
            </li>
            <li>
              <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
              <div class="dropdown ml-auto">
                <button
                  class="btn btn-sm btn-cart"
                  data-toggle="dropdown"
                  data-flip="false"
                  @click="getCart"
                >
                  <i class="fas fa-shopping-cart text-dark fa-2x"></i>
                  <span class="badge badge-pill badge-danger">9</span>
                  <span class="sr-only">unread messages</span>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right p-3"
                  style="min-width: 300px"
                  data-offset="400"
                >
                  <h6>已選擇商品</h6>
                  <table class="table table-sm">
                    <tbody>
                      <tr v-for="item in cart.carts" :key="item.id" class="">
                        <td class="align-middle text-center">
                          <button
                            type="button"
                            class="btn btn-sm"
                            @click="removeCartItem(item.id)"
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </td>
                        <td class="align-middle">
                          {{ item.product.title }}
                          <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                          </div>
                        </td>
                        <td class="align-middle">
                          {{ item.qty }}{{ item.product.unit }}
                        </td>
                        <td class="align-middle text-right">
                          {{ item.final_total | currency }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="3" class="text-right">小計</td>
                        <td class="text-right">{{ cart.total | currency }}</td>
                      </tr>
                    </tfoot>
                  </table>
                  <router-link to="/checkout" class="nav-link">
                    <button class="btn btn-block btn-primary">
                      <i class="fas fa-shopping-cart"></i> 結帳去
                    </button>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: "",
        loadingItem_addToCart: "",
        loadingItem_getCart: "",
      },
      cart: {},
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },

  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log("getCart", response.data);
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    //移除購物車內容
    removeCartItem(product_id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${product_id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log("removeCartItem", response.data);
        vm.getCart();
        vm.isLoading = false;
      });
    },

    //
  },
  //一進畫面要觸發的事件就放created內
  // created() {
  //   // this.getProducts();
  //   this.getCart();
  // },
};
</script>
