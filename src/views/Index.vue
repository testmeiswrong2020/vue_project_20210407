<template>
  <div>
    <alert-message></alert-message>
    <div >
      <div>
        <nav-bar></nav-bar>
      </div>
      <router-view />
    </div>
      <footer-content></footer-content>
    </div>
</template>

<script>
import alertMessage from '../components/AlertMessage';
import navBar from '../components/Navbar';
import footerContent from '../components/Footer';

export default {
  components: {
    navBar,
    footerContent,
    alertMessage,
  }
}
</script>
