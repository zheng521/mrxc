<template lang="html">
  <div class="login">
	<v-header>
	  <h3 slot="header">登录</h3>
	</v-header>
	<div class="login-main">
	  <mt-field class="login-field" placeholder="登录邮箱" type="email"></mt-field>
	  <mt-field class="login-field" placeholder="密码" type="password"></mt-field>
	  <mt-button class="login-button" type="primary">登录</mt-button>
	  <mt-button class="login-button" type="danger">注册</mt-button>
	</div>
  </div>
</template>

<script>
import VHeader from '@/components/header'
export default {
  components: {
    VHeader
  }
}
</script>

<style lang="scss">
  .login {
	.login-main {
	  padding-top: 120px;
	}
	.login-field {
	  width: 80%;
	  margin: 0 auto 80px;
	  height: 80px;
	  border: 1px solid #9d9da3;
	  background: none;
	  .mint-cell-wrapper {
		.mint-cell-value {
		  .mint-field-core {
			height: 80px;
			font-size: 26px;
			background: none;
		  }
		}
	  }
	}
	.login-button {
	  width: 80%;
	  margin: 0 auto 30px;
	  display: block;
	  height: 60px;
	  font-size: 26px;
	}
  }
</style>
