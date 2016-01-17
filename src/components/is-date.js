var type = require('./is-type.js'),
    test = type.date,
    number = type.number,
    util = require('./is-utilities.js'),
    not = util.not;


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

//Milliseconds
var lengths = {
  day: 86400000,
  week: 86400000 * 7,
  month: 86400000 * 7 * 4
}

function day(date, target) {
  return test(date) && target.toLowerCase() === days[date.getDay()];
}

function today(date) {
  var today = new Date().toDateString();

  return test(date) && today === obj.toDateString();
}

function yesterday(date) {
  var today = new Date(),
      yesterday = new Date(today.setDate(today.getDate() - 1));

  return test(date) &&  date.toDateString() === yesterday.toDateString();
}

function tomorrow(date) {
  var today = new Date(),
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

  // if date.getTime() > now.getTime() - delta === true
  return test(date) && ((current - delta) < dTime < current) || dTime < current;
}

//TODO: Add delta? e.g. "Within next hour"
function future(date, delta) {
  var now = new Date(),
      delta = delta || 0,
      current = now.getTime(),
      dTime = date.getTime();

  // if date.getTime() > now.getTime() - delta === true
  return test(date) && (current < dTime < (current + delta)) || current < dTime;
}

function weekend(date) {
  return test(date) && [0, 6].indexOf(date.getDay()) > -1;
}

function weekday(date) {
  return not(weekend);
}

// date is within date range
function within(date, start, end) {
  var starting = start.getTime(),
      chosen = date.getTime(),
      ending = end.getTime();

  return test(date) && test(start) && test(end) && starting <= chosen <= ending;
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
  weekday: weekday
}
