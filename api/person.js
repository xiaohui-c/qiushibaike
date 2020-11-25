import req from '../fetch/index.js'

const config = {
    // 获取菜单列表
    getPersonImgInfo: {
        url: '/home/person',
        method:'get'
    }
}

const request = function (funcName, requestParam) {
    return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
  }
  export default request