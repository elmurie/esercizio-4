const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');

const configMerged =  merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/scss/utils/index.scss'
            }
          }
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

module.exports = configMerged;
