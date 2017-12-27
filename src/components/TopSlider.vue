<template>
<div class="top-slider">
  <swiper :options="swiperOption">
    <swiper-slide :key="idx" v-for="(item, idx) in ts">
      <a :href="item.link">
        <img v-lazy="item.image_url"/>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
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
        pagination: '.swiper-pagination',
        paginationClickable: true,
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
  height: 3.52rem;
  .swiper-container {
    height: 3.52rem;
    img {
      display:block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      background: rgba(168, 206, 213, 0.6);
      height: 0.4rem;
      line-height: 0.4rem;
      overflow: hidden;
      padding: 0.1rem 0.2rem;
      border-radius: 0.2rem;
      left: 70%;
      bottom: 0.2rem;
      width: auto;
      .swiper-pagination-bullet {
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin-right: 0.1rem;
        background: #fff;
        border-radius: 50%;
        padding: 0;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
