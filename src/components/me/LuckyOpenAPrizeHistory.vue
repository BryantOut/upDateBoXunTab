<template>
  <div class='OpenAPrizeHistory'>
    <!-- header部分开始 -->
    <div class='myHeader'>
      <div class='left' v-on:click="back">
        <span class='iconfont icon-xiangzuo'></span>
      </div>
      <div class="center">开奖历史</div>
    </div>
    <!-- header部分结束 -->
    <div class="container">
      <div class="title">幸运飞艇</div>
      <div class="subTitle">
        <div class="subTitle1">期数</div>
        <div class="subTitle2">开奖号码</div>
      </div>
      <div class="item" v-for='(firstItem,index) in data' :key='firstItem.id'>
        <div class="stage">{{firstItem.expect}}</div>
        <ul class="openAPrizeNum">
          <li :class="item==1?'one':item==2?'two':item==3?'three':item==4?'four':item==5?'five':item==6?'six':item==7?'seven':item==8?'eight':item==9?'nine':'ten'" class="subItem" v-for='item in openAPrizeNumList[index]' :key='item.id'>{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { LuckyOpenAPrizeHistory } from '@/api/index.js'
export default {
  data () {
    return {
      demoStr: '1,2,3,4,5,6,7',
      data: [],
      openAPrizeNumList: []
    }
  },
  // 添加计算属性
  // 这个属性中的成员可以像 Data 中的成员一样使用，
  computed: {
    selfColor () {
      console.log(this.$refs.item)
      return 'one'
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)// 返回上一层
    },
    handlerForNum: function (str) {
      // console.log(typeof str)
      var arr = str.split(',')
      return arr
    }
  },
  mounted () {
    // this.handlerForNum(this.demoStr)
    LuckyOpenAPrizeHistory({currentPage: 1, size: 20}).then(res => {
      console.log(res) // -- 可待优化
      this.data = res.data.list
      // 将数组中的开奖号码统一存在一个新的数组，再进行处理
      for (var i = 0; i < this.data.length; i++) {
        var arr = this.handlerForNum(this.data[i].opencode)
        this.openAPrizeNumList.push(arr)
      }
      // console.log(this.openAPrizeNumList)
    })
  }
}
</script>

<style scoped lang="scss">
.OpenAPrizeHistory {
  background-color: #fff;
  .myHeader {
    position: relative;
    height: 0.8rem;
    font-size: 0.34rem;
    color: #fff;
    background-color: #32a9f0;
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
    .center {
      text-align: center;
      line-height: 0.8rem;
    }
  }
  .container {
    background-color: #fff;
    .title {
      width: 100%;
      height: 0.72rem;
      line-height: 0.72rem;
      font-size: 0.3rem;
      color: #333;
      text-align: center;
    }
    .subTitle {
      color: #3bb2f0;
      font-size: 0.26rem;
      height: 0.72rem;
      line-height: 0.72rem;
      .subTitle1 {
        float: left;
        width: 1.42rem;
        text-align: center;
      }
      .subTitle2 {
        float: left;
        width: 6.08rem;
        padding-left: 0.29rem;
      }
    }
    .item {
      font-size: 0.26rem;
      height: 0.72rem;
      line-height: 0.72rem;
      .stage {
        float: left;
        width: 1.42rem;
        text-align: center;
        color: #333;
      }
      .openAPrizeNum {
        float: left;
        width: 6.08rem;
        padding-top: 0.18rem;
        padding-left: .29rem;
        li {
          float: left;
          width: 0.36rem;
          height: 0.36rem;
          line-height: .3rem;
          padding: .02rem;
          box-sizing: border-box;
          text-align: center;
          font-size: 0.24rem;
          font-family: "MicrosoftYaHei-Bold";
          background-color: #0094ff;
          color: #fff;
          margin-right: 0.21rem;
          text-shadow: 1px 1px 1px #000;
        }
        li:last-child {
          margin-right: 0;
        }
        .one {
          background-color: #ffff00;
        }
        .two {
          background-color: #28C200;
        }
        .three {
          background-color: #760000;
        }
        .four {
          background-color: #0089FF;
        }
        .five {
          background-color: #6FFFFF;
        }
        .six {
          background-color: #5B00FF;
        }
        .seven {
          background-color: #E3E3E3;
        }
        .eight {
          background-color: #FF0000;
        }
        .nine {
          background-color: #FF7300;
        }
        .ten {
          background-color: #4D4D4D;
        }
      }
    }
  }
}
</style>
