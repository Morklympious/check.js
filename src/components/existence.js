var util    = require('./utilities.js'),
    not     = util.not,
    nan     = util.nan,
    type    = require('./type.js'),
    _null   = type._null,
    undef   = type._undefined,
    types   = type.types;

function exists(value) {
  return not(_null(value)) && not(undef(value));
}

function truthy(value) {
  return exists(value) && not(nan(value)) && not("") && not(0);
}

function falsey(value) {
  return not(truthy(value));
}

module.exports = {
  exists: exists,
  truthy: truthy,
  falsey: falsey
}
