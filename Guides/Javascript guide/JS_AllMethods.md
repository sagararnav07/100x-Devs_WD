## String Methods
### `String.includes(searchString[, position])`

Determines whether one string may be found within another string.

```js
const str = "hello world";
console.log(str.includes("world"));
// Output: true
```

### `String.slice(beginIndex[, endIndex])`

Extracts a section of a string.

```js
const str = "hello world";
console.log(str.slice(0, 5));
// Output: 'hello'
```

### `String.substring(indexStart[, indexEnd])`

Returns the part of the string between the start and end indexes.

```js
const str = "hello";
console.log(str.substring(1, 4));
// Output: 'ell'
```

### `String.replace(regexp|substr, newSubstr|function)`

Replaces matched substring with a new substring.

```js
const str = "hello world";
console.log(str.replace("world", "JS"));
// Output: 'hello JS'
```

### `String.replaceAll(regexp|substr, newSubstr)`

Replaces all occurrences of a substring.

```js
const str = "apple apple";
console.log(str.replaceAll("apple", "orange"));
// Output: 'orange orange'
```

### `String.split([separator[, limit]])`

Splits a string into an array of substrings.

```js
const str = "a,b,c";
console.log(str.split(","));
// Output: ['a', 'b', 'c']
```

### `String.toUpperCase()`

Converts all characters to uppercase.

```js
console.log("hello".toUpperCase());
// Output: 'HELLO'
```

### `String.toLowerCase()`

Converts all characters to lowercase.

```js
console.log("HELLO".toLowerCase());
// Output: 'hello'
```

### `String.match(regexp)`

Retrieves the result of matching a string against a regular expression.

```js
const str = "abc123";
console.log(str.match(/\d+/));
// Output: ['123']
```

### `String.padStart(targetLength[, padString])`

Pads the current string with another string from the start.

```js
console.log("5".padStart(3, "0"));
// Output: '005'
```

### `String.padEnd(targetLength[, padString])`

Pads the current string with another string from the end.

```js
console.log("5".padEnd(3, "0"));
// Output: '500'
```



### `String.trim()`

Removes whitespace from both ends of a string.


```js
const str = "   hello   ";
console.log(str.trim());
// Output: 'hello' 
```

### `String.startsWith(searchString[, position])`

Determines whether a string begins with the characters of another string.


```js
const str = "hello world";
console.log(str.startsWith("hello"));
// Output: true
```

### `String.endsWith(searchString[, length])`

Determines whether a string ends with the characters of another string.


```js
const str = "hello world";
console.log(str.endsWith("world"));
// Output: true
```

### `String.charAt(index)`

Returns the character at the specified index.


```js
const str = "hello";
console.log(str.charAt(1));
// Output: 'e' 
```

### `String.charCodeAt(index)`

Returns the Unicode of the character at the specified index.


```js
const str = "hello";
console.log(str.charCodeAt(1));
// Output: 101
```

### `String.repeat(count)`

Returns a new string with a specified number of copies of the original string.


```js
console.log("ha".repeat(3));
// Output: 'hahaha' 
```

### `String.concat()`

Combines the text of two or more strings.


```js
console.log("hello".concat(" ", "world"));
// Output: 'hello world' 
```

## String Methods
### `String.indexOf(searchValue[, fromIndex])`

Returns the index within the calling String object of the first occurrence of the specified value.

```js
const str = "hello world";
console.log(str.indexOf("world"));
// Output: 6
```

### `String.lastIndexOf(searchValue[, fromIndex])`

Returns the index within the calling String object of the last occurrence of the specified value.

```js
const str = "hello world hello";
console.log(str.lastIndexOf("hello"));
// Output: 12
```

### `String.search(regexp)`

Executes a search for a match between a regular expression and this String object.

```js
const str = "hello world";
console.log(str.search(/world/));
// Output: 6
```

### `String.fromCharCode(num1[, ...[, numN]])`

Returns a string created from the specified sequence of UTF-16 code units.

```js
console.log(String.fromCharCode(65, 66, 67));
// Output: 'ABC'
```

### `String.fromCodePoint(num1[, ...[, numN]])`

Returns a string created by using the specified sequence of code points.

```js
console.log(String.fromCodePoint(9731, 9733, 9842));
// Output: '☃★♲'
```

### `String.localeCompare(compareString[, locales[, options]])`

Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.

```js
console.log('a'.localeCompare('b'));
// Output: -1
console.log('b'.localeCompare('a'));
// Output: 1
```

### `String.normalize([form])`

Returns the Unicode Normalization Form of the string.

```js
const str = '\u0041\u006d\u00e9\u006c\u0069\u0065';
console.log(str.normalize('NFC'));
// Output: 'Amélie'
```

