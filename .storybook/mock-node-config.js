const defaultConfig = {
    auth: {},
  };
  
  const development = {
    ...defaultConfig,
    dev: true,
  };
  
  const production = {
    ...defaultConfig,
    dev: false,
  };
  
  const Config = function() {
    const config = process.env.NODE_ENV === 'production' ? production : development;
  
    Object.keys(config).forEach(key => {
      this[key] = config[key];
    });
  };
  
  Config.prototype.has = function(params) {
    return this.hasOwnProperty(params);
  };
  
  Config.prototype.get = function(params) {
    return this[params];
  };
  
  module.exports = new Config();