<template>
    <div class="setting">
        <!-- header部分开始 -->
        <div class="myHeader">
            <router-link to="/Me" slot="left">
                <div class="left">
                    <span class="iconfont icon-xiangzuo"></span>
                    <span class="text">设置</span>
                </div>
            </router-link>
        </div>
        <!-- header部分结束 -->
        <!-- currentVersion部分开始 -->
        <div class="currentVersion" id="currentVersion">
            <mt-cell title="当前版本" value="3.0.1"></mt-cell>
        </div>
        <!-- currentVersion部分结束 -->
        <!-- quit部分开始 -->
        <div class="quit">
            <mt-cell title="退出登录"></mt-cell>
        </div>
        <!-- quit部分结束 -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.setting {
  color: #666;
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
  #currentVersion {
    margin-top: 0.32rem;
    font-size: 0.28rem;
  }
  .quit {
    margin-top: 0.24rem;
  }
}
</style>
