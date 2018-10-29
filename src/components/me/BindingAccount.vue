<template>
    <div class="bindingAccount">
        <!-- header部分开始 -->
        <div class="myHeader">
            <router-link to="/Me" slot="left">
                <div class="left">
                    <span class="iconfont icon-xiangzuo"></span>
                    <span class="text">绑定账户</span>
                </div>
            </router-link>
        </div>
        <!-- header部分结束 -->
        <!-- content部分开始 -->
        <div class="content">
            <div class="collectMoneyClass">
                <div class="currentVersion" id="currentVersion">
                    <mt-cell title="收款类型">
                        <span style="color: #3BB2F0;margin-right:0">支付宝
                            <span class="iconfont icon-tubiaozhizuo-"></span>
                        </span>
                    </mt-cell>
                    <mt-cell title="收款款号" value="请填写收款人账户"></mt-cell>
                </div>
            </div>
        </div>
        <!-- content部分结束 -->
        <button class="submit">提交</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.bindingAccount {
  position: relative;
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
  .content {
    margin-top: 0.32rem;
  }
  .submit {
    position: absolute;
    top: 5.26rem;
    left: 0.3rem;
    width: 6.9rem;
    height: 0.88rem;
    background-color: #3bb2f0;
    color: #fff;
    border-radius: 0.3rem;
    border: none;
    margin: 0 auto;
    font-size: 0.32rem;
  }
}
</style>
