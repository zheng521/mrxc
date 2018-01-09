<template>
  <div id="app">
    <div class="wrapper" id="wrapper">
      <div class="sidebar-wrapper">
        <div class="sidebar">
          <nav class="sidebar-nav">
            <a class="sidebar-nav-item" href="#">首页</a>
            <a class="sidebar-nav-item" href="#">页面1</a>
            <a class="sidebar-nav-item" href="#">页面2</a>
            <a class="sidebar-nav-item" href="#">页面3</a>
          </nav>
          <div class="sidebar-item sidebar-footer">
            <p>
              <a href="/users/sign_in">注册/登录</a>
              <a href="/users/sign_up" style="display: none;"> / 注册</a>
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
export default {
  name: 'app',
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
