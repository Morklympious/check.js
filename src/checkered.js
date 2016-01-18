// checkered.js (fork of 'is.js' by Bradley Stafford)
// Author: Bradley Stafford

var library = {
  utilities:  require('./components/is-utilities.js'),
  object:     require('./components/is-object.js'),
  presence:   require('./components/is-presence.js'),
  string:     require('./components/is-string.js'),
  type:       require('./components/is-type.js'),
  date:       require('./components/is-date.js'),
  environment:require('./components/is-environment.js'),
  array:      require('./components/is-array.js'),
  number:     requite('./components/is-number.js'),
  regex:      require('./components/is-regex.js'),
  string:     require('./components/is-string.js')
}

global.see = {
  if: library
}

global.check = {
  if: library,
  for: library,
  that: library
}


module.exports = library;
