<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12 col-sm-6 col-lg-12 mb-5">
          <h3>購物車清單</h3>
          <div v-if="cart.carts.length === 0">
            <div class="border-top mb-3"></div>
            <div class="row justify-content-center align-items-center">
              <h6>購物車是空的 ? 還不逛好逛滿買起來 !</h6>
              <div class="w-100"></div>
              <router-link to="/product">
                <button class="btn btn-primary">
                  現在就去逛逛 !
                </button></router-link
              >
            </div>
            <div class="border-top mt-3"></div>
          </div>
          <div class="">
            <table
              class="table custom-font-size table-sm"
              v-if="cart.carts.length > 0"
            >
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart.carts" :key="index">
                  <td class="align-middle w-50">
                    <div class="row no-gutters">
                      <div class="col-md-2">
                        <img
                          class="img-fluid img-thumbnail"
                          :src="`${item.product.imageUrl}`"
                          alt=""
                        />
                      </div>
                      <div class="col-md-10 pl-3">
                        {{ item.product.title }}
                        <div class="text-success" v-if="item.coupon">
                          已套用優惠券
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle w-25">
                    {{ item.qty }}/{{ item.product.unit }}
                  </td>
                  <td class="align-middle w-25">
                    <!-- <del> {{ item.product.origin_price | currency }}</del><br>
                    <div class="text-success">{{ item.product.price | currency }}</div> -->
                    {{ item.final_total | currency }}
                  </td>
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click.prevent="removeCartItem(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="border-top">
                <tr></tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6">
          <h3>優惠券折扣</h3>
          <p class="text-dark">
            結帳前在購物車中使用優惠券。點擊 “套用優惠券”
            按鈕，將優惠券添加到您的訂單中。訂單總額將根據所輸入的優惠券代碼進行金額折抵。
          </p>
          <!--商品套用優惠券後無法取消折抵，若欲取消金額折抵，請重新訂購商品。-->
          <div class="input-group mb-3 input-group-sm mt-3">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-secondary"
                type="button"
                @click.prevent="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <p class="text-success mt-n3">
            現在輸入 30OFFTODAY 即可享有折扣價喔!
          </p>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6">
          <h3>購物車總計</h3>
          <table class="table custom-font-size table-sm">
            <tbody>
              <tr>
                <!--v-for="item in cart.carts" :key="item.id"-->
                <td colspan="3" class="text-left">小計</td>
                <!-- <td class="align-middle text-right">
                  {{ item.final_total | currency }}
                </td> -->
                <td class="align-middle text-right">
                  {{ cart.total | currency }}
                </td>
              </tr>
              <tr>
                <td colspan="3" class="text-left">寄送方式</td>
                <td>
                  <form class="float-right">
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="customRadio1"
                        >台灣地區宅配</label
                      >
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio2"
                        >國外地區宅配</label
                      >
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-left">總計</td>
                <td class="text-right">{{ cart.total | currency }}</td>
              </tr>
              <tr v-if="cart.final_total != cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">
                  {{ cart.final_total | currency }}
                </td>
              </tr>
            </tfoot>
          </table>
          <router-link to="/checkout">
            <button class="btn btn-primary float-right">
              前往結帳
            </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-font-size {
  font-size: 1rem;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      coupon_code: "",
    };
  },
  methods: {
    ...mapActions(["getCart"]),
    //移除購物車內容
    removeCartItem(product_id) {
      this.$store.dispatch("removeCartItem", product_id);
    },
    //新增優惠券
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.dispatch("updateLoading", true);
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log("addCouponCode", response.data);
        if (response.data.success) {
          vm.getCart();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.$store.dispatch("updateLoading", false);
      });
    },
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
