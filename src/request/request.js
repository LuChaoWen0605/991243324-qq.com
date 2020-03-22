import Qs from 'qs'
import Axios from 'axios'
import { Message } from 'element-ui'
import requestConfig from './requesrConfig'
const request = {}
Axios.defaults.baseURL = requestConfig

// 设置拦截器
Axios.interceptors.request.use(config => {//请求之前(可以设置token--cookies)

  return config
},error =>{
  return Promise.reject(error)
})
Axios.interceptors.response.use(response => {//数据拿到之后

  switch (response.data.error_code) {
    case 200 :
      return response.data;
      break;
    default:
      Message.error(response.data.message);
      return false
      break
  }
},error => {
  Message.error("服务器连接错误，请联系管理员！")
  return Promise.reject(error.response)
})
request.globalRequest = (url, method, data, urlparams ) => {
  return Axios({
    method: method,

    url:url + (urlparams ? urlparams : ''),

    data:Qs.stringify(data),

    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    withCredentials:true,

  })

/*    .then(function(res){
    return res;
  }).catch(function(err){
    return err;
  })*/
}

export default request
