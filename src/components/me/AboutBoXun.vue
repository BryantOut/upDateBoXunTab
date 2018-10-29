/*
 * @describe: 关于我们
 * @Author: bryantout
 * @Date: 2018-10-26 10:59:36
 * @Last Modified by: bryantout
 * @Last Modified time: 2018-10-26 11:00:58
 */

<template>
    <div class="aboutBoXun">
        <!-- header部分开始 -->
        <div class="myHeader">
            <div class="left" v-on:click="back">
                <span class="iconfont icon-xiangzuo"></span>
                <span class="text">扫码上分</span>
            </div>
        </div>
        <!-- header部分结束 -->
        <!-- logoBox部分开始 -->
        <div class="logoBox">
            <img src="../../assets/colorLogo.png" alt="">
            <h2>博讯娱乐</h2>
        </div>
        <!-- logoBox部分结束 -->
        <!-- QRCodeBox部分开始 -->
        <div class="QRCodeBox">
            <div class="title">
                <span>
                    <img src="../../assets/QR@2x.png" alt="">
                </span>
                二维码分享
            </div>
            <div class="QRCode">
                <img src="../../assets/aboutXunBo.png" alt="">
                <p>扫一扫下载APP</p>
            </div>
        </div>
        <!-- QRCodeBox部分结束 -->
    </div>
</template>

<script>
import { getAboutBoXun } from '@/api/index.js'
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)// 返回上一层
    }
  },
  mounted () {
    getAboutBoXun({type: 0}).then(res => {
      // console.log(res) // -- 可待优化
      this.data = res.data.data
      console.log(this.data)
    })
  }
}
</script>

<style scoped lang="scss">
.aboutBoXun {
  position: relative;
  width: 100%;
  .myHeader {
    position: relative;
    height: 0.8rem;
    font-size: 0.34rem;
    color: #fff;
    background-color: #32a9f0;
    margin-bottom: 0.72rem;
    .left {
      .iconfont {
        position: absolute;
        left: 0.3rem;
        top: 0.21rem;
        font-size: .42rem;
      }
      .text {
        position: absolute;
        left: 0.82rem;
        top: 0.24rem;
      }
    }
  }
  .logoBox {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 3.14rem;
    img {
      position: absolute;
      top:.53rem;
      left: 3.21rem;
      width: 1.09rem;
      height: 1.5rem;
    }
    h2 {
      position: absolute;
      top: 2.28rem;
      left: 3.15rem;
      color: #333;
      font-size: 0.3rem;
      font-weight: 500;
    }
  }
  .QRCodeBox {
    position: absolute;
    top: 4.62rem;
    font-size: 0.3rem;
    color: #333;
    width: 100%;
    height: 4.42rem;
    background-color: #fff;
    .title {
      position: absolute;
      left: 0.31rem;
      width: 100%;
      height: 0.72rem;
      span {
        margin-right: 0.2rem;
        img {
          width: 0.32rem;
          height: 0.32rem;
          vertical-align: bottom;
        }
      }
    }
    .QRCode {
      position: absolute;
      top: 1rem;
      left: 2.83rem;
      img {
        width: 1.86rem;
        height: 1.95rem;
      }
      p {
        color: #59c0f5;
        font-size: 0.24rem;
        margin-top: 0.23rem;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}
</style>
