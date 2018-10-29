<template>
  <div class='groupChatInfo'>
    <!-- header部分开始 -->
    <div class='myHeader'>
        <div class='left' v-on:click="back">
          <span class='iconfont icon-xiangzuo'></span>
          <span class='text'>聊天信息<span>(12)</span></span>
        </div>
    </div>
    <!-- header部分结束 -->
    <!-- 部分群成员头像部分开始 -->
    <div class="groupMemberPic clearfix">
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
      <div class="item">
        <img src="../../assets/touxiang@2x.png" alt="">
        <div class="username">Healer</div>
      </div>
    </div>
    <!-- 部分群成员头像部分结束 -->
    <!-- 查看所有成员部分开始 -->
    <div class="checkAllGroupMemberInfo">
      <router-link to='/Me' slot='left'>
        <span>查看全部群成员</span>
      </router-link>
    </div>
    <!-- 查看所有成员部分结束 -->
    <!-- itemBox部分开始 -->
    <div class="itemBox">
      <div class="item" @click='showCustomerService'>
        <span class="title">群客服</span>
        <span class="iconfont icon-xiangyou"></span>
      </div>
      <router-link to='/GroupMessage' slot='left'>
        <div class="item groupMessage">
          <span class="title">群公告</span>
          <span class="iconfont icon-xiangyou"></span>
          <span class="contentPart">文字文字文字文字文字文字文字文字文字文字文字文字
            文字文字文字</span>
        </div>
      </router-link>
      <router-link to='/BjOpenAPrizeHistory' slot='left'>
        <div class="item">
          <span class="title">开奖历史</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
      <router-link to='/StatementOfAccountChange' slot='left'>
        <div class="item">
          <span class="title">账变记录</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
      <router-link to='/BettingDetailed' slot='left'>
        <div class="item">
          <span class="title">投注明细</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
      <router-link to='/SweepCode' slot='left'>
        <div class="item">
          <span class="title">扫码上分</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
      <router-link to='/UpRecord' slot='left'>
        <div class="item">
          <span class="title">上分记录</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
      <router-link to='/LowerScoreRecord' slot='left'>
        <div class="item">
          <span class="title">下分记录</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </router-link>
    </div>
    <!-- itemBox部分结束 -->
    <!-- clearChatReport部分开始 -->
    <div class="clearChatReport">
      清空聊天记录
    </div>
    <!-- clearChatReport部分结束 -->
    <!-- 客服窗口部分开始 -->
    <div class="customerServiceBg" v-show="isShowCustomerService">
      <div class="customerServiceBox">
        <div class="title">
          联系客服
          <span class="iconfont icon-guanbi" @click="closeCustomerService"></span>
        </div>
        <div class="content">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowCustomerService: false,
      weChatNum: '12345678900',
      qqNum: '654321'
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
    back: function () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style scoped lang='scss'>
.groupChatInfo {
  background-color: #fff;
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
  .groupMemberPic {
    box-sizing: border-box;
    padding: 0 0.45rem;
    background-color: #fff;
    .item {
      float: left;
      padding-right: 0.4rem;
      margin-bottom: 0.4rem;
      img {
        width: 1rem;
      }
      .username {
        font-size: 0.28rem;
        color: #888;
      }
    }
    .item:nth-child(5n + 5) {
      padding-right: 0;
    }
    .item:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }
  .checkAllGroupMemberInfo {
    width: 100%;
    font-size: 0.28rem;
    color: #888;
    text-align: center;
    margin-top: 0.29rem;
    background-color: #fff;
  }
  .itemBox {
    .item {
      position: relative;
      height: 0.98rem;
      font-size: 0.28rem;
      color: #333;
      font-weight: 500;
      background-color: #fff;
      .title {
        position: absolute;
        top: 0.36rem;
        left: 0.3rem;
      }
      .iconfont {
        position: absolute;
        top: 0.28rem;
        right: 0.3rem;
        font-size: 0.42rem;
        color: #ccc;
      }
    }
    .groupMessage {
      height: 1.78rem;
      .contentPart {
        position: absolute;
        top: 0.69rem;
        padding: 0.3rem;
        font-size: 0.26rem;
        color: #999;
        line-height: 0.32rem;
      }
    }
  }
  .clearChatReport {
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.28rem;
    color: #333;
    padding-left: 0.3rem;
    background-color: #fff;
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
          height: .58rem;
          line-height: .7rem;
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
}
</style>
