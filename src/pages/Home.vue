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
import axios from 'axios'
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
  },
  mounted () {
    this.featchData()
  },
  methods: {
    featchData () {
      axios.get('http://localhost:3000/posts').then((res) => {
        console.log(res)
      })
      // this.api.getEntrance().then((res) => {
      //   console.log(123)
      //   // console.log(res)
      // })
    }
  }
}
</script>

<style lang="scss">
</style>