### `String.raw(callSite, ...substitutions)`

A static method that is used as a template literal tag function.

```js
console.log(String.raw`Hello\nWorld`);
// Output: 'Hello\\nWorld'
```
## ----------------------------------------------------------------------------------------------------------
## Number Methods
### `Number.parseInt(string[, radix])`

Parses a string argument and returns an integer of the specified radix.

```js
console.log(Number.parseInt('42'));
// Output: 42
console.log(Number.parseInt('42px'));
// Output: 42
console.log(Number.parseInt('0xFF', 16));
// Output: 255
```

### `Number.parseFloat(string)`

Parses a string argument and returns a floating point number.

```js
console.log(Number.parseFloat('3.14'));
// Output: 3.14
console.log(Number.parseFloat('3.14abc'));
// Output: 3.14
```

### `Number.prototype.toFixed(digits)`

Formats a number using fixed-point notation.

```js
const num = 12.34567;
console.log(num.toFixed(2));
// Output: '12.35'
```

### `Number.prototype.toPrecision(precision)`

Returns a string representing the number to the specified precision.

```js
const num = 12.34567;
console.log(num.toPrecision(3));
// Output: '12.3'
```

### `Number.prototype.toString([radix])`

Returns a string representing the specified object in the specified radix.

```js
const num = 255;
console.log(num.toString());
// Output: '255'
console.log(num.toString(16));
// Output: 'ff'
```

### `Number.isNaN(value)`

Determines whether the passed value is NaN.

```js
console.log(Number.isNaN(NaN));
// Output: true
console.log(Number.isNaN('hello'));
// Output: false
```

### `Number.isFinite(value)`

Determines whether the passed value is a finite number.

```js
console.log(Number.isFinite(123));
// Output: true
console.log(Number.isFinite(Infinity));
// Output: false
```
## -------------------------------------------------------------------------------------------------------
## Array Methods
### `Array.map(callback)`

Creates a new array with the results of calling a function on every element.

```js
console.log([1, 2, 3].map(x => x * 2));
// Output: [2, 4, 6]
```

### `Array.filter(callback)`

Creates a new array with all elements that pass the test.

```js
console.log([1, 2, 3, 4].filter(x => x % 2 === 0));
// Output: [2, 4]
```

### `Array.reduce(callback, initialValue)`

Applies a function against an accumulator and each element to reduce it to a single value.

```js
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
// Output: 10
```

### `Array.forEach(callback)`

Executes a function on each array element.

```js
[1, 2, 3].forEach(x => console.log(x));
// Output: 1 2 3
```

### `Array.find(callback)`

Returns the first element that satisfies the test.

```js
console.log([1, 2, 3].find(x => x > 1));
// Output: 2
```

### `Array.findIndex(callback)`

Returns the index of the first element that satisfies the test.

```js
console.log([1, 2, 3].findIndex(x => x > 1));
// Output: 1
```

### `Array.sort([compareFunction])`

Sorts the elements of an array.

```js
console.log([3, 1, 2].sort());
// Output: [1, 2, 3]
```

### `Array.reverse()`

Reverses the array in place.

```js
console.log([1, 2, 3].reverse());
// Output: [3, 2, 1]
```

### `Array.fill(value[, start[, end]])`

Fills elements with a static value.

```js
console.log([1, 2, 3].fill(0));
// Output: [0, 0, 0]
```

### `Array.includes(valueToFind[, fromIndex])`

Determines whether the array includes a certain value.

```js
console.log([1, 2, 3].includes(2));
// Output: true
```

### `Array.join([separator])`

Joins all elements into a string.

```js
console.log([1, 2, 3].join("-"));
// Output: '1-2-3'
```

### `Array.push(element1, ..., elementN)`

Adds elements to the end and returns the new length.

```js
const arr = [1];
arr.push(2);
console.log(arr);
// Output: [1, 2]
```

### `Array.pop()`

Removes and returns the last element.

```js
const arr = [1, 2];
arr.pop();
console.log(arr);
// Output: [1]
```

### `Array.shift()`

Removes and returns the first element.

```js
const arr = [1, 2];
arr.shift();
console.log(arr);
// Output: [2]
```

### `Array.unshift(element1, ..., elementN)`

Adds elements to the beginning.

```js
const arr = [2];
arr.unshift(1);
console.log(arr);
// Output: [1, 2]
```



### `Array.concat()`

Merges two or more arrays.


```js
const a = [1, 2], b = [3, 4];
console.log(a.concat(b));
// Output: [1, 2, 3, 4]
```

### `Array.indexOf(searchElement[, fromIndex])`

