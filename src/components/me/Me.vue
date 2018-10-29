<template>
  <div class="me">
    <!-- header部分开始 -->
    <div class="myHeader">
      <div class="center">我的</div>
    </div>
    <!-- header部分结束 -->
    <div class="content">
      <!-- 用户信息部分开始 -->
      <div class="userInfo" @click='linkToPersonalData'>
        <div class="pic">
          <img src="../../assets/pic.jpg" alt="">
        </div>
        <div class="username">李云龙</div>
        <div class="accountName"><span>账户名:</span>独立团团长</div>
        <span class="iconfont icon-xiangyou"></span>
      </div>
      <!-- 用户信息部分结束 -->
      <!-- 用户记录部分开始 -->
      <div class="userRecoed">
        <div class="item clearfix" @click='linkToBindingAccount'>
          <img slot="icon" src="../../assets/BindingAccount@2x.png">
          <span>绑定用户</span>
        </div>
        <div class="item clearfix" @click='linkToStatementOfAccountChange'>
          <img slot="icon" src="../../assets/LedgerRecord@2x.png">
          <span>账变记录</span>
        </div>
        <div class="item clearfix" @click='linkToBettingDetailed'>
          <img slot="icon" src="../../assets/touzhumingxi@2x.png">
          <span>投注明细</span>
        </div>
        <div class="item clearfix" @click='linkToUpRecord'>
          <img slot="icon" src="../../assets/RechargeRecord@2x.png">
          <span>上分记录</span>
        </div>
        <div class="item clearfix aboutTop" @click='linkToLowerScoreRecord'>
          <img slot="icon" src="../../assets/PresentRecord@2x.png">
          <span>下分记录</span>
        </div>
        <div class="item clearfix" @click='linkToAboutBoXun'>
          <img slot="icon" src="../../assets/AboutUs@2x.png">
          <span>关于我们</span>
        </div>
      </div>
      <!-- 用户记录部分结束 -->
      <!-- 设置部分开始 -->
      <div class="item clearfix setting" @click='linkToSetting'>
        <img slot="icon" src="../../assets/shezhi@2x.png">
        <span>设置</span>
      </div>
    </div>
    <!-- 设置部分结束 -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Footer from '../../components/Footer'
export default {
  // components: { Footer },
  methods: {

    linkToBindingAccount () {
      this.$router.push({ name: 'BindingAccount' })
    },
    linkToPersonalData () {
      this.$router.push({ name: 'PersonalData' })
    },
    linkToUpRecord () {
      this.$router.push({ name: 'UpRecord' })
    },
    linkToLowerScoreRecord () {
      this.$router.push({ name: 'LowerScoreRecord' })
    },
    linkToSetting () {
      this.$router.push({ name: 'Setting' })
    },
    linkToStatementOfAccountChange () {
      this.$router.push({ name: 'StatementOfAccountChange' })
    },
    linkToBettingDetailed () {
      this.$router.push({ name: 'BettingDetailed' })
    },
    linkToAboutBoXun () {
      this.$router.push({ name: 'AboutBoXun' })
    }
  },
  mounted () {
    this.isCurrLinkGame = false
    // this.$refs.mePicLink.style.display = ''
    // this.$refs.mePicUnLink.style.display = 'none'
    console.log(this.$refs.mePicUnLink)
  },
  created () {
    this.isCurrLinkGame = false
    // this.$refs.mePicLink.style.display = 'block'
    // this.$refs.mePicUnLink.style.display = 'none'
  },
  beforeCreate () {
    this.isCurrLinkGame = false
    // this.$refs.mePicLink.style.display = 'block'
    // this.$refs.mePicUnLink.style.display = 'none'
  }
}
</script>

<style scoped lang="scss">
.me {
  background-color: rgb(240, 242, 248);
  padding-bottom: 1rem;
  .myHeader {
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.34rem;
    color: #fff;
    background-color: #32a9f0;
    margin-bottom: 0.72rem;
  }
  .content {
    padding-top: 1rem;
    .userInfo {
      position: relative;
      width: 100%;
      height: 1.18rem;
      background-color: #fff;
      .pic {
        position: absolute;
        top: 0.16rem;
        width: 0.83rem;
        height: 0.83rem;
        margin-left: 0.52rem;
        img {
          border-radius: 50%;
          width: 0.83rem;
          height: 0.83rem;
        }
      }
      .username {
        position: absolute;
        bottom: 0.7rem;
        left: 1.92rem;
        font-size: 0.3rem;
        color: #333333;
      }
      .accountName {
        position: absolute;
        bottom: 0.12rem;
        left: 1.91rem;
        font-size: 0.3rem;
        color: #999999;
        span {
          margin-right: 0.16rem;
        }
      }
      .iconfont.icon-xiangyou {
        position: absolute;
        bottom: 0.38rem;
        right: 0.3rem;
        font-size: 0.42rem;
        color: rgb(204, 204, 204);
      }
    }
    .userRecoed {
      background-color: #fff;
      margin-top: 0.24rem;
      padding-left: 0.3rem;
      .item {
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #ddd;
        img {
          float: left;
          width: 0.36rem;
          height: 0.36rem;
          margin-right: 0.21rem;
          margin-top: 0.24rem;
        }
        span {
          float: left;
          font-size: 0.3rem;
          color: #333;
        }
      }
      .item:last-child {
        border-bottom: none;
      }
    }
    .setting {
      margin-top: 0.24rem;
      height: 0.88rem;
      line-height: 0.88rem;
      background-color: #fff;
      padding-left: 0.3rem;
      img {
        float: left;
        width: 0.36rem;
        height: 0.36rem;
        margin-right: 0.21rem;
        margin-top: 0.24rem;
      }
      span {
        float: left;
        font-size: 0.3rem;
        color: #333;
      }
    }
  }
}
</style>
