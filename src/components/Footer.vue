<template>
  <div class="tabbar">
    <div class="itemBox">
      <div class="gameItem" ref="linkToGame">
        <img src="../assets/Game@2x.png" alt="" ref="gamePic" v-show="isCurrLinkGame">
        <img src="../assets/GameNoLink@2x.png" alt="" v-show="!isCurrLinkGame">
        <span :class="isCurrLinkGame?'current':''">游戏</span>
      </div>
      <div class="meItem" ref="linkToMe">
        <img src="../assets/my@2x.png" alt=""  ref="mePicUnLink" v-show="isCurrLinkGame">
        <img src="../assets/currLinkMe.png" alt=""  ref="mePicLink" v-show="!isCurrLinkGame">
        <span :class="isCurrLinkGame?'':'current'">我的</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isCurrLinkGame: true
    }
  },
  methods: {
  },
  mounted () {
    this.$refs.linkToGame.addEventListener('touchstart', () => {
      this.isCurrLinkGame = true
      this.$router.push({ name: 'Game' })
      // setTimeout(() => {
      //   this.$router.push({ name: 'Game' })
      // }, 1)
    })

    this.$refs.linkToMe.addEventListener('touchstart', () => {
      this.$refs.mePicLink.style.display = ''
      this.$refs.mePicUnLink.style.display = 'none'
      this.isCurrLinkGame = false
      this.$router.push({ name: 'Me' })
      // setTimeout(() => {
      //   this.$router.push({ name: 'Me' })
      // }, 1)

      console.log(this.$refs.mePicLink.style.display)
      console.log(this.$refs.mePicUnLink.style.display)
    })
  }
}
</script>

<style scoped lang='scss'>
.tabbar {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 1rem;
  .itemBox {
    width: 100%;
    height: 1rem;
    padding: .01rem 0;
    .gameItem {
      float: left;
      width: 50%;
      height: 1rem;
      position: relative;
      img {
        position: absolute;
        top: .09rem;
        left: 1.67rem;
        width: .44rem;
        height: .50rem;
      }
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
        position: absolute;
        top: .62rem;
        font-size: .22rem;
        color: #666;
      }
      .current {
        color: #3BB2F0;
      }
    }
    .meItem {
      float: left;
      width: 50%;
      height: 1rem;
      position: relative;
      img {
        position: absolute;
        top: .09rem;
        left: 1.67rem;
        width: .44rem;
        height: .50rem;
      }
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
        position: absolute;
        top: .62rem;
        font-size: .22rem;
        color: #666;
      }
      .current {
        color: #3BB2F0;
      }
    }
  }
}
</style>
