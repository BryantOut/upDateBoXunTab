<template>
   <div class="register">
       <!-- 头部采用mint-ui样式 -->
       <header class="mint-header is-fixed">
           <div class="mint-header-button is-left"><a href="#/" class="router-link-active"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label></button></a></div>
       </header>
       <div class="main">
            <div class="name">
                <span>用户名</span>
                <input @change="checkname" type="text" v-model="form.username" placeholder="请输入6-16位包含英文和数字的用户名" ref="test1">
            </div>
            <div class="pass">
                <span>密码</span>
                <input @change="checkpassword" type="password" v-model="form.password" placeholder="请输入6-16位包含英文和数字的密码" ref="test2" class="input-2">
            </div>
            <div class="pass name">
                <span>确认密码</span>
                 <input @change="checkpwd" type="password" v-model="pwd" placeholder="请确认密码">
            </div>
            <div class="proving">
                <span>验证码</span>
                <input @change="checkproving" type="text" placeholder="请输入验证码" class="input-4" v-model="prov">
                <input type="button" id="code" @click="createCode"  class="pro-numb" v-model="checkCode">
            </div>
            <button class="btn" @click='registerSubmit'>注册</button>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import {UserRegister} from '@/api/index.js'
export default {
  data () {
    return {
      pwd: '',
      prov: '',
      checkCode: '',
      form: {
        username: '',
        password: '',
        securityCode: ''
      }
    }
  },
  methods: {
    // 实现用户注册
    registerSubmit () {
      this.form.securityCode = localStorage.getItem('mytoken')
      if (this.form.username && this.form.password && this.pwd === this.form.password && this.prov === this.checkCode) {
        UserRegister(this.form).then((res) => {
          if (res.status === 1) {
            Toast({
              message: res.msg,
              position: 'middle',
              duration: 2000
            })
          } else if (res.status === 0) {
            Toast({
              message: res.msg,
              position: 'middle',
              duration: 2000
            })
            this.$router.push({name: 'Login'})
          }
        })
      } else {
        Toast({
          message: '请检查输入信息是否有误',
          position: 'middle',
          duration: 2000
        })
      }
    },
    // 验证用户名输入是否合法
    checkname () {
      var nameReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      var nameValue = this.$refs.test1.value
      // console.log(nameValue)
      if (this.form.username === '') {
        Toast({
          message: '用户名不能为空',
          position: 'middle',
          duration: 2000
        })
      } else if (!nameReg.test(nameValue)) {
        Toast({
          message: '用户名格式错误',
          position: 'middle',
          duration: 2000
        })
      } else {
      }
    },
    // 验证用户密码是否合法
    checkpassword () {
      var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      var pwdValue = this.$refs.test2.value
      // console.log(pwdValue)
      if (this.form.password === '') {
        Toast({
          message: '密码不能为空',
          position: 'middle',
          duration: 2000
        })
      } else if (!pwdReg.test(pwdValue)) {
        Toast({
          message: '密码格式错误',
          position: 'middle',
          duration: 2000
        })
      } else {
        // this.msgpassword = '密码合法'
      }
    },
    // 验证两次密码是否一致
    checkpwd () {
      if (this.pwd === '') {
        Toast({
          message: '确认密码不能为空',
          position: 'middle',
          duration: 2000
        })
      } else if (this.pwd !== this.form.password) {
        Toast({
          message: '输入密码不一致',
          position: 'middle',
          duration: 2000
        })
      } else {
        // this.msgpwd = '输入密码正确'
      }
    },
    // 判断验证码是否一致
    checkproving () {
      if (this.prov === '') {
        Toast({
          message: '验证码不能为空',
          position: 'middle',
          duration: 2000
        })
      } else if (this.prov !== this.checkCode) {
        Toast({
          message: '验证码不一致',
          position: 'middle',
          duration: 2000
        })
      } else {
      }
    },
    // 生成随机数
    createCode () {
      var code = ''
      var codeLength = 4 // 验证码的长度
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (var i = 0; i < codeLength; i++) {
        // 循环操作
        var index = Math.floor(Math.random() * 10) // 取得随机数的索引（0~35）
        code += random[index] // 根据索引取得随机数加到code上
      }
      this.checkCode = code // 把code值赋给验证码
    }
  },
  mounted () {
    // 页面加载完成时调用生成随机码
    this.createCode()
  }
}
</script>

<style scoped lang="scss">
.register {
  background-color: #f0f2f8;
  height: 100%;
}
.main {
  padding: 0 0.4rem;
  padding-top: 0.8rem;
  .name,
  .proving,
  .pass {
    border-bottom: 1px solid #ccc;
    font-size: 0.3rem;
    color: #333;
    padding-bottom: 0.2rem;
    display: flex;
    span {
      width: 1.48rem;
      line-height: 0.38rem;
    }
    input {
      flex: 1;
    }
  }
  .name {
    margin: 1.12rem 0;
  }
  input {
    border: none;
    background-color: #f0f2f8;
    font-size: 0.3rem;
    outline: none;
  }
  .input-4 {
    width: 2.6rem;
  }
  .proving {
    position: relative;
    .pro-numb {
      width: 1.8rem;
      height: 0.6rem;
      background-color: #fff;
      position: absolute;
      bottom: 4px;
      right: 0.4rem;
      text-align: center;
      line-height: 0.6rem;
      font-size: 0.4rem;
      -webkit-appearance: none;
    }
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
}
</style>