Returns the first index at which a given element can be found.


```js
const arr = [1, 2, 3];
console.log(arr.indexOf(2));
// Output: 1
```

### `Array.lastIndexOf(searchElement[, fromIndex])`

Returns the last index at which a given element can be found.


```js
const arr = [1, 2, 1];
console.log(arr.lastIndexOf(1));
// Output: 2
```

### `Array.every(callback)`

Checks if all elements pass a test implemented by the provided function.


```js
console.log([2, 4, 6].every(x => x % 2 === 0));
// Output: true
```

### `Array.some(callback)`

Checks if at least one element passes the test.


```js
console.log([1, 2, 3].some(x => x > 2));
// Output: true
```

### `Array.flat([depth])`

Flattens nested arrays.


```js
console.log([1, [2, [3]]].flat(2));
// Output: [1, 2, 3]
```

### `Array.flatMap(callback)`

Maps each element and flattens the result.


```js
console.log([1, 2].flatMap(x => [x, x * 2]));
// Output: [1, 2, 2, 4]
```

### `Array.splice(start[, deleteCount, item1, ..., itemN])`

Adds/removes items to/from an array.


```js
const arr = [1, 2, 3];
arr.splice(1, 1, 4);
console.log(arr);
// Output: [1, 4, 3]
```

### `Array.from(arrayLike[, mapFn])`

Creates an array from an array-like or iterable object.


```js
console.log(Array.from("abc"));
// Output: ['a', 'b', 'c']
```

### `Array.of(element0[, element1[, ...[, elementN]]])`

Creates a new array from a variable number of arguments.


```js
console.log(Array.of(1, 2, 3));
// Output: [1, 2, 3]
```
## Advanced Array Methods

### `Array.prototype.at(index)`

Returns the array item at the given index. Supports negative indices.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));
// Output: 5

### Array.prototype.toSorted([compareFn])
const arr = [3, 1, 4, 2];
console.log(arr.toSorted());
// Output: [1, 2, 3, 4]
console.log(arr);
// Output: [3, 1, 4, 2] (original unchanged)

----------------------------------------------------------------------------------------------------------
Additional Promise Methods
Promise.prototype.finally(onFinally)
Adds a handler to be called regardless of promise outcome.
jsfetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Fetch attempt completed'));
// Output: 'Fetch attempt completed' (regardless of outcome)


## ----------------------------------------------------------------------------------------------------------


## Math Methods


### `Math.floor(x)`

Returns the largest integer less than or equal to a given number.


```js
console.log(Math.floor(1.9));
// Output: 1
```

### `Math.ceil(x)`

Returns the smallest integer greater than or equal to a given number.


```js
console.log(Math.ceil(1.1));
// Output: 2
```

### `Math.trunc(x)`

Returns the integer part of a number.


```js
console.log(Math.trunc(1.9));
// Output: 1
```

### `Math.abs(x)`

Returns the absolute value of a number.


```js
console.log(Math.abs(-5));
// Output: 5
```

### `Math.pow(base, exponent)`

Returns base to the power of exponent.


```js
console.log(Math.pow(2, 3));
// Output: 8
```

### `Math.log(x)`

Returns the natural logarithm (base e).


```js
console.log(Math.log(Math.E));
// Output: 1
```

### `Math.sin(x), Math.cos(x)`

Returns the sine/cosine of a number (in radians).


```js
console.log(Math.sin(Math.PI / 2));
// Output: 1
```
## ----------------------------------------------------------------------------------------------------------


## Global Methods


### `parseInt(string[, radix])`

Parses a string and returns an integer.


```js
console.log(parseInt("10", 10));
// Output: 10
```

### `parseFloat(string)`

Parses a string and returns a float.


```js
console.log(parseFloat("3.14"));
// Output: 3.14
```

### `isNaN(value)`

Checks whether a value is NaN.


```js
console.log(isNaN("abc"));
// Output: true
```

### `isFinite(value)`

Checks whether a value is a finite number.


```js
console.log(isFinite(10));
// Output: true
```

### `setTimeout(callback, delay)`

Calls a function after a specified delay.


```js
setTimeout(() => console.log("Hi"), 1000);
// Output: 'Hi' after 1 second
```

### `setInterval(callback, delay)`

Calls a function repeatedly at specified intervals.


```js
const intervalId = setInterval(() => console.log("Tick"), 1000);
// Output: 'Tick' every second
```

## ----------------------------------------------------------------------------------------------------------

## JSON Methods


### `JSON.stringify(value)`

Converts a JavaScript object or value to a JSON string.


```js
const obj = { a: 1 };
console.log(JSON.stringify(obj));
// Output: '{"a":1}' 
```

