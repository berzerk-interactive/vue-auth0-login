const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 3000
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  },

  pwa: {
    name: "Auth0 - 1",
    themeColor: '#F5A623',
    manifestOptions: {
      background_color: '#D0021B'
    }
  }
};
