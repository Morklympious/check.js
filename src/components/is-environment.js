var util = require('./is-utilities.js'),
    _window = require('./is-types.js')._window,
    not = util.not;

var w =   _window(window) && window,
    n =   w && w.navigator;


  function touch() {
    return n.MaxTouchPoints > 0;
  }

  function multitouch() {
    return n.MaxTouchPoints > 1;
  }

  function online() {
    return n.onLine;
  }

  function offline() {
    return !online();
  }

  function browser() {
    return new Function("return this === window;")();
  }

  function node() {
    return new Function("return this === global;")();
  }

  function iPhone() {
    return n.platform === 'iPhone';
  }
