const HtmlWebPackPlugin = require('html-webpack-plugin')

const filter = require('./src/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-plain-loader',
            options: {
              filters: {
                stylus: function (str, opts) {
                  let ret
                  str = str.replace(/\\n /g, '')
                  const styl = require('stylus')
                  styl(str, opts).render(function (err, css) {
                    if (err) throw err
                    ret = css.replace(/\s/g, '')
                  })
                  return '\n<style>' + ret + '</style>'
                }
              }
            }
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
      inject: true
    })
  ]
}
