const path = require('path');

module.exports = function (baseConfig, env, defaultConfig) {

  defaultConfig.resolve.alias.config = path.resolve(__dirname, 'mock-node-config.js');

  console.log(`=> env ${env}`);

  return defaultConfig;
};