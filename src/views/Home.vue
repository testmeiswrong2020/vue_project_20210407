<template>
  <div>
    <!-- <news-overlay></news-overlay> -->
    <h1 class="m-0 text-hide">Enya Design</h1>
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
        :autoplay="true"
        :autoplayTimeout="2500"
        :loop="true"
        :autoplayHoverPause="false"
        :speed="1000"
        paginationPosition="bottom-overlay"
        paginationActiveColor="#ffffff"
        paginationColor="#e0e0e0"
        @page-change="titleAnimate"
      >
        <slide v-for="(item, index) in slideContent" :key="index">
          <div
            class="carousel-img"
            :style="`background-image:url('${item.imgUrl}')`"
          >
            <div class="carousel-slide-title d-flex align-items-end">
              <p
                :id="`title-${index}`"
                class="font-italic pl-md-9 pb-md-9 pl-5 pb-5 mb-0"
              >
                {{ item.title }}
              </p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!--        carousel section   END     -->
    <home-products></home-products>

    <div
      class="parallax-bg-fixed"
      style="
        background-image: url('images/middlePicInHomePage.jpg');
        height: 400px;
      "
    ></div>
    <!--middlePicInHomePage robin-spielmann-uzjd9nNtqGg-unsplash-->

    <!-- introduce style section -->
    <div class="container-fluid py-4">
      <div class="row style-intro-wrapper">
        <div class="col-md-6 col-12">
          <div
            class="style-intro-info-body big-title h-100 text-center text-primary d-flex flex-column justify-content-center"
          >
            <h3 class="name mb-0">
              <span class="border border-top-0 border-bottom-0 px-3"
                >保存經典</span
              >
            </h3>
            <small class="text-muted">Enya Design</small>
            <p class="style-intro-content mt-md-6 mt-3">
              『包包不是用買的，而是用來投資的』。無論您是要自己收藏，或是想留下來給孩子當個具有故事性的傳家寶，選擇辨識度高的品牌、經典款式絕對是最值得的投資。
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="style-intro-img-body">
            <div
              class="img-back mx-auto"
              style="background-image: url('images/classic.jpg')"
            >
              <div
                class="title right text-white"
                style="padding-bottom: 5.5rem"
              >
                Classic
              </div>

              <div
                class="img-front right"
                style="background-image: url('images/classic.jpg')"
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
              <span class="border border-top-0 border-bottom-0 px-3"
                >專業鑑定</span
              >
            </h3>
            <small class="text-muted">Enya Design</small>
            <p class="style-intro-content mt-md-6 mt-3">
              所有的店鋪均有經過本公司真偽鑑定培訓的鑑定師，為了感謝您選擇我們公司，我們打從心底以真誠的態度接待每一位貴賓。
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="style-intro-img-body">
            <div
              class="img-back mx-auto"
              style="background-image: url('images/profession.jpg')"
            >
              <div class="title left text-white" style="padding-bottom: 11rem">
                Profession
              </div>
              <div
                class="img-front left"
                style="background-image: url('images/profession.jpg')"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- introduce style section END -->
    <ImgWall />
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
                style="background-image: url('images/person1.jpg')"
              ></div>
            </div>
            <div class="card-body-content">
              <div class="name">
                <h4 class="px-3">Trouvé</h4>
                <span class="px-3 text-uppercase">jewelry appraiser</span>
              </div>
              <div class="content">
                <span class="px-3 text-justify"
                  >這個產業有很多變動，工作型態十分新奇，也很有挑戰性以及前瞻性。每天我都在挑戰自己。不只是面對不同層次的客戶，也要吸收日新月異的資訊。
                  <br />— 珠寶鑑定師 Trouvé
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
                style="background-image: url('images/person2.jpg')"
              ></div>
            </div>
            <div class="card-body-content">
              <div class="name">
                <h4 class="pl-3">Sophía</h4>
                <span class="pl-3">BOUTIQUE APPRAISER</span>
              </div>
              <div class="content">
                <span class="px-3 text-justify">
將金屬材質、機芯、錶面皮料、金屬等不可變的物理性質與標準品資料庫進行對比，並將壓紋技術、封線車工等工序比對為輔，透過嚴格而完整的鑑定程序，為您把關精品真偽。
                  <br />— 精品鑑定師 Sophía
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
import IntroduceCompanySection from "../components/IntroduceCompanySection";
import ImgWall from "../components/ImgWall";
// import NewsOverlay from '../components/NewsOverlay'
import HomeProducts from "../components/HomeProducts";
// 外部元件、插件
import { Carousel, Slide } from "vue-carousel";
import $ from "jquery";
export default {
  data() {
    return {
      someLocalProperty: [], // Vue-Carousel Data
      slideContent: {
        0: {
          imgUrl: "images/slide_1.jpg",
          title: "Yves Saint Laurent",
        },
        1: {
          imgUrl: "images/slide_3.jpg",
          title: "Prada",
        },
        2: {
          imgUrl: "images/slide_2.jpg",
          title: "Cult Gaia",
        },
      },
    };
  },
  methods: {
    titleAnimate(e) {
      let total = 3;
      $(`#title-${e}`).addClass("fadeOut");
      if (e === 0) {
        $(`#title-${total - 1}`).removeClass("fadeOut");
        return;
      }
      $(`#title-${e - 1}`).removeClass("fadeOut");
    },
  },
  components: {
    Carousel,
    Slide,
    IntroduceCompanySection,
    ImgWall,
    // NewsOverlay,
    HomeProducts,
  },
};
</script>
