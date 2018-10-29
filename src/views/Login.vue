<template>
   <div class="login">
       <div class="top"></div>
       <!-- <header class="mint-header is-fixed"></header> -->
       <div class="main">
            <img src="../assets/LOGO1.png" alt="" class="main-logo">

            <div class="name">
                <span>账号</span>
                <input type="text" placeholder="请填写账号" v-model="login.username">
            </div>
            <div class="pass">
                <span>密码</span>
                <input type="password" placeholder="请填写密码" v-model="login.password">
            </div>
            <button class="btn" @click="LoginApp">登录</button>
            <div class="zuce-foget">
              <router-link to="/Register" class="zuce">免费注册</router-link>
              <span class="foget">忘记密码</span>
            </div>
            <div class="other">
                <i class="fl"></i>
                <span>其他方式登录</span>
                <i class="fr"></i>
            </div>
            <div class="footer-img">
                <div class="QQ" @click="LoginQQ">
                    <img src="../assets/qq1.png" alt="">
                    <div>QQ</div>
                </div>
                <div class="weixin">
                    <img src="../assets/WeChat1.png" alt="">
                    <div>微信</div>
                </div>
            </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import {UserLogin, UserQQweixinlogin} from '@/api/index.js'
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      QQweixin: {
        openid: '',
        type: '',
        securityCode: '',
        nickname: '',
        headimgurl: ''
      }
    }
  },
  methods: {
    // 实现用户登录  后台登录接口未完善
    LoginApp () {
      // this.$router.push({name: 'Login'})
      UserLogin(this.login).then((res) => {
        console.log(123)
      })
      this.$router.push({ name: 'Game' })
    },
    // 实现QQ授权登录
    LoginQQ () {
      this.QQweixin.securityCode = localStorage.getItem('mytoken')
      UserQQweixinlogin(this.QQweixin).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: #f0f2f8;
  height: 100%;
  .top {
    width: 100%;
    height: 0.8rem;
    background-color: #32a9f0;
  }
  .main {
    padding: 0 0.4rem;
    .main-logo {
      margin: 1rem auto;
      display: block;
      width: 1.09rem;
      height: 1.5rem;
    }
    .name,
    .pass {
      border-bottom: 1px solid #ccc;
      font-size: 0.3rem;
      color: #333;
      padding-bottom: 0.2rem;
    }
    .name {
      margin-bottom: 1.12rem;
    }
    input {
      border: none;
      background-color: #f0f2f8;
      font-size: 0.3rem;
      padding-left: 0.66rem;
      outline: none;
    }
    .btn {
      background-color: #32a9f0;
      width: 100%;
      height: 0.88rem;
      border: none;
      font-size: 0.3rem;
      color: #fff;
      border-radius: 10px;
      margin-top: 1rem;
      margin-bottom: 0.3rem;
    }
    .zuce-foget {
      display: flex;
      font-size: 0.3rem;
      justify-content: space-evenly;
      .zuce {
        color: #3bb2f0;
      }
      .foget {
        color: #ccc;
      }
    }
    .other {
      text-align: center;
      font-size: 0.28rem;
      color: #32a9f0;
      padding: 1rem 1.2rem 0.4rem 1.2rem;
      i {
        width: 50px;
        height: 1px;
        background-color: #ccc;
        display: block;
        margin-top: 6px;
      }
    }
    .footer-img {
      display: flex;
      justify-content: space-evenly;
      padding: 0 1.68rem;
      div {
        color: #59c0f5;
      }
      .QQ {
        font-size: .28rem;
        text-align: center;
        img {
          width: .36rem;
          height: .42rem;
          margin-bottom: .08rem;
        }
      }
      .weixin {
        font-size: .26rem;
        text-align: center;
        img {
          width: 0.44rem;
          height: 0.36rem;
          margin-bottom: .16rem;
        }
      }
    }
  }
}
</style>
