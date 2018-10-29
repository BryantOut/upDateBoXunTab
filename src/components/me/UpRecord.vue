/*
 * @describe: 上分记录
 * @Author: bryantout
 * @Date: 2018-10-26 10:33:09
 * @Last Modified by: bryantout
 * @Last Modified time: 2018-10-26 11:26:17
 */

<template>
    <div class="upRecord">
        <!-- header部分开始 -->
        <div class="myHeader">
            <div class="left" v-on:click="back">
                <span class="iconfont icon-xiangzuo"></span>
                <span class="text">上分记录</span>
            </div>
        </div>
        <!-- header部分结束 -->
        <div class="content">
            <table>
                <thead>
                    <th>上分金额</th>
                    <th>上分时间</th>
                    <th>上分状态</th>
                    <th>群聊名称</th>
                </thead>
                <tr v-for='(item,index) in data' :key='index'>
                    <td class="price">{{item.score}}</td>
                    <td>{{item.billTime|timeFormat('-',':')}}</td>
                    <td>
                        <img src="../../assets/Success@2x.png" alt="" v-show='item.succeed'>
                        <img src="../../assets/fail@2x.png" alt="" v-show='!item.succeed'>
                    </td>
                    <td>{{item.roomNaturalName}}</td>
                </tr>
            </table>
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
    getAccountDataInfo({page: 1, pageSize: 10, type: 1}).then(res => {
      // console.log(res) // -- 可待优化
      this.data = res.data.data
      console.log(this.data)
    })
  },
  filters: {
    'timeFormat': function (billTime, splicchar, splicchar2) {
      var time = new Date(billTime)
      // 获取数据中的年月日
      var m = time.getMonth() + 1
      var d = time.getDate()
      var h = time.getHours()
      var min = time.getMinutes()

      return m + splicchar + d + '     ' + h + splicchar2 + min
    }
  }
}
</script>

<style scoped lang="scss">
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
body {
  background-color: #f0f2f8;
}
.upRecord {
  .content {
    padding: 0 0.3rem;
    background-color: #fff;
    table {
      width: 100%;
      font-size: 0.28rem;
      color: #666;
      margin-top: 0.08rem;
      thead {
        width: 100%;
        height: 0.72rem;
        line-height: 0.72rem;
        th {
          width: 25%;
          text-align: center;
          background-color: #fff;
        }
      }
      tr {
        border-bottom: 1px dashed #ccc;
        background-color: #fff;
        td {
          height: 1.08rem;
          line-height: 1.08rem;
          text-align: center;
          img {
            vertical-align: middle;
            width: 0.86rem;
            height: 0.67rem;
          }
        }
        .price {
          color: #eb2e44;
        }
      }
      tr:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
