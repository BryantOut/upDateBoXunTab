import axios from 'axios'
// 配置基准路径
// const baseURL = 'http://192.168.1.12:9090/'
const baseURL = 'http://47.244.62.58:9090/'

// 设置默认的基准路径
axios.defaults.baseURL = baseURL

// 添加拦截器--不是我们来调用的，而是 axios 自动调用
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 在请求发送之前你想要做的事情
  // 我们要将 token 这个值通过请求头的方式传递给服务器
  // 2.将值传递到服务器
  config.headers['Authorization'] = 'kE34mldXQEjgayiK'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 实现安全码验证
export const getSafety = (pa) => {
  return axios.post('/plugins/lotterychartapp/v1/ofuser/securityCode', pa)
    .then((res) => {
      // console.log(res.data)
      return res.data
    })
}

// 实现用户注册
export const UserRegister = (pa) => {
  return axios.post('/plugins/lotterychartapp/v1/ofuser/register', pa)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}

// 实现用户登陆验证
export const UserLogin = (params) => {
  return axios.post('/plugins/lotterychartapp/v1/ofuser/webLogin', params)
    .then((res) => {
      console.log(res)
      return res.data
    })
}

// 实现用户QQ、微信授权登陆
export const UserQQweixinlogin = (pa) => {
  return axios.post('/plugins/lotterychartapp/v1/ofuser/login', pa)
    .then((res) => {
      return res.data
    })
}

/**
 * 获取北京赛车所有开奖记录
 * GET
 * currentPage:当前页码
 * size:一页的条数
 */
export const getBjOpenAPrizeHistory = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/pk10/pk10History`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * 获取重庆时时彩所有开奖记录
 * GET
 * currentPage:当前页码
 * size:一页的条数
 */
export const getCqOpenAPrizeHistory = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/cqssc/cqsscHistory`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * 获取幸运飞船所有开奖记录
 * GET
 * currentPage:当前页码
 * size:一页的条数
 */
export const LuckyOpenAPrizeHistory = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/xyft/xyftHistory`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * 获取PC蛋蛋所有开奖记录
 * GET
 * currentPage:当前页码
 * size:一页的条数
 */
export const getPCColorEggOpenAPrizeHistory = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/pcdd/pcddHistory`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * GET 游戏界面列表
 * securityCode : 安全码
 * username : 用户名
 */
export const getGameDesktopList = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/ofuser/associatedGames`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * GET 投注明细
 * type=2
 *
 * page=1  // 不填为1， 必须 >=1
 * pageSize=10 // 不填为10
 * type=2
 * time=now // 不填就请求时的系统时间
 * roomName="" // 不填为 空字符串
 *
 * %s : 用户名:带域名
 * */
export const getBettingDetailedInfo = (pa) => {
  return axios.get(`plugins/restapi/v1/windows/data/bettingdetail/aaaaaa@optest.com`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * GET 帐变数据  type, 0:帐变记录  1:上分  2:下分
 * page=1  // 不填为1， 必须 >=1
 * pageSize=10 // 不填为10
 * type=1 // 不填为 0，   0 获取账变， 1获取上分， 2获取下分
 * time=now // 不填就请求时的系统时间
 * roomName="" // 不填为 空字符串
 *
 * %s : 用户名:带域名
 */
export const getAccountDataInfo = (pa) => {
  return axios.get(`plugins/restapi/v1/windows/data/aaaaaa@optest.com`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}

/**
 * GET 获取二维码
 * type ：  0：关于我们   1：客服中心
 */
export const getAboutBoXun = (pa) => {
  return axios.get(`plugins/lotterychartapp/v1/qrcode/qrCode`, {
    params: pa
  }).then((res) => {
    return res.data
  })
}
