<template>
  <div class='cqChatRoom'>
    <!-- header部分开始 -->
    <div class='myHeader'>
      <router-link to='/Game' slot='left'>
        <div class='left'>
          <span class='iconfont icon-xiangzuo'></span>
          <span class='text'>重庆时时彩<span>(52人)</span></span>
        </div>
      </router-link>
      <span class="iconfont icon-gengduomore10" @click="linkToGroupChatInfo"></span>
    </div>
    <!-- header部分结束 -->
    <div class="content"></div>
    <!-- 彩种信息部分开始 -->
    <div class="lotteryInfoBox">
      <!-- top部分开始 -->
      <div class="lotteryInfo">
        <div class="left">
          <ul class="time">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>4</li>
          </ul>
          <span class="min">分</span>
          <span class="sec">秒</span>
          <span class="stage">距离<span>16365</span>期截至</span>
        </div>
        <div class="right">
          <div class="line"></div>
          <div class="surplusScore">剩余分数</div>
        </div>
      </div>
      <!-- top部分结束 -->
      <!-- center部分开始,最近一期开奖信息 -->
      <div class="latelylotteryInfo">
        <div class="title">重庆时时彩</div>
        <span class="latelyStage">期号: {{latelyOneInfoTitle.expect}}</span>
        <ul>
          <li v-for='item in latelyOneInfoNum' :key='item.id'>{{item}}</li>
        </ul>
        <span class="iconfont" @click='more' :class='isShowMore?"icon-unie624":"icon-zhankai"'></span>
      </div>
      <!-- center部分结束,最近一期开奖信息 -->
      <!-- bottom部分开始，更多往期开奖信息 -->
      <div class="moreLatelylotteryInfo container" v-show='isShowMore'>
        <div class="item" v-for='(firstItem,index) in moreData' :key='firstItem.id'>
          <div class="stage">第<i>{{firstItem.expect}}</i>期</div>
          <ul class="openAPrizeNum">
            <li class="subItem" v-for='item in moreOpenAPrizeNumList[index]' :key='item.id'>{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- bottom部分结束，更多往期开奖信息 -->
    </div>
    <!-- 彩种信息部分结束 -->

    <!-- 聊天室部分开始 -->
    <div class="messageRoom" @click="onTouchMessageRoom">
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
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul>
    </div>
    <!-- 聊天室部分结束 -->

    <KeyBoard1></KeyBoard1>
  </div>
</template>

<script>
import KeyBoard1 from '../../components/keyboard/KeyBoard1.0'
import { getCqOpenAPrizeHistory } from '@/api/index.js'
export default {
  data () {
    return {
      data: [],
      openAPrizeNumList: [],
      moreOpenAPrizeNumList: [],
      moreData: [],
      isShowMore: false,
      latelyOneInfoTitle: [],
      latelyOneInfoNum: []
    }
  },
  components: {KeyBoard1},
  methods: {
    linkToGroupChatInfo: function () {
      this.$router.push({ name: 'GroupChatInfo' })
    },
    handlerForNum: function (str) {
      // console.log(typeof str)
      var arr = str.split(',')
      return arr
    },
    curtail: function (arr) {
      var res = arr.slice(0)
      res.shift(arr[0])
      return res
    },
    more: function () {
      this.isShowMore = !this.isShowMore
    },
    onTouchMessageRoom: function () {
      this.isShowMore = false
    }
  },
  mounted () {
    // this.handlerForNum(this.demoStr)
    getCqOpenAPrizeHistory({currentPage: 1, size: 10}).then(res => {
      // console.log(res) // -- 可待优化
      this.data = res.data.list
      // 将数组中的开奖号码统一存在一个新的数组，再进行处理
      for (var i = 0; i < this.data.length; i++) {
        var arr = this.handlerForNum(this.data[i].opencode)
        this.openAPrizeNumList.push(arr)
      }

      this.moreOpenAPrizeNumList = this.curtail(this.openAPrizeNumList)
      console.log(this.moreOpenAPrizeNumList)
      this.moreData = this.curtail(this.data)

      this.latelyOneInfoTitle = this.data[0]
      this.latelyOneInfoNum = this.openAPrizeNumList[0]
    })
  }
}
</script>

<style scoped lang='scss'>
.cqChatRoom {
  margin-bottom: 0.88rem;
  .myHeader {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
          width: 9.8rem;
          left: 1.9rem;
        }
      }
    }
    .iconfont {
      position: absolute;
      float: right;
      right: 0.32rem;
      top: 0.28rem;
      font-size: 0.32rem;
    }
  }
  .content {
    padding-top: 0.8rem;
  }
  .lotteryInfoBox {
    position: fixed;
    top: .8rem;
    width: 100%;
    .lotteryInfo {
      width: 100%;
      height: 1.85rem;
      background-color: #fff;
      .left {
        position: relative;
        float: left;
        width: 3.75rem;
        height: 100%;
        .time {
          position: absolute;
          top: 0.48rem;
          left: 0.84rem;
          li {
            float: left;
            width: 0.34rem;
            height: 0.5rem;
            color: #fff;
            font-size: 0.34rem;
            background-color: rgb(50, 169, 240);
            line-height: 0.5rem;
            text-align: center;
            border-radius: 0.04rem;
            box-shadow: -1px 2px 0 0 #ccc;
            margin-right: 0.06rem;
          }
          li:nth-child(2) {
            margin-right: 0.46rem;
          }
        }
        .min {
          position: absolute;
          font-size: 0.3rem;
          color: #666;
          top: 0.57rem;
          left: 1.65rem;
        }
        .sec {
          position: absolute;
          font-size: 0.3rem;
          color: #666;
          top: 0.57rem;
          left: 2.86rem;
        }
        .stage {
          position: absolute;
          top: 1.12rem;
          left: 0.74rem;
          font-size: 0.2rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          span {
            padding: 0 0.18rem;
            color: rgb(235, 50, 72);
          }
        }
      }
      .line {
        width: 0.01rem;
        height: 0.99rem;
        border: 0.01rem dashed rgb(136, 136, 136);
        margin-top: 0.44rem;
      }
      .right {
        position: relative;
        float: right;
        width: 3.75rem;
        height: 100%;
        .surplusScore {
          position: absolute;
          top: 0.52rem;
          left: 0.66rem;
          width: 2.24rem;
          height: 0.86rem;
          border-radius: 0.08rem;
          border: 1px solid rgb(50, 169, 240);
          color: #eb3147;
          font-size: 0.34rem;
          line-height: 0.86rem;
          text-align: center;
          font-weight: 500;
        }
      }
    }
    .latelylotteryInfo {
      position: relative;
      width: 100%;
      height: 0.88rem;
      border-bottom: 0.01rem solid #ccc;
      background-color: #fff;
      .title {
        position: absolute;
        top: 0.04rem;
        left: 0.3rem;
        color: #333;
        font-size: 0.3rem;
        font-family: "PingFang-SC-Medium";
        font-weight: 500;
      }
      .latelyStage {
        position: absolute;
        top: 0.46rem;
        left: 0.29rem;
        font-size: 0.22rem;
        font-family: "PingFang-SC-Regular";
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
      ul {
        position: absolute;
        top: 0.13rem;
        left: 2.4rem;
        li {
          float: left;
          width: 0.54rem;
          height: 0.54rem;
          background-color: rgb(28, 157, 224);
          color: #fff;
          text-align: center;
          line-height: 0.54rem;
          border-radius: 50%;
          margin-right: 0.14rem;
          font-size: 0.42rem;
        }
        li:last-child {
          margin-right: none;
        }
      }
      .iconfont {
        position: absolute;
        top: 0.21rem;
        right: 0.1rem;
        font-size: 0.48rem;
        color: rgb(50, 169, 240);
      }
    }
  }
  .container {
    padding: 0.1rem 0;
    background-color: #fff;
    .item {
      background-color: #fff;
      position: relative;
      font-size: 0.26rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-bottom: 0.2rem;
      .stage {
        color: #666;
        padding-left: 0.3rem;
        i {
          color: rgb(90, 186, 243);
          padding: 0 0.02rem;
        }
      }
      .openAPrizeNum {
        position: absolute;
        top: 0.02rem;
        left: 2.4rem;
        li {
          float: left;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          box-sizing: border-box;
          text-align: center;
          font-size: 0.24rem;
          font-family: "MicrosoftYaHei-Bold";
          background-color: rgb(28, 157, 224);
          border-radius: 50%;
          color: #fff;
          margin-right: 0.3rem;
          text-shadow: -1px 0px 1px #fff, 1px 1px 1px #000;
        }
        li:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .messageRoom {
    width: 100%;
    background-color: pink;
    margin-top: 2.73rem;
  }
}
</style>
