import type from "./type.js";
import util from "./utilities.js";

var not     = util.not,
    _null   = type._null,
    undef   = type._undefined,
    nan     = type.nan;

function exists(value) {
  return not(_null(value)) && not(undef(value));
}

function truthy(value) {
  return exists(value) && Boolean(value);
}

function falsey(value) {
  return not(truthy(value));
}

export default {
  exists,
  truthy,
  falsey
};
