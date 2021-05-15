<template>
  <div class="mt-4">
    <table class="table">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>電子郵件</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <!-- <th>編輯</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <!--  v-for="(item, key) in sortOrder"
          v-if="orders.length"
          :class="{ 'text-secondary': !item.is_paid }"-->
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未付款</span>
          </td>
          <!-- <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item, false)"
            >
              編輯
            </button>
          </td> -->
        </tr>
      </tbody>
    </table>

    <!--pagination-start-->
    <nav  v-if="pagination!==undefined">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <span
            class="page-link"
            @click.prevent="getOrders(pagination.current_page - 1)"
            >Previous</span
          >
        </li>
        <li
          class="page-item"
          :class="{ 'active': pagination.current_page === page }"
          v-for="page in pagination.total_pages"
          :key="page"
        >
          <a class="page-link" href="#" @click.prevent="getOrders(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': !pagination.has_next }">
          <a
            class="page-link"
            href="#"
            @click.prevent="getOrders(pagination.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: {},
      pagination: {},
    };
  },

  methods: {
    getOrders(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;

      vm.$store.dispatch("updateLoading", true);
      this.$http.get(url).then((response) => {
        // console.log("getOrder", response.data);
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.$store.dispatch("updateLoading", false);
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>