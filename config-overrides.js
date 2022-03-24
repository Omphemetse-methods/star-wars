module.exports = function override(config, env) {
  // fix crypto
  config.resolve.fallback = {
    crypto: false,
  };

  return config;
};
