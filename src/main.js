/*
* @Author: xiaju
* @Date:   2018-09-17 14:15:24
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-23 10:48:55
*/
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import '@/style/base.less'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>',
  
})

