<template>
    <div class="swiper" v-swiper:mySwiper="swiperOptions">
       <!-- v-swiper:mySwiper="galleryTop" -->
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in srcResult" :key="index">
              <img :src="item">
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
 <!-- v-swiper:mySwiper="galleryThumbs" -->
      <div class="swiper-container-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in srcResult" :key="index">
              <img :src="item">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['srcResult'],
  computed: {
      // swiper() {
      //     return this.$refs.mySwiper.swiper
      // }
  },
  data() {
    return {
      


    swiperOptions: {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      thumbs: {
        swiper: {
          el: '.swiper-container-thumbs',
          slidesPerView: 5,
        }
      },
      }
    }
  },
   methods: {

      }
}
</script>

<style>
html, body {
  position: relative;
  height: 100%;
}
body {
  /*background: #000;*/
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}

</style>