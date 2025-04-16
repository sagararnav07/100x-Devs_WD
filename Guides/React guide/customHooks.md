### **Custom Hooks in React**  
A **Custom Hook** is a JavaScript function that starts with the prefix `"use"` and allows you to reuse logic across multiple components. It helps in keeping your components clean and improves code reusability.

---

## **How to Create a Custom Hook?**
A custom hook is simply a function that uses built-in hooks like `useState`, `useEffect`, `useRef`, etc., to encapsulate reusable logic.

---

### **1. Custom Hook for Fetching Data (`useFetch`)**  
📌 **Use Case**: Fetching data from an API in multiple components.

#### ✅ **Custom Hook (`useFetch.js`)**
```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

#### ✅ **Using `useFetch` in a Component**
```jsx
import useFetch from "./useFetch";

function UsersList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```
📌 **When to Use?**  
- Fetching API data in multiple components.  
- Avoiding duplicate `useEffect` API calls in multiple places.  

---

### **2. Custom Hook for Debouncing (`useDebounce`)**  
📌 **Use Case**: Debouncing user input (e.g., search bar to prevent API calls on every keystroke).

#### ✅ **Custom Hook (`useDebounce.js`)**
```jsx
import { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

#### ✅ **Using `useDebounce` in a Search Input**
```jsx
import { useState } from "react";
import useDebounce from "./useDebounce";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
}

export default SearchBar;
```
📌 **When to Use?**  
- Preventing excessive API calls when users type in a search box.  
- Optimizing input handling in forms.  

---

### **3. Custom Hook for Managing Local Storage (`useLocalStorage`)**  
📌 **Use Case**: Storing and retrieving values from localStorage.

#### ✅ **Custom Hook (`useLocalStorage.js`)**
```jsx
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
```

#### ✅ **Using `useLocalStorage` in a Component**
```jsx
import useLocalStorage from "./useLocalStorage";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
```
📌 **When to Use?**  
- Persisting user preferences like theme, language, or settings.  
- Storing session-based data locally.  

---

### **4. Custom Hook for Tracking Window Size (`useWindowSize`)**  
📌 **Use Case**: Tracking window size for responsive design.

#### ✅ **Custom Hook (`useWindowSize.js`)**
```jsx
import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default useWindowSize;
```

#### ✅ **Using `useWindowSize` in a Component**
```jsx
import useWindowSize from "./useWindowSize";

function ResponsiveComponent() {
  const { width } = useWindowSize();

  return (
    <div>
      <h1>Window Width: {width}px</h1>
      {width < 600 ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
}

export default ResponsiveComponent;
```
📌 **When to Use?**  
- Creating responsive components based on screen size.  
- Dynamically adjusting layouts and UI elements.  

---

## **📌 Key Benefits of Custom Hooks**
✅ **Reusability** – Write once, use multiple times across components.  
✅ **Clean Code** – Reduce code duplication, making components simpler.  
✅ **Better Performance** – Optimize API calls, event listeners, and state management.  
✅ **Separation of Concerns** – Keep UI and logic separate for better maintainability.  

---

### **📌 Summary Table**
| Custom Hook | Purpose |
|------------|---------|
| `useFetch` | Fetch and manage API data |
| `useDebounce` | Debounce user input (e.g., search bar) |
| `useLocalStorage` | Store and retrieve data from `localStorage` |
| `useWindowSize` | Get window dimensions for responsive UI |

Custom Hooks make React applications more scalable and maintainable by encapsulating reusable logic. 🚀