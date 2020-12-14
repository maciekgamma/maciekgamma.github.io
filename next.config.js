// next.config.js
const withPlugins = require('next-compose-plugins');
const offline = require('next-offline');
const withImages = require('next-images');

const nextConfig = {
  target: process.env.NODE_ENV !== 'production' ? 'server' : 'serverless',
  dontAutoRegisterSw: true,
  generateSw: false,
  devSwSrc: './public/sw.js',
  workboxOpts: {
    swSrc: './public/sw.js',
    swDest: './public/service-worker.js',
  },
  // Exposes Server ENV Vars To Client Using Webpack
  env: {},
};

module.exports = withPlugins([[offline]], nextConfig);
module.exports = withImages();
