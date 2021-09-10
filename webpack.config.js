const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const pkg = require('./package.json');

const InProEnv = process.env.NODE_ENV === 'production';
const InDevEnv = !InProEnv;
const Target = process.env.ASF_TARGET;
const entryName =
  InProEnv ? './src/index.prod.ts' :
  Target === 'react' ? './src/index.react.ts' :
  Target === 'vue'   ? './src/index.vue.js' :
  null;

module.exports = {
  mode: InProEnv ? 'production' : 'development',
  entry: entryName,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: pkg.name,
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            resourceQuery: /vue/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env'],
                  },
                },
              },
              'less-loader',
            ],
          },
          {
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env'],
                  },
                },
              },
              'less-loader',
            ],
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ],
  },
  devServer: {},
  plugins: [
    InDevEnv && new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      templateParameters: {
        BASE_URL: '/',
      },
      title: pkg.name,
    }),
    new VueLoaderPlugin(),
  ].filter(Boolean),
  externals: [InProEnv && nodeExternals(),].filter(Boolean),
}
