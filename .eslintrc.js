module.exports = {
  root: true, //sets this file as the parent scope for the rules,
  parser: 'babel-eslint',
  parserOptions:{
    sourceType: 'module'
  },
  extends: 'standard',
  //required to lint *.vue files
  plugins: [
    'html'
  ]
}
