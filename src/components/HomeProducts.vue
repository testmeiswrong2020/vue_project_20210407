<template>
  <div class="home-products py-md-9 py-4">
    <div class="container">
      <div class="big-title mb-md-3">
        <h2 class="name text-primary mb-0">商品專區</h2>
        <span class="eng m-0">Products</span>
      </div>
      <div class="row no-gutters">
           <!-- <div class="col-md-6"  v-for="(item,index) in cardContent" :key="index">
          <div class="home-products-items" :class="{'negative-margin':index % 2!=0}">
            <router-link to="/products">
              <div  class="img"  
              :style="`background-image:url('${item.imgUrl}')`"
              ></div>
              <span class="home-products-title">
                <div class="eng">{{item.title}}</div>
                <h3 class="text-white">– {{item.title_1}}</h3>
              </span>
            </router-link>
          </div>
        </div> -->
        <div class="col-md-6">
          <div class="home-products-items">
            <router-link to="/products">
              <div
                class="img"
                style="background-image:url('https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')"
              ></div>
              <span class="home-products-title">
                <div class="eng">Jewelry</div>
                <h3 class="text-white">– 珠寶</h3>
              </span>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="home-products-items negative-margin">
            <router-link to="/products">
              <div
                class="img"
                style="background-image:url('images/category_1.jpg')"
              ></div>
              <span class="home-products-title">
                <div class="eng">Watch</div>
                <h3 class="text-white">– 手錶</h3>
              </span>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="home-products-items">
            <router-link to="/products">
              <div
                class="img"
                style="background-image:url('images/category_2.jpg')"
              ></div>
              <span class="home-products-title">
                <div class="eng">Handbag</div>
                <h3 class="text-white">– 精品包</h3>
              </span>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="home-products-items negative-margin">
            <router-link to="/products">
              <div
                class="img"
                style="background-image:url('https://images.unsplash.com/photo-1532588213355-52317771cce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              ></div>
              <span class="home-products-title">
                <div class="eng">Clothing</div>
                <h3 class="text-white">– 精品服飾</h3>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
   // data(){
  //   return{
  //          cardContent: {
  //            0: {
	// 		imgUrl:
  //           "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  //         title: "Jewelry",
  //      title_1:"珠寶"
  //       },
  //       1: {
  //         imgUrl:"images/category_1.jpg",
  //         title: "Watch",
  //          title_1:"手錶"
  //       },
  //       2: {
  //         imgUrl:
  //           "images/category_2.jpg",
  //         title: "Handbag",
  //          title_1:"精品包"
  //       },
  //         3: {
  //         imgUrl:
  //           "https://images.unsplash.com/photo-1532588213355-52317771cce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  //         title: "Clothing",
  //          title_1:"服飾"
  //       },
  //     }
  //   }
  // },
  created () {
    const vm = this;
    // 在頁面生成時監視畫面滾動的位置來進行DOM的動態樣式載入
    $(window).scroll(function () {
      // console.log(vm.$route);
      if (vm.$route.fullPath !== '/home') {
        // $(window).unbind("scroll"); //有機會會造成home 及 products頁面切換時沒有正常監視帶修正。
        // 如果頁面不在home時，則不再進行scroll監視，否則會報錯。
        return; // return 退出函式，否則下面語法一樣會執行一次而報錯。
      }
      let titlePOS = $('.home-products .big-title').offset().top; // 取得元素位置
      let windowHeight = $(window).height(); // 取得視窗高度
      let scollTop = $(window).scrollTop(); // 取得目前距離最頂端多遠
      if (scollTop >= titlePOS - windowHeight / 2) {
        // 當元素到達視窗高度一半時及動態加入ClassName
        $('.home-products .home-products-title').addClass('shown');
      }
    })
  }
}
</script>
