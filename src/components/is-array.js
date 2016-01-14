// Array checks
/* -------------------------------------------------------------------------- */

// is a given item in an array?
is.inArray = function(val, arr){
    if(is.not.array(arr)) {
        return false;
    }
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true;
    }
    return false;
};
// inArray method does not support 'all' and 'any' interfaces
is.inArray.api = ['not'];

// is a given array sorted?
is.sorted = function(arr) {
    if(is.not.array(arr)) {
        return false;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) return false;
    }
    return true;
};
