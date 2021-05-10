<template>
  <div>
    <div class="pl-2">
      <nav class="fh5co-nav navbar navbar-expand-lg">
        <div class="container-fluid">
          <div id="fh5co-logo">
            <router-link to="/home">
              <img src="images/logo.svg" />
            </router-link>
          </div>
          <button
            class="btn navbar-toggler"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="text-dark"
              ><i class="fas fa-bars fa-lg"></i> MENU</span
            >
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <router-link to="/product">
                <li class="nav-item" @click="hideCollapese">商品</li>
              </router-link>
              <router-link to="/promotion">
                <li class="nav-item" @click="hideCollapese">最新消息</li>
              </router-link>
              <router-link to="/contact"
                ><li class="nav-item" @click="hideCollapese">門市位置</li>
              </router-link>
              <li class="nav-item">
                <div class="dropdown ml-auto pr-2">
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
                      style="overflow-y: scroll; max-height: 214px"
                      class="border-top"
                    >
                      <table
                        class="table table-sm table-scroll"
                        style="font-size: 0.6rem;    margin-bottom: -0.01px;"
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
                                class="img-fluid"
                                style="width: 40px; height: 40px"
                                :src="item.product.imageUrl"
                              />
                            </td>
                            <td class="align-middle w-50">
                              <span class="text-capitalize">{{
                                item.product.title
                              }}</span>
                              <br />
                              <span>{{ item.qty }}{{ item.product.unit }}</span>
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
                      <div class="row justify-content-center mt-n3 mb-n4">
                        <router-link
                            to="/coupon-confirm"
                            :event="cart.total !== 0 ? 'click' : ''"
                            :disabled="cart.total === 0"> 
                        <button  type="button"
                          class=" btn  btn-primary"
                          :disabled="cart.total === 0"> <span class=" text-white">
                            <i class="fas fa-cart-plus"></i> 結帳去</span>
                        </button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- END nav -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import $ from 'jquery';

export default {
  methods: {
    ...mapActions(["getCart"]),
    //移除購物車內容
    removeCartItem(product_id) {
      this.$store.dispatch("removeCartItem", product_id);
    },
         hideCollapese(){
      $(".navbar-collapse").removeClass("show");
    },

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
