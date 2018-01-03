<template lang="html">
  <div class="header">
    <h3>末日行程</h3>
    <i class="header-icon fas fa-bars"></i>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    background: #f5f5dc;
    position: relative;
    h3 {
      text-align: center;
      font-size: 30px;
      line-height: 80px;
      font-weight: normal;
    }
    .header-icon {
      position: absolute;
      top: 15px;
      right: 20px;
    }
  }
</style>
