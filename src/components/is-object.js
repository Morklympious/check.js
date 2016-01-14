// Object checks
/* -------------------------------------------------------------------------- */

// has a given object got parameterized count property?
is.propertyCount = function(obj, count) {
    if(!is.object(obj) || !is.number(count)) {
        return false;
    }
    if(Object.keys) {
        return Object.keys(obj).length === count;
    }
    var properties = [],
        property;
    for(property in obj) {
        if (hasOwnProperty.call(obj, property)) {
            properties.push(property);
        }
    }
    return properties.length === count;
};
// propertyCount method does not support 'all' and 'any' interfaces
is.propertyCount.api = ['not'];

// is given object has parameterized property?
is.propertyDefined = function(obj, property) {
    return is.object(obj) && is.string(property) && property in obj;
};
// propertyDefined method does not support 'all' and 'any' interfaces
is.propertyDefined.api = ['not'];

// is a given object window?
// setInterval method is only available for window object
is.windowObject = function(obj) {
    return typeof obj === 'object' && 'setInterval' in obj;
};

// is a given object a DOM node?
is.domNode = function(obj) {
    return is.object(obj) && obj.nodeType > 0;
};
