const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

module.exports = (env) => {
  const isDev = !env.production
  const mode = isDev ? 'development' : 'production'

  return {
    mode,
    entry: {
      index: path.resolve(__dirname, 'src', 'index.ts'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: isDev,
                importLoaders: 2,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.scss'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      hot: true,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/ccapture.js/build/CCapture.all.min.js',
            to: 'assets/js',
          },
        ],
      }),
      new HtmlWebpackPlugin({
        title: 'P5.js Typescript boilerplate',
      }),
      new HtmlWebpackTagsPlugin({
        append: false,
        scripts: 'assets/js/CCapture.all.min.js',
        links: [
          {
            path: 'https://p5js.org/assets/img/favicon.ico',
            attributes: { rel: 'shortcut icon' },
          },
          {
            path: 'https://p5js.org/assets/img/favicon.ico',
            attributes: { rel: 'icon' },
          },
        ],
      }),
    ],
  }
}
