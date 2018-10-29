<template>
   <div class="safety">
       <img src="../assets/t1.png" alt="">
       <div class="main" :model='form'>
           <input type="text" placeholder="请输入安全码" maxlength="6" v-model="form.securityCode">
           <button @click="submit">确认</button>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import {getSafety} from '@/api/index.js'
export default {
  data () {
    return {
      form: {
        securityCode: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.form.securityCode === '') {
        Toast({
          message: '安全码不能为空',
          position: 'middle',
          duration: 2000
        })
      } else {
        getSafety(this.form).then((res) => {
          if (res.status === 0) {
            localStorage.setItem('mytoken', this.form.securityCode)
            this.$router.push({name: 'Login'})
          } else {
            Toast({
              message: '安全码输入错误',
              position: 'middle',
              duration: 2000
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.safety {
  height: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  .main {
    width: 100%;
    padding: 0 0.36rem;
    position: absolute;
    top: 5.3rem;
    left: 0;
    input {
      outline: none;
      border: none;
      height: 0.88rem;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      font-size: 0.3rem;
      //   text-indent: 9em;
      text-align: center;
      color: #32a9f0;
    }
    input::-ms-input-placeholder {
      color: #32a9f0;
    }

    input::-webkit-input-placeholder {
      color: #32a9f0;
    }
    button {
      width: 100%;
      height: 0.88rem;
      outline: none;
      border-radius: 10px;
      border: none;
      background-color: #32a9f0;
      color: #fff;
      font-size: 0.3rem;
      margin-top: 1rem;
    }
  }
}
</style>
