import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个 store
const store = new Vuex.Store({
    // (1)初始 state 对象
    state:{
        common: {
            logo:
              "https://mycos.oss-cn-shenzhen.aliyuncs.com/qiushibaike/static/common/logo.png?Expires=1606190493&OSSAccessKeyId=TMP.3Kj38SghE5TzFpqgYCkEdCpYBdaeSJmUtsj9SM1TWKEYGTb8d7R7UJSYz3cVYSxa1MjhwgP6bRTFECp38v5bRfgBAWVcqy&Signature=XjCKXJuRpC64avxaC2zukz1Uido%3D&versionId=CAEQGRiBgMDX2cTfrxciIDhmNDg0YTdkM2I2YTQ5ZGViNTY3YThmMGJlNDg5MDli&response-content-type=application%2Foctet-stream",
        },
        demo: {
            userpic: {
                four:'https://mycos.oss-cn-shenzhen.aliyuncs.com/qiushibaike/static/demo/userpic/4.jpg?Expires=1606192999&OSSAccessKeyId=TMP.3Kj38SghE5TzFpqgYCkEdCpYBdaeSJmUtsj9SM1TWKEYGTb8d7R7UJSYz3cVYSxa1MjhwgP6bRTFECp38v5bRfgBAWVcqy&Signature=b%2BhVANLLC5adCKLHEnHBD1FgwZs%3D&versionId=CAEQGRiBgIDdyu_grxciIGZmZTZjOTBlMjNjNzQwNGI4OTE2MTgwODFiOWUwNzg4&response-content-type=application%2Foctet-stream',
                nineteen:
                    'https://mycos.oss-cn-shenzhen.aliyuncs.com/qiushibaike/static/demo/userpic/19.jpg?Expires=1606190829&OSSAccessKeyId=TMP.3Kj38SghE5TzFpqgYCkEdCpYBdaeSJmUtsj9SM1TWKEYGTb8d7R7UJSYz3cVYSxa1MjhwgP6bRTFECp38v5bRfgBAWVcqy&Signature=bNDxSylFS3vj4riPuREPcv0b5wc%3D&versionId=CAEQGRiBgIC3v._grxciIDRhNzY3MGYxY2Y0ZTQ0NWI5NGJjNWY2ZjBiM2M0MzU5&response-content-type=application%2Foctet-stream'
            },
            demo20: 'https://mycos.oss-cn-shenzhen.aliyuncs.com/qiushibaike/static/demo/demo20.jpg?Expires=1606191844&OSSAccessKeyId=TMP.3Kj38SghE5TzFpqgYCkEdCpYBdaeSJmUtsj9SM1TWKEYGTb8d7R7UJSYz3cVYSxa1MjhwgP6bRTFECp38v5bRfgBAWVcqy&Signature=pt074l5ZgnmbdYoKB9m2pji5gw8%3D&versionId=CAEQGRiBgMCu6sTfrxciIDgzOGIzYjFiNTdiNTRlMTE4NzI0ZDk4ZWEwYzMxNWY2&response-content-type=application%2Foctet-stream',
            
        }
    },
    // (2)定义一些mutation
    mutations:{
       
    }
})

// 导出该模块:以便其他文件可对其进行使用
export default store