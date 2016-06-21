var util = require('./utilities.js'),
    type = require('./type.js'),
    test = type.number,
    nan = type.nan,
    not = util.not;


function equal(one, two) {
  return test(one) && test(two) && one === two;
}

function even(number) {
  // If modulo is 0, not will make it true.
  return test(number) && finite(number) && not(number % 2);
}

function odd(number) {
  return not(even(number)) && finite(number) ;
}

function positive(number) {
  return test(number) && number > 0;
}

function negative(number) {
  return test(number) && number < 0;
}

function higher(number, threshold) {
  return test(number) && test(threshold) && within(number, threshold, number + 1);
}

function lower(number, threshold) {
  return test(number) && test(threshold) && within(number, number - 1, threshold);
}

function within(number, min, max) {
  return (test(number) && test(min) && test(max)) && (min < number && number < max);
}

function decimal(number) {
  return test(number) && within(number % 1, 0, 1);
}

function integer(number) {
  return test(number) && not(decimal(number));
}

function finite(number) {
  return test(number) && not(nan(number)) && not(number === Infinity);
}

function infinite(number) {
  return test(number) && not(finite(number));
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
