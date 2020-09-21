module.exports = {
  // publicPath 项目路径
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/hsz/',

  // // webpack配置，值位对象时会合并配置，为方法时会改写配置
  // configureWebpack: (config) => {
  //   Object.assign(config, { // 开发生产共同配置
  //     resolve: {
  //       alias: {
  //         vue: 'vue/dist/vue.js'
  //       }
  //     }
  //   })
  // },

  chainWebpack: config => {
    // 一个规则里的 基础Loader
    // svg是个基础loader
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
