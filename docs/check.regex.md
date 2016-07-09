### Regex (`check.regex`)

#### `pattern(expected [, actual])`
Check to see if `actual` is a pattern match for `expression`

If `actual` isn't supplied, `pattern` will return a curried function that will test for that specific pattern when you call it with a string.
