let requestConfig = "";

// 开发环境
if (process.env.NODE_ENV == 'development') {
  requestConfig = 'http://bsto.sto.cc'
}
// 测试环境
else if (process.env.NODE_ENV == 'debug') {
  requestConfig = 'http://bsto.scrmmc.cn'
}
// 生产环境
else if (process.env.NODE_ENV == 'production') {
  requestConfig = 'http://bsto.scrmmc.cn'
}

export default requestConfig
