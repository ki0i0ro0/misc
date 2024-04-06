const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index-bundle.js",
    path: path.join(__dirname, "src/"),
  },
};
