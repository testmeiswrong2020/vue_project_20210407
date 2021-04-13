<template>
  <div>
    <div class="container-fluid">
      <div class="row mx-5 mt-4">
        <div class="col-md-7">
          <img class="w-100" :src="`${productdetail.imageUrl}`" />
        </div>
        <div class="col-md-5">
          <div class="pl-5">
            <div class="row">
              <div
                class="col-md-12 col-sm-12 col-xs-12 col-lg-12 align-self-center"
              >
                <h3
                  class="text-capitalize custom-font-family my-0 font-weight-bold"
                >
                  {{ productdetail.category }}
                </h3>
                <h6 class="">{{ productdetail.title }}</h6>
                <div class="d-flex justify-content-start">
                  <del
                    ><h6 class="mr-2 mt-1 custom-font-family">
                      {{ productdetail.origin_price | currency }}
                    </h6></del
                  >
                  <h5 class="text-success custom-font-family">
                    {{ productdetail.price | currency }}
                  </h5>
                </div>
                <!--unit-->
                <button
                  class="btn btn-primary w-100"
                  @click.prevent="addToCart(productdetail.id)"
                >
                  <i
                    :class="{
                      'fas fa-spinner fa-spin':
                        status.loadingItem_addToCart === true,
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
                <tbody >
                  <tr  v-for="(item,index) in filterProductDetailContent[0]" :key="index">
                    <th  class=" border-bottom">{{ item}}</th>
                    <div  v-for="(item1,index1) in filterProductDetailContent[1]" :key="index1">
                       <td style="width: 300px;" class=" border-bottom" v-if="index===index1">{{item1}}</td>
                    </div>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
.table th {
  font-weight: bold;
  width: 8.5vw;
}
.custom-font-family {
  font-family: "Font Awesome 5 Brands";
}
</style>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      status: {
        loadingItem_addToCart: false,
      },
      productdetailcontent: {},
      // coupon_code: "",
    };
  },
  methods: {
    //取得單一 商品細節
    getProductDetail(id) {
      this.$store.dispatch("getProductDetail", id);
    },
    addToCart(id, qty = 1) {
      //qty =1代表未傳入qty的話就會預設傳1
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      vm.status.loadingItem_addToCart = true;
      this.$http.post(url, { data: cart }).then((response) => {
        console.log("addToCart", response.data);
        if (response.data.success) {
          vm.$bus.$emit("message:push", response.data.message, "success");
          vm.$store.dispatch("getCart");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.status.loadingItem_addToCart = false;
      });
    },
  },
  computed: {
    ...mapGetters(["productdetail"]),
    filterProductDetailContent() {
      const vm = this;
      const newData = [];
      let contentAry = new Map();
      let obj={};
      let value = vm.productdetail.content;
      if (value !== undefined && value !== "") {
        let beforeValue = value.substr(0, value.indexOf("/"));
        let afterValue = value.substr(value.indexOf("/") + 1);
        // console.log("beforeValue", beforeValue, "afterv", afterValue);
        var matchBeforeValue = beforeValue.split(",");
        var matchAfterValue = afterValue.split(",");
        newData.push(matchBeforeValue);
        newData.push(matchAfterValue);
          console.log("newData", newData);
      }
      return newData;
    },
  },
  created() {
    //把productid存起來
    let id = this.$route.query.name;
    this.getProductDetail(id);
  },
};
</script>
