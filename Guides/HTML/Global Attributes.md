## **Global Attributes & HTML Events in React & Next.js**  

### **1. Global Attributes**  
Global attributes are supported by most HTML elements in **React and Next.js (JSX syntax requires camelCase)**.

| **Attribute**  | **Description** |
|---------------|---------------|
| `accessKey` | Specifies a keyboard shortcut |
| `className` | Replaces `class` in JSX (for CSS classes) |
| `contentEditable` | Specifies if an element is editable |
| `dir` | Specifies text direction (`ltr`, `rtl`) |
| `draggable` | Specifies if an element is draggable (`true` / `false`) |
| `hidden` | Hides an element |
| `id` | Unique identifier for an element |
| `lang` | Language of the element content |
| `spellCheck` | Checks spelling (`true` / `false`) |
| `style` | Inline CSS (uses JS object in React) |
| `tabIndex` | Specifies tab order |
| `title` | Tooltip text when hovering over the element |
| `translate` | Controls text translation (`yes` / `no`) |

**Example in React JSX:**
```jsx
<div className="card" id="profile-card" title="User Profile">
  Hover to see the title
</div>
```

---

### **2. HTML Events in React**
Event handling in **React** is similar to plain JavaScript but uses **camelCase** (e.g., `onClick` instead of `onclick`).  

#### **(a) Mouse Events**
| **Event** | **Description** |
|----------|---------------|
| `onClick` | Fires when element is clicked |
| `onDoubleClick` | Fires on double-click |
| `onMouseDown` | Fires when mouse button is pressed |
| `onMouseUp` | Fires when mouse button is released |
| `onMouseMove` | Fires when mouse moves over an element |
| `onMouseEnter` | Fires when mouse enters an element (no bubbling) |
| `onMouseLeave` | Fires when mouse leaves an element (no bubbling) |

**Example:**
```jsx
<button onClick={() => alert("Button clicked!")}>Click Me</button>
```

---

#### **(b) Keyboard Events**
| **Event** | **Description** |
|----------|---------------|
| `onKeyDown` | Fires when a key is pressed |
| `onKeyPress` | (Deprecated) Used for key press detection |
| `onKeyUp` | Fires when a key is released |

**Example:**
```jsx
<input type="text" onKeyDown={(e) => console.log("Key Pressed:", e.key)} />
```

---

#### **(c) Form Events**
| **Event** | **Description** |
|----------|---------------|
| `onChange` | Fires when input value changes |
| `onInput` | Similar to `onChange`, but fires on every keystroke |
| `onSubmit` | Fires when form is submitted |
| `onReset` | Fires when form is reset |
| `onFocus` | Fires when input gets focus |
| `onBlur` | Fires when input loses focus |

**Example:**
```jsx
<form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
  <input type="text" onChange={(e) => console.log(e.target.value)} />
  <button type="submit">Submit</button>
</form>
```

---

#### **(d) Clipboard Events**
| **Event** | **Description** |
|----------|---------------|
| `onCopy` | Fires when content is copied |
| `onCut` | Fires when content is cut |
| `onPaste` | Fires when content is pasted |

**Example:**
```jsx
<input type="text" onCopy={() => alert("Copied!")} />
```

---

#### **(e) Drag & Drop Events**
| **Event** | **Description** |
|----------|---------------|
| `onDrag` | Fires when an element is dragged |
| `onDragStart` | Fires when drag starts |
| `onDragEnd` | Fires when drag ends |
| `onDragOver` | Fires when dragged element is over a drop zone |
| `onDrop` | Fires when an element is dropped |

**Example:**
```jsx
<div draggable onDragStart={() => console.log("Dragging started!")}>
  Drag Me
</div>
```

---

#### **(f) Media Events**
| **Event** | **Description** |
|----------|---------------|
| `onPlay` | Fires when media starts playing |
| `onPause` | Fires when media is paused |
| `onEnded` | Fires when media playback ends |
| `onTimeUpdate` | Fires when playback position changes |
| `onVolumeChange` | Fires when volume changes |

**Example:**
```jsx
<video src="/video.mp4" controls onPlay={() => console.log("Video started")} />
```

---

#### **(g) Window Events**
| **Event** | **Description** |
|----------|---------------|
| `onLoad` | Fires when an element (or window) is fully loaded |
| `onResize` | Fires when window is resized |
| `onScroll` | Fires when scrolling occurs |

**Example:**
```jsx
useEffect(() => {
  window.addEventListener("resize", () => console.log("Window resized"));
  return () => window.removeEventListener("resize", () => console.log("Cleanup"));
}, []);
```

---

## **Summary**
- **Global attributes** apply to most HTML elements (`className`, `id`, `title`, `style`, etc.).
- **React events** use **camelCase** (`onClick`, `onChange`, `onKeyDown`).
- **Event handlers** receive event objects (`e`) that can be used for actions.

Would you like more **examples or best practices** for handling events in React? 🚀