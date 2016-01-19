var types = require('./type.js'),
    test = types.regexp;

// Ripped from
// code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
var patterns = {
  username: /^[a-z0-9_-]{3,16}$/,
  password: /^[a-z0-9_-]{6,18}$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
  slug: /^[a-z0-9-]+$/,
  email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
}

//TODO: swap params? Seems inconsistent with is-types.
function pattern(test, regexp) {
  return test(regexp) && regexp.test(test);
}

function username(test) {
  return pattern(test, patterns.username);
}

function password(test) {
  return pattern(test, patterns.password);
}

function hex(test) {
  return pattern(test, patterns.hex)
}

function slug(test) {
  return pattern(test, patterns.slug);
}

function email(test) {
  return pattern(test, patterns.email)
}

function url(test) {
  return pattern(test, patterns.url);
}

function ip(test) {
  return pattern(test, patterns.ip);
}

module.exports = {
  pattern: pattern,
  username: username,
  password: password,
  hex: hex,
  slug: slug,
  email: email,
  url: url,
  ip: ip
}
