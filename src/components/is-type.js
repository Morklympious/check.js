// Type checks
/* -------------------------------------------------------------------------- */

// is a given value Arguments?
is.arguments = function(value) {    // fallback check is for IE
    return is.not.null(value) && (toString.call(value) === '[object Arguments]' || (typeof value === 'object' && 'callee' in value));
};

// is a given value Array?
is.array = Array.isArray || function(value) {    // check native isArray first
    return toString.call(value) === '[object Array]';
};

// is a given value Boolean?
is.boolean = function(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
};

// is a given value Date Object?
is.date = function(value) {
    return toString.call(value) === '[object Date]';
};

// is a given value Error object?
is.error = function(value) {
    return toString.call(value) === '[object Error]';
};

// is a given value function?
is.function = function(value) {    // fallback check is for IE
    return toString.call(value) === '[object Function]' || typeof value === 'function';
};

// is a given value NaN?
is.nan = function(value) {    // NaN is number :) Also it is the only value which does not equal itself
    return value !== value;
};

// is a given value null?
is.null = function(value) {
    return value === null;
};

// is a given value number?
is.number = function(value) {
    return is.not.nan(value) && toString.call(value) === '[object Number]';
};

// is a given value object?
is.object = function(value) {
    var type = typeof value;
    return type === 'function' || type === 'object' && !!value;
};

// is given value a pure JSON object?
is.json = function(value) {
    return toString.call(value) === '[object Object]';
};

// is a given value RegExp?
is.regexp = function(value) {
    return toString.call(value) === '[object RegExp]';
};

// are given values same type?
// prevent NaN, Number same type check
is.sameType = function(value1, value2) {
    if(is.nan(value1) || is.nan(value2)) {
        return is.nan(value1) === is.nan(value2);
    }
    return toString.call(value1) === toString.call(value2);
};
// sameType method does not support 'all' and 'any' interfaces
is.sameType.api = ['not'];

// is a given value String?
is.string = function(value) {
    return toString.call(value) === '[object String]';
};

// is a given value Char?
is.char = function(value) {
    return is.string(value) && value.length === 1;
};

// is a given value undefined?
is.undefined = function(value) {
    return value === void 0;
};
