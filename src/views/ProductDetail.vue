<template>
  <div>
    <div class="container-fluid pdPage">
      <div class="row mt-4 mx-2">
        <div class="col-sm-8 col-md-8 col-lg-8">
        <div class="pdPage-imgSection">
          <div class="pdPage-img shadow-lg">
            <a class="backwardBtn text-dark" @click.prevent="$router.go(-1)">Back</a>
            <img class="w-100" :src="productdetail.imageUrl" alt />
          </div>
        </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="row">
              <div
                class="col-md-12 col-sm-12 col-xs-12 col-lg-12 align-self-center"
              >
                <h3
                  class="text-capitalize custom-font-family my-0 font-weight-bold"
                >
                  {{ productdetail.category }}
                </h3>
                <h6 class="text-capitalize">{{ productdetail.title }}</h6>
                <div class="d-flex justify-content-start">
                  <del v-if="productdetail.origin_price > productdetail.price">
                    <h6 class="mr-2 mt-1 custom-font-family">
                      {{ productdetail.origin_price | currency }}
                    </h6>
                  </del>
                 <h5 class="mr-2 mt-1 custom-font-family" v-if="productdetail.origin_price <= productdetail.price">
                      {{ productdetail.origin_price | currency }}
                  </h5>
                  <h5 class="text-success custom-font-family" v-if="productdetail.origin_price > productdetail.price">
                    {{ productdetail.price | currency }}
                  </h5>
                </div>
                <button
                  class="btn btn-primary w-100"
                  @click.prevent="addToCart(productdetail.id)"
                >
                  <i
                    :class="{
                      'fas fa-spinner fa-spin':
                        loadingaddtocart === productdetail.id,
                    }"
                  ></i>
                  加到購物車
                </button>
              </div>
            </div>

            <div class="border-top mt-3"></div>
            <div class="mt-3 mb-4">
              <h4 class="text-left">【商品介紹】</h4>
              <div class="ml-4 mt-n1 text-dark">
                {{ productdetail.description }}
              </div>
            </div>
            <h4 class="text-left">【商品詳情】</h4>
            <div class="px-4">
              <table class="table table-sm">
                <tbody>
                  <tr
                    v-for="(item, index) in filterProductDetailContent"
                    :key="index"
                  >
                    <th class="text-nowrap">{{ item.content_title }}</th>
                    <td>{{ item.content }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-12 mt-5">
          <div  v-if="filterSlideData.length > 0">
            <!--可能也喜歡--start-->
            <div class="row row-cols-md-3 row-cols-sm-1">
              <div class="col-md-5 col-3">
                <div class="border border-primary"></div>
              </div>
              <div class="col-md-2 col-6">
                <h5 class="text-primary text-center mt-n2 text-nowrap font-weight-bold">
                  您可能也喜歡
                </h5>
              </div>
              <div class="col-md-5 col-3">
                <div class="border border-primary"></div>
              </div>
            </div>
            <!--可能也喜歡--end-->

            <!--hooper---start-->
            <div class="ml-2">
              <hooper  :settings="hooperSettings"
                style="height: 430px"
                class="row justify-content-center mt-4 mb-5">
                <slide v-for="(item, index) in filterSlideData" :key="index">
                  <div class="card shadow-sm rounded-0   ml-3" >
                    <div class="text-center animate-box">
                      <div class="product">
                        <div class="product-grid" style="height:280px" :style="`background-image: url(${item.imageUrl})`">
                          <div class="inner" style="height:280px">
                            <p>
                               <button class="btn btn-outline-light" @click.prevent="getProductDetail(item.id)">更多細節</button>
                               </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-n4">
                        <div class="desc mx-3">
                          <div class="d-flex justify-content-between">
                            <h5 class="text-capitalize badge-outline badge badge-primary badge-pill">
                              {{ item.category }}
                            </h5>
                            <span class="price"><del v-if="item.origin_price>item.price">原價 {{ item.origin_price | currency }}</del>
                            <span v-if="item.origin_price<=item.price">原價 {{ item.origin_price | currency }}</span>
                            </span>
                          </div>
                          <div class="d-flex justify-content-between mt-n1">
                            <h6 class="text-capitalize custom-font-size pt-1 text-nowrap">
                              {{ item.title }}
                            </h6>
                            <span class="price text-nowrap"  v-if="item.origin_price>item.price">特價 {{ item.price | currency }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
              </div>
              <!--        hooper---end---       -->
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
.table th {
  font-weight: bold;
  width: 8.5vw;
}
.custom-font-family {
  font-family: "Font Awesome 5 Brands";
}
.custom-font-size {
  font-size: 0.9rem;
}
.hooper-prev{
  border-radius: 4px;
      padding: 15px 9px;
      border-color: lightgray;
      position: absolute;
      z-index: 100;
      background-color: lightgray;
}
.hooper-next{
      padding: 15px 9px;
      border-radius: 4px;
      position: absolute;
      z-index: 100;
      border-color: lightgray;
      background-color: lightgray;
      margin-right: -20px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      productdetailcontent: {},
      hooperSettings: {
                    wheelControl: false,
                    breakpoints: {
                       1400: {
                            itemsToShow: 4
                        },
                        1100: {
                            itemsToShow: 3
                        },
                        768: {
                            itemsToShow: 2
                        },
                        480: {
                            itemsToShow: 1
                        },
                    }
                }, 
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    //取得單一 商品細節
    getProductDetail(singleProductId) {
      this.$store.dispatch("getProductDetail", singleProductId);
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch("addToCart", id, qty);
    },
  },
  components: {
    Slide,
    Hooper,
    HooperNavigation,
  },
  computed: {
    ...mapGetters(["productdetail", "products","loadingaddtocart"]),
    filterProductDetailContent() {
      const vm = this;
      var vv = vm.productdetail.content;
      if (vv !== undefined && vv !== "") {
        var obj = JSON.parse("[" + vv + "]");
      }
      return obj;
    },
    filterSlideData() {
      const vm = this;
      let filterSlideData = [];
      let value = vm.productdetail;
      var singleProductTitle = value.title;
      var singleProductId = value.id;
      // console.log("filterSlideData", filterSlideData);
      if (singleProductTitle !== undefined) {
        filterSlideData = vm.products.filter((item, i) => {
          if (item.id !== singleProductId) {
            //id not the same
            // console.log("singleProductTitle", singleProductTitle); //Submariner 蠔式鋼 腕錶
            if (singleProductTitle.indexOf("錶") !== -1) {
              return item.title.indexOf("錶") !== -1;
            } else if (singleProductTitle.indexOf("包") !== -1) {
              return item.title.indexOf("包") !== -1;
            } else if (singleProductTitle.indexOf("鞋") !== -1) {
              return item.title.indexOf("鞋") !== -1;
            } else if (
              singleProductTitle.indexOf("指") !== -1 ||
              singleProductTitle.indexOf("項") !== -1 ||
              singleProductTitle.indexOf("環") !== -1
            ) {
              return (
                item.title.indexOf("指") !== -1 ||
                item.title.indexOf("項") !== -1 ||
                item.title.indexOf("環") !== -1
              );
            }
          }
        });
      }
      return filterSlideData;
    },
  },

  created() {
    //把productid存起來
    this.getProductDetail(this.$route.query.name);
    this.getProducts();
  },
};
</script>