### `JSON.parse(text)`

Parses a JSON string and returns the JavaScript object.


```js
const str = '{"a":1}';
console.log(JSON.parse(str));
// Output: { a: 1 }
```
## ----------------------------------------------------------------------------------------------------------

## Set Methods


### `Set.add(value)`

Adds a new element with a specified value.


```js
const s = new Set();
s.add(1);
console.log(s.has(1));
// Output: true
```

### `Set.has(value)`

Returns true if the value exists.


```js
const s = new Set([1]);
console.log(s.has(1));
// Output: true
```

### `Set.delete(value)`

Removes a specified value.


```js
const s = new Set([1]);
s.delete(1);
console.log(s.has(1));
// Output: false
```

### `Set.clear()`

Removes all elements.


```js
const s = new Set([1, 2]);
s.clear();
console.log(s.size);
// Output: 0
```
## ----------------------------------------------------------------------------------------------------------

## Map Methods


### `Map.set(key, value)`

Adds or updates an element with a specified key and value.


```js
const m = new Map();
m.set("a", 1);
console.log(m.get("a"));
// Output: 1
```

### `Map.get(key)`

Returns the value associated with the key.


```js
const m = new Map([["a", 1]]);
console.log(m.get("a"));
// Output: 1
```

### `Map.has(key)`

Returns true if a value is associated with the key.


```js
const m = new Map([["a", 1]]);
console.log(m.has("a"));
// Output: true
```

### `Map.delete(key)`

Removes the element associated with the key.


```js
const m = new Map([["a", 1]]);
m.delete("a");
console.log(m.has("a"));
// Output: false
```

### `Map.clear()`

Removes all key-value pairs.


```js
const m = new Map([["a", 1]]);
m.clear();
console.log(m.size);
// Output: 0
```
## ----------------------------------------------------------------------------------------------------------

## Promise Methods


### `Promise.resolve(value)`

Returns a resolved Promise object.


```js
Promise.resolve(42).then(console.log);
// Output: 42
```

### `Promise.reject(reason)`

Returns a rejected Promise object.


```js
Promise.reject("Error").catch(console.log);
// Output: 'Error' 
```

### `Promise.all(iterable)`

Waits for all Promises and returns results.


```js
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log);
// Output: [1, 2]
```

### `Promise.race(iterable)`

Returns the result of the first resolved/rejected Promise.


```js
Promise.race([Promise.resolve(1), Promise.reject(2)]).then(console.log);
// Output: 1
```

### `Promise.any(iterable)`

Returns the first fulfilled Promise.


```js
Promise.any([Promise.reject("fail"), Promise.resolve("ok")]).then(console.log);
// Output: 'ok' 
```

### `Promise.then(onFulfilled)`

Adds a fulfillment handler.


```js
Promise.resolve(10).then(val => console.log(val));
// Output: 10
```

### `Promise.catch(onRejected)`

Adds a rejection handler.


```js
Promise.reject("err").catch(val => console.log(val));
// Output: 'err' 
```

### `Promise.finally(onFinally)`

Adds a handler to be called regardless of promise outcome.

## ----------------------------------------------------------------------------------------------------------
## Asynchronous & Fetch Methods

### `fetch(url, options)`

Fetches a resource (returns a Promise).

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data));
// Output: Post data object
```

### `async` / `await`

```js
Promise.resolve("done").finally(() => console.log("finished"));
// Output: 'finished' then 'done' 
```

Simplifies working with Promises using async functions.

```js
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();
// Output: Post data object
```

### `Promise.allSettled(promises)`

Waits for all Promises to settle (either fulfilled or rejected).

```js
const promises = [
  Promise.resolve(1),
  Promise.reject("fail"),
  Promise.resolve(3)
];

Promise.allSettled(promises).then(results => console.log(results));
// Output: [{status: "fulfilled", value: 1}, {status: "rejected", reason: "fail"}, ...]
```

### `AbortController`

Allows aborting a `fetch` request.

```js
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Aborted:", err.name));

