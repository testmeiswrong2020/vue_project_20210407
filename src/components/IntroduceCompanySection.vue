<template>
  <section>
    <div
      class="bg-cover d-flex justify-content-center flex-column align-items-center introduce-company-section"
      style="background-image:url('images/introduteCompany.jpg')"
    >
      <h2 class="introduce-company-section-title h5 col-md-3 col-5 text-center text-white">追求時尚</h2>
      <p
        class="introduce-company-section-content col-10 text-white text-justify mt-3"
      >歡迎蒞臨台灣時尚網購新據點！本網站擁有逾百知名國際精品品牌橫跨男女鞋子、飾品等商品系列。無論是穩重知性的包款、略顯尊榮的珠寶還是頂級奢華的腕錶，您都能在此站一次性逛齊全，所有最新最hot的流行元素，讓您搶先踏入潮流趨勢，跟隨我們的脚步一起引領亞洲時尚潮流吧 ! !</p>
      <router-link
        to="/product"
        class="introduce-company-section-btn btn btn-outline-light mt-4"
      >SHOP NOW</router-link>
    </div>
  </section>
</template>

<style lang="scss">
.introduce-company-section {
  min-height: 500px;
  .introduce-company-section-btn {
    width: 200px;
    padding: 15px 0;
  }
}
</style>
