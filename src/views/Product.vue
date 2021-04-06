<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Jumbotron/>
    <div class="container main-contant mb-5">
      <div class="row">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <ProductSidebar/>
        </div>
        <div class="col-md-9">
          <div class="">
            <!--container-->
            <div class="row">
                <div class="col-md-6">
                <div class="card shadow rounded-0 mb-3">
                  <div class="text-center animate-box">
                    <div class="product">
                      <div
                        class="product-grid"
                        style="background-image: url(images/product-1.jpg)"
                      >
                        <div class="inner">
                          <p>
                            <button class="btn btn-outline-light">
                              更多細節
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="product mt-n3">
                      <div class="desc mx-3">
                        <div class="d-flex justify-content-between">
                          <h3>Hauteville</h3>
                          <span class="price">$350</span>
                        </div>
                        <div class="d-flex justify-content-between mt-n2">
                          <h3>Hauteville</h3>
                          <span class="price">$350</span>
                        </div>
                        <div class="float-right">
                          <button type="button" class="btn btn-primary btn-sm">
                            加入購物車
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
      
              <!-- <div class="col-md-4 text-center animate-box">
            <div class="product">
              <div
                class="product-grid"
                style="background-image: url(images/product-1.jpg)"
              >
                <div class="inner">
                  <p>
                    <a href="single.html" class="icon"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="single.html" class="icon"
                      ><i class="far fa-eye"></i
                    ></a>
                  </p>
                </div>
              </div>
              <div class="desc">
                <h3>
                  <a href="single.html">Hauteville Concrete Rocking Chair</a>
                </h3>
                <span class="price">$350</span>
              </div>
            </div>
          </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Jumbotron from "../components/Jumbotron.vue";
import ProductSidebar from "../components/ProductSidebar.vue";
export default {
  components: {
    Jumbotron,
    ProductSidebar,
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