controller.abort();
// Output: Aborted: AbortError
```
## ----------------------------------------------------------------------------------------------------------

## Object Methods

### `Object.keys(obj)`

Returns an array of a given object's own enumerable property names.

```js
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj));
// Output: ['a', 'b']
```

### `Object.values(obj)`

Returns an array of a given object's own enumerable property values.

```js
const obj = { a: 1, b: 2 };
console.log(Object.values(obj));
// Output: [1, 2]
```

### `Object.entries(obj)`

Returns an array of a given object's own enumerable property [key, value] pairs.

```js
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj));
// Output: [['a', 1], ['b', 2]]
```

### `Object.assign(target, ...sources)`

Copies all enumerable own properties from source objects to a target object.

```js
const target = { a: 1 };
const source = { b: 2 };
console.log(Object.assign(target, source));
// Output: { a: 1, b: 2 }
```

### `Object.create(proto[, propertiesObject])`

Creates a new object with the specified prototype object and properties.

```js
const person = {
  isHuman: false
};
const john = Object.create(person);
john.isHuman = true;
console.log(john.isHuman);
// Output: true
```

### `Object.freeze(obj)`

Freezes an object, preventing new properties from being added and existing properties from being removed or modified.

```js
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Attempt to modify
console.log(obj.prop);
// Output: 42 (no change)
```

### `Object.seal(obj)`

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

```js
const obj = { prop: 42 };
Object.seal(obj);
obj.prop = 33; // Can modify existing properties
obj.newProp = 123; // Can't add new properties
console.log(obj.prop);
// Output: 33
console.log(obj.newProp);
// Output: undefined
```
## Object Methods
### `Object.defineProperty(obj, prop, descriptor)`

Defines a new property directly on an object, or modifies an existing property.

```js
const obj = {};
Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: false
});
console.log(obj.property1);
// Output: 42
```

### `Object.defineProperties(obj, props)`

Defines new properties or modifies existing properties directly on an object.

```js
const obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: 42,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});
console.log(obj.property1, obj.property2);
// Output: 42 'Hello'
```

### `Object.getOwnPropertyDescriptor(obj, prop)`

Returns a property descriptor for an own property.

```js
const obj = { get foo() { return 17; } };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// Output: { get: [Function: get foo], set: undefined, enumerable: true, configurable: true }
```

### `Object.getOwnPropertyDescriptors(obj)`

Returns all own property descriptors of an object.

```js
const obj = { 
  property1: 42,
  get property2() { return 'Hello'; }
};
console.log(Object.getOwnPropertyDescriptors(obj));
// Output: { property1: {...}, property2: {...} }
```

### `Object.getOwnPropertyNames(obj)`

Returns an array of all properties found directly in a given object.

```js
const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(obj));
// Output: ['a', 'b']
```

### `Object.getOwnPropertySymbols(obj)`

Returns an array of all symbol properties found directly in a given object.

```js
const sym = Symbol('description');
const obj = { [sym]: 1 };
console.log(Object.getOwnPropertySymbols(obj));
// Output: [Symbol(description)]
```

### `Object.is(value1, value2)`

Determines whether two values are the same value.

```js
console.log(Object.is(0, -0));
// Output: false
console.log(Object.is(NaN, NaN));
// Output: true
```

### `Object.hasOwn(instance, prop)`

Returns true if the specified object has the indicated property as its own property.

```js
const obj = { property: 'value' };
console.log(Object.hasOwn(obj, 'property'));
// Output: true
```

### `Object.preventExtensions(obj)`

Prevents new properties from ever being added to an object.

```js
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2; // Attempt to add a new property
console.log(obj.b);
// Output: undefined
```

### `Object.isExtensible(obj)`

Determines if an object is extensible.

```js
const obj = { a: 1 };
console.log(Object.isExtensible(obj));
// Output: true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
// Output: false
```

### `Object.fromEntries(iterable)`

Transforms a list of key-value pairs into an object.

```js
const entries = [['name', 'John'], ['age', 30]];
console.log(Object.fromEntries(entries));
// Output: { name: 'John', age: 30 }
```

## ----------------------------------------------------------------------------------------------------------

## Date Methods

### `Date.now()`

Returns the number of milliseconds elapsed since January 1, 1970.

```js
console.log(Date.now());
// Output: 1649876031523 (example timestamp)
```

### `Date.parse(dateString)`

Parses a date string and returns the number of milliseconds since January 1, 1970.

```js
console.log(Date.parse('2022-04-14'));
// Output: 1649894400000 (example timestamp)
```

### `new Date()`

Creates a new Date object representing the current date and time.

```js
const today = new Date();
console.log(today);
// Output: Wed Apr 12 2023 15:30:45 GMT+0000 (example)
```

### `date.getDate()`

Returns the day of the month (1-31) for the specified date.

```js
const date = new Date('2022-04-14');
console.log(date.getDate());
// Output: 14
```

### `date.getMonth()`

Returns the month (0-11) for the specified date.

```js
const date = new Date('2022-04-14');
console.log(date.getMonth());
// Output: 3 (April is month 3, zero-indexed)
```

### `date.getFullYear()`

Returns the year for the specified date.

```js
const date = new Date('2022-04-14');
console.log(date.getFullYear());
// Output: 2022
```

### `date.getHours()`

Returns the hour (0-23) for the specified date.

```js
const date = new Date('2022-04-14T15:30:00');
console.log(date.getHours());
// Output: 15
```

### `date.getMinutes()`

Returns the minutes (0-59) for the specified date.

```js
const date = new Date('2022-04-14T15:30:00');
console.log(date.getMinutes());
// Output: 30
```

### `date.toISOString()`

Returns a string representing the date in ISO format.

```js
const date = new Date('2022-04-14T15:30:00Z');
console.log(date.toISOString());
// Output: '2022-04-14T15:30:00.000Z'
```

### `date.toLocaleDateString()`

Returns a string with a language-sensitive representation of the date.

```js
const date = new Date('2022-04-14');
console.log(date.toLocaleDateString('en-US'));
// Output: '4/14/2022'
```

## ----------------------------------------------------------------------------------------------------------

## Regular Expression Methods

### `RegExp.test(string)`

Tests for a match in a string. Returns true or false.

```js
const regex = /hello/;
console.log(regex.test('hello world'));
// Output: true
```

### `RegExp.exec(string)`

Executes a search for a match in a string. Returns an array of information or null.

```js
const regex = /(\d+)/;
console.log(regex.exec('The year is 2023'));
// Output: ['2023', '2023', index: 12, input: 'The year is 2023', groups: undefined]
```

### `string.match(regexp)`

Returns an array of matches or null if no matches are found.

```js
const str = 'The rain in Spain';
console.log(str.match(/ain/g));
// Output: ['ain', 'ain']
```

### `string.matchAll(regexp)`

Returns an iterator of all matches.

```js
const str = 'test1test2';
const regex = /test(\d)/g;
const matches = [...str.matchAll(regex)];
console.log(matches);
// Output: [['test1', '1', index: 0, input: 'test1test2'], ['test2', '2', index: 5, input: 'test1test2']]
```

## ----------------------------------------------------------------------------------------------------------

## Symbol Methods

### `Symbol(description)`

Creates a new primitive Symbol.

```js
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2);
// Output: false
```

### `Symbol.for(key)`

Returns a Symbol with a given key from the global Symbol registry.

```js
const globalSym = Symbol.for('key');
const anotherGlobalSym = Symbol.for('key');
console.log(globalSym === anotherGlobalSym);
// Output: true
```

### `Symbol.keyFor(sym)`

Retrieves a shared Symbol key from the global Symbol registry.

```js
const globalSym = Symbol.for('key');
console.log(Symbol.keyFor(globalSym));
// Output: 'key'
```

## ----------------------------------------------------------------------------------------------------------

## Advanced Array Methods

### `Array.prototype.at(index)`

Returns the array item at the given index, supports negative indices.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));
// Output: 5
```

