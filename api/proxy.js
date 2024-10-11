const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (req, res) => {
  let target = 'https://v1.hitokoto.cn';

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 根据不同的路径前缀重写路径
      '^/api/': '/',
    },
  })(req, res);
};
