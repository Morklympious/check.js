function not(value) {
  return !value;
}

function argen(args) {
  return [].slice.call(args);
}

function forge(fn) {
  var args = argen(arguments).slice(1);

  return function() {
    return fn.apply(null, args.concat(argen(arguments)));
  };
}

export {
  not,
  forge,
  argen
};

export default {
  not,
  forge,
  argen
};
