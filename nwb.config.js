module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'rc',
      externals: {
        react: 'React'
      }
    }
  }
}
