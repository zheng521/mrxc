<template lang="html">
  <div class="home">
    <v-header></v-header>
    <top-slider :ts="topSlider"></top-slider>
    <top-nav></top-nav>
    <mr-recommend></mr-recommend>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import TopSlider from '@/components/topSlider'
import TopNav from '@/components/topNav'
import MrRecommend from '@/components/recommend'
export default {
  data () {
    return {
      topSlider: [{
        link: 'http://www.baidu.com',
        image_url: 'http://pic.sc.chinaz.com/files/pic/pic9/201511/apic16248.jpg'
      },
      {
        link: 'http://www.baidu.com',
        image_url: 'http://pic.sc.chinaz.com/files/pic/pic9/201511/apic16248.jpg'
      }]
    }
  },
  components: {
    VHeader,
    TopSlider,
    TopNav,
    MrRecommend
  }
}
</script>

<style lang="scss">
</style>
