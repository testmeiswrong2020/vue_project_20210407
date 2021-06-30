<template>
  <div class="pt-4 pb-5">
    <div class="container ">
      <section class="row text-center">
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-primary  alert-rounded mb-2" role="alert">
            1.輸入訂單資料
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div
            class="alert alert-light border-primary text-primary alert-rounded mb-2"
            role="alert"
          >
            2.金流付款
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div
            class="alert alert-light border-primary text-primary alert-rounded mb-2"
            role="alert"
          >
            3.完成
          </div>
        </div>
      </section>
      <validation-observer v-slot="{ invalid }">
        <section class="row justify-content-center mt-4">
          <div class="col-md-6">
            <h5 class="mb-2 text-center">訂單資訊</h5>

            <form  class="needs-validation">
              <div class="d-inline-flex">
                <validation-provider
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <div class="form-group mr-3">
                    <label for="username" class="text-dark">收件人姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      name="收件人姓名"
                      id="username"
                      :class="classes"
                      v-model="form.user.name"
                      placeholder="請輸入姓名"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <div class="form-group">
                    <label for="usertel" class="text-dark">收件人電話</label>
                    <input
                      type="tel"
                      name="收件人電話"
                      class="form-control"
                      id="usertel"
                      :class="classes"
                      v-model="form.user.tel"
                      placeholder="請輸入電話"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
              </div>

              <validation-provider
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useremail" class="text-dark">電子信箱</label>
                  <input
                    type="email"
                    class="form-control"
                    name="電子信箱"
                    id="useremail"
                    :class="classes"
                    v-model="form.user.email"
                    placeholder="請輸入電子信箱"
                    required
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useraddress" class="text-dark">收件人地址</label>
                  <input
                    type="text"
                    class="form-control"
                    name="收件人地址"
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
                <label for="comment" class="text-dark mr-1">留言 </label>(選填)
                <textarea
                  id="comment"
                  class="form-control"
                  cols="30"
                  rows="4"
                  v-model="form.message"
                ></textarea>
                <span class="text-danger"></span>
              </div>
              <div class="text-right"></div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="card shadow">
              <h5 class="my-3 text-center">您的訂單</h5>
              <div class="container">
                <table class="table">
                  <thead>
                    <th>商品</th>
                    <th></th>
                    <th>小計</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in cart.carts" :key="index">
                      <td class="align-middle" colspan="2">
                        {{ item.product.title }} X {{ item.qty }}
                      </td>
                      <td class="align-middle text-right">
                        {{ item.final_total | currency }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="text-left font-weight-bold">
                        總計
                      </td>
                      <td class="text-right">{{ cart.total | currency }}</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="container mb-3 mt-auto">
                  <form class="text-dark">
                    <div class="form-row align-items-around">
                      <legend
                        class="font-weight-bold col-form-label col-sm-2 float-left pt-0 text-nowrap"
                      >
                        配送方式
                      </legend>
                      <div class="col-sm-10 text-right">
                        <div class="form-check mr-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                            checked
                          />
                          <label class="form-check-label" for="gridRadios1">
                            超商付款
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                          <label class="form-check-label" for="gridRadios2">
                            信用卡付款
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                   <button @click.prevent="createOrder" class="btn btn-success w-100 mt-3" :disabled="invalid">
                  送出訂單
                </button>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </validation-observer>
    </div>
  </div>
</template>
<style >
.custom-font-size {
  font-size: 1rem;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
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
    ...mapActions(["getCart"]),
    //送出訂單
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$store.dispatch("updateLoading", true);
      this.$http.post(url, { data: order }).then((response) => {
        // console.log("createOrder", response.data);
        let message=response.data.message;
        if (response.data.success) {
           vm.$router.push(`/final-checkout/${response.data.orderId}`);
           vm.$store.dispatch("getCart");
           vm.$store.dispatch('updateMessage', { message});
        } else {
           vm.$store.dispatch('updateMessage', { message, status: 'danger' });
        }
        vm.$store.dispatch("updateLoading", false);
      });
    },
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
