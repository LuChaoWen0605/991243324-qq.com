import vue from 'vue'
import setRequest from './request.js'

const api = {}
/** 用户登录  params {username:"" ,loginPwd:""} **/
api.login = params => setRequest.globalRequest('/login', 'POST', params)
/** 退出登录 **/
api.loginOut = params => setRequest.globalRequest('/login', 'DELETE', params)

vue.prototype.$api = api

export default api

/**
 * 实例
 * this.$api.loginOut({username:"",loginPwd:""}).then(res => {}).catch(res => {})
 * **/
