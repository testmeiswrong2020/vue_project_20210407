<template>
  <div class="container">
    <div class="row no-gutters">
      <div
        class="col-3 img-wall border border-secondary"
        v-for="(item,index) in content"
        :key="index"
      >
        <router-link
          :to="{ path: 'product-detail', query: { name: `${item.productId}` } }"
          class="w-100"
        >
          <img
            :src="`img/${item.pictureNumber}.jpg`"
            alt
            class="img-wall-img w-100"
          />
          <div class="img-wall-overlay"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        0: {
          productId: "-MXhNw-dvU2NHC1a3OS8",
          pictureNumber: 1,
        },
        1: {
          productId: "-MWPSKQwTbix3ZdO3wSi",
          pictureNumber: 2,
        },
        2: {
          productId: "-MXha5N_5ASLxNZvSGvP",
          pictureNumber: 3,
        },
        3: {
          productId: "-MXhsqv6FbQrI3O40LRA",
          pictureNumber: 4,
        },
        4: {
          productId: "-MWnFpnepSOrIh51LzmY",
          pictureNumber: 5,
        },
        5: {
          productId: "-MXhQ8FqcR-CO9Q2uoK_",
          pictureNumber: 6,
        },
        6: {
          productId: "-MXhv4X1qEHVTOJGN2lW",
          pictureNumber: 7,
        },
        7: {
          productId: "-MXhkPVeu0XVoapn8LkM",
          pictureNumber: 8,
        },
      },
    };
  },
};
</script>


