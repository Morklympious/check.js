var type = require('./type.js'),
    test = type.date,
    number = type.number,
    util = require('./utilities.js'),
    not = util.not,
    all = util.all;


var days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
  ];

var months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];


function day(date, day) {
  return test(date) && day.toLowerCase() === days[date.getDay()];
}

function today(date) {
  var today = new Date().toDateString();

  return test(date) && today === date.toDateString();
}

function yesterday(date) {
  var today     = new Date(),
      yesterday = new Date(today.setDate(today.getDate() - 1));

  return test(date) && date.toDateString() === yesterday.toDateString();
}

function tomorrow(date) {
  var today    = new Date(),
      tomorrow = new Date(today.setDate(today.getDate() + 1));

  return test(date) && date.toDateString() === tomorrow.toDateString();
}

function month(date, target) {
  return test(date) && target.toLowerCase() === months[date.getMonth()];
}

function year(date, target) {
  return test(date) && number(target) && target === date.getFullYear();
}

// TODO: Add delta? e.g. "Within past three hours"
// delta in milliseconds
function past(date, delta) {
  var now = new Date(),
      delta = delta || 0,
      current = now.getTime(),
      dTime = date.getTime();

  return test(date) && ((current - delta) < dTime < current) || dTime < current;
}

function future(date, delta) {
  var now = new Date(),
      delta = delta || 0,
      current = now.getTime(),
      dTime = date.getTime();

  return test(date) && (current < dTime < (current + delta)) || current < dTime;
}

function weekend(date) {
  return test(date) && [0, 6].indexOf(date.getDay()) > -1;
}

function weekday(date) {
  return not(weekend(date));
}

// date is within date range
function within(date, start, end) {
  var starting = start.getTime(),
      chosen   = date.getTime(),
      ending   = end.getTime();

  return starting <= chosen <= ending;
}

module.exports = {
  day: day,
  today: today,
  yesterday: yesterday,
  tomorrow: tomorrow,
  month: month,
  year: year,
  past: past,
  future: future,
  weekend: weekend,
  weekday: weekday,
  within: within
}
