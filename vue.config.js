module.exports = {
  pages: {
    index: {
      entry: 'client/main.js',
    },
  },
  // 扩展 weback 配置
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add(/engine-template/)
      .end()
      .include.add(/client/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改选项
        return options
      })
  },
}
