### Array `(check.array)`
#### `contains(collection, value)`
Check that an array contains a value.

```js
var collection = [1, 2, 3, 4, 5]

check.array.contains(collection, 5); //=> true
```

#### `empty(collection)`
Check that an array is empty.

```js
var collection = [];
var stuff = [1, 2, 3];

check.array.empty(collection); //=> true
check.array.empty(stuff); //=> false
```