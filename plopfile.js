const { componentTemplate } = require('./plops');

const config = (plop) => {
  plop.setGenerator('Component template', componentTemplate);
};

module.exports = config;
