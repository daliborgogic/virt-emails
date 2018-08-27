const stylus = require('stylus')

module.exports = {
  filters: {
    stylus: function (str, opts) {
      let ret
      str = str.replace(/\\n /g, '')

      stylus(str, opts).render((err, css) => {
        if (err) throw err
        ret = css.replace(/\s/g, '')
      })

      return '\n<style>' + ret + '</style>'
    }
  }
}
