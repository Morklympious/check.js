var vm     = require("vm"),
    rollup = require("rollup").rollup,
    buble  = require("rollup-plugin-buble");

// Sourced from @tivac's Anthracite repository for converting es2015
// into commonjs for execution in tests. 
module.exports = function(entry, tgt) {
  tgt.exports = {};

  return rollup({
    entry   : entry,
    plugins : [ buble() ]
  })
  .then( (bundle) => {
    var result = bundle.generate({ format : "cjs" });

    vm.runInThisContext(`(function(module, exports) { ${result.code} })`)(tgt, tgt.exports);

    return tgt;
  });
};
