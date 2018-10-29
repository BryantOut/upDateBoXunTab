/*
 * @describe: 账变记录
 * @Author: bryantout
 * @Date: 2018-10-26 10:01:39
 * @Last Modified by: bryantout
 * @Last Modified time: 2018-10-26 14:27:36
 */
<template>
    <div class="statementOfAccountChange">
        <!-- header部分开始 -->
        <div class="myHeader">
            <div class="left" v-on:click="back">
                <span class="iconfont icon-xiangzuo"></span>
                <span class="text">账变记录</span>
            </div>
        </div>
        <!-- header部分结束 -->
        <div class="contentBox">
            <div class="itemBox" v-for='(item,index) in data' :key='index'>
                <div class="item">
                    <h3>交易类型:
                        <span>{{item.billType=='1'?'上分':item.billType=='2'?'下分':item.billType=='3'?'系统上分':item.billType=='4'?'系统下分':item.billType=='5'?'结算游戏':'回水操作'}}</span>
                    </h3>
                    <div class="content clearfix">
                        <div class="subItem">
                            <div class="title">费用金额</div>
                            <div class="titleCon">{{item.score}}</div>
                        </div>
                        <div class="subItem">
                            <div class="title">用户余额</div>
                            <div class="titleCon balance">{{item.totalIntegral}}</div>
                        </div>
                        <div class="subItem">
                            <div class="title">群聊名称</div>
                            <div class="titleCon groupName">{{item.roomNaturalName}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAccountDataInfo } from '@/api/index.js'
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
    getAccountDataInfo({page: 1, pageSize: 10, type: 0}).then(res => {
      // console.log(res) // -- 可待优化
      this.data = res.data.data
      console.log(this.data)
    })
  }
}
</script>

<style scoped lang="scss">
.statementOfAccountChange {
  background-color: rgb(240, 242, 248);
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
    }
  }
}
.contentBox {
  width: 100%;
  padding-top: 0.08rem;
  margin-bottom: 1rem;
  background-color: rgb(240, 242, 248);
  .itemBox {
    background-color: #fff;
    margin-bottom: 0.19rem;
    .item {
      width: 100%;
      height: 3.62rem;
      font-size: 0.3rem;
      color: #666;
      padding: 0 0 0 0.3rem;
      h3 {
        height: 0.72rem;
        line-height: 0.72rem;
        border-bottom: 0.01rem solid #ddd;
        span {
          color: #3bb2f0;
        }
      }
      .content {
        .subItem {
          height: 0.72rem;
          line-height: 0.72rem;
          .title {
            float: left;
            border-bottom: none;
          }
          .titleCon {
            float: right;
            line-height: 0.72rem;
            color: #eb1d34;
            margin-right: 0.29rem;
          }
          .titleCon.balance {
            color: #3bb2f0;
          }
          .titleCon.groupName {
            color: #333;
          }
        }
      }
    }
  }
}
}
</style>
