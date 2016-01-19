// checkered.js (fork of 'is.js' by Bradley Stafford)
// Author: Bradley Stafford

var library = {
  utilities:  require('./components/utilities.js'),
  object:     require('./components/object.js'),
  presence:   require('./components/existence.js'),
  string:     require('./components/string.js'),
  type:       require('./components/type.js'),
  date:       require('./components/date.js'),
  environment:require('./components/environment.js'),
  array:      require('./components/array.js'),
  number:     require('./components/number.js'),
  regex:      require('./components/regex.js'),

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
