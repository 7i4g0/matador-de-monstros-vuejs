module.exports = {
  outputDir: 'demo',
  productionSourceMap: false,
  publicPath: './',
  pwa: {
    name: 'O Matador de Monstros',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest'
  }
}