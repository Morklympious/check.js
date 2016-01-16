var types = require('./is-type.js'),
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

function pattern(regexp, test) {
  return test(regexp) && regexp.test(test);
}

function username(test) {
  return pattern(patterns.username, test);
}

function password(test) {
  return pattern(patterns.password, test);
}

function hex(test) {
  return pattern(patterns.hex, test)
}

function slug(test) {
  return pattern(patterns.slug, test);
}

function email(test) {
  return pattern(patterns.email, test)
}

function url(test) {
  return pattern(patterns.url, test);
}

function ip(test) {
  return pattern(patterns.ip, test);
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
