import type from "./type.js";
import util from "./utilities.js";

var test = type.number,
    nan  = type.nan,
    not  = util.not;

function finite(number) {
  return test(number) && not(nan(number)) && not(number === Infinity);
}

function infinite(number) {
  return test(number) && number === Infinity;
}

function even(number) {
  // If modulo is 0, not will make it true.
  return test(number) && finite(number) && not(number % 2);
}

function odd(number) {
  return finite(number) && not(even(number));
}

function positive(number) {
  return test(number) && number > 0;
}

function negative(number) {
  return test(number) && number < 0;
}

function within(number, min, max) {
  return (test(number) && test(min) && test(max)) && (min < number && number < max);
}

function higher(number, threshold) {
  return test(number) && test(threshold) && within(number, threshold, number + 1);
}

function lower(number, threshold) {
  return test(number) && test(threshold) && within(number, number - 1, threshold);
}

function decimal(number) {
  return test(number) && within(number % 1, 0, 1);
}

function integer(number) {
  return test(number) && not(decimal(number));
}

export {
  even,
  odd,
  positive,
  negative,
  higher,
  lower,
  within,
  decimal,
  integer,
  finite,
  infinite
};

export default {
  even,
  odd,
  positive,
  negative,
  higher,
  lower,
  within,
  decimal,
  integer,
  finite,
  infinite
};


