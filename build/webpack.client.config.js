const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//extends the base config object and include the new property plugins
const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

// We are using this because base config will be used for server side rendering
// but we don't need to extractCSS in that process only in our dev process

config.module.rules
              .filter(x => { return x.loader == 'vue-loader'})
              .forEach( x=> x.options.extractCSS = true)

config.plugins.push(
  // This plugin accepts the file in which we want to save our styles
  new ExtractTextPlugin('assets/styles.css')
)

module.exports = config
