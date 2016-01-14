// String checks
/* -------------------------------------------------------------------------- */

// is a given string include parameter substring?
is.include = function(str, substr) {
    return str.indexOf(substr) > -1;
};
// include method does not support 'all' and 'any' interfaces
is.include.api = ['not'];

// is a given string all uppercase?
is.upperCase = function(str) {
    return is.string(str) && str === str.toUpperCase();
};

// is a given string all lowercase?
is.lowerCase = function(str) {
    return is.string(str) && str === str.toLowerCase();
};

// is string start with a given startWith parameter?
is.startWith = function(str, startWith) {
    return is.string(str) && str.indexOf(startWith) === 0;
};
// startWith method does not support 'all' and 'any' interfaces
is.startWith.api = ['not'];

// is string end with a given endWith parameter?
is.endWith = function(str, endWith) {
    return is.string(str) && str.indexOf(endWith) > -1 && str.indexOf(endWith) === str.length -  endWith.length;
};
// endWith method does not support 'all' and 'any' interfaces
is.endWith.api = ['not'];

// is a given string or sentence capitalized?
is.capitalized = function(str) {
    if(is.not.string(str)) {
        return false;
    }
    var words = str.split(' ');
    var capitalized = [];
    for(var i = 0; i < words.length; i++) {
        capitalized.push(words[i][0] === words[i][0].toUpperCase());
    }
    return is.all.truthy.apply(null, capitalized);
};

// is a given string palindrome?
is.palindrome = function(str) {
    return is.string(str) && str == str.split('').reverse().join('');
};
