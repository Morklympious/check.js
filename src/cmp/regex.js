import type from "./type.js";
import util from "./utilities.js";

var test  = type.regexp,
    forge = util.forge;

// Ripped from
// code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
var patterns = {
  username : /^[a-zA-Z0-9_-]{3,16}$/,
  password : /^[a-zA-Z0-9_-]{6,18}$/,
  hex      : /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
  slug     : /^[a-z0-9-]+$/,
  email    : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  url      : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
};

function pattern(expected, actual) {
  return test(actual) && expected.test(actual);
}

export default {
  pattern,
  username : forge(pattern, patterns.username),
  password : forge(pattern, patterns.password),
  hex      : forge(pattern, patterns.hex),
  slug     : forge(pattern, patterns.slug),
  email    : forge(pattern, patterns.email),
  url      : forge(pattern, patterns.url)
};
