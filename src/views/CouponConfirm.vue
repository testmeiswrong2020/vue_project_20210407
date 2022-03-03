<template>
  <div class="pt-4 pb-5">
    <div class="container">
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
              class="table  table-sm"
              v-if="cart.carts.length > 0"
            >
              <thead>
                <th>品名</th>
                <th>單價</th>
                <th>數量</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart.carts" :key="index">
                  <td class="align-middle w-50">
                    <div class="row no-gutters">
                      <div class="col-md-2">
                        <img
                          class="img-fluid pr-3 py-1 pl-1"
                          style="width: 80px;height:60px"
                          :src="`${item.product.imageUrl}`"
                          alt=""
                        />
                      </div>
                      <div class="col-md-10">
                        <div class="d-flex align-items-center h-100">
                        <span class="text-nowrap ">{{
                          item.product.title
                        }}</span>
                        <div class="text-success" v-if="item.coupon">
                          已套用優惠券
                        </div></div>
                      </div>
                    </div>
                  </td>
               
                  <td class="align-middle w-25">
                    <div  :class="[`${windowWidth >  1024 ? 'd-inline-flex':''}`]">
                         <del class="pr-1" v-if="item.product.origin_price > item.product.price">
                           {{ item.product.origin_price | currency }}
                         </del>
                         <div v-if="item.product.origin_price <= item.product.price">
                         {{ item.product.origin_price | currency }}
                         </div>
                         <div class="text-success" v-if="item.product.origin_price > item.product.price">
                         {{ item.product.price | currency }}
                         </div>
                    </div>
                  </td>
                   <td class="align-middle w-25">
                    {{ item.qty }}/{{ item.product.unit }}
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
          <!-- <p class="text-dark">
            結帳前在購物車中使用優惠券。點擊 “套用優惠券”
            按鈕，將優惠券添加到您的訂單中。訂單總額將根據所輸入的優惠券代碼進行金額折抵。
          </p> -->
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
          <p class="text-success mt-n3">現在輸入 SS10 即可享有折扣價喔!</p>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6">
          <h3>購物車總計</h3>
          <table class="table  table-sm">
            <tbody>
              <tr>
                <td colspan="3" class="text-left">小計</td>
                <td class="align-middle text-right font-weight-normal">
                  {{ cart.total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="font-weight-bold">
                <td colspan="3" class=" text-left">總計</td>
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
          <router-link to="/checkout"  :event="cart.carts.length !== 0 ? 'click' : ''" :disabled="cart.carts.length === 0">
            <button class="btn btn-primary float-right" :disabled="cart.carts.length === 0">
              前往結帳
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      coupon_code: "",
      windowWidth: window.innerWidth
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
        code: vm.coupon_code.toUpperCase().trim(),//轉大寫後除空白
      };
      vm.$store.dispatch("updateLoading", true);
      this.$http.post(url, { data: coupon }).then((response) => {
        // console.log("addCouponCode", response.data);
        let message= response.data.message;
        if (response.data.success) {
          vm.getCart();
          vm.$store.dispatch('updateMessage', { message });
        } else {
          vm.$store.dispatch('updateMessage', { message, status: 'danger' });
        }
        vm.$store.dispatch("updateLoading", false);
      });
    },
  },
  computed: {
    ...mapGetters(["cart"]),
  },
 mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    }
};
</script>
