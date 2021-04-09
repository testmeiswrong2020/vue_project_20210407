<template>
  <div id="app">
      <loading :active.sync="isLoading"></loading>
    <router-view />
  </div>
</template>
<style lang="scss">
@import "./assets/all.scss";
</style>

<!--各元件間可以共同使用的loading效果-->
<script>
export default ({
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
})
</script>

