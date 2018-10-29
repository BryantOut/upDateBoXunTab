<template>
  <div class="personalData">
    <!-- header部分开始 -->
    <div class="myHeader">
      <router-link to="/Me" slot="left">
        <div class="left">
          <span class="iconfont icon-xiangzuo"></span>
          <span class="text">个人资料</span>
        </div>
        <div class="right">
          <span>保存</span>
        </div>
      </router-link>
    </div>
    <!-- header部分结束 -->
    <!-- pic部分开始 -->
    <div class="picBox">
      <div class="pic">
        <span class="userPic">头像</span>
        <img src="../../assets/pic.jpg" alt="">
        <span class="iconfont icon-xiangyou"></span>
      </div>
      <div class="username">
        <span class="qname">昵称</span>
        <span class="currQname">李云龙</span>
        <span class="iconfont icon-xiangyou"></span>
      </div>
    </div>
    <!-- pic部分结束 -->
    <!-- bindingPhone部分开始 -->
    <div class="bindingPhone">
      <span class="phone">绑定手机号</span>
      <span class="iconfont icon-xiangyou"></span>
    </div>
    <!-- bindingPhone部分结束 -->
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.personalData {
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
    .right {
      position: absolute;
      top:.26rem;
      right: .3rem;
      span {

      }
    }
  }
  .picBox {
    padding-left: 0.3rem;
    background-color: #fff;
    .pic {
      position: relative;
      width: 100%;
      height: 1.58rem;
      font-size: 0.3rem;
      color: #666;
      margin-top: 0.28rem;
      border-bottom: 1px solid #eee;
      .userPic {
        position: absolute;
        top: 0.65rem;
      }
      img {
        position: absolute;
        top: 0.42rem;
        right: 0.82rem;
        border-radius: 50%;
        width: 0.83rem;
        height: 0.83rem;
        margin-right: 0.4rem;
      }
      .iconfont {
        position: absolute;
        top: 0.58rem;
        right: 0.3rem;
        font-size: 0.42rem;
        color: #ccc;
      }
    }
    .username {
      position: relative;
      width: 100%;
      height: 0.99rem;
      background-color: #fff;
      font-size: 0.3rem;
      color: #666;
      .qname {
        position: absolute;
        top: 0.36rem;
      }
      .currQname {
        position: absolute;
        top: 0.37rem;
        right: 0.82rem;
        margin-right: 0.4rem;
      }
      .iconfont {
        position: absolute;
        top: 0.28rem;
        right: 0.3rem;
        font-size: 0.42rem;
        color: #ccc;
      }
    }
  }
  .bindingPhone {
    position: relative;
    height: 0.98rem;
    font-size: 0.3rem;
    color: #666;
    margin-top: 0.2rem;
    background-color: #fff;
    .phone {
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
}
</style>
