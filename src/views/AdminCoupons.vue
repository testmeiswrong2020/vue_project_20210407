<template>
  <div class="mt-4">
    <div class="text-right">
      <button
        class="btn btn-primary"
        @click="openCouponModal(true, '', false)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group" role="group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item, false)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openCouponModal(false, item, true)"
              >
                刪除
              </button>
            </div>
            <!---->
          </td>
        </tr>
      </tbody>
    </table>
    <!--delete modal start-->
    <div
      class="modal fade"
      id="delModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="delModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="delModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--delete modal end-->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ addOrUpdate }}優惠券
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              {{ addOrUpdate }}優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      coupons: [],
      isLoading: false,
      isNew: false,
      tempCoupon: {
        title: "",
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: "",
      },
      due_date: new Date(), //預設值為當前時間
      //此項用來改變 modal title
      addOrUpdate: "",
      pagination: {},
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    getCoupon(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log("getCoupon", response.data);
        vm.coupons = response.data.coupons;
        vm.isLoading = false;
      });
    },
    openCouponModal(isNew, item, isDel) {
      const vm = this;
      if (isDel) {
        $("#delModal").modal("show");
      } else {
        $("#couponModal").modal("show");
      }

      if (isNew) {
        //add
        vm.tempCoupon = {};
        vm.isNew = true;
        vm.addOrUpdate = "新增";
        const timestamp = Math.floor(new Date() / 1000);
        const dateAndTime = new Date(timestamp * 1000).toISOString().split("T");
        vm.due_date = dateAndTime[0];
      } else {
        vm.tempCoupon = Object.assign({}, item);
        vm.isNew = false;
        if (!isDel) {
          //update
          vm.addOrUpdate = "更新";
          const dateAndTime = new Date(vm.tempCoupon.due_date * 1000)
            .toISOString()
            .split("T");
          vm.due_date = dateAndTime[0];
        }
        // console.log("werwe", vm.tempCoupon.due_date + "-----" + dateAndTime[0]); //2021-03-29
      }
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      const vm = this;
      let httpMethod = "post";
      //判斷要執行 add還是update api
      if (!vm.isNew) {
        //為update時
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      }
      vm.isLoading = true;
      //因為資料上送時是以物件形式，故 vm.tempCoupon 資料要用物件包起來
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log("updateCoupon", response.data);
        if (response.data.success) {
          vm.getCoupon();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.isLoading = false;
        $("#couponModal").modal("hide");
      });
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.isLoading = true;
      this.$http.delete(api, { data: vm.tempCoupon }).then((response) => {
        console.log("delCoupon", response.data);
        vm.isLoading = false;
        $("#delModal").modal("hide");
        if (response.data.success) {
          vm.getCoupon();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
      });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