### `Array.prototype.toSorted([compareFn])`

Returns a new array with elements sorted, without modifying original array.

```js
const arr = [3, 1, 4, 2];
console.log(arr.toSorted());
// Output: [1, 2, 3, 4]
console.log(arr);
// Output: [3, 1, 4, 2] (original unchanged)
```

### `Array.prototype.toReversed()`

Returns a new array with elements in reversed order, without modifying original array.

```js
const arr = [1, 2, 3];
console.log(arr.toReversed());
// Output: [3, 2, 1]
console.log(arr);
// Output: [1, 2, 3] (original unchanged)
```

### `Array.prototype.with(index, value)`

Returns a new array with the element at the given index replaced.

```js
const arr = [1, 2, 3];
console.log(arr.with(1, 42));
// Output: [1, 42, 3]
console.log(arr);
// Output: [1, 2, 3] (original unchanged)
```

### `Array.prototype.findLast(callback)`

Returns the value of the last element that satisfies the provided testing function.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.findLast(x => x % 2 === 0));
// Output: 4
```

### `Array.prototype.findLastIndex(callback)`

Returns the index of the last element that satisfies the provided testing function.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.findLastIndex(x => x % 2 === 0));
// Output: 3
```

## ----------------------------------------------------------------------------------------------------------

## Additional Promise Methods

### `Promise.prototype.finally(onFinally)`

