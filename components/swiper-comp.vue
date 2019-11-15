<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner,index) in srcResult" :key="index">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
  	name: 'swiper-comp',
  	props: ['srcResult'],
  	beforeMount() {
  	},
    data () {
      return {
        banners: [],
        swiperOption: {
                slidesPerView: 1000,
                loop: true,
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
              }
      }
    },
    mounted() {
    	// this.banners.push(this.results)
    }
    // mounted() {
    //   console.log('app init', this)
    //   setTimeout(() => {
    //     this.banners.push('/5.jpg')
    //     console.log('banners update')
    //   }, 3000)
    //   console.log(
    //     'This is current swiper instance object', this.mySwiper, 
    //     'I will slideTo banners 3')
    //    this.mySwiper.slideTo(3)
    // }
  }
</script>


<style lang="scss" scoped>
img {
	max-width: 200px; 
}
  .my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>