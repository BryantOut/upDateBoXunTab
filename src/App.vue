<template>
  <div id="app">
    <!-- 内容 -->
    <Content ></Content>
    <!-- 设置部分结束 -->
    <Footer v-show="isShowFooter?true:false"></Footer>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Content, Footer },
  data () {
    return {
      isShowFooter: false
    }
  },
  methods: {
    showFooter (url) {
      if (url.includes('Game') || url.includes('Me')) {
        this.isShowFooter = true
      } else {
        this.isShowFooter = false
      }
    }
  },
  mounted () {
    this.showFooter(this.$route.name)
  },
  watch: {
    $route () {
      this.showFooter(this.$route.name)
    }
  }
}
</script>

<style>
#app {
  background-color: rgb(240, 242, 248);
}
</style>