Adds a handler to be called regardless of promise outcome.

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Fetch attempt completed'));
// Output: 'Fetch attempt completed' (regardless of outcome)
```

## ----------------------------------------------------------------------------------------------------------

## DOM Methods

### `document.querySelector(selector)`

Returns the first element that matches the specified selector.

```js
const element = document.querySelector('.my-class');
console.log(element);
// Output: [HTMLElement object]
```

### `document.querySelectorAll(selector)`

Returns a NodeList of all elements matching the specified selector.

```js
const elements = document.querySelectorAll('.my-class');
console.log(elements.length);
// Output: [number of matching elements]
```

### `document.getElementById(id)`

Returns the element with the specified ID.

```js
const element = document.getElementById('my-id');
console.log(element);
// Output: [HTMLElement object]
```

### `element.addEventListener(event, handler[, options])`

Attaches an event handler to an element.

```js
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
// Output: 'Button clicked!' when button is clicked
```

### `element.innerHTML`

Gets or sets the HTML content of an element.

```js
const div = document.querySelector('div');
div.innerHTML = '<span>New content</span>';
console.log(div.innerHTML);
// Output: '<span>New content</span>'
```

### `element.classList`

Provides methods to work with the class attribute of an element.

```js
const element = document.querySelector('.my-element');
element.classList.add('new-class');
element.classList.remove('old-class');
console.log(element.classList.contains('new-class'));
// Output: true
```

### `element.setAttribute(name, value)`

Sets the value of an attribute on the element.

```js
const img = document.querySelector('img');
img.setAttribute('alt', 'Image description');
console.log(img.getAttribute('alt'));
// Output: 'Image description'
```

## ----------------------------------------------------------------------------------------------------------

## Additional Math Methods

### `Math.random()`

Returns a random number between 0 (inclusive) and 1 (exclusive).

```js
console.log(Math.random());
// Output: 0.7589321358491928 (example random value)
```

### `Math.max([value1[, value2[, ...]]])`

Returns the largest of the given numbers.

```js
console.log(Math.max(1, 3, 2));
// Output: 3
```

### `Math.min([value1[, value2[, ...]]])`

Returns the smallest of the given numbers.

```js
console.log(Math.min(1, 3, 2));
// Output: 1
```

### `Math.round(x)`

Returns the value rounded to the nearest integer.

```js
console.log(Math.round(1.4));
// Output: 1
console.log(Math.round(1.5));
// Output: 2
```

### `Math.sqrt(x)`

Returns the square root of a number.

```js
console.log(Math.sqrt(16));
// Output: 4
```
## ---------------------------------------------------------------------------------------------------------

# JavaScript Methods Reference


## Array Methods
### `Array.prototype.slice([begin[, end]])`

Returns a shallow copy of a portion of an array into a new array object.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3));
// Output: [2, 3]
```

### `Array.prototype.copyWithin(target[, start[, end]])`

Copies array elements within the array, to and from specified positions.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3));
// Output: [4, 5, 3, 4, 5]
```

### `Array.isArray(value)`

Determines whether the passed value is an Array.

```js
console.log(Array.isArray([1, 2, 3]));
// Output: true
console.log(Array.isArray('123'));
// Output: false
```


## Date Methods
### `date.setDate(dayValue)`

Sets the day of the month for a specified date.

```js
const date = new Date('2022-04-14');
date.setDate(20);
console.log(date.toISOString());
// Output: '2022-04-20T00:00:00.000Z'
```

### `date.setMonth(monthValue[, dayValue])`

Sets the month for a specified date.

```js
const date = new Date('2022-04-14');
date.setMonth(5); // June (0-indexed)
console.log(date.toISOString());
// Output: '2022-06-14T00:00:00.000Z'
```

### `date.setFullYear(yearValue[, monthValue[, dayValue]])`

Sets the full year for a specified date.

```js
const date = new Date('2022-04-14');
date.setFullYear(2023);
console.log(date.toISOString());
// Output: '2023-04-14T00:00:00.000Z'
```

### `date.getDay()`

Returns the day of the week (0-6) for the specified date.

```js
const date = new Date('2022-04-14');
console.log(date.getDay());
// Output: 4 (Thursday)
```

### `date.getTime()`

Returns the number of milliseconds since January 1, 1970.

```js
const date = new Date('2022-04-14');
console.log(date.getTime());
// Output: 1649894400000 (example timestamp)
```

### `date.toLocaleTimeString([locales[, options]])`

Returns a string with a locale-sensitive representation of the time portion of this date.

```js
const date = new Date('2022-04-14T15:30:00');
console.log(date.toLocaleTimeString('en-US'));
// Output: '3:30:00 PM'
```

### `date.toDateString()`

Returns the "date" portion of the Date as a human-readable string.

```js
const date = new Date('2022-04-14');
console.log(date.toDateString());
// Output: 'Thu Apr 14 2022'
```

### `date.toTimeString()`

Returns the "time" portion of the Date as a human-readable string.

```js
const date = new Date('2022-04-14T15:30:00');
console.log(date.toTimeString());
// Output: '15:30:00 GMT+0000 (Coordinated Universal Time)'
```


## BigInt Methods
### `BigInt(value)`

Creates a BigInt value.

```js
console.log(BigInt(123));
// Output: 123n
console.log(BigInt('9007199254740991'));
// Output: 9007199254740991n
```

### `BigInt.prototype.toString([radix])`

Returns a string representing the specified BigInt object.

```js
const bigint = BigInt(123);
console.log(bigint.toString());
// Output: '123'
console.log(bigint.toString(2));
// Output: '1111011'
```

### `BigInt.asIntN(width, bigint)`

Clamps a BigInt value to a signed integer value.

```js
console.log(BigInt.asIntN(3, 5n));
// Output: -3n (5n mod 2^3 = 5, but since it's signed and 5 >= 2^(3-1) = 4, we get 5-8 = -3)
```

### `BigInt.asUintN(width, bigint)`

Clamps a BigInt value to an unsigned integer value.

```js
console.log(BigInt.asUintN(3, 5n));
// Output: 5n (5n mod 2^3 = 5)
console.log(BigInt.asUintN(3, 9n));
// Output: 1n (9n mod 2^3 = 1)
```

## Promise Methods
### `Promise.allSettled(iterable)`

Returns a promise that resolves after all of the given promises have either fulfilled or rejected.

```js
const promises = [
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
];

