var util    = require('./utilities.js'),
    not     = util.not,
    type    = require('./type.js'),
    _null   = type._null,
    undef   = type._undefined,
    nan     = type.nan,
    types   = type.types;

function exists(value) {
  return not(_null(value)) && not(undef(value));
}

function truthy(value) {
  return exists(value) && not(nan(value)) && !!value;
}

function falsey(value) {
  return not(truthy(value));
}

module.exports = {
  exists: exists,
  truthy: truthy,
  falsey: falsey
}
