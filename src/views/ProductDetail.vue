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
                  <i :class="{'fas fa-spinner fa-spin': status.loadingItem_addToCart === true,
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
                  <!-- 上鏈錶冠:旋入式，三扣鎖三重防水系統 鏡面:防刮損藍水晶，小窗凸透鏡放大日曆
    防水深度:300米/1,000呎 -->
                  <tr>
                    <th>錶殼 :</th>
                    <td>蠔式，41毫米 蠔式鋼</td>
                  </tr>
                  <tr>
                    <th>蠔式錶殼結構 :</th>
                    <td>一體成型中層錶殼，旋入式底蓋及上鏈錶冠</td>
                  </tr>
                  <tr>
                    <th>直徑 :</th>
                    <td>41毫米</td>
                  </tr>
                  <tr>
                    <th>材質 :</th>
                    <td>蠔式鋼</td>
                  </tr>
                  <tr>
                    <th>外圈 :</th>
                    <td>
                      單向旋轉60分鐘刻度外圈，配防刮損Cerachrom陶質字圈，鍍鉑金數字及刻度
                    </td>
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
    },
  created() {
    //把productid存起來
    let id = this.$route.query.name;
    this.getProductDetail(id);
  },
};
</script>
