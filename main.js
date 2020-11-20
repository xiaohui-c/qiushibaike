import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

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
