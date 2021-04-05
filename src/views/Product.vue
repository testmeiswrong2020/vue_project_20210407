<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <jumbotron></jumbotron>
    <div class="container main-contant mb-1">
      <div class="row">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <div class="list-group sticky-top">
            <a
              class="list-group-item list-group-item-action active"
              data-toggle="list"
              href="#list-gold"
            >
              <i class="fa fa-suitcase" aria-hidden="true"></i> 金牌專賣店</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#list-gift"
            >
              <i class="fa fa-gift" aria-hidden="true"></i> 禮品區</a
            >
            <a href="#" class="list-group-item list-group-item-action disabled">
              <i class="fa fa-film" aria-hidden="true"></i> 影音商品</a
            >
            <a href="#" class="list-group-item list-group-item-action disabled">
              <i class="fa fa-paw" aria-hidden="true"></i> 寵物專用</a
            >
            <a href="#" class="list-group-item list-group-item-action disabled">
              <i class="fa fa-tree" aria-hidden="true"></i> 居家環境</a
            >
          </div>
        </div>
        <div class="col-md-9">
          <div class="d-flex mb-4">
            <!-- Search bar -->
            <form class="form-inline my-3 my-lg-0">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-warning" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- 主要商品列表 (Card) -->
          <div class="tab-content">
            <div class="tab-pane active" id="list-gold">
              <div class="row">
                <!-- 金牌 -->
                <div
                  class="col-md-4 mb-4"
                  v-for="item in products"
                  :key="item.id"
                >
                  <div class="card border-0 box-shadow text-left h-100">
                    <img
                      class="card-img-top"
                      :src="`${item.imageUrl}`"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{
                        item.category
                      }}</span>
                      <h5 class="card-title">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                      </h5>
                      <p class="card-text">{{ item.content }}</p>
                      <div
                        class="d-flex justify-content-between align-items-baseline"
                      >
                        <div class="h5" v-if="!item.price">
                          {{ item.origin_price }}
                        </div>
                        <del class="h6" v-if="item.price">{{
                          item.origin_price
                        }}</del>
                        <div class="h5" v-if="item.price">{{ item.price }}</div>
                      </div>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <div class="d-flex">
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
                </div>
              </div>
              <!-- pagination -->
              <nav aria-label="Page navigation" class="my-5">
                <ul class="pagination justify-content-center">
                  <li
                    class="page-item"
                    :class="{ disabled: !pagination.has_pre }"
                  >
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
                  <li
                    class="page-item"
                    :class="{ disabled: !pagination.has_next }"
                  >
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

            <div class="tab-pane" id="list-gift">
              <div class="row align-items-stretch">
                <!-- 禮品 -->
                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1482173074468-5b323335debe?w=1350"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">超精緻禮物</h4>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        搶購去
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- tab-content end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import jumbotron from "../components/Jumbotron.vue";
export default {
  components: {
    jumbotron,
  },
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
          vm.$router.push(`/customer_checkout/${response.data.orderId}`);
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
