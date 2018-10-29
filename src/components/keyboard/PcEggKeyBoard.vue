/*
 * @Author: bryantout
 * @Date: 2018-10-25 14:05:18
 * @Last Modified by: bryantout
 * @Last Modified time: 2018-10-26 15:41:31
 */
<template>
  <div class="keyBoardBox">
    <!-- 输入框部分开始 -->
    <div class="inputBox clearfix" ref="inputBox">
      <img src="../../assets/keyboard@2x.png" alt="" class="icon iconKeyboard">
      <input type="text" class="messageInput" v-on:focus='inputFocus' ref="inputText">
      <img src="../../assets/Expression@2x.png" alt="" class="icon iconexpression">
      <img src="../../assets/Add to@2x.png" alt="" class="icon iconAddTo">
    </div>
    <div class="myKeyBoard" v-if="isShowMyKeyBoard">
      <div class="top">
        <button class="mint-button mint-button--default mint-button--small allCancel">全部取消
        </button>
        <button class="mint-button mint-button--default mint-button--small">上分
        </button>
        <button class="mint-button mint-button--default mint-button--small">查
        </button>
        <button class="mint-button mint-button--default mint-button--small">下分
        </button>
        <button class="mint-button iconfont icon-tubiaozhizuo-" @click='isShowMyKeyBoard=false'></button>
      </div>
      <div class="more">
        <button class="mint-button mint-button--default mint-button--small">大单
        </button>
        <button class="mint-button mint-button--default mint-button--small">小单
        </button>
        <button class="mint-button mint-button--default mint-button--small">大双
        </button>
        <button class="mint-button mint-button--default mint-button--small">小双
        </button>
        <button class="mint-button mint-button--default mint-button--small">极大
        </button>
        <button class="mint-button mint-button--default mint-button--small">包三
        </button>
        <button class="mint-button mint-button--default mint-button--small">极小
        </button>
        <button class="mint-button mint-button--default mint-button--small">对子
        </button>
        <button class="mint-button mint-button--default mint-button--small">顺子
        </button>
        <button class="mint-button mint-button--default mint-button--small">豹子
        </button>
      </div>
      <div class="mainBody">
        <div class="left">
          <button class="mint-button mint-button--default mint-button--small">大
          </button>
          <button class="mint-button mint-button--default mint-button--small">小
          </button>
          <button class="mint-button mint-button--default mint-button--small">单
          </button>
          <button class="mint-button mint-button--default mint-button--small">双
          </button>
        </div>
        <div class="center">
          <button class="mint-button mint-button--default mint-button--small">1
          </button>
          <button class="mint-button mint-button--default mint-button--small">2
          </button>
          <button class="mint-button mint-button--default mint-button--small">3
          </button>
          <button class="mint-button mint-button--default mint-button--small">4
          </button>
          <button class="mint-button mint-button--default mint-button--small">5
          </button>
          <button class="mint-button mint-button--default mint-button--small">6
          </button>
          <button class="mint-button mint-button--default mint-button--small">7
          </button>
          <button class="mint-button mint-button--default mint-button--small">8
          </button>
          <button class="mint-button mint-button--default mint-button--small">9
          </button>
          <button class="mint-button mint-button--default mint-button--small">/
          </button>
          <button class="mint-button mint-button--default mint-button--small">0
          </button>
          <button class="mint-button switchKeyBoard mint-button--default mint-button--small" @click='changeKeyBoard'>
            <span>中</span>
            <span>英</span>
          </button>
        </div>
        <div class="right">
          <button class="mint-button del">
            <img src="../../assets/del.png" alt="">
          </button>
          <button class="mint-button mint-button--default mint-button--small" style="color:#FF252D">红波
          </button>
          <button class="mint-button mint-button--default mint-button--small" style="color:#5ABE37">绿波
          </button>
          <button class="mint-button mint-button--default mint-button--small" style="color:#3690DE">蓝波
          </button>
        </div>
      </div>
    </div>
    <!-- 输入框部分结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowMyKeyBoard: false
    }
  },
  mounted () {
  },
  methods: {
    inputFocus: function () {
      if (this.isShowMyKeyBoard) {
        document.activeElement.focus()
        this.isShowMyKeyBoard = false
      } else {
        this.isShowMyKeyBoard = true
        document.activeElement.blur()
      }
    },
    changeKeyBoard: function () {
      this.$refs.inputText.focus()
    } }
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
  .inputBox {
    box-sizing: border-box;
    width: 100%;
    height: 0.88rem;
    padding: 0.11rem 0.25rem 0;
    background-color: #fff;
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
      margin-bottom: 0.11rem;
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
    margin: 0.1rem auto 0;
    .top {
      position: relative;
      width: 100%;
      height: 0.8rem;
      background-color: #fff;
      // background-color: pink;
      color: rgba(102, 102, 102, 1);
      padding: 0.05rem 0;
      padding-left: 0.1rem;
      .mint-button {
        display: inline-block;
        width: 1.1rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        font-size: 0.34rem;
        color: #666;
        background-color: #fff;
        padding: 0;
      }
      .allCancel {
        width: 2.2rem;
      }
      .mint-button.iconfont {
        background-color: #fff;
      }
    }
    .more {
      width: 100%;
      height: 1.4rem;
      padding-left: 0.1rem;
      background-color: rgb(240, 242, 248);
      padding-top: 0.1rem;
      .mint-button {
        width: 1.7rem;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #666;
        background-color: #fff;
        font-size: 0.34rem;
        margin: 0;
      }
      .mint-button:nth-last-child(-n + 6) {
        margin-top: 0.1rem;
        width: 1.1rem;
      }
    }
    .mainBody {
      width: 100%;
      .left,
      .right {
        float: left;
        width: 1.14rem;
        margin-top: 0.1rem;
        .mint-button {
          width: 100%;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.28rem;
          color: #666;
          background-color: #fff;
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
            top: .1rem;
            right: .22rem;
            width: 0.71rem;
            height: 0.38rem;
          }
        }
      }
      .left {
        .mint-button {
          font-size: 0.38rem;
        }
      }
      .center {
        float: left;
        width: 4.83rem;
        margin-top: 0.1rem;
        margin-left: 0.08rem;
        margin-right: 0.08rem;
        .mint-button {
          width: 1.54rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.43rem;
          color: #666;
          background-color: #fff;
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
