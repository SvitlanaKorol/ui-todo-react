const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const isAnalyze = process.env.ANALYZE === 'true';

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, 
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
    ],
    devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      port: 8081,
      open: true,
    },
    devtool: isDev ? 'source-map' : false, // включає source-map тільки в dev режимі
    mode: argv.mode || 'development', // <-- тут завершення
  };
};
