var util = require('./is-utilities.js'),
    _window = require('./is-types.js')._window,
    not = util.not;

var w =   _window(window) && window,
    n =   w && w.navigator,
    p =   n.platform;


  function touch() {
    return n.MaxTouchPoints > 0;
  }

  function multitouch() {
    return n.MaxTouchPoints > 1;
  }

  function geolocation() {
    return n.geolocation;
  }

  // Online/Offline Status
  function online() {
    return n.onLine;
  }

  function offline() {
    return !online();
  }

  // Node/Browser
  function browser() {
    return new Function("return this === window;")();
  }

  function node() {
    return new Function("return this === global;")();
  }

  // Major Operating Systems
  function windows() {
    return p.indexOf('Win');
  }

  function linux() {
    return p.indexOf('Linux');
  }

  function mac() {
    return p.indexOf('Mac')
  }

  module.exports {
    touch: touch,
    multitouch: multitouch,
    geolocation: geolocation,
    online: online,
    offline: offline,
    browser: browser,
    node: node,
    windows: windows,
    linux: linux,
    mac: mac
  }
