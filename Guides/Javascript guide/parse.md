Awesome! Here's a detailed **JavaScript Parsing Cheatsheet** for:

- JSON
- Numbers (`parseInt`, `parseFloat`, `Number`)
- Dates
- URL & Query Params

---

## 📦 1. JSON Parsing

### ✅ `JSON.parse()`
Converts a **JSON-formatted string** into a JavaScript object or array.

```js
const jsonStr = '{"name": "Arnav", "age": 22}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // "Arnav"
```

#### 🔥 Notes:
- Throws an error if the string is not valid JSON.
- JSON must use **double quotes**, not single.

```js
JSON.parse("{name: 'Arnav'}"); // ❌ invalid
JSON.parse('{"name": "Arnav"}'); // ✅ 
// valid
```

### ✅ `JSON.stringify()`
(Reverse operation) — Converts object to JSON string.

```js
const str = JSON.stringify({ x: 10, y: 20 });
console.log(str); // '{"x":10,"y":20}'
```

---

## 🔢 2. Parsing Numbers

### ✅ `parseInt(string, radix)`
Converts a string to an **integer**. `radix` is optional but recommended (e.g. 10 for decimal, 2 for binary).

```js
parseInt("123", 10); // 123
parseInt("101", 2);  // 5 (binary)
parseInt("0xFF", 16); // 255 (hex)
```

#### ⚠️ Notes:
- Ignores trailing non-digit chars:
  ```js
  parseInt("123abc"); // 123
  ```

- Returns `NaN` if it can't parse anything meaningful:
  ```js
  parseInt("abc"); // NaN
  ```

---

### ✅ `parseFloat(string)`
Converts a string to a **floating-point number**.

```js
parseFloat("3.14159"); // 3.14159
parseFloat("5.6abc");  // 5.6
```

- More lenient than `Number()`
- Stops parsing when it hits invalid chars

---

### ✅ `Number(string)`
Converts to number (int or float). Stricter than `parseInt` or `parseFloat`.

```js
Number("42");        // 42
Number("3.14");      // 3.14
Number("42abc");     // NaN (strict)
Number("   42  ");   // 42 (trims whitespace)
```

---

## 📅 3. Parsing Dates

### ✅ `Date.parse(string)`
Returns timestamp (ms since Jan 1, 1970).

```js
Date.parse("2025-04-17"); // 1744867200000
```

Use with `new Date(...)`:

```js
const d = new Date(Date.parse("2025-04-17T10:30:00Z"));
console.log(d.toISOString()); // "2025-04-17T10:30:00.000Z"
```

### ✅ `new Date(string)`
Alternative, more common:

```js
new Date("2025-04-17"); // Thu Apr 17 2025 ...
```

---

## 🌐 4. Parsing URLs and Query Parameters

### ✅ `new URL(urlString)`
Breaks a full URL into parts.

```js
const url = new URL("https://example.com/page?user=arnav&id=123");

console.log(url.hostname); // "example.com"
console.log(url.pathname); // "/page"
console.log(url.search);   // "?user=arnav&id=123"
```

### ✅ `url.searchParams.get(key)`
To access query parameters:

```js
url.searchParams.get("user"); // "arnav"
url.searchParams.get("id");   // "123"
```

You can also **loop through all params**:

```js
for (const [key, value] of url.searchParams) {
  console.log(`${key} = ${value}`);
}
```

---

### 🔄 Bonus: Manually Parsing Query Strings

```js
const query = "user=arnav&id=123";
const params = Object.fromEntries(new URLSearchParams(query));
console.log(params); // { user: 'arnav', id: '123' }
```

---

Would you like me to turn this into a downloadable PDF or MD file for easy reference?