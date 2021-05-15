<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div></div>
      <div></div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      // ※ post因為api規格，故不用加上vm，
      this.$http.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login"); //signin
        }
      });
    },
  },
};
</script>
