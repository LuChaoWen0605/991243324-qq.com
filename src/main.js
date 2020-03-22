// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from  'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

/*import toastRegistry from './config/totas'*/
/** 应用配置 **/
import $appConfig from './config/appConfig'

import $api from './request/api'


import App from './App'
import router from './router'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location)//.catch(error=> error)
}
// Loading
import './components/Loading/index.css'
import Loading from './components/Loading/index'


Vue.config.productionTip = false
Vue.use(VueCookies)
/*Vue.use(ElementUI)*/
Vue.component('icon', Icon)

/*Vue.use(toastRegistry)*/
Vue.use($appConfig)
Vue.use($api)

Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
