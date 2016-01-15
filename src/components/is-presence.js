var util = require('./is-utilities.js'),
    type = util.type
    types = util.types,
    not = util.not;
    nan = util.nan;


function exists(value) {
  var isnt = {
    _null: not(type(value) === types._null),
    _undefined: not(type(value) === types._undefined)
  }
  return isnt._null && isnt._undefined;
}

function truthy(value) {
  return exists(value) && not(nan(value)) && not("") && not(0);
}

function falsey(value) {
  return not(truthy);
}

module.exports = {
  exists: exists,
  truthy: truthy,
  falsey: falsey
}
