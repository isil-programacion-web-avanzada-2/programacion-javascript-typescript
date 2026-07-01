const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
  const modo = argv.mode || 'production';
  const analizar = Boolean(env && env.analyze);

  return {
    mode: modo,
    entry: './src/index.jsx',
    output: {
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    optimization: {
      minimize: modo === 'production',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: modo === 'production',
              drop_debugger: true,
              passes: 2
            },
            format: {
              comments: false
            }
          },
          extractComments: false,
          parallel: true
        })
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new Dotenv({
        path: `./.env.${modo}`,
        safe: false,
        systemvars: true
      }),
      ...(analizar
        ? [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })]
        : [])
    ],
    devServer: {
      static: './dist',
      port: 3000,
      open: true
    }
  };
};