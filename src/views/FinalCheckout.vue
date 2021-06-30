<template>
  <div class="pt-4 pb-5">
    <div class="container ">
      <section class="row text-center">
        <div class="col-md-4 col-sm-12">
          <div
            class="alert alert-light custom-alert alert-rounded mb-2"
            role="alert"
          >
            1.輸入訂單資料
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
           <div v-if="order.is_paid" class="alert  alert-light custom-alert  alert-rounded mb-2" role="alert">
            2.金流付款
          </div>
          <div  v-else class="alert alert-primary alert-rounded mb-2" role="alert">
            2.金流付款
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div
            v-if="order.is_paid"
            class="alert alert-primary alert-rounded mb-2"
            role="alert"
          >
            3.完成
          </div>
          <div
            v-else
            class="alert alert-light custom-alert alert-rounded mb-2"
            role="alert"
          >
            3.完成
          </div>
        </div>
      </section>

      <div class="mb-5 mt-4 row justify-content-center">
        <div class="card col-md-6 shadow mx-3">
          <form @submit.prevent="payOrder">
            <table class="table p-5">
              <tbody>
                <tr>
                  <th class="border-0 ">下單日期</th>
                  <td class="border-0">{{ order.create_at | date }}</td>
                </tr>
                <tr>
                  <th>訂單編號</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <th width="100">電子郵件</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th width="120" class="text-nowrap">收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>訂單金額</th>
                  <td>{{ order.total | currency }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center rounded" v-if="order.is_paid === false">
              <button class="btn btn-danger mt-n3 mb-3">確認付款去</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-alert {
  color: #6d6050 !important;
  border-color: #6d6050 !important;
}
</style>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {},
        products: [],
      },
    };
  },
  methods: {
    getOneOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
       vm.$store.dispatch("updateLoading", true);
       vm.$http.get(url).then((response) => {
        // console.log("getOneOrder", response.data);
        if (response.data.success) { //此API沒有吐message
          vm.order = response.data.order;
        } else {
           let message= "讀取訂單失敗 !!";
          vm.$store.dispatch('updateMessage', { message, status: 'danger' });
        }
          vm.$store.dispatch("updateLoading", false);
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$store.dispatch("updateLoading", true);
      this.$http.post(url).then((response) => {
        // console.log("payOrder", response.data);
        let message= response.data.message;
        if (response.data.success) {
          vm.getOneOrder();
          vm.$store.dispatch('updateMessage', { message});
        } else {
          vm.$store.dispatch('updateMessage', { message, status: 'danger' });
        }
        vm.$store.dispatch("updateLoading", false);
      });
    },
  },
  created() {
    //把orderid存起來
    this.orderId = this.$route.params.orderId;
    this.getOneOrder();
  },
};
</script>
