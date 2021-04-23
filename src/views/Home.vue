<template>
  <div>
    <!-- <news-overlay></news-overlay> -->
    <h1 class="m-0 text-hide">Anya Design</h1>
    <div class="position-relative">
      <!--        carousel section        -->
      <div class="scroll-down-icon">
        <i class="fas fa-angle-down icon"></i>
        scroll
      </div>
      <carousel
        :per-page="1"
        :navigate-to="someLocalProperty"
        :mouse-drag="true"
        :autoplay="false"
        :autoplayTimeout="2500"
        :loop="true"
        :autoplayHoverPause="false"
        :speed="1000"
        paginationPosition="bottom-overlay"
        paginationActiveColor="#ffffff"
        paginationColor="#e0e0e0"
        @page-change="titleAnimate"
      >
        <slide v-for="(item,index) in slideContent" :key="index">
          <div class="carousel-img" :style="`background-image:url('${item.imgUrl}')`">
            <div class="carousel-slide-title d-flex align-items-end">
              <p :id="`title-${index}`" class="font-italic pl-md-9 pb-md-9 pl-5 pb-5 mb-0">{{item.title}}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!--        carousel section   END     -->
    <home-products></home-products>

    <div
      class="parallax-bg-fixed"
      style="background-image:url('images/middlePicInHomePage.jpg');height:400px"
    ></div>

    <!-- introduce style section -->
    <div class="container-fluid py-4">
      <div class="row style-intro-wrapper">
        <div class="col-md-6 col-12">
          <div
            class="style-intro-info-body big-title h-100 text-center text-primary d-flex flex-column justify-content-center"
          >
            <h3 class="name mb-0">
              <span class="border border-top-0 border-bottom-0 px-3">專業鑑定</span>
            </h3>
            <!-- <small class="text-muted">ASin Design</small> -->
            <p
              class="style-intro-content mt-md-6 mt-3"
            >將金屬材質、機芯、錶面皮料、金屬等不可變的物理性質與標準品資料庫進行對比，並將壓紋技術、封線車工等工序比對為輔，透過嚴格而完整的鑑定程序，為您把關精品真偽。</p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="style-intro-img-body">
            <div
              class="img-back mx-auto"
              style="background-image:url('images/profession.jpg')"
            >
              <div class="title right text-white" style="padding-bottom: 11rem;">Profession</div>
              <div
                class="img-front right"
                style="background-image:url('images/profession.jpg')"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4">
      <div class="row style-intro-wrapper flex-md-row-reverse">
        <div class="col-md-6 col-12">
          <div
            class="style-intro-info-body big-title text-center text-primary h-100 d-flex flex-column justify-content-center"
          >
            <h3 class="name mb-0">
              <span class="border border-top-0 border-bottom-0 px-3">Ȏlḍ Style</span>
            </h3>
            <small class="text-muted">ASin Design</small>
            <p
              class="style-intro-content mt-md-6 mt-3"
            >設計師 Ȏlḍ 著眼于自然形態、文藝風格和舒適性，使用大量的褐色元素、流暢的曲線、新舊混搭、明暗交疊，並為空間注入一股藝術的氣息，打造出無論從哪個角度看都美貌不減，而且無比舒適的傢俱。</p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="style-intro-img-body">
            <div
              class="img-back mx-auto"
              style="background-image:url('https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80')"
            >
              <div class="title left text-white">Ȏlḍ</div>
              <div
                class="img-front left"
                style="background-image:url('https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80')"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- introduce style section END -->
    <ImgWall/>
    <!-- Introduce Designer Section -->
    <div class="container-fluid my-4">
      <div class="big-title py-3">
        <h2 class="name text-primary mb-0">認識我們的鑑定師</h2>
        <div class="eng">Our Appraiser</div>
      </div>

      <div class="row">
        <div class="col-md-6 col-12">
          <div class="card-designer px-lg-5 px-md-4">
            <div class="card-head">
              <div
                class="img ml-auto"
                style="background-image:url('images/person1.jpg')"
              ></div>
            </div>
            <div class="card-body-content">
              <div class="name">
                <h4 class="px-3">Trouvé</h4>
                <span class="px-3 text-uppercase">jewelry appraiser</span>
              </div>
              <div class="content">
                <span class="px-3 text-justify">
                  “ 設計從粗線條開始，然後向細節發展 “ 對我來說，精細化非常重要。利用顏色和表面質感的相互作用，簡單的東西也可以和牆壁、藝術品等搭配起來，在房間中產生意義和聚焦點，並注入人的個性。
                  <br />— 設計師Ećo
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="card-designer px-lg-5 px-md-4">
            <div class="card-head">
              <div
                class="img ml-auto"
                style="background-image:url('images/person2.jpg')"
              ></div>
            </div>
            <div class="card-body-content">
              <div class="name">
                <h4 class="pl-3">Sophie</h4>
                <span class="pl-3">DESIGNER</span>
              </div>
              <div class="content">
                <span class="px-3 text-justify">
                  “ 無論您是騎行還是僅用腳步丈量眼前的迷人街道，您都會邂逅眾多令人愉快的目的地 ” 我的靈感主要來自藝術，我在世界各地尋找素材，將人與作品（傢俱）彼此產生連結，細細的品味、探索和念想。這些藝術設計作品，需要一個永久的家。而您家，就是一個最好的珍藏之處。
                  <br />— 設計師 Ȏlḍ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Introduce Designer Section END -->
    <introduce-company-section></introduce-company-section>
  </div>
</template>

<script>
// 自訂元件
import IntroduceCompanySection from '../components/IntroduceCompanySection';
import ImgWall from '../components/ImgWall';
// import NewsOverlay from '../components/NewsOverlay'
import HomeProducts from '../components/HomeProducts';
// 外部元件、插件
import { Carousel, Slide } from 'vue-carousel';
import $ from 'jquery';
export default {
  data () {
    return {
      someLocalProperty: [], // Vue-Carousel Data
      slideContent: {
            0: {
			imgUrl:
            "images/rc.jpg",
          title: "Yves Saint Laurent",
       
        },
        1: {
          imgUrl:
	     "images/rt.jpg",
          title: "Prada",
        },
        2: {
          imgUrl:
            "images/wsws.jpg",
          title: "Rolex",
        },
      }
    }
  },
  methods: {
    titleAnimate (e) {
      let total = 3 
      $(`#title-${e}`).addClass('fadeOut')
      if (e === 0) {
        $(`#title-${total - 1}`).removeClass('fadeOut')
        return
      }
      $(`#title-${e - 1}`).removeClass('fadeOut')
    }
  },
  components: {
    Carousel,
    Slide,
    IntroduceCompanySection,
    ImgWall,
    // NewsOverlay,
    HomeProducts
  }
}
</script>
