const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// Set during CI / CD
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/vue-container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'vue-container',
      remotes: {
        'marketing': `marketing@${domain}/marketing/latest/remoteEntry.js`,
        'auth': `auth@${domain}/auth/latest/remoteEntry.js`,
        'dashboard': `dashboard@${domain}/dashboard/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies // Share all the package.json dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);
