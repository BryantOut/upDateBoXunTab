<template>
  <div class="groupMessage">
    <!-- header部分开始 -->
    <div class="myHeader">
      <div class="left" v-on:click="back">
        <span class="iconfont icon-xiangzuo"></span>
        <span class="text">群公告</span>
      </div>
      <div class="right" v-show='false'>保存</div>
    </div>
    <!-- header部分结束 -->
    <div class="content">
      <!-- messageTitle部分开始 -->
      <div class="messageTitle">
        <img src="../../assets/pic.jpg" alt="">
        <div class="username">李云龙</div>
        <div class="time">2017-07-07 11:00</div>
      </div>
      <!-- messageTitle部分结束 -->
      <!-- messageCon部分开始 -->
      <div class="messageConBox">
        <p>{{message}}</p>
      </div>
      <!-- messageCon部分结束 -->
    </div>
    <!-- messageFooter部分开始 -->
    <div class="messageFooter">
      <span class="line"></span>
      <span>只有群主可以编辑</span>
      <span class="line"></span>
    </div>
    <!-- messageFooter部分结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比'
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style scoped lang="scss">
.groupMessage {
  position: relative;
  background-color: #fff;
  height: 13.34rem;
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
      float: right;
      margin-top: .26rem;
      margin-right: .3rem;
    }
  }
  .content {
    padding: 0 0.4rem;
    .messageTitle {
      width: 100%;
      height: 1.67rem;
      font-size: 0.28rem;
      color: #888;
      border-bottom: 1px solid #ccc;
      img {
        position: absolute;
        top: 1.28rem;
        left: 0.45rem;
        width: 1rem;
        height: 1rem;
      }
      .username {
        position: absolute;
        top: 1.26rem;
        left: 1.65rem;
      }
      .time {
        position: absolute;
        top: 2.05rem;
        left: 1.65rem;
      }
    }
    .messageConBox {
      margin-top: 0.3rem;
      font-size: 0.28rem;
      color: #aaa;
      p {
        line-height: 0.48rem;
        text-indent: 2em;
      }
    }
  }
  .messageFooter {
    position: fixed;
    bottom: 0.8rem;
    left: 1.31rem;
    font-size: 0.28rem;
    font-weight: 500;
    color: #ccc;
    .line {
      width: 1rem;
      height: 1px;
      background-color: #ccc;
      margin-top: 0.12rem;
    }
    span {
      float: left;
    }
    .line:nth-child(1) {
      margin-right: 0.32rem;
    }
    .line:last-child {
      margin-left: 0.32rem;
    }
  }
}
</style>
