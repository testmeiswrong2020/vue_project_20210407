<template>
  <div>
    <Alert></Alert>
    <!-- <side-bar></side-bar> -->
    <div class="">
      <div class="">
        <nav-bar></nav-bar>
      </div>
      <router-view />
    </div>
      <footer-content></footer-content>
    </div>
</template>

<script>
// 除了後台以外，全部的route都有NavBar、SideBar及Footer，所以將這三個元件放在這邊，另外利用 event bus 來顯示提醒訊息的Alert也建立在這提供index下的子route使用
import Alert from '../components/AlertMessage'
// import sideBar from '../components/Sidebar'
import navBar from '../components/Navbar'
import footerContent from '../components/Footer'
export default {
  components: {
    // sideBar,
    navBar,
    footerContent,
    Alert
  }
}
</script>
