const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (req, res) => {
  let target = '';
  let target1 = '';
  let target2 = '';
  // 根据请求路径设置不同的代理目标
  if (req.url.startsWith('/api')) {
    target = 'https://v1.hitokoto.cn';
  } else if (req.url.startsWith('/kuleu')) {
    target1 = 'https://api.kuleu.com/api/';
  } else if (req.url.startsWith('/pexelsPicAndVideo')) {
    target2 = 'https://api.pexels.com';
  }

  // 如果target为空，说明没有匹配到任何代理规则，可以直接返回或处理错误
  if (!target) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('No proxy target found for the given request URL.');
    return;
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 根据不同的路径前缀重写路径
      '^/api/': '/',
    },
    // 可选：添加日志或其他中间件选项
    onProxyReq: (proxyReq, req, res) => {
      console.log(`[Proxy] ${req.method} ${req.url}`);
    },
  })(req, res);
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target: target1,
    changeOrigin: true,
    pathRewrite: {
      // 根据不同的路径前缀重写路径
      '^/kuleu/': '/',
    },
    // 可选：添加日志或其他中间件选项
    onProxyReq: (proxyReq, req, res) => {
      console.log(`[Proxy] ${req.method} ${req.url}`);
    },
  })(req, res);
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target: target2,
    changeOrigin: true,
    pathRewrite: {
      // 根据不同的路径前缀重写路径

      '^/pexelsPicAndVideo/': '/',
    },
    // 可选：添加日志或其他中间件选项
    onProxyReq: (proxyReq, req, res) => {
      console.log(`[Proxy] ${req.method} ${req.url}`);
    },
  })(req, res);
};
