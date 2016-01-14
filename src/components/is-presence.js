// Presence checks
/* -------------------------------------------------------------------------- */

//is a given value empty? Objects, arrays, strings
is.empty = function(value) {
    if(is.object(value)){
        var num = Object.getOwnPropertyNames(value).length;
        if(num === 0 || (num === 1 && is.array(value)) || (num === 2 && is.arguments(value))){
            return true;
        }
        return false;
    } else {
        return value === '';
    }
};

// is a given value existy?
is.existy = function(value) {
    return value !== null && value !== undefined;
};

// is a given value truthy?
is.truthy = function(value) {
    return is.existy(value) && value !== false && is.not.nan(value) && value !== "" && value !== 0;
};

// is a given value falsy?
is.falsy = not(is.truthy);

// is a given value space?
// horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
is.space =  function(value) {
    if(is.char(value)) {
        var characterCode = value.charCodeAt(0);
        return (characterCode >  8 && characterCode < 14) || characterCode === 32;
    } else {
        return false;
    }
};
