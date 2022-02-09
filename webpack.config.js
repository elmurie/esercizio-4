const paths = require('./paths');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const dirNode = 'node_modules';

module.exports = {
  mode:'development',
  entry: {
    main: paths.indexJs,
    critical: paths.criticalJs
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash:7].js",
    chunkLoadTimeout: 30000,
    path: paths.build,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
        default: {
          name: 'default',
          minChunks: 2,
          enforce:true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
    }),
    // Extract css files to separate bundle
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash:4].css',
      attributes:{
        'data-css': '',
      },
      insert: function (linkTag){
        /*READ: dev-notes.md at 'layout css chunks' */
        let regex = /component-\w+/g;
        let title = linkTag.href.match(regex);
        let reference = document.querySelector('#dynamic-css-ref');
        if(title){
          linkTag.dataset.css = title.length>0 && title[0];
          document.head.insertBefore(linkTag, reference);
        }else{
          linkTag.dataset.css = 'after-meta-ref';
          document.head.appendChild(linkTag);
        }
      },
    }),
    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.fonts,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
        {
          from: paths.images,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js','.scss'],
    modules: [paths.src, dirNode, paths.root],
    alias: {
      'ScssLayouts' : paths.scssLayouts,
      'ScssComponents' : paths.scssComponents,
      request$: 'xhr',
    },
  },
};
