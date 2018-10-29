<<<<<<< HEAD
<<<<<<< HEAD
# BoXunH5

## 一、mimt-ui

[官方网站](http://mint-ui.github.io/#!/zh-cn)

### 安装

```js
// 安装
# Vue 1.x
npm install mint-ui@1 -S
# Vue 2.0
npm install mint-ui -S
```

### 在main.js中引入

```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
```

## 二、vue中使用第三方UI库的移动端rem适配方案

[文档地址](https://segmentfault.com/a/1190000015238394)

## 三、Vue项目中，防止页面被缩放和放大

[相关文档](https://blog.csdn.net/cherrylee_1210/article/details/80606611)

## 四、H5禁止手机自带键盘弹出

[相关文章](https://blog.csdn.net/qq_24147051/article/details/52958610)

**html代码**

```html
<input type="text" class="messageInput" v-on:focus='inputFocus'>
```

**js代码**

```js
<script>
export default {
  mounted () {
  },
  methods: {
    inputFocus: function () {
      document.activeElement.blur()
    }
  }
}
</script>

```

## 五、npm install 报错（npm ERR! errno -4048，Error: EPERM: operation not permitted,）解决方法

### 方法1、

需要删除npmrc文件。

强调：不是nodejs安装目录npm模块下的那个npmrc文件

而是在C:\Users\{账户}\下的.npmrc文件..

### 方法2、

或者直接用命令清理就行，控制台输入：

npm cache clean --force
=======
# BoXun1.0
>>>>>>> 9dd954789f2bc30dcbfb677e6195b5425d1dddc5
=======
# BoXun1.0
>>>>>>> 9dd954789f2bc30dcbfb677e6195b5425d1dddc5
