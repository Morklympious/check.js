var buble = require("rollup-plugin-buble"),
    uglify = require("rollup-plugin-uglify");

module.exports = {
    entry: "./src/check.js",
    dest: "./dist/check.bundle.js",
    format: "iife",
    moduleName: "check",
    plugins: [ buble(), uglify() ]
};
