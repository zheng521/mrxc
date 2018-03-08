<template lang="html">
  <div class="login">
	<v-header>
	  <h3 slot="header">登录</h3>
	</v-header>
	<div class="login-main">
	  <mt-field class="login-field" placeholder="用户名" v-model="username"></mt-field>
	  <mt-field class="login-field" placeholder="密码" type="password" v-model="password"></mt-field>
	  <mt-button class="login-button" type="primary" @click="login()">登录</mt-button>
	  <mt-button class="login-button" type="danger">注册</mt-button>
	</div>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import cookie from '@/util/cookie'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    VHeader
  },
  methods: {
    login () {
      let paramsObj = { username: this.username, password: this.password }
      this.api.mrLogin(paramsObj).then((res) => {
        if (res.data.code === 200) {
          cookie.set('accessToken', res.data.token, { path: '/' })
          window.localStorage.user = JSON.stringify(paramsObj)
          this.$store.dispatch('setUserInfo', paramsObj)
          // console.log(this.$store)
          this.$router.push({name: 'Home'})
        }
      })
    }
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
