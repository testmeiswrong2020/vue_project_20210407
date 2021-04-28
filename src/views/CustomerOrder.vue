<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="
              height: 150px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          >
            <!--ES6寫法插入圖片-->
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
              <del class="h6" v-if="item.price">{{ item.origin_price }}</del>
              <div class="h5" v-if="item.price">{{ item.price }}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addToCart(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <!--pagination-start-->
      <div class="col-md-12">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: !pagination.has_pre }">
              <span
                class="page-link"
                @click.prevent="getProducts(pagination.current_page - 1)"
                >Previous</span
              >
            </li>
            <li
              class="page-item"
              :class="{ active: pagination.current_page === page }"
              v-for="page in pagination.total_pages"
              :key="page"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="getProducts(page)"
                >{{ page }}</a
              >
            </li>
            <li class="page-item" :class="{ disabled: !pagination.has_next }">
              <a
                class="page-link"
                href="#"
                @click.prevent="getProducts(pagination.current_page + 1)"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!--pagination-end-->
    </div>
    <!--cart-->
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">
                {{ item.final_total | currency }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
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
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>

        <!---form--start-->
        <div class="mt-4">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="createOrder" class="needs-validation">
              <validation-provider
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useremail">電子信箱</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="useremail"
                    :class="classes"
                    v-model="form.user.email"
                    placeholder="請輸入 Email"
                    required
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="username"
                    :class="classes"
                    v-model="form.user.name"
                    placeholder="輸入姓名"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="usertel">收件人電話</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="usertel"
                    :class="classes"
                    v-model="form.user.tel"
                    placeholder="請輸入電話"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useraddress">收件人地址</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    :class="classes"
                    id="useraddress"
                    v-model="form.user.address"
                    placeholder="請輸入地址"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>

                <!--地址欄位不得留空-->
              </validation-provider>
          
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea
                    id="comment"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>
                  <span class="text-danger"></span>
                </div>

              <div class="text-right">
                <button class="btn btn-danger" :disabled="invalid">
                  送出訂單
                </button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
    <!---form--end-->

    <!---product detail modal-->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h4" v-if="product.price">
                現在只要 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                <!--num為此商品數量，unit為單位-->
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
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
    /**
     * 讀取資料
     * */
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true; //顯示loading
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.products = response.data.products;
        vm.isLoading = false; //隱藏loading
        vm.pagination = response.data.pagination;
      });
    },
    //取得單一 商品細節
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;

      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        // console.log("getProduct", response.data);
        vm.product = response.data.product;
        $("#productModal").modal("show");
        vm.status.loadingItem = "";
      });
    },
    //
    addToCart(product_id, qty = 1) {
      //qty =1代表未傳入qty的話就會預設傳1
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: product_id,
        qty,
      };
      vm.status.loadingItem_addToCart = product_id;
      this.$http.post(url, { data: cart }).then((response) => {
        console.log("addToCart", response.data);
        this.getCart();
        vm.status.loadingItem_addToCart = "";
        $("#productModal").modal("hide");
      });
    },
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
    //新增優惠券
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log("addCouponCode", response.data);
        if (response.data.success) {
          vm.getCart();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.isLoading = false;
      });
    },
    //
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(url, { data: order }).then((response) => {
        console.log("createOrder", response.data);
        if (response.data.success) {
        vm.$router.push(`/final-checkout/${response.data.orderId}`);
          // this.getCart();
          //  this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.isLoading = false;
      });
    },
    //
  },
  //一進畫面要觸發的事件就放created內
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>