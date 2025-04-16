# Important JavaScript Inbuilt Methods & Iterators

## 1. String Methods

### `charAt(index)`
Returns the character at the specified index.
```js
const str = "Hello";
console.log(str.charAt(1)); // "e"
```

### `toUpperCase()` & `toLowerCase()`
Converts a string to uppercase or lowercase.
```js
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"
```

### `trim()`
Removes whitespace from both ends of a string.
```js
console.log("  Hello World  ".trim()); // "Hello World"
```

### `split(separator)`
Splits a string into an array.
```js
console.log("a,b,c".split(",")); // ["a", "b", "c"]
```

### `replace(searchValue, newValue)`
Replaces part of a string.
```js
console.log("Hello World".replace("World", "JavaScript")); // "Hello JavaScript"
```

## 2. Array Methods

### `push()` & `pop()`
Adds/removes elements at the end of an array.
```js
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
arr.pop();
console.log(arr); // [1, 2, 3]
```

### `shift()` & `unshift()`
Removes/adds elements at the beginning of an array.
```js
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
arr.unshift(0);
console.log(arr); // [0, 2, 3]
```

### `slice(start, end)`
Returns a shallow copy of a portion of an array.
```js
console.log([1, 2, 3, 4, 5].slice(1, 4)); // [2, 3, 4]
```

### `splice(start, deleteCount, ...items)`
Modifies an array by adding/removing elements.
```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4]
```

### `map(callback)`
Creates a new array with results of calling a function on each element.
```js
console.log([1, 2, 3].map(x => x * 2)); // [2, 4, 6]
```

### `filter(callback)`
Creates a new array with elements that pass the test.
```js
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
```

### `reduce(callback, initialValue)`
Applies a function to accumulate values.
```js
console.log([1, 2, 3, 4].reduce((acc, val) => acc + val, 0)); // 10
```

## 3. Object Methods

### `Object.keys(obj)`
Returns an array of object keys.
```js
console.log(Object.keys({ a: 1, b: 2 })); // ["a", "b"]
```

### `Object.values(obj)`
Returns an array of object values.
```js
console.log(Object.values({ a: 1, b: 2 })); // [1, 2]
```

### `Object.entries(obj)`
Returns an array of key-value pairs.
```js
console.log(Object.entries({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
```

### `Object.assign(target, source)`
Copies properties from one object to another.
```js
let obj = { a: 1 };
Object.assign(obj, { b: 2 });
console.log(obj); // { a: 1, b: 2 }
```

## 4. Iterators in JavaScript

### `forEach(callback)`
Iterates over an array without returning a new array.
```js
[1, 2, 3].forEach(x => console.log(x * 2));
// 2, 4, 6
```

### `map(callback)`
Creates a new array by applying a function to each element.
```js
console.log([1, 2, 3].map(x => x * 2)); // [2, 4, 6]
```

### `filter(callback)`
Filters elements that meet a condition.
```js
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
```

### `reduce(callback, initialValue)`
Reduces an array to a single value.
```js
console.log([1, 2, 3, 4].reduce((acc, val) => acc + val, 0)); // 10
```

### `find(callback)`
Returns the first element that satisfies the condition.
```js
console.log([1, 2, 3, 4].find(x => x > 2)); // 3
```

### `findIndex(callback)`
Returns the index of the first matching element.
```js
console.log([1, 2, 3, 4].findIndex(x => x > 2)); // 2
```

### `some(callback)`
Returns `true` if at least one element passes the test.
```js
console.log([1, 2, 3, 4].some(x => x > 3)); // true
```

### `every(callback)`
Returns `true` if all elements pass the test.
```js
console.log([1, 2, 3, 4].every(x => x > 0)); // true
```

### `entries()` (Array Iterator)
Returns an iterator with key-value pairs.
```js
let arr = ["a", "b", "c"];
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}
// 0 "a"
// 1 "b"
// 2 "c"
```

### `keys()` (Array Iterator)
Returns an iterator for array keys.
```js
let arr = ["a", "b", "c"];
for (let key of arr.keys()) {
    console.log(key);
}
// 0, 1, 2
```

### `values()` (Array Iterator)
Returns an iterator for array values.
```js
let arr = ["a", "b", "c"];
for (let value of arr.values()) {
    console.log(value);
}
// "a", "b", "c"
```

## Conclusion
JavaScript provides a wide range of built-in methods and iterators to work efficiently with strings, arrays, and objects. Mastering these will significantly improve coding efficiency and problem-solving skills.

