<template>
  <div>
    <Navbar />
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <AdminSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <!--router-view是巢狀的-->
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "./AdminSidebar.vue";
import Navbar from "./AdminNavbar.vue";
import Alert from "./AlertMessage.vue";

export default {
  components: {
    AdminSidebar,
    Navbar,
    Alert,
  },
  created(){
 const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
 this.$http.defaults.headers.Authorization=myCookie;
  }
};
</script>
