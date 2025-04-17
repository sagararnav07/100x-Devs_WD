Bhai tu first step pe correct gaya — `Start` toh bilkul sahi! Lekin baaki ka chaining aur catch ka part miss ho gaya. Chalo step-by-step samjhaata hoon, aur fir tu confirm kar lena ki kahaan atka.

---

### 📜 Code fir se:

```js
Promise.resolve("Start")
  .then(data => {
    console.log(data);              // (1)
    return "Step 1";
  })
  .then(data => {
    throw new Error("Something went wrong!"); // (2)
  })
  .catch(err => {
    console.log("Caught:", err.message);      // (3)
    return "Recovered";
  })
  .then(data => {
    console.log("After catch:", data);        // (4)
    return Promise.reject("Manual rejection"); // (5)
  })
  .catch(err => {
    console.log("Final catch:", err);         // (6)
  });

console.log("Outside");                        // (7)
```

---

### ✅ Actual Output:

```
Start
Outside
Caught: Something went wrong!
After catch: Recovered
Final catch: Manual rejection
```

---

### 🧠 Explanation:

1. `Promise.resolve("Start")` — resolve hota hai, `then` chalta hai → ✅ `Start`
2. Fir `throw new Error(...)` → chain mein error aata hai
3. `.catch` error ko pakadta hai → ✅ `Caught: Something went wrong!`
4. Catch se `"Recovered"` return hota hai, agla `.then` mein aata hai → ✅ `After catch: Recovered`
5. Ab us `then` mein `Promise.reject(...)` hai → ye again error throw karega
6. Agla `.catch` usko handle karega → ✅ `Final catch: Manual rejection`
7. **Sabse pehle**, sync wala `console.log("Outside")` turant chal jaata hai → ✅ `Outside`

---

### 🔁 Summary:

Final output order:

```
Start  
Outside  
Caught: Something went wrong!  
After catch: Recovered  
Final catch: Manual rejection
```

---

Chal next round karein? Ab `async/await` + try-catch + reject ka ek combo bomb giraata hoon 🚀