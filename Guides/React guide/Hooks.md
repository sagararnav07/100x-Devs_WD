React Hooks are functions that let you use state and lifecycle features in functional components. Below are explanations and use cases for each hook:

---

### 1. **useState**
   - **What it does:** Allows you to add state to functional components.
   - **Usage:** When you need to store and update values dynamically.
   - **Example:**
     ```jsx
     import { useState } from "react";

     function Counter() {
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={() => setCount(count + 1)}>Increment</button>
         </div>
       );
     }
     ```
   - **Use Case:** Managing form inputs, toggling UI elements, tracking counts, etc.

---

### 2. **useEffect**
   - **What it does:** Executes side effects in function components.
   - **Usage:** When you need to fetch data, update the DOM, or set up event listeners.
   - **Example:**
     ```jsx
     import { useState, useEffect } from "react";

     function FetchData() {
       const [data, setData] = useState([]);

       useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/posts")
           .then((response) => response.json())
           .then((json) => setData(json));

         return () => console.log("Cleanup if needed"); // Cleanup function (optional)
       }, []);

       return <ul>{data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>;
     }
     ```
   - **Use Case:** Fetching data, subscribing to events, setting up timers.

---

### 3. **useReducer**
   - **What it does:** Manages complex state logic using a reducer function.
   - **Usage:** When managing multiple state transitions (better than `useState` for complex logic).
   - **Example:**
     ```jsx
     import { useReducer } from "react";

     function reducer(state, action) {
       switch (action.type) {
         case "increment":
           return { count: state.count + 1 };
         case "decrement":
           return { count: state.count - 1 };
         default:
           return state;
       }
     }

     function Counter() {
       const [state, dispatch] = useReducer(reducer, { count: 0 });

       return (
         <div>
           <p>Count: {state.count}</p>
           <button onClick={() => dispatch({ type: "increment" })}>+</button>
           <button onClick={() => dispatch({ type: "decrement" })}>-</button>
         </div>
       );
     }
     ```
   - **Use Case:** Managing form states, shopping carts, authentication flow.

---

### 4. **useRef**
   - **What it does:** Stores a mutable reference that persists across renders without causing re-renders.
   - **Usage:** When accessing DOM elements or keeping track of previous values.
   - **Example:**
     ```jsx
     import { useRef, useEffect } from "react";

     function FocusInput() {
       const inputRef = useRef(null);

       useEffect(() => {
         inputRef.current.focus();
       }, []);

       return <input ref={inputRef} type="text" />;
     }
     ```
   - **Use Case:** Focusing input fields, tracking previous values, storing timers.

---

### 5. **useMemo**
   - **What it does:** Caches the result of an expensive calculation and re-computes only when dependencies change.
   - **Usage:** When optimizing performance by preventing unnecessary recalculations.
   - **Example:**
     ```jsx
     import { useState, useMemo } from "react";

     function ExpensiveCalculation({ num }) {
       const computeFactorial = (n) => {
         console.log("Calculating...");
         return n <= 1 ? 1 : n * computeFactorial(n - 1);
       };

       const factorial = useMemo(() => computeFactorial(num), [num]);

       return <p>Factorial of {num}: {factorial}</p>;
     }
     ```
   - **Use Case:** Optimizing performance for calculations, preventing re-renders in large lists.

---

### 6. **useCallback**
   - **What it does:** Caches a function so that it does not get recreated on every render.
   - **Usage:** When passing functions as props to prevent unnecessary re-renders.
   - **Example:**
     ```jsx
     import { useState, useCallback } from "react";

     function Child({ onClick }) {
       console.log("Child re-rendered");
       return <button onClick={onClick}>Click Me</button>;
     }

     function Parent() {
       const [count, setCount] = useState(0);

       const handleClick = useCallback(() => {
         console.log("Button clicked");
       }, []);

       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={() => setCount(count + 1)}>Increment</button>
           <Child onClick={handleClick} />
         </div>
       );
     }
     ```
   - **Use Case:** Optimizing performance in components that receive functions as props.

---

### **Conclusion**
| Hook        | Purpose |
|-------------|---------|
| **useState** | Manage local component state |
| **useEffect** | Handle side effects (fetch, events, timers) |
| **useReducer** | Manage complex state logic with a reducer |
| **useRef** | Access DOM elements, persist values without re-renders |
| **useMemo** | Optimize expensive calculations |
| **useCallback** | Optimize function references to prevent re-renders |

Each hook serves a unique purpose, helping improve the efficiency and maintainability of React applications. 🚀