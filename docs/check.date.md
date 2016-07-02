### Date `(check.date)`
#### `day(date, name)`
Check to see if a date is a specific day of the week.

#### `today(date)`
Check to see if the supplied date is actually today.

#### `yesterday(date)`
Check to see if the supplied date is yesterday (relative to today).

#### `tomorrow(date)`
Check to see if the supplied date is tomorrow (relative to today  ).

#### `month(date, target)`
Check to see if a date falls within one of the twelve months.

#### `year(date, target)`
Check to see if a date falls within a specific year.

#### `past(date [, delta])`
Check to see if a date is in the past, with an optional delta to limit how far in the past you'd like to allow.

#### `future(date, [, delta])`
Check to see if a date is in the future, with an optional delta to limit how far in the future you'd like to allow.

#### `weekend(date)`
Check to see if a date falls on a weekend.

#### `weekday(date)`
Check to see if a date falls on a weekday.

#### `within(date, start, end)`
Check to see if `date` is between a `start` date and `end` date. This is for finer grained control of date ranges and whether or not you want to specify both a start and end range.
