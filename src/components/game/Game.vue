<template>
  <div class="Game">
    <!-- header部分开始 -->
    <div class="myHeader">
      <div class="center">游戏大厅</div>
      <img src="../../assets/customerService.png" alt="" @click="showCustomerService">
    </div>
    <!-- header部分结束 -->
    <div class="content">
      <!-- 北京赛车部分开始 -->
      <div class="beijingRacing item" @click='linkToBeijingRacingRoom'>
        <div class="title">
          <img src="../../assets/bjRacing.png" alt="">
        </div>
        <!-- 最新开奖部分开始 -->
        <div class="newOpenAPrize">
          <span>最新开奖：770088期</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
        <!-- 最新开奖部分结束 -->
        <!-- 距离封盘部分开始 -->
        <div class="timeBox">
          <span>距离封盘剩余：</span>
          <ul>
            <li>5</li>
            <li>9</li>
            <li>5</li>
            <li>9</li>
          </ul>
          <i>:</i>
        </div>
        <!-- 距离封盘部分结束 -->
      </div>
      <!-- 北京赛车部分结束 -->
      <!-- 重庆时时彩部分开始 -->
      <div class="cqssc item" @click='linkToCqChatRoom'>
        <div class="title">
          <img src="../../assets/cqsscTitle.png" alt="">
        </div>
        <!-- 最新开奖部分开始 -->
        <div class="newOpenAPrize">
          <span>最新开奖：770088期</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <!-- 最新开奖部分结束 -->
        <!-- 距离封盘部分开始 -->
        <div class="timeBox">
          <span>距离封盘剩余：</span>
          <ul>
            <li>5</li>
            <li>9</li>
            <li>5</li>
            <li>9</li>
          </ul>
          <i>:</i>
        </div>
        <!-- 距离封盘部分结束 -->
      </div>
      <!-- 重庆时时彩部分结束 -->
      <!-- PC蛋蛋部分开始 -->
      <div class="pcEgg item" @click='linkToPcEggChatRoom'>
        <div class="title">
          <img src="../../assets/pcDandan@2x.png" alt="">
        </div>
        <!-- 最新开奖部分开始 -->
        <div class="newOpenAPrize">
          <span>最新开奖：770088期</span>
          <i class="add1">+</i>
          <i class="add2">+</i>
          <i class="equal">=</i>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <!-- 最新开奖部分结束 -->
        <!-- 距离封盘部分开始 -->
        <div class="timeBox">
          <span>距离封盘剩余：</span>
          <ul>
            <li>5</li>
            <li>9</li>
            <li>5</li>
            <li>9</li>
          </ul>
          <i>:</i>
        </div>
        <!-- 距离封盘部分结束 -->
      </div>
      <!-- PC蛋蛋部分结束 -->
      <!-- 幸运飞艇部分开始 -->
      <div class="luckyAirship item" @click='linkToLuckyAirshepChatRoom'>
        <div class="title">
          <img src="../../assets/luckyAirship.png" alt="">
        </div>
        <!-- 最新开奖部分开始 -->
        <div class="newOpenAPrize">
          <span>最新开奖：770088期</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
        <!-- 最新开奖部分结束 -->
        <!-- 距离封盘部分开始 -->
        <div class="timeBox">
          <span>距离封盘剩余：</span>
          <ul>
            <li>5</li>
            <li>9</li>
            <li>5</li>
            <li>9</li>
          </ul>
          <i>:</i>
        </div>
        <!-- 距离封盘部分结束 -->
      </div>
      <!-- 幸运飞艇部分结束 -->
    </div>
    <!-- 客服窗口部分开始 -->
    <div class="customerServiceBg" v-show="isShowCustomerService">
      <div class="customerServiceBox">
        <div class="title">
          联系客服
          <span class="iconfont icon-guanbi" @click="closeCustomerService"></span>
        </div>
        <div class="subContent">
          <div class="item">
            <img src="../../assets/WeChat@2x.png" alt="">
            <input class="phone" :value='weChatNum' ref="weChatNum">
            <div class="copyBtn" v-clipboard:copy="weChatNum" @click='copyWeChat'>复制</div>
          </div>
          <div class="item">
            <img src="../../assets/QQ @2x.png" alt="">
            <input class="phone" :value='qqNum' ref="qqNum">
            <div class="copyBtn" v-clipboard:copy="qqNum" @click='copyQQ'>复制</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 客服窗口部分结束 -->
    <!-- 设置部分结束 -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import { getGameDesktopList } from '@/api/index.js'
