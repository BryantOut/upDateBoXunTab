<template>
    <div class="sweepCode clearfix">
        <!-- header部分开始 -->
        <div class='myHeader'>
            <div class='left' v-on:click="back">
                <span class='iconfont icon-xiangzuo'></span>
                <span class='text'>聊天信息<span>(12)</span></span>
            </div>
        </div>
        <!-- header部分结束 -->
        <!-- 支付宝卡片部分开始 -->
        <div class="zfb">
            <div class="iconInfo">
                <img src="../../assets/zfbIcon.png" alt="">
                <span>支付宝扫码</span>
            </div>
            <div class="code">
                <img src="../../assets/aboutXunBo.png" alt="">
                <div class="info">长按保存
                    <img src="../../assets/up.png" alt="">
                </div>
            </div>
        </div>
        <!-- 支付宝卡片部分结束 -->
        <!-- 微信支付部分开始 -->
        <div class="wx">
            <div class="iconInfo">
                <img src="../../assets/wechatIcon.png" alt="">
                <span>支付宝扫码</span>
            </div>
            <div class="code">
                <img src="../../assets/aboutXunBo.png" alt="">
                <div class="info">长按保存
                    <img src="../../assets/up.png" alt="">
                </div>
            </div>
        </div>
        <!-- 微信支付部分结束 -->
        <!-- 介绍部分开始 -->
        <div class="adv clearfix">
            <h3>扫码步骤:</h3>
            <ul>
                <li>1.点击“二维码”图片将自动为您保存到相册, 同时打开客户端。</li>
                <li>2.请在支付宝/微信中打开“扫一扫”。</li>
                <li>3.在“扫一扫”中点击右上角，选择“从相册选取二维码”选取保存的
                    二维码图片。</li>
                <li>4.如充值未及时到账，请联系在线客服。</li>
            </ul>
        </div>
        <!-- 介绍部分结束 -->
    </div>
</template>

<script>
export default {
  methods: {
    back: function () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style scoped lang="scss">
.sweepCode {
  background-color: rgb(240, 242, 248);
  width: 100%;
  height: 12.54rem;
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
        font-size: 0.42rem;
      }
      .text {
        position: absolute;
        left: 0.82rem;
        top: 0.24rem;
        span {
          position: absolute;
          left: 1.54rem;
        }
      }
    }
  }
  .zfb,
  .wx {
    position: relative;
    width: 6.9rem;
    height: 3rem;
    margin: 0.44rem auto 0.28rem;
    background-color: #fff;
    .iconInfo {
      position: absolute;
      left: 0.31rem;
      top: 0.25rem;
      height: 0.3rem;
      img {
        float: left;
        width: 0.3rem;
        height: 0.3rem;
      }
      span {
        float: left;
        font-size: 0.26rem;
        line-height: 0.3rem;
        color: #261315;
        margin-left: 0.1rem;
        color: #333;
      }
    }
    .code {
      position: absolute;
      top: 0.82rem;
      left: 2.78rem;
      width: 1.35rem;
      height: 1.42rem;
      img {
        width: 1.35rem;
        height: 1.42rem;
      }
      .info {
        color: #3bb2f0;
        font-size: 0.24rem;
        text-align: center;
        img {
          width: 0.16rem;
          height: 0.2rem;
        }
      }
    }
  }
  .adv {
    width: 6.9rem;
    height: 3rem;
    margin: 0.44rem auto 0.28rem;
    h3 {
      color: #3bb2f0;
      font-size: 0.28rem;
    }
    ul {
      margin-top: 0.22rem;
      li {
        font-size: 0.24rem;
        color: #666;
        margin-bottom: 0.16rem;
        line-height: 0.3rem;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