Promise.allSettled(promises).then(results => console.log(results));
// Output: [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'error' },
//   { status: 'fulfilled', value: 3 }
// ]
```

### `Promise.any(iterable)`

Returns a promise that is fulfilled by the first given promise to be fulfilled.

```js
const promises = [
  Promise.reject('error'),
  new Promise(resolve => setTimeout(() => resolve(1), 100)),
  new Promise(resolve => setTimeout(() => resolve(2), 50))
];

Promise.any(promises).then(value => console.log(value));
// Output: 2 (the fastest to resolve)
```

## Map Methods
### `Map.prototype.forEach(callbackFn[, thisArg])`

Executes a provided function once per each key/value pair in the Map.

```js
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
map.forEach((value, key) => console.log(key, value));
// Output:
// a 1
// b 2
// c 3
```

### `Map.prototype.entries()`

Returns a new Iterator object that contains [key, value] pairs for each element.

```js
const map = new Map([['a', 1], ['b', 2]]);
console.log([...map.entries()]);
// Output: [['a', 1], ['b', 2]]
```

### `Map.prototype.keys()`

Returns a new Iterator object that contains the keys for each element.

```js
const map = new Map([['a', 1], ['b', 2]]);
console.log([...map.keys()]);
// Output: ['a', 'b']
```

### `Map.prototype.values()`

Returns a new Iterator object that contains the values for each element.

```js
const map = new Map([['a', 1], ['b', 2]]);
console.log([...map.values()]);
// Output: [1, 2]
```

## Set Methods
### `Set.prototype.forEach(callbackFn[, thisArg])`

Executes a provided function once for each value in the Set.

```js
const set = new Set([1, 2, 3]);
set.forEach(value => console.log(value));
// Output:
// 1
// 2
// 3
```

## Intl Methods
### `Intl.DateTimeFormat(locales[, options])`

Constructor for objects that format dates according to locale.

```js
const date = new Date('2022-04-14');
const formatter = new Intl.DateTimeFormat('en-US');
console.log(formatter.format(date));
// Output: '4/14/2022'
```

### `Intl.NumberFormat(locales[, options])`

Constructor for objects that format numbers according to locale.

```js
const number = 123456.789;
const formatter = new Intl.NumberFormat('en-US');
console.log(formatter.format(number));
// Output: '123,456.789'
```

### `Intl.ListFormat(locales[, options])`

Constructor for objects that format lists according to locale.

```js
const list = ['Apple', 'Orange', 'Banana'];
const formatter = new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' });
console.log(formatter.format(list));
// Output: 'Apple, Orange, and Banana'
```

## Additional Methods
### `structuredClone(value[, options])`

Creates a deep clone of a given value.

```js
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);
clone.b.c = 3;
console.log(original.b.c);
// Output: 2 (original not affected)
console.log(clone.b.c);
// Output: 3
```

### `localStorage.setItem(key, value)`

Saves data to localStorage.

```js
localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username'));
// Output: 'John'
```

### `localStorage.getItem(key)`

Gets data from localStorage.

```js
localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username'));
// Output: 'John'
```

### `sessionStorage.setItem(key, value)`

Saves data to sessionStorage.

```js
sessionStorage.setItem('tempData', 'value');
console.log(sessionStorage.getItem('tempData'));
// Output: 'value'
```

### `sessionStorage.getItem(key)`

Gets data from sessionStorage.

```js
sessionStorage.setItem('tempData', 'value');
console.log(sessionStorage.getItem('tempData'));
// Output: 'value'
```