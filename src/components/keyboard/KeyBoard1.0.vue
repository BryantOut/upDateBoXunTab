<template>
  <div class="keyBoardBox">
    <!-- 输入框部分开始 -->
    <div class="inputBox clearfix" ref="inputBox">
      <img src="../../assets/keyboard@2x.png" alt="" class="icon iconKeyboard">
      <input type="text" class="messageInput">
      <img src="../../assets/Expression@2x.png" alt="" class="icon iconexpression">
      <img src="../../assets/Add to@2x.png" alt="" class="icon iconAddTo">
    </div>
    <!-- 输入框部分结束 -->
  </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
body {
  background-color: rgb(240, 242, 248);
}
.keyBoardBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(240, 242, 248);
  margin-top: 1rem;
  .inputBox {
    // position: fixed;
    // bottom: 0;
    box-sizing: border-box;
    width: 100%;
    height: 0.88rem;
    padding: 0.11rem 0.25rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
    .icon {
      float: left;
      width: 0.67rem;
      height: 0.67rem;
      display: block;
      color: rgb(105, 108, 113);
    }
    .messageInput {
      float: left;
      width: 4.4rem;
      height: 0.6rem;
      box-sizing: border-box;
      outline: none;
      border: none;
      border-bottom: 0.02rem solid #ccc;
      margin-left: 0.1rem;
      padding-left: 12px;
    }
    .iconexpression {
      margin-left: 0.2rem;
    }
    .iconAddTo {
      margin-left: 0.2rem;
    }
  }
  .myKeyBoard {
    width: 7.35rem;
    font-size: 0.34rem;
    margin: 0 auto;
    background-color: #fff;
    padding: 0.1rem;
    .top {
      position: relative;
      width: 100%;
      height: 0.77rem;
      background-color: #fff;
      color: rgba(102, 102, 102, 1);
      .mint-button {
        display: inline-block;
        width: 1.1rem;
        height: 0.77rem;
        line-height: 0.77rem;
        text-align: center;
        font-size: 0.34rem;
        color: #666;
        padding: 0;
      }
      .mint-button.iconfont {
        background-color: #fff;
      }
    }
    .more {
      width: 100%;
      margin-top: 0.1rem;
      .mint-button {
        width: 1.34rem;
        text-align: center;
        height: 0.76rem;
        line-height: 0.76rem;
        color: #666;
        font-size: 0.34rem;
        margin: 0;
      }
      .mint-button:nth-last-child(-n + 5) {
        margin-top: 0.1rem;
      }
    }
    .mainBody {
      width: 100%;
      display: flex;
      .left,
      .right {
        width: 1.16rem;
        margin-top: 0.1rem;
        .mint-button {
          width: 100%;
          height: 0.89rem;
          line-height: 0.94rem;
          text-align: center;
          font-size: 0.38rem;
          color: #666;
          border: none;
          margin-bottom: 0.1rem;
        }
        .mint-button:last-child {
          margin-bottom: none;
        }
        .del {
          position: relative;
          background-color: #fff;
          img {
            position: absolute;
            top: .19rem;
            right:.22rem;
            width: .71rem;
            height: .48rem;
          }
        }
      }
      .center {
        width: 4.68rem;
        margin-top: 0.1rem;
        margin-left: 10px;
        .mint-button {
          width: 30%;
          height: 0.89rem;
          line-height: 0.89rem;
          text-align: center;
          font-size: 0.43rem;
          color: #666;
          margin-bottom: 0.1rem;
        }
        .mint-button:nth-last-child(-n + 3) {
          margin-bottom: none;
        }
        .switchKeyBoard {
          background-color: #f7a539;
          color: #fff;
          font-size: 0.34rem;
        }
      }
    }
  }
}
</style>
