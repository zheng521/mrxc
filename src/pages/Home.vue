<template lang="html">
  <div class="home">
    <v-header>
      <h3 slot="header">首页</h3>
    </v-header>
    <top-slider :ts="topSlider"></top-slider>
    <top-nav></top-nav>
    <mr-recommend :rc="recommend"></mr-recommend>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import TopSlider from '@/components/topSlider'
import TopNav from '@/components/topNav'
import MrRecommend from '@/components/recommend'
import { reduce } from 'lodash'

export default {
  data () {
    return {
      entrance: {},
      topSlider: [],
      recommend: []
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
      this.api.getEntrance().then((res) => {
        this.entrance = this.toMap(res.data.data, 'category', 'items')
        console.log(this.entrance)
        this.topSlider = this.entrance.advertisements
        this.recommend = this.entrance.suggests
      })
    },
    toMap (data, name, value) {
      return reduce(data, function (acc, item) {
        acc[item[name]] = item[value]
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
</style>
