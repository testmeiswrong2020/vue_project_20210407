<template>
  <div
    class="news-overlay d-none justify-content-center align-items-center align-items-center"
    id="news-overlay"
    @click="delOverlay"
  >
    <div class="news-card d-flex justify-content-center align-items-center ">
      <div class="coupon-wrapper rounded" :style="`background-image:url(${imgUrl})`">
        <div
          class="text-dark coupon-card p-3 bg-white d-flex flex-column justify-content-center text-center shadow"
        >
          <div class="counpon-subtitle-top Ubuntu">LIMITED TIME ONLY</div>
          <div
            class="counpon-title font-weight-bold h2 Volkhov m-0 d-flex justify-content-center align-items-center"
          >
            10
            <span>
              <div class="unit Volkhov">%</div>
              <div class="unit Volkhov">OFF</div>
            </span>
          </div>
          <div class="Volkhov counpon-subtitle-bottom m-sm-0 my-2 font-weight-bold ">Opening Promotion</div>
          <div class="Ubuntu mt-sm-4">WITH THE CODE</div>
          <div class="Ubuntu">SS10</div>
          <div class="row justify-content-center">
            <div class="col-md-5">
              <button
                class="btn btn-sm btn-outline-primary mt-sm-4 mt-2"
                type="button"
                @click="delOverlay"
              >SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  data () {
    return {
      imgUrl:
        'img/overlay.jpg'
    }
  },
  methods: {
    delOverlay () {
      $('#news-overlay').removeClass('d-flex')
      $('#news-overlay').addClass('d-none')
      }
  },
  created () {
    setTimeout(() => {
      $('#news-overlay').removeClass('d-none')
      $('#news-overlay').addClass('d-flex')
    }, 1500)
  }
}
</script>
