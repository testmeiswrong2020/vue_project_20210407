<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-12 mb-4">
           <h3>購物車清單</h3>
          <table class="table custom-font-size table-sm">
            <thead>
              <th >品名</th>
              <th  >數量</th>
              <th  >單價</th>
              <th ></th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle w-50">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img
                        class="img-fluid img-thumbnail"
                        :src="`${item.product.imageUrl}`"
                        alt=""
                      />
                    </div>
                    <div class="col-md-10 pl-3">
                      {{ item.product.title }}
                      <!-- <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="align-middle w-25">
                  {{ item.qty }}/{{ item.product.unit }}
                </td>
                <td class="align-middle w-25">
                 <del> {{ item.product.origin_price | currency }}</del><br>
                    <div class="text-success">{{ item.product.price | currency }}</div>
                  <!-- {{ item.final_total | currency }} -->
                </td>
                <td class="align-middle ">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click.prevent="removeCartItem(item.id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot class="border-top">
              <tr></tr>
            </tfoot>
          </table>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6">
          <h3>優惠券折扣</h3>
          <p>結帳前，可以在購物車中使用優惠券。點擊 “套用優惠券” 按鈕，將優惠券添加到您的訂單中。訂單總額將根據所輸入的優惠券代碼進行金額折抵。</p>
          <div class="input-group mb-3 input-group-sm mt-3">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-secondary"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
           
          </div>
             <p class="text-success mt-n3">現在輸入testCode即可享有折扣價喔!</p>
        
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6">
          <h3>購物車總計</h3>
          <table class="table custom-font-size table-sm">
          
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td colspan="3" class="text-left">小計</td>
                <td class="align-middle text-right">
                  {{ item.final_total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-left">總計</td>
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
        </div>
      </div>
    </div>
    <!-- <div class="container main-contant py-5">
    <h1 class="text-center mb-3 text-secondary">六角血拼 結帳</h1>
    <section class="form-row align-items-center text-center">
      <div class="col">
        <div class="alert alert-success alert-rounded mb-0" role="alert">
          1.輸入訂單資料
        </div>
      </div>
      <div class="col">
        <div class="alert alert-light alert-rounded mb-0" role="alert">
          2.金流付款
        </div>
      </div>
      <div class="col">
        <div class="alert alert-light alert-rounded mb-0" role="alert">
          3.完成
        </div>
      </div>
    </section>

    <section class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h6 class="mb-0 d-flex align-items-center">
              <a data-toggle="collapse" href="#collapseOne">
                顯示購物車細節
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </a>
              <span class="h3 ml-auto mb-0">$520</span>
            </h6>
          </div>
        </div>
        <div id="collapseOne" class="collapse mt-3">
          <table class="table table-sm">
            <thead>
              <tr>
                <th width="30"></th>
                <th width="100"></th>
                <th>商品名稱</th>
                <th width="100">數量</th>
                <th width="80">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle text-center">
                  <a href="#removeModal" class="text-muted" data-toggle="modal" data-title="刪除 金牌西裝 1 件">
                   <i class="far fa-trash-alt"></i>
                  </a>
                </td>
                <td class="align-middle">
                  <img src="https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350" class="img-fluid img-thumbnail" alt="">
                </td>
                <td class="align-middle">金牌西裝</td>
                <td class="align-middle">1 件</td>
                <td class="align-middle text-right">$520</td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">運費</td>
                <td class="text-right">
                  <strong>$60</strong>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">合計</td>
                <td class="text-right">
                  <strong>$580</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 class="py-3 mt-5 mb-2 text-center bg-light">
          訂購人資訊
        </h5>
        <form id="needs-validation" novalidate>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="username">姓名</label>
              <input type="text" class="form-control" id="username" placeholder="姓名" required>
              <div class="invalid-feedback">
                請輸入姓名
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Email" required>
              <div class="invalid-feedback">
                請輸入正確的 Email
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="state">國家</label>
              <select id="state" class="form-control" required>
                <option selected>台灣</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md">
              <label for="city">城市</label>
              <select name="" id="city" class="form-control" required>
                <option value="台北市">台北市</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
              </select>
            </div>
            <div class="form-group col-md">
              <label for="inputZip">郵遞區號</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">地址</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="重慶南路一段122號" required>
            <div class="invalid-feedback">
              請輸入地址
            </div>
          </div>
          <div class="text-right">
            <a href="shoppingCart.html" class="btn btn-secondary">繼續選購</a>
            <button type="submit" class="btn btn-primary">確認付款</button>
            <a href="shoppingCart-purchase.html" class="btn btn-primary">確認付款</a>
          </div>
        </form>
     

      </div>
    </section>
     </div>
          <div class="modal fade" id="removeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">刪除商品</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>是否確認刪除商品</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">否</button>
          <button type="button" class="btn btn-outline-danger px-5">是</button>
        </div>
      </div>
    </div>
  </div> -->
  </div>
</template>
<style scoped>
.custom-font-size{
  font-size: 1rem;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      coupon_code: "",
    };
  },
  methods: {
    ...mapActions(["getCart"]),
    //移除購物車內容
    removeCartItem(product_id) {
      this.$store.dispatch("removeCartItem", product_id);
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
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
