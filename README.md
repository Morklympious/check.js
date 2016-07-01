# check.js

A micro checking library. (Micro meaning less than 5kb (which I'm still working on))
Originally forked from [is.js](https://arasatasaygin.github.io/is.js/), I'm making it smaller because I want to be able to put it onto [microjs](http://microjs.com/) because I'm some kind of man-baby who wants to do that.  

Author: Bradley Stafford.
(_Originally by Aras Atasaygin_)

## This is a general-purpose check library.
- Node and Browser ready
- Written with ES2015 modules, output via Rollup and compilation by Buble
- Written to be micro (less than 5kb) because I wanted to challenge myself to do it!

## API

This is the general API I've laid out. It's slightly opinionated from other checking libraries, in that it's smaller, and it's written in an entirely functional style both for the sake of library size, as well as pragmatism.

For example, Regex isn't super rich in its predefined pattern matching, but it exposes a method for you to check against a pattern you supply.

You'll see the OPINIONS come through soon enough!

### Array
#### `contains(collection, value)`
Check that an array contains a value.

#### `empty(collection)`
Check that an array is empty.

### Date
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


### Existence (`check.existence`)
#### `exists(value)`
Check to see if a value simply exists.

#### `truthy(value)`
Check to see if the boolean analog of `value` is true.

#### `falsey(value)`
Check to see if the boolean analog of `value` is false.

### Number (`check.number`)
#### `finite(number)`
Check to see if a number is finite (not `Infinity` and not `NaN`).

#### `infinite(number)`
Check to see if a number is `Infinity`

#### `even(number)`
Check to see if a number is even (divisible by two).

#### `odd(number)`
Check to see if a number is odd.

#### `positive(number)`
Check to see if a number is positive.

#### `negative(number)`
Check to see if a number is negative.

#### `within(number, min, max)`
Check to see if `number` is between `min` and `max`. If `number` is equal to `min` or `max`, `within` will return false.

#### `higher(number, threshold)`
Check to see if `number` is higher than `threshold`.

#### `lower(number, threshold)`
Check to see if `number` is lower than `threshold`.

#### `decimal(number)`
Check to see if `number` is a decimal number (e.g. `13.2`).

#### `integer(number)`
Check to see if `number` is an integer.

### Object (`check.object`)
#### `size(obj, count)`
Check to see if `obj` has `count` number of keys.

#### `empty(obj)`
Check to see if `obj` is empty (has no `own` properties).

#### `contains(obj, prop)`
Check to see if `obj` contains property `prop`.

### Regex (`check.regex`)
#### `pattern(expected [, actual])`
Check to see if `actual` is a pattern match for `expression`

If `actual` isn't supplied, `pattern` will return a curried function that will test for that specific pattern when you call it with a string.

### String
#### `contains(str, sub)`
Check to see if `sub` is inside of `str`

#### `caps(str)`
Check to see if `str` is all caps.

#### `lowercase(str)`
Check to see if `str` is all lowercase.

#### `begins(str, sub)`
Check to see if `str` begins with `sub`.

#### `ends(str, sub)`
Check to see if `str` ends with `sub`.

#### `empty(str)`
Check to see if `str` is empty.

### Type (`check.type`)

#### `type(expected, actual)`
Check to see if `actual` is of type `expected`.

#### `object(obj)`
Check to see if `obj` is an Object.

#### `array(arr)`
Check to see if `arr` is an Array.

#### `string(str)`
Check to see if `str` is a String.

#### `boolean(bool)`
Check to see if `bool` is a Boolean.

#### `number(num)`
Check to see if `num` is a Number.

#### `regexp(exp)`
Check to see if `exp` is a Regular Expression.

#### `date(date)`
Check to see if `date` is a Date Object.

#### `error(err)`
Check to see if `err` is an Error Object.

#### `_function(fn)`
Check to see if `fn` is a Function.

#### `_arguments(args)`
Check to see if `args` is the `arguments` object.

#### `_null(obj)`
Check to see if `obj` is null.

#### `_undefined(value)`
Check to see if `value` is undefined.

#### `char(str)`
Check to see if `str` is a single character.

#### `nan(value)`
Check to see if `value` is `NaN`

#### `json(obj)`
Check to see if `obj` is a `JSON` object.

#### `promise(obj)`
Check to see if `obj` conforms to Promises/A+.

### Utilities

#### `not(value)`
Check the inverse of a boolean value

#### `argen(args)`
Short for "argument generation", Used to grab args in other functions for manipulation.

#### `forge(fn)
This is a partial application function. `
