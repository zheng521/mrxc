<template>
<div class="top-slider">
  <swiper :options="swiperOption">
    <swiper-slide :key="idx" v-for="(item, idx) in ts">
      <a :href="item.link">
        <img v-lazy="item.image_url"/>
      </a>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'TopSlider',
  props: ['ts'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        mousewheelControl: true,
        observeParents: true
      }
    }
  }
}
</script>
<style lang="scss">
.top-slider {
  width: 100%;
  height: 500px;
  overflow: hidden;
  .swiper-container {
    height: 500px;
    img {
      display:block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
