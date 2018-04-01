  const path = require('path')

  const config  = {
    entry: {
      app: path.resolve(__dirname, '../src/client-entry.js')
    },

    //Path for output files
    output:{
      path: path.resolve(__dirname, '../dist'), //where we eventually deploy. Notice it's relative to this file location
      publicPath: '/', //dist folder availble through our site through the root path
      filename: 'assets/js/[name].js' //
    },

    //We do not want to use this in production because it
    //instead we whatnt o make sure that all components are defined in *.vuejs
    //files, because they are pre-compiled
    // this is only needed if you are not using the vue-template-compiler
    //resolve: { // What the hell does resolve do?
    //  alias:{
    //    vue: 'vue/dist/vue.js'
    //  }
    //},

    module: {
      rules: [
        {
          enforce: 'pre', // check source files before they are loader by other loaders
          test: /(\.js$)|(\.vue$)/, // linting for both js and vue files
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            css: 'css-loader',
            'scss': 'css-loader|sass-loader'
            // extractCSS: true //don't want to do this when doing server side rendering
          }
        },
        {
          test: /\.js$/, // This rule applies after the .vue files are transpiled to .js files through the vue loader
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }

  }

  module.exports = config
