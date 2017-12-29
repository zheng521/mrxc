<template lang="html">
  <div class="recommend">
	<h3 class="recommend-title">推荐</h3>
	<div class="recommend-list">
  	  <h4>推荐的标题推荐的标题推荐的标题</h4>
	  <div class="recommend-list-info">
		<div class="list-info-img">
		  <img src="#">
		</div>
		<div class="list-info-main">
		  <p class="info-main-intro">信息信息信息信息信息信息系信息学</p>
		  <div class="info-main-bottom">
			<span>4920浏览</span>
			<span>作者是: 狗蛋</span>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .recommend {
    .recommend-title {
	  width: 100%;
	  height: 60px;
	  color: #999;
	  line-height: 60px;
	  text-align: center;
	  font-weight: normal;
	  font-size: 32px;
	  &::after, &::before {
		  content: "&";
		  font-size: 35px;
		  margin: 0 10px;
	  }
	}
	.recommend-list {
	  padding: 20px;
	  background: #fff;
	  h4 {
		width: 100%;
		font-weight: normal;
		font-size: 30px;
		color: #111;
		line-height: 35px;
		margin-bottom: 10px;
	  }
	  .recommend-list-info {
		overflow: hidden;
		.list-info-img {
		  width: 200px;
		  height: 200px;
		  overflow: hidden;
		  float: left;
		  margin-right: 20px;
		  img {
			width: 200px;
    		height: 200px;
		  }
		}
		.list-info-main {
		  .info-main-intro {
			font-size: 26px;
			line-height: 32px;
			color: #666;
			height: 160px;
		  }
		  .info-main-bottom {
			font-size: 24px;
			span {
			  color: #666;
			  display: inline-block;
			  &:first-child {
				float: left;
			  }
			  &:last-child {
				float: right;
			  }
			}
		  }
		}
	  }
	}
  }
</style>
