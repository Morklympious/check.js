var util = require('./utilities.js'),
    test = require('./type.js').number
    not = util.not,
    nan = util.nan;

function equal(one, two) {
  return test(one) && test(two) && one === two;
}

function even(num) {
  // If modulo is 0, not will make it true.
  return test(num) && not(num % 2);
}

function odd(num) {
  return not(even(num));
}

function positive(num) {
  return test(num) && num > 0;
}

function negative(num) {
  return test(num) && num < 0;
}

function higher(num, threshold) {
  return test(num) && test(threshold) && num > threshold;
}

function lower(num, threshold) {
  return test(num) && test(threshold) && num < threshold;
}

function within(num, min, max) {
  return (test(num) && test(min) && test(max)) && (min < num < max);
}

function decimal(num) {
  return test(num) && lower((num % 1), 1);
}

function integer(num) {
  return test(num) && not(decimal(num));
}

function finite(num) {
  return test(num) && not(num === Infinity);
}

function infinite(num) {
  return not(finite);
}

module.exports = {
  equal: equal,
  even: even,
  odd: odd,
  positive: positive,
  negative: negative,
  higher: higher,
  lower:lower,
  within: within,
  decimal: decimal,
  integer: integer,
  finite: finite,
  infinite: infinite
}
