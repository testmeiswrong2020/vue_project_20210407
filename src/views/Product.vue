<template>
  <div>
    <Jumbotron />
    <div class="main-contant mb-5">
      <div class="row mx-2">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <div class="p-2 sticky-top products-side-bar">
            <div class="px-3 py-4 border-top h6 mb-0">
                <router-link  to="/product">
              商品列表</router-link> 
              </div>
            <ul id="accordionProducts" class="navbar-nav">
              <li class="nav-item border-top py-2">
                <div class="card border-0">
                  <div
                    id="productsHeadingOne"
                    class="card-header p-0 border-0 bg-white"
                  >
                    <h5 class="mb-0">
                      <button
                        data-toggle="collapse"
                        data-target="#ProductsCollapseOne"
                        class="btn btn-link dropdown-toggle h7 mb-0 pl-md-3 pr-md-1"
                      >
                        精品包 <span class="h8">HANDBAG</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="ProductsCollapseOne"
                    data-parent="#accordionProducts"
                    class="collapse"
                  >
                    <div class="card-body py-2">
                      <ul class="navbar-nav mr-auto">
                        <li
                          class="nav-item"
                          v-for="item in brands[0]"
                          :key="item"
                          @click.prevent="showDifferentJumbotron(0)"
                        >
                          <router-link
                            class="nav-link h7 text-capitalize font-weight-normal mb-0"
                            :to="`/product/handbag/${item}`"
                            >{{ item }} 系列</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item border-top py-2">
                <div class="card border-0">
                  <div
                    id="productsHeadingTwo"
                    class="card-header p-0 border-0 bg-white"
                  >
                    <h5 class="mb-0">
                      <button
                        data-toggle="collapse"
                        data-target="#ProductsCollapseTwo"
                        class="btn btn-link dropdown-toggle h7 mb-0 pl-md-3 pr-md-1"
                      >
                        腕錶
                        <span class="h8">WATCH</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="ProductsCollapseTwo"
                    aria-labelledby="headingOne"
                    data-parent="#accordionProducts"
                    class="collapse"
                  >
                    <div class="card-body py-2">
                      <ul class="navbar-nav mr-auto">
                        <li
                          class="nav-item"
                          v-for="item in brands[1]"
                          :key="item"
                              @click.prevent="showDifferentJumbotron(1)"
                        >
                          <router-link
                            class="nav-link h7 text-capitalize font-weight-normal mb-0"
                            :to="`/product/watch/${item}`"
                            >{{ item }} 系列</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item border-top py-2">
                <div class="card border-0">
                  <div
                    id="productsHeadingThree"
                    class="card-header p-0 border-0 bg-white"
                  >
                    <h5 class="mb-0">
                      <button
                        data-toggle="collapse"
                        data-target="#ProductsCollapseThree"
                        class="btn btn-link dropdown-toggle h7 mb-0 pl-md-3 pr-md-1"
                      >
                        珠寶
                        <span class="h8">JEWELRY</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="ProductsCollapseThree"
                    data-parent="#accordionProducts"
                    class="collapse"
                  >
                    <div class="card-body py-2">
                      <ul class="navbar-nav mr-auto">
                        <li
                          class="nav-item"
                          v-for="item in brands[2]"
                          :key="item"
                            @click.prevent="showDifferentJumbotron(2)"
                        >
                          <router-link
                            class="nav-link text-capitalize h7 font-weight-normal mb-0"
                            :to="`/product/jewelry/${item}`"
                            >{{ item }} 系列</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item border-top border-bottom py-2">
                <div class="card border-0">
                  <div
                    id="productsHeadingFour"
                    class="card-header p-0 border-0 bg-white"
                  >
                    <h5 class="mb-0">
                      <button
                        data-toggle="collapse"
                        data-target="#ProductsCollapseFour"
                        class="btn btn-link dropdown-toggle h7 mb-0 pl-md-3 pr-md-1"
                      >
                        鞋履
                        <span class="h8">SHOE</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="ProductsCollapseFour"
                    data-parent="#accordionProducts"
                    class="collapse"
                  >
                    <div class="card-body py-2">
                      <ul class="navbar-nav mr-auto">
                        <li
                          class="nav-item"
                          v-for="item in brands[3]"
                          :key="item"
                            @click.prevent="showDifferentJumbotron(3)"
                        >
                          <router-link
                            class="nav-link h7 text-capitalize font-weight-normal mb-0"
                            :to="`/product/shoe/${item}`"
                            >{{ item }} 系列</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 左側選單 (List group) -->
        </div>
        <div class="col-md-9">
          <div class="row py-2">
            <div
              class="col-md-6"
              v-for="(item, i) in filterData[currentPage]"
              :key="i"
            >
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
                              path: '/product-detail',
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
                            :class="{
                              'fas fa-spinner fa-spin':
                                status.loadingItem_addToCart === item.id,
                            }"
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
              <li class="page-item"   :class="{ 'disabled': currentPage === 0 }">
                <span class="page-link"
                 @click.prevent="currentPage=currentPage -1">Previous</span>
              </li>
              <li  class="page-item"
                :class="{ 'active': currentPage === page - 1 }"
                v-for="page in filterData.length"
                :key="page">
                <span  class="page-link"
                  @click.prevent="currentPage = page - 1">{{ page }}</span>
              </li>
              <li class="page-item" :class="{ 'disabled': currentPage=== (filterData.length-1)}">
                <span class="page-link"
                 @click.prevent="currentPage=currentPage +1">Next</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Jumbotron,
  },
  data() {
    return {
      status: {
        loadingItem_addToCart: "s",
      },
      currentPage: 0,
    };
  },

  methods: {
    /**
     * 讀取產品資料
     * */
    ...mapActions(["getProducts"]),
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
        vm.status.loadingItem_addToCart = "s";
      });
    },
    //Jumbotron
     showDifferentJumbotron(chosedindex){
     this.$store.dispatch("showDifferentJumbotron", chosedindex);
    }
  },
  computed: {
    ...mapGetters(["brands", "products"]),
    filterData() {
      const vm = this;
      //先過濾資料後才處理後面的分頁
      let filteredData = [];
      if ( vm.$route.fullPath === "/product/" || vm.$route.fullPath === "/product" ) {
        filteredData = vm.products;
      } else {
        let category = vm.$route.params.category;
        let series = vm.$route.params.series;
        if (vm.$route.params.category === "jewelry") {
          if (vm.$route.params.series === "所有") {
            filteredData = vm.products.filter((item, i) => {
              return (
                item.title.indexOf("指") !== -1 ||
                item.title.indexOf("項") !== -1 ||
                item.title.indexOf("環") !== -1
              );
            });
          } else {
            filteredData = vm.products.filter((item) => {
              return (
                item.category === series &&
                (item.title.indexOf("指") !== -1 ||
                  item.title.indexOf("項") !== -1 ||
                  item.title.indexOf("環") !== -1)
              );
            });
          }
        } else if (category === "handbag") {
          if (series === "所有") {
            filteredData = vm.products.filter((item) => {
              return item.title.indexOf("包") !== -1;
            });
          } else {
            filteredData = vm.products.filter((item) => {
              return (
                item.category === series && item.title.indexOf("包") !== -1
              );
            });
          }
        } else if (category === "shoe") {
          if (series === "所有") {
            filteredData = vm.products.filter((item) => {
              return item.title.indexOf("鞋") !== -1;
            });
          } else {
            filteredData = vm.products.filter((item) => {
              return (
                item.category === series && item.title.indexOf("鞋") !== -1
              );
            });
          }
        } else if (category === "watch") {
          if (series === "所有") {
            filteredData = vm.products.filter((item) => {
              return item.title.indexOf("錶") !== -1;
            });
          } else {
            filteredData = vm.products.filter((item) => {
              return (
                item.category === series && item.title.indexOf("錶") !== -1
              );
            });
          }
        }
      }

      //分頁
      const newData = [];
      filteredData.forEach((item, i) => {
        if (i % 10 === 0) {
          //每10筆資料加入一個陣列
          newData.push([]);
        }
        const page = parseInt(i / 10); //取頁數
        newData[page].push(item); //把指定頁數資料push進
      });
      return newData;
    },
  },
  created() {
    //一進畫面要觸發的事件就放created內
    this.getProducts();
  },
};
</script>
