import type from "./type.js";
import util from "./utilities.js";
import existence from "./existence.js";

var test   = type.regexp,
    forge  = util.forge,
    falsey = existence.falsey;

function pattern(expression, actual) {
  // If actual is undefined, let's return a regex test function.
  if(falsey(actual)) {
    return forge(pattern, expression);
  }

  return test(expression) && expression.test(actual);
}

export {
  pattern
};

export default {
  pattern
};
