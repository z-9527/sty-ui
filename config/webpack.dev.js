const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './index.html',
    hot: true,
    port: 3000,
    inline: true,
    stats: 'errors-only' // 控制台只显示错误信息
  }
});
