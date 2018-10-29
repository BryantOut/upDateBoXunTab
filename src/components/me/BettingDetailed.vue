/*
 * @describe: 投注明细
 * @Author: bryantout
 * @Date: 2018-10-26 09:24:23
 * @Last Modified by: bryantout
 * @Last Modified time: 2018-10-26 15:21:23
 */
<template>
  <div class="bettingDetailed">
    <!-- header部分开始 -->
    <div class="myHeader">
      <div class="left" v-on:click="back">
        <span class="iconfont icon-xiangzuo"></span>
        <span class="text">投注明细</span>
      </div>
    </div>
    <!-- header部分结束 -->
    <!-- content部分开始 -->
    <div class="content">
      <div class="itemBox" v-for='(item,index) in data' :key='index'>
        <div class="item">
          <div class="title">
            {{item.gameName}}
          </div>
          <div class="time">
            <div class="left">
              期号:<span>254662</span>
            </div>
            <div class="right">
              投注时间：<span>{{item.billTime|timeFormat('-',':')}}</span>
            </div>
          </div>
          <div class="mainInfo">
            <div class="top clearfix">
              <div class="left">投注：<span>{{item.score}}.00分</span></div>
              <div class="right" :class="item.type==0?'winningThePrize':''">{{item.type==0?'盈利：':'亏损：-'}}<span>{{item.score}}.00分</span></div>
            </div>
            <div class="center clearfix">
              <div class="left">投注类型：<span>{{item.contentDecoding2}}</span></div>
              <div class="right">是否中奖：<span :class="item.type==0?'winningThePrize':''">{{item.type==0?'中奖':'未中奖'}}</span></div>
            </div>
            <div class="bottom">
              开奖号码:<span>{{item.gameOpenInfo}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBettingDetailedInfo } from '@/api/index.js'
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
    console.log(new Date(1540460245000))

    getBettingDetailedInfo({page: 1, pageSize: 10, type: 2}).then(res => {
      // console.log(res) // -- 可待优化
      this.data = res.data.data
      console.log(this.data)
    })
  },
  filters: {
    'timeFormat': function (billTime, splicchar, splicchar2) {
      var time = new Date(billTime)
      // 获取数据中的年月日
      var y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      var h = time.getHours()
      var min = time.getMinutes()
      var sec = time.getSeconds()

      return y + splicchar + m + splicchar + d + '     ' + h + splicchar2 + min + splicchar2 + sec
    }
  }
}
</script>

<style scoped lang="scss">
.bettingDetailed {
  width: 100%;
  background-color: rgb(240, 242, 248);
  .myHeader {
    position: relative;
    height: 0.8rem;
    font-size: 0.34rem;
    color: #fff;
    background-color: #32a9f0;
    margin-bottom: 0.72rem;
    .left {
      cursor: pointer;
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
      }
    }
  }
  .content {
    width: 100%;
    background-color: rgb(240, 242, 248);
    .itemBox {
      margin-bottom: 0.22rem;
      padding-left: 0.31rem;
      background-color: #fff;
      .item {
        .title,
        .time {
          height: 0.72rem;
          line-height: 0.72rem;
          font-size: 0.3rem;
          color: #333;
          border-bottom: 1px solid #ccc;
          padding-right: 0.3rem;
        }
        .time {
          font-size: 0.28rem;
          .left {
            float: left;
            span {
              color: rgb(81, 186, 242);
              margin-left: 0.1rem;
            }
          }
          .right {
            float: right;
            font-size: 0.24rem;
            color: #666;
          }
        }
        .mainInfo {
          width: 100%;
          font-size: 0.3rem;
          padding: 0.3rem 0.3rem 0.3rem 0;
          .top {
            width: 100%;
            .left {
              float: left;
              color: #f86626;
            }
            .right {
              float: right;
              color: #eb1d34;
            }
          }
          .center {
            width: 100%;
            margin-top: 0.35rem;
            .left {
              float: left;
              color: #666;
              span {
                color: #eb1d34;
              }
            }
            .right {
              float: right;
              color: #666;
              span {
                color: #eb1d34;
              }
            }
          }
          .bottom {
            color: #666;
            margin-top: 0.35rem;
            span {
              color: rgb(81, 186, 242);
              margin-left: 0.1rem;
            }
          }
        }
      }
      .item:last-child {
        margin-bottom: none;
      }
    }
  }
}
.winningThePrize {
  color: #1deb66;
}
</style>
