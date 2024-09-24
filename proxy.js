const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://api.cloudflare.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/client/v4/accounts/5b401da39338d84307d13fc8797bf09c/ai/run/@cf/qwen/qwen1.5-14b-chat-awq',
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', 'Bearer Ts7M5wQVZUkaj6piDG59mbEMARR0nkrwXMsEWEs6');
  },
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
}));

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});