<template>
  <div>
    <Jumbotron />
    <div class="main-contant mb-5">
      <div class="row mx-2">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <ProductSidebar />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-6" v-for="item in products" :key="item.id">
              <div class="card shadow rounded-0 mb-3">
                <div class="text-center animate-box">
                  <div class="product">
                    <div
                      class="product-grid"
                      :style="`background-image: url(${item.imageUrl})`"
                    >
                      <div class="inner">
                        <p>
                          <router-link
                            :to="{
                              path: '/product_detail',
                              query: { name: `${item.id}` },
                            }"
                          >
                            <button class="btn btn-outline-light">
                              更多細節
                            </button>
                          </router-link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="product mt-n3">
                    <div class="desc mx-3">
                      <div class="d-flex justify-content-between">
                        <h3
                          class="text-capitalize badge-outline badge badge-primary badge-pill"
                        >
                          {{ item.category }}
                        </h3>
                        <span class="price">
                          <div v-if="item.origin_price === item.price">
                            原價 {{ item.origin_price | currency }}
                          </div>
                          <del v-if="item.origin_price != item.price"
                            >原價 {{ item.origin_price | currency }}</del
                          >
                        </span>
                      </div>
                      <div class="d-flex justify-content-between mt-n1">
                        <h3 class="text-capitalize">{{ item.title }}</h3>
                        <span
                          class="price"
                          v-if="item.origin_price != item.price"
                          >特價 {{ item.price | currency }}</span
                        >
                      </div>
                      <div class="float-right">
                        <button
                          style="padding: 0.25rem 0.5rem"
                          type="button"
                          @click.prevent="addToCart(item.id)"
                          class="btn btn-primary rounded btn-sm mb-3 mt-1"
                        >
                          <i
                            class="fas fa-spinner fa-spin"
                            v-if="status.loadingItem_addToCart === item.id"
                          ></i>
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <nav aria-label="Page navigation" class="my-5">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ 'disabled': !pagination.has_pre }">
                <span
                  class="page-link"
                  @click.prevent="getProducts(pagination.current_page - 1)"
                  >Previous</span
                >
              </li>
              <li
                class="page-item"
                :class="{ 'active': pagination.current_page === page }"
                v-for="page in pagination.total_pages"
                :key="page"
              >
                <a class="page-link" href="#"  @click.prevent="getProducts(page)"
                  >{{ page }}</a
                >
              </li>
              <li class="page-item" :class="{ 'disabled': !pagination.has_next }">
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
      status: {
        loadingItem_addToCart: "",
      },
      // cart: {},

    };
  },

  methods: {
    /**
     * 讀取產品資料
     * */
    getProducts(page = 1) {
      // const vm = this;
      this.$store.dispatch("getProducts", page);
    },
    addToCart(id, qty = 1) {
      //qty =1代表未傳入qty的話就會預設傳1
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      vm.status.loadingItem_addToCart = id;
      this.$http.post(url, { data: cart }).then((response) => {
        console.log("addToCart", response.data);
        if (response.data.success) {
          vm.$bus.$emit("message:push", response.data.message, "success");
           vm.$store.dispatch("getCart");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
        }
          vm.status.loadingItem_addToCart = "";
      });
    },
    // getCart() {
    //   const vm = this;
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
    //   // vm.isLoading = true;
    //   this.$http.get(url).then((response) => {
    //     console.log("getCart", response.data);
    //     vm.cart = response.data.data;
    //     // vm.isLoading = false;
    //     const cartSize = vm.cart.carts.length;
    //     if (cartSize == "0" || cartSize == null) {
    //       vm.cart_amount = 0;
    //     } else {
    //       vm.cart_amount = cartSize;
    //     }
    //   });
    // },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    categories() {
      return this.$store.state.categories;
    },
    pagination() {
      return this.$store.state.pagination;
    },
  },
  //一進畫面要觸發的事件就放created內
  created() {
    this.getProducts();
    // this.getCart();
  },
};
</script>
