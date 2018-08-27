const HtmlWebPackPlugin = require('html-webpack-plugin')
const { filters } = require('./src/filters')

module.exports = (env, argv) => {
  const isDev =  argv.mode === 'development'

  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            'html-loader',
            {
              loader: 'pug-plain-loader',
              options: { filters }
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            'css-loader',
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.pug',
        filename: './index.html',
        inject: isDev
      })
    ]
  }
}
