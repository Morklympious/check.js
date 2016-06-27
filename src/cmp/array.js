import type from "./type.js";

var test = type.array;

function contains(collection, value) {
  return test(collection) && collection.indexOf(value) > -1;
}

function empty(collection) {
  return test(collection) && !collection.length;
}

export default {
  contains,
  empty
};