// import Footer from '../../components/Footer'
export default {
  // components: {Footer},
  data () {
    return {
      isShowCustomerService: false,
      weChatNum: '12345678900',
      qqNum: '654321',
      data: [],
      openAPrizeNumList: [],
      isCurrLinkGame: true
    }
  },
  methods: {
    showCustomerService: function () {
      this.isShowCustomerService = true
    },
    closeCustomerService: function () {
      this.isShowCustomerService = false
    },
    copyWeChat: function () {
      if (!document.execCommand) {
        console.error('copy unsupport')
        return
      }
      var weChat = this.$refs.weChatNum
      weChat.select()
      var result = document.execCommand('copy')
      if (result) {
        console.log('copy success')
      } else {
        console.error('copy fail')
      }
    },
    copyQQ: function () {
      if (!document.execCommand) {
        console.error('copy unsupport')
        return
      }
      var weChat = this.$refs.qqNum
      weChat.select()
      var result = document.execCommand('copy')
      if (result) {
        console.log('copy success')
      } else {
        console.error('copy fail')
      }
    },
    linkToCqChatRoom () {
      this.$router.push({ name: 'CqChatRoom' })
    },
    linkToLuckyAirshepChatRoom () {
      this.$router.push({ name: 'LuckyAirshepChatRoom' })
    },
    linkToBeijingRacingRoom () {
      this.$router.push({ name: 'BeijingRacingRoom' })
    },
    linkToPcEggChatRoom () {
      this.$router.push({ name: 'PCEggChatRoom' })
    },
    handlerForNum: function (str) {
      // console.log(typeof str)
      var arr = str.split(',')
      return arr
    }
  },
  mounted () {
    // Vue.set(Vue, 'isShowFooter', true)
    getGameDesktopList({securityCode: '955117', username: 'bbbbbb'}).then(res => {
      this.data = res.data
      console.log(this.data)
      // 将数组中的开奖号码统一存在一个新的数组，再进行处理
      for (var i = 0; i < this.data.length; i++) {
        var arr = this.handlerForNum(this.data[i].opencode)
        this.openAPrizeNumList.push(arr)
      }
      console.log(this.openAPrizeNumList)
    })
    this.isCurrLinkGame = true
  }
}
</script>

