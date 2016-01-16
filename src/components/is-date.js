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
function past(date) {
  var now = new Date();

  return test(date) && date.getTime() < now.getTime();
}

//TODO: Add delta? e.g. "Within next hour"
function future(date) {
  return not(past(date))
}

function weekend(date) {
  return test(date) && [1, 7].indexOf(date.getDay()) > -1;
}

function weekday(date) {
  return not(weekend);
}
// is a given date weekend?
// 6: Saturday, 0: Sunday
is.weekend = function(obj) {
    return is.date(obj) && (obj.getDay() === 6 || obj.getDay() === 0);
};

// is a given date weekday?
is.weekday = not(is.weekend);

// is date within given range?
is.inDateRange = function(obj, startObj, endObj) {
    if(is.not.date(obj) || is.not.date(startObj) || is.not.date(endObj)) {
        return false;
    }
    var givenDate = obj.getTime();
    var start = startObj.getTime();
    var end = endObj.getTime();
    return givenDate > start && givenDate < end;
};
// inDateRange method does not support 'all' and 'any' interfaces
is.inDateRange.api = ['not'];

// is a given date in last week range?
is.inLastWeek = function(obj) {
    return is.inDateRange(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
};

// is a given date in last month range?
is.inLastMonth = function(obj) {
    return is.inDateRange(obj, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
};

// is a given date in last year range?
is.inLastYear = function(obj) {
    return is.inDateRange(obj, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
};

// is a given date in next week range?
is.inNextWeek = function(obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
};

// is a given date in next month range?
is.inNextMonth = function(obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
};

// is a given date in next year range?
is.inNextYear = function(obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
};

// is a given date in the parameter quarter?
is.quarterOfYear = function(obj, quarterNumber) {
    return is.date(obj) && is.number(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
};
// quarterOfYear method does not support 'all' and 'any' interfaces
is.quarterOfYear.api = ['not'];

// is a given date in daylight saving time?
is.dayLightSavingTime = function(obj) {
    var january = new Date(obj.getFullYear(), 0, 1);
    var july = new Date(obj.getFullYear(), 6, 1);
    var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
    return obj.getTimezoneOffset() < stdTimezoneOffset;
};
