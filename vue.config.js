const webpack = require("webpack");
import { auth0app, themeColor, background_color } from "../../auth_config.json";

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
    name: auth0app,
    themeColor,
    manifestOptions: {
      background_color
    }
  }
};
