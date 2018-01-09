<template lang="html">
  <div class="header">
    <slot name="header"></slot>
    <span class="header-icon-wrapper" @click="addClass()">
      <i class="header-icon fas fa-bars"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    addClass () {
      this.addBodyClass('open')
    },
    addBodyClass (value) {
      let body = document.getElementById('wrapper')
      let bodyClass = body.className
      let blank = (bodyClass !== '') ? ' ' : ''
      let added = bodyClass + blank + value
      body.className = added
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    background: #24292e;
    position: relative;
    h3 {
      text-align: center;
      font-size: 30px;
      line-height: 80px;
      font-weight: normal;
      color: #fff;
    }
    .header-icon-wrapper {
      position: absolute;
      top: 15px;
      right: 20px;
      display: block;
      width: 60px;
      height: 60px;
      text-align: center;
      .header-icon {
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
      }
    }
  }
</style>
