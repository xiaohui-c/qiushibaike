import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
// 状态管理
import store from './store'
Vue.prototype.$store = store;

import config from './util/config.js'
Vue.prototype.config=config

import lib from "./util/lib"
Vue.prototype.lib=lib

App.mpType = 'app'

const app = new Vue({
	...App,
	config,
	lib
})
app.$mount()
