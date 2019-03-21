const version = require('./package.json').version
const now = Math.round(Date.now() / 6000).toString(36)

process.env.VUE_APP_VERSION = `${version}-${now}`

const publicPath = process.env.NODE_ENV === 'production'
  ? '/bootstrap-vue-cep-form/'
  : '/'

module.exports = {
  publicPath
}
