// Time checks
/* -------------------------------------------------------------------------- */

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

// is a given date indicate today?
is.today = function(obj) {
    var now = new Date();
    var todayString = now.toDateString();
    return is.date(obj) && obj.toDateString() === todayString;
};

// is a given date indicate yesterday?
is.yesterday = function(obj) {
    var now = new Date();
    var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
    return is.date(obj) && obj.toDateString() === yesterdayString;
};

// is a given date indicate tomorrow?
is.tomorrow = function(obj) {
    var now = new Date();
    var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
    return is.date(obj) && obj.toDateString() === tomorrowString;
};

// is a given date past?
is.past = function(obj) {
    var now = new Date();
    return is.date(obj) && obj.getTime() < now.getTime();
};

// is a given date future?
is.future = not(is.past);

// is a given dates day equal given dayString parameter?
is.day = function(obj, dayString) {
    return is.date(obj) && dayString.toLowerCase() === days[obj.getDay()];
};
// day method does not support 'all' and 'any' interfaces
is.day.api = ['not'];

// is a given dates month equal given monthString parameter?
is.month = function(obj, monthString) {
    return is.date(obj) && monthString.toLowerCase() === months[obj.getMonth()];
};
// month method does not support 'all' and 'any' interfaces
is.month.api = ['not'];

// is a given dates year equal given year parameter?
is.year = function(obj, year) {
    return is.date(obj) && is.number(year) && year === obj.getFullYear();
};
// year method does not support 'all' and 'any' interfaces
is.year.api = ['not'];

// is the given year a leap year?
is.leapYear = function(year) {
    return is.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};

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
