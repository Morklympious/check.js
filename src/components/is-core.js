// is.js Core

var root = this || global;
var previousIs = root.is;

// define 'is' object and current version
var is = {};
is.VERSION = '0.7.6';

// define interfaces
is.not = {};
is.all = {};
is.any = {};

// cache some methods to call later on
var toString = Object.prototype.toString;
var arraySlice = Array.prototype.slice;
var hasOwnProperty = Object.prototype.hasOwnProperty;

// helper function which reverses the sense of predicate result
function not(func) {
    return function() {
        return !func.apply(null, arraySlice.call(arguments));
    };
}

// helper function which call predicate function per parameter and return true if all pass
function all(func) {
    return function() {
        var parameters = arraySlice.call(arguments);
        var length = parameters.length;
        if(length === 1 && is.array(parameters[0])) {    // support array
            parameters = parameters[0];
            length = parameters.length;
        }
        for (var i = 0; i < length; i++) {
            if (!func.call(null, parameters[i])) {
                return false;
            }
        }
        return true;
    };
}

// helper function which call predicate function per parameter and return true if any pass
function any(func) {
    return function() {
        var parameters = arraySlice.call(arguments);
        var length = parameters.length;
        if(length === 1 && is.array(parameters[0])) {    // support array
            parameters = parameters[0];
            length = parameters.length;
        }
        for (var i = 0; i < length; i++) {
            if (func.call(null, parameters[i])) {
                return true;
            }
        }
        return false;
    };
}
