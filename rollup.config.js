var buble = require("rollup-plugin-buble"),
    uglify = require("rollup-plugin-uglify");

module.exports = {
    entry      : "./src/check.js",
    dest       : "./dist/check.min.js",
    format     : "umd",
    moduleName : "check",
    plugins    : [ buble(), uglify() ]
};
