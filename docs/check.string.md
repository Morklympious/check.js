### String `(check.string)`
#### `contains(str, sub)`
Check to see if `sub` is inside of `str`

```js
var name = "Morklympious";

check.string.contains(name, "lymp"); //=> true
```

#### `caps(str)`
Check to see if `str` is all caps.

```js
var name = "Morklympious";

check.string.caps(name); //=> false
check.string.caps(name.toUpperCase()); //=> true
```

#### `lowercase(str)`
Check to see if `str` is all lowercase.

```js
var name = "Morklympious";

check.string.lowercase(name); //=> false
check.string.lowercase(name.toUpperCase()); //=> false
check.string.lowercase("hey"); // => true
```

#### `begins(str, sub)`
Check to see if `str` begins with `sub`.

```js
var greeting = "Hello, world!";

check.string.begins(greeting, "Hell"); //=> true
check.string.begins(greeting, "Heck"); //=> false
check.string.begins("hey", "he"); // => true
```

#### `ends(str, sub)`
Check to see if `str` ends with `sub`.

```js
var greeting = "Hello, world!";

check.string.begins(greeting, "world!"); //=> true
check.string.begins(greeting, "Hello"); //=> false
check.string.begins("hey", "ey"); // => true
```

#### `empty(str)`
Check to see if `str` is empty.

```js

check.string.empty(""); // => true
```
