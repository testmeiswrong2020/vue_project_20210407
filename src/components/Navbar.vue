<template>
  <div>
    <nav class="fh5co-nav" role="navigation">
      <div class="mx-5 my-1">
        <div class="row row-cols-md-3 row-cols-sm-1">
          <div class="col-md-3 col-9">
            <div id="fh5co-logo">
              <router-link to="/home">安雅二手精品</router-link>
            </div>
          </div>
          <div class="col-md-8 menu-1">
            <div class="d-flex justify-content-end mt-1">
              <ul class="text-center">
                <li>
                  <router-link to="/product">商品</router-link>
                </li>
                <li>
                  <router-link to="/promotion">最新消息</router-link>
                </li>
                <li>
                  <router-link to="/contact">門市位置</router-link>
                </li>
                <!-- <li>
                  <router-link to="/login">會員登入</router-link>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-md-1 col-3">
            <ul class="text-center">
              <li>
                <div class="dropdown ml-auto">
                  <button
                    class="btn btn-sm btn-cart"
                    data-toggle="dropdown"
                    data-flip="false"
                  >
                    <a class="cart">
                      <span>
                        <small class="bg-danger">
                          {{ cart.carts.length }}</small
                        >
                        <i class="fas fa-shopping-cart text-primary"></i>
                      </span>
                    </a>
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-right p-2"
                    style="min-width: 350px"
                  >
                    <h6 class="mb-2">已選擇商品</h6>
                    <div
                      v-if="cart.carts.length === 0"
                      class="text-center py-5"
                    >
                      購物車沒有產品喔 ! !
                    </div>
                    <div
                      v-if="cart.carts.length > 0"
                      style="overflow-y: scroll; max-height: 205px"
                      class="border-top"
                    >
                      <table
                        class="table table-sm table-scroll"
                        style="font-size: 0.6rem"
                      >
                        <tbody>
                          <tr v-for="item in cart.carts" :key="item.id">
                            <td class="align-middle text-center">
                              <button
                                type="button"
                                class="btn btn-sm"
                                @click.prevent="removeCartItem(item.id)"
                              >
                                <i class="far fa-trash-alt text-danger"></i>
                              </button>
                            </td>
                            <td class="align-middle w-25">
                              <img
                                :src="item.product.imageUrl"
                                class="img-fluid"
                              />
                            </td>
                            <td class="align-middle w-50">
                              <span class="text-capitalize">{{
                                item.product.title
                              }}</span>
                              <br />
                              <span>{{ item.qty }}{{ item.product.unit }}</span>
                              <!-- <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                              </div> -->
                            </td>
                            <td class="align-middle text-right text-success">
                              {{ item.final_total | currency }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="d-flex border-top justify-content-between">
                      <span>小計</span>
                      <span class="text-success font-weight-bold">
                        {{ cart.total | currency }}
                      </span>
                    </div>
                    <div class="border-top">
                      <router-link to="/coupon-confirm">
                        <span class="btn btn-primary mt-2 btn-sm">
                          <i class="fas fa-cart-plus"></i>
                          結帳去
                        </span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    //移除購物車內容
    removeCartItem(product_id) {
      this.$store.dispatch("removeCartItem", product_id);
    },
    ...mapActions(["getCart"]),
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  created() {
    //一進畫面要觸發的事件就放created內
    this.getCart();
  },
};
</script>
