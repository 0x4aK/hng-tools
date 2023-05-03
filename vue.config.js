process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/hng-tools/" : "/",
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
};
