<template>
  <div id="app">
    <div class="wrapper" id="wrapper">
      <div class="sidebar-wrapper">
        <div class="sidebar">
          <nav class="sidebar-nav">
            <router-link class="sidebar-nav-item" @click.native="removeClass()" :to="{name: 'Home'}">首页</router-link>
            <a class="sidebar-nav-item" href="#">页面1</a>
            <a class="sidebar-nav-item" href="#">页面2</a>
            <a class="sidebar-nav-item" href="#">页面3</a>
          </nav>
          <div class="sidebar-item sidebar-footer">
            <p v-if="!signed">
              <router-link @click.native="removeClass()" :to="{name: 'SignIn'}">登录</router-link>
              <router-link @click.native="removeClass()" :to="{name: 'SignUp'}"> / 注册</router-link>
            </p>
            <p v-else>
              <router-link @click.native="removeClass()" :to="{name: 'SignIn'}">个人中心</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="sidebar-mask" @click="removeClass()"></div>
      <div class="wrap">
         <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState({
      signed: state => state.signed
    })
  },
  methods: {
    removeClass () {
      this.removeBodyClass('open')
    },
    removeBodyClass (value) {
      let body = document.getElementById('wrapper')
      var bodyClass = ' ' + body.className + ' '
      bodyClass = bodyClass.replace(/(\s+)/gi, ' ')
      let removed = bodyClass.replace(' ' + value + ' ', ' ')
      removed = removed.replace(/(^\s+)|(\s+$)/g, '')
      body.className = removed
    }
  }
}
</script>
<style lang="scss">
    @import './assets/css/reset.css';
    @import './assets/css/layout.scss';
</style>