<style scoped lang="scss">
.Game {
  background-color: rgb(240, 242, 248);
  padding-bottom: 2rem;
  .myHeader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.34rem;
    color: #fff;
    background-color: #32a9f0;
    margin-bottom: 0.19rem;
    z-index: 1000;
    img {
      position: absolute;
      top: 0.17rem;
      right: 0.25rem;
      width: 0.5rem;
      height: 0.47rem;
    }
  }
  .customerServiceBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 17.42rem;
    background: rgba(0, 0, 0, 0.5);
    .customerServiceBox {
      position: absolute;
      top: 4.83rem;
      left: 0.85rem;
      width: 5.9rem;
      height: 3.78rem;
      background-color: #fff;
      overflow: hidden;
      border-radius: 12px;
      .title {
        position: relative;
        width: 100%;
        text-align: center;
        background-color: #12b7f5;
        color: #fff;
        font-size: 0.34rem;
        height: 0.78rem;
        line-height: 0.78rem;
        margin-bottom: 0.6rem;
        span {
          position: absolute;
          right: 0.26rem;
          font-size: 0.38rem;
        }
      }
      .item {
        position: relative;
        width: 100%;
        height: 0.7rem;
        background-color: #fff;
        line-height: 0.7rem;
        img {
          position: absolute;
          top: 0.13rem;
          left: 0.4rem;
          width: 0.45rem;
          height: 0.37rem;
        }
        .phone {
          position: absolute;
          left: 1.1rem;
          color: #666;
          width: 2.74rem;
          height: 0.58rem;
          line-height: 0.7rem;
          font-size: 0.34rem;
          text-align: center;
          border: none;
        }
        .copyBtn {
          position: absolute;
          left: 4.2rem;
          width: 1.2rem;
          height: 0.7rem;
          font-size: 0.28rem;
          background-color: rgb(18, 183, 245);
          border-radius: 10px;
          color: #fff;
          text-align: center;
          line-height: 0.7rem;
        }
      }
      .item:last-child {
        margin-top: 0.5rem;
        img {
          width: 0.41rem;
          height: 0.42rem;
        }
      }
    }
  }
  .content {
    height: 11.14rem;
    padding-top: 0.99rem;
    .item {
      position: relative;
      width: 7rem;
      height: 2.5rem;
      margin: 0 auto;
      .title {
        height: 0.52rem;
        position: absolute;
        left: 0.61rem;
        top: 0.22rem;
      }
    }
    .luckyAirship {
      background: url("../../assets/background@2x.png");
      background-size: 7rem 2.5rem;
      .title {
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.15rem;
          height: 0.52rem;
        }
      }
      .newOpenAPrize {
        position: absolute;
        top: 0.31rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            float: left;
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.24rem;
            font-family: "MicrosoftYaHei-Bold";
            background-color: pink;
            color: #fff;
            margin-right: 0.03rem;
            text-shadow: -1px 0px 1px #fff, 1px 1px 1px #000;
            border-radius: 0.04rem;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
      .timeBox {
        position: absolute;
        top: 1.32rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            position: relative;
            float: left;
            font-size: 0.4rem;
            width: 0.62rem;
            height: 0.62rem;
            background: rgba(27, 27, 27, 1);
            border: 1px solid rgba(146, 167, 177, 1);
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.62rem;
            margin-right: 0.16rem;
          }
          li:nth-child(2) {
            margin-right: 0.46rem;
          }
        }
        i {
          position: absolute;
          top: 0.38rem;
          left: 1.58rem;
          font-size: 0.6rem;
        }
      }
    }
    .beijingRacing {
      background: url("../../assets/beijing@2x.png");
      background-size: 7rem 2.5rem;
      margin-bottom: 0.2rem;
      .title {
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.15rem;
          height: 0.52rem;
        }
      }
      .newOpenAPrize {
        position: absolute;
        top: 0.31rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            float: left;
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.24rem;
            font-family: "MicrosoftYaHei-Bold";
            background-color: pink;
            color: #fff;
            margin-right: 0.03rem;
            text-shadow: -1px 0px 1px #fff, 1px 1px 1px #000;
            border-radius: 0.04rem;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
      .timeBox {
        position: absolute;
        top: 1.32rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            position: relative;
            float: left;
            font-size: 0.4rem;
            width: 0.62rem;
            height: 0.62rem;
            background: rgba(27, 27, 27, 1);
            border: 1px solid rgba(146, 167, 177, 1);
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.62rem;
            margin-right: 0.16rem;
          }
          li:nth-child(2) {
            margin-right: 0.46rem;
          }
        }
        i {
          position: absolute;
          top: 0.38rem;
          left: 1.58rem;
          font-size: 0.6rem;
        }
      }
    }
    .cqssc {
      background: url("../../assets/cqssc.png");
      background-size: 7rem 2.5rem;
      margin-bottom: 0.2rem;
      .title {
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.15rem;
          height: 0.52rem;
        }
      }
      .newOpenAPrize {
        position: absolute;
        top: 0.31rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          padding-left: 0.08rem;
          li {
            float: left;
            width: 0.35rem;
            height: 0.35rem;
            line-height: 0.28rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.24rem;
            font-family: "MicrosoftYaHei-Bold";
            background-color: #1c9de0;
            border-radius: 50%;
            padding-top: 0.04rem;
            color: #fff;
            margin-right: 0.09rem;
            text-shadow: -1px 0px 1px #fff, 1px 1px 1px #000;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
      .timeBox {
        position: absolute;
        top: 1.32rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            position: relative;
            float: left;
            font-size: 0.4rem;
            width: 0.62rem;
            height: 0.62rem;
            background: rgba(27, 27, 27, 1);
            border: 1px solid rgba(146, 167, 177, 1);
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.62rem;
            margin-right: 0.16rem;
          }
          li:nth-child(2) {
            margin-right: 0.46rem;
          }
        }
        i {
          position: absolute;
          top: 0.38rem;
          left: 1.58rem;
          font-size: 0.6rem;
        }
      }
    }
    .pcEgg {
      background: url("../../assets/pccd.png");
      background-size: 7rem 2.5rem;
      margin-bottom: 0.2rem;
      .title {
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.15rem;
          height: 0.52rem;
        }
      }
      .newOpenAPrize {
        position: absolute;
        top: 0.31rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        .add1 {
          position: absolute;
          left: 0.48rem;
          top: 0.46rem;
        }
        .add2 {
          position: absolute;
          left: 1.08rem;
          top: 0.46rem;
        }
        .equal {
          position: absolute;
          left: 1.68rem;
          top: 0.46rem;
        }
        ul {
          padding-left: 0.08rem;
          li {
            float: left;
            width: 0.35rem;
            height: 0.35rem;
            line-height: 0.28rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.24rem;
            font-family: "MicrosoftYaHei-Bold";
            background-color: rgb(189, 195, 199);
            border-radius: 50%;
            color: #fff;
            margin-right: 0.25rem;
            text-shadow: -1px 0px 1px #fff, 1px 1px 1px #000;
            padding-top: 0.04rem;
          }
          li:last-child {
            margin-right: 0;
            background-color: rgb(240, 223, 34);
          }
        }
      }
      .timeBox {
        position: absolute;
        top: 1.32rem;
        right: 0.17rem;
        font-size: 0.24rem;
        color: #fff;
        span {
          display: inline-block;
          width: 100%;
          text-align: right;
          margin-bottom: 0.18rem;
        }
        ul {
          li {
            position: relative;
            float: left;
            font-size: 0.4rem;
            width: 0.62rem;
            height: 0.62rem;
            background: rgba(27, 27, 27, 1);
            border: 1px solid rgba(146, 167, 177, 1);
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.62rem;
            margin-right: 0.16rem;
          }
          li:nth-child(2) {
            margin-right: 0.46rem;
          }
        }
        i {
          position: absolute;
          top: 0.38rem;
          left: 1.58rem;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
