<template>
  <div class="home-products py-md-9 py-4">
    <div class="container">
      <div class="big-title mb-md-3">
        <h2 class="name text-primary mb-0">商品專區</h2>
        <span class="eng m-0 text-dark">Products</span>
      </div>
      <div class="row no-gutters">
        <div class="col-md-6" v-for="(item, index) in cardContent" :key="index">
          <div
            class="home-products-items"
            :class="{ 'negative-margin': index % 2 != 0 }"
          >
            <router-link to="/product">
              <div
                class="img"
                :style="`background-image:url('images/${item.imgUrl}.jpg')`"
              ></div>
              <span class="home-products-title">
                <div class="eng">{{ item.title }}</div>
                <h3 class="text-white">– {{ item.title_1 }}</h3>
              </span>
            </router-link>
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
      cardContent: {
        0: {
          imgUrl: "category_1",
          title: "Watch",
          title_1: "腕錶",
        },
        1: {
          imgUrl: "category_2",
          title: "Handbag",
          title_1: "精品包",
        },
        2: {
          imgUrl: "category_3",
          title: "Jewelry",
          title_1: "珠寶",
        },
        3: {
          imgUrl: "category_4",
          title: "Shoe",
          title_1: "鞋履",
        },
      },
    };
  },
  created() {
    const vm = this;
    $(window).scroll(function () {
      if (vm.$route.fullPath !== "/home") {
        return;
      }
      let titlePOS = $(".home-products .big-title").offset().top; 
      let windowHeight = $(window).height();
      let scollTop = $(window).scrollTop(); 
      if (scollTop >= titlePOS - windowHeight / 2) {
        $(".home-products .home-products-title").addClass("shown");
      }
    });
  },
};
</script>
