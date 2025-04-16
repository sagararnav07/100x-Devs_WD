# JavaScript Concepts with Use Cases

## 1. Variables & Data Types

### Concept:
JavaScript provides `var`, `let`, and `const` for variable declaration. It supports multiple data types including:
- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference**: `array`, `object`, `function`

### Use Case:
```js
let name = "John"; // String
const age = 25; // Number
let isStudent = true; // Boolean
let person = { name: "John", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
```

## 2. Functions

### Concept:
Functions allow code reuse and modularity. They can be declared using function expressions, function declarations, and arrow functions.

### Use Case:
```js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

## 3. Scope & Closures

### Concept:
- **Global Scope**: Variables declared outside any function.
- **Local Scope**: Variables declared within a function.
- **Block Scope**: Variables declared with `let` or `const` inside `{}`.
- **Closures**: Functions that retain access to their lexical scope even when executed outside of it.

### Use Case:
```js
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}
const newFunction = outerFunction("Hello");
newFunction("World"); // Outer: Hello, Inner: World
```

## 4. Prototypes & Inheritance

### Concept:
JavaScript uses prototype-based inheritance, where objects inherit from other objects.

### Use Case:
```js
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
};
const alice = new Person("Alice");
console.log(alice.greet()); // Hello, my name is Alice
```

## 5. Asynchronous JavaScript (Callbacks, Promises, Async/Await)

### Concept:
JavaScript is single-threaded but handles asynchronous operations using callbacks, promises, and async/await.

### Use Case:
```js
// Using Promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
};
fetchData().then((data) => console.log(data)); // Data received (after 2 sec)

// Using Async/Await
async function fetchAsyncData() {
    let data = await fetchData();
    console.log(data);
}
fetchAsyncData();
```

## 6. Event Loop & Concurrency

### Concept:
JavaScript uses an event loop to handle asynchronous operations without blocking execution.

### Use Case:
```js
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");
// Output:
// Start
// End
// Async Task (after 1 sec)
```

## 7. ES6+ Features

### Concept:
ES6+ introduced several features such as `let` & `const`, arrow functions, template literals, destructuring, and more.

### Use Case:
```js
const person = { name: "Alice", age: 30 };
const { name, age } = person; // Destructuring
console.log(`${name} is ${age} years old.`); // Alice is 30 years old
```

## 8. Modules (ES6 Modules & CommonJS)

### Concept:
JavaScript supports modular programming with ES6 Modules (`import/export`) and CommonJS (`require/module.exports`).

### Use Case:
**ES6 Modules:**
```js
// file1.js
export const greet = (name) => `Hello, ${name}`;

// file2.js
import { greet } from "./file1.js";
console.log(greet("Alice"));
```

## 9. DOM Manipulation

### Concept:
JavaScript can dynamically manipulate the Document Object Model (DOM).

### Use Case:
```js
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    alert("Button clicked!");
});
```

## 10. Error Handling

### Concept:
JavaScript provides `try...catch` for handling exceptions.

### Use Case:
```js
try {
    let result = someUndefinedFunction();
} catch (error) {
    console.error("An error occurred:", error.message);
}
```

## 11. Fetch API & AJAX

### Concept:
The Fetch API allows making HTTP requests asynchronously.

### Use Case:
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
```

## 12. Local Storage & Session Storage

### Concept:
JavaScript provides `localStorage` and `sessionStorage` for storing data in the browser.

### Use Case:
```js
localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // Alice
```

## 13. WebSockets

### Concept:
WebSockets enable real-time communication between the client and server.

### Use Case:
```js
const socket = new WebSocket("ws://example.com");
socket.onmessage = (event) => console.log("Message received:", event.data);
socket.send("Hello Server!");
```

## Conclusion
JavaScript is a versatile language with a wide range of features for web development. Understanding these core concepts will help in mastering JavaScript and building scalable applications.

