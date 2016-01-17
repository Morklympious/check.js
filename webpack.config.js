var webpack = require('webpack');

module.exports = {
    entry: "./src/is.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
}
