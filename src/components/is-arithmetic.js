// Arithmetic checks
/* -------------------------------------------------------------------------- */

// are given values equal? supports numbers, strings, regexps, booleans
// TODO: Add object and array support
is.equal = function(value1, value2) {
    // check 0 and -0 equity with Infinity and -Infinity
    if(is.all.number(value1, value2)) {
        return value1 === value2 && 1 / value1 === 1 / value2;
    }
    // check regexps as strings too
    if(is.all.string(value1, value2) || is.all.regexp(value1, value2)) {
        return '' + value1 === '' + value2;
    }
    if(is.all.boolean(value1, value2)) {
        return value1 === value2;
    }
    return false;
};
// equal method does not support 'all' and 'any' interfaces
is.equal.api = ['not'];

// is a given number even?
is.even = function(numb) {
    return is.number(numb) && numb % 2 === 0;
};

// is a given number odd?
is.odd = function(numb) {
    return is.number(numb) && numb % 2 === 1;
};

// is a given number positive?
is.positive = function(numb) {
    return is.number(numb) && numb > 0;
};

// is a given number negative?
is.negative = function(numb) {
    return is.number(numb) && numb < 0;
};

// is a given number above minimum parameter?
is.above = function(numb, min) {
    return is.all.number(numb, min) && numb > min;
};
// above method does not support 'all' and 'any' interfaces
is.above.api = ['not'];

// is a given number above maximum parameter?
is.under = function(numb, max) {
    return is.all.number(numb, max) && numb < max;
};
// least method does not support 'all' and 'any' interfaces
is.under.api = ['not'];

// is a given number within minimum and maximum parameters?
is.within = function(numb, min, max) {
    return is.all.number(numb, min, max) && numb > min && numb < max;
};
// within method does not support 'all' and 'any' interfaces
is.within.api = ['not'];

// is a given number decimal?
is.decimal = function(numb) {
    return is.number(numb) && numb % 1 !== 0;
};

// is a given number integer?
is.integer = function(numb) {
    return is.number(numb) && numb % 1 === 0;
};

// is a given number finite?
is.finite = isFinite || function(numb) {
    return numb !== Infinity && numb !== -Infinity && is.not.nan(numb);
};

// is a given number infinite?
is.infinite = not(is.finite);
