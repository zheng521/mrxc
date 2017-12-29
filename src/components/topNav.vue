<template lang="html">
  <div class="top-nav">
    <div class="top-nav-list">
	  <div class="nav-list-item">足迹</div>
	  <div class="nav-list-item">攻略</div>
	  <div class="nav-list-item">美景</div>
	</div>
	<div class="top-nav-list">
	  <div class="nav-list-item">美景</div>
	  <div class="nav-list-item">聚餐</div>
	  <div class="nav-list-item">种草</div>
	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .top-nav {
	width: 100%;
	height: 300px;
	background: #fff;
	.top-nav-list {
	  display: flex;
	  height: 150px;
	  .nav-list-item {
		flex: 1;
		text-align: center;
		line-height: 150px;
		font-size: 30px;
	  }
	}
  }
</style>
