## **Error Boundaries in React**
Error Boundaries are React components that catch JavaScript errors anywhere in the component tree below them and log them while displaying a fallback UI instead of crashing the entire application. They work similarly to `try-catch` blocks in JavaScript but are specific to React components.

### **Key Points**
- Error Boundaries catch errors during rendering, in lifecycle methods, and in constructors of child components.
- They **do not** catch errors in:
  - Event handlers
  - Asynchronous code (e.g., `setTimeout`, `fetch`)
  - Server-side rendering (SSR)
  - Errors thrown inside the Error Boundary itself

### **Implementation**
A class component can be converted into an Error Boundary by defining the `componentDidCatch` and `getDerivedStateFromError` lifecycle methods.

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### **Using the Error Boundary**
```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### **Use Cases of Error Boundaries**
1. **Prevent Entire App from Crashing**  
   - If one component fails, the Error Boundary ensures that the rest of the application remains functional.
   
2. **Isolating Third-Party Components**  
   - Wrap third-party libraries in an Error Boundary to prevent unexpected crashes.
   
3. **Graceful Error Handling in Production**  
   - Show user-friendly messages instead of cryptic JavaScript errors.

4. **Error Logging and Reporting**  
   - Use `componentDidCatch` to log errors to monitoring services like Sentry, LogRocket, or Firebase.

---

## **React Portals**
React Portals allow rendering a child component into a different part of the DOM outside the normal React component hierarchy while preserving React’s features like state and event bubbling.

### **Why Use Portals?**
- Normally, React components render inside the `div#root` element in the DOM.
- Sometimes, certain UI elements like modals, tooltips, or dropdowns need to be rendered outside of this hierarchy for better positioning and avoiding CSS conflicts.

### **Creating a Portal**
To create a portal, use `ReactDOM.createPortal(child, container)`.

### **Example**
1. **Define the Portal Target in HTML**
```html
<body>
  <div id="root"></div>
  <div id="portal-root"></div> <!-- Portal target -->
</body>
```

2. **Create a Modal Component Using Portals**
```jsx
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
```

3. **Using the Portal Component**
```jsx
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <Modal onClose={() => setShowModal(false)}>Hello from Portal!</Modal>}
    </div>
  );
};

export default App;
```

### **Use Cases of React Portals**
1. **Modals and Dialogs**  
   - Ensures modals are rendered outside the main DOM hierarchy, avoiding z-index issues.
   
2. **Tooltips and Popovers**  
   - Helps position tooltips relative to elements without CSS constraints.
   
3. **Dropdown Menus**  
   - Prevents dropdowns from getting clipped by parent elements with `overflow: hidden`.

4. **Global Notifications**  
   - Display toast notifications outside the React tree for better UI control.

Both **Error Boundaries** and **Portals** enhance React applications by improving error handling and providing flexible rendering options. 🚀