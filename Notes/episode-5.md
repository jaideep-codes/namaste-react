# ⚛️ React Episode 5 — Project Structure, State & React Internals

---

# 📚 Concepts Covered

- Project File Structure
- Components Folder
- Utils Folder
- Default Export vs Named Export
- Event Handling in JSX
- React Hooks
- React State Variables
- React Re-rendering
- Virtual DOM
- Diff Algorithm
- Reconciliation Algorithm (React Fiber)
- Incremental Rendering

---

# 1️⃣ Project File Structure

As React applications grow, keeping all code in a single file becomes difficult to manage.

Therefore we **divide the code into multiple folders and files** so that the project becomes:

- cleaner
- easier to maintain
- easier to scale
- easier to debug

A typical structure might look like this:

```
src
 ├── components
 ├── utils
 ├── App.js
 └── index.js
```

Each folder has a specific purpose.

---

# 2️⃣ Components Folder

The **components folder** contains all React components.

Example:

```
src
 ├── components
 │     ├── Header.js
 │     ├── Body.js
 │     ├── RestaurantCard.js
 │     └── Footer.js
```

### Best Practice

Each component should be placed in **its own separate file**.

Example:

```
Header.js
RestaurantCard.js
Footer.js
```

This improves:

- code readability
- modularity
- maintainability

---

### Naming Convention for Components

Component file names should start with a **capital letter**.

Example:

```
Header.js
RestaurantCard.js
```

Reason:

React treats **capitalized names as components**.

Lowercase names are treated as **HTML elements**.

Example:

```
<div>  → HTML element
<Header /> → React component
```

---

# 3️⃣ Utils Folder

The **utils folder** stores reusable utilities such as:

- constants
- configuration
- helper functions
- API URLs

Example structure:

```
src
 ├── utils
 │     ├── constants.js
 │     ├── helpers.js
 │     └── apiLinks.js
```

Example constant:

```javascript
export const LOGO_URL = "image-link";
```

### Naming Convention

Utility files usually use **lowercase or camelCase** since they are not components.

Example:

```
constants.js
apiLinks.js
helpers.js
```

---

# 4️⃣ Default Export vs Named Export

JavaScript modules allow us to export functionality from one file and import it into another.

There are **two types of exports**.

---

## Default Export

A file can have **only one default export**.

Example:

```javascript
const Header = () => {
  return <h1>Header</h1>;
};

export default Header;
```

Importing default export:

```javascript
import Header from "./Header";
```

Important:

The imported name **does not have to match** the original name.

Example:

```javascript
import MyHeader from "./Header";
```

---

## Named Export

A file can have **multiple named exports**.

Example:

```javascript
export const LOGO_URL = "logo-link";
export const API_URL = "api-link";
```

Importing named exports:

```javascript
import { LOGO_URL, API_URL } from "./constants";
```

Important:

Named imports **must match the exported names exactly**.

---

# 5️⃣ Event Handling in JSX

React handles events using **event handlers inside JSX**.

Example:

```javascript
<button onClick={handleClick}>Click Me</button>
```

Handler function:

```javascript
const handleClick = () => {
  console.log("Button clicked");
};
```

### Important Difference from HTML

| HTML      | React JSX |
| --------- | --------- |
| onclick   | onClick   |
| lowercase | camelCase |

React uses **camelCase naming for event handlers**.

---

# 6️⃣ React Hooks

Hooks are **special functions provided by React**.

They allow functional components to use React features such as:

- state
- lifecycle behavior
- side effects

Example hook:

```
useState()
```

Hooks can **only be used inside React components or custom hooks**.

---

# 7️⃣ React State Variables

State variables allow components to **store dynamic data**.

Example:

```javascript
const [count, setCount] = useState(0);
```

Here:

```
count → current state value
setCount → function used to update state
```

State is used when the UI needs to **change based on user interaction or data updates**.

---

# 8️⃣ React Re-rendering

Important rule:

> Whenever a **state variable changes**, React **re-renders the component**.

Example:

Initial state:

```
count = 0
```

After update:

```
setCount(1)
```

React automatically re-renders the component and updates the UI.

This ensures the UI always reflects the **latest state**.

---

# 9️⃣ Virtual DOM

The **Virtual DOM** is a lightweight representation of the real DOM.

Instead of updating the browser DOM directly, React first updates the **Virtual DOM**.

Example concept:

```
Real DOM → actual HTML elements

Virtual DOM → JavaScript object representation
```

Advantages:

- faster updates
- fewer direct DOM manipulations
- improved performance

---

# 🔟 Diff Algorithm

When state changes, React creates a **new Virtual DOM**.

React then compares:

```
Old Virtual DOM
vs
New Virtual DOM
```

This comparison process is called the **Diff Algorithm**.

It determines **what exactly changed**.

React then updates **only the necessary parts of the DOM** instead of updating everything.

---

# 1️⃣1️⃣ Reconciliation Algorithm (React Fiber)

The process of updating the DOM efficiently is called **Reconciliation**.

React 16 introduced a new reconciliation system called **React Fiber**.

React Fiber improves React's ability to:

- pause rendering work
- resume rendering work
- prioritize important updates

This makes React applications **smoother and more responsive**.

---

# 1️⃣2️⃣ Incremental Rendering

React Fiber enables **incremental rendering**.

Instead of rendering the entire UI at once, React can break rendering work into **smaller units**.

This allows React to:

- pause rendering
- resume rendering
- prioritize urgent updates

This prevents the UI from freezing during heavy updates.

---

# 📚 Homework

Read about **React Fiber Architecture** explained by the React team.

GitHub link:

```
https://github.com/acdlite/react-fiber-architecture
```

This document explains how React internally handles rendering and scheduling.

---

# 🧠 Key Takeaways

- Organize projects using **proper folder structures**
- Store components in a **components folder**
- Store reusable utilities in a **utils folder**
- Use **default exports and named exports appropriately**
- React events use **camelCase event handlers**
- Hooks allow functional components to use **state and other React features**
- Updating state triggers **component re-rendering**
- React uses **Virtual DOM and Diff Algorithm** to update UI efficiently
- React Fiber introduced **incremental rendering and improved scheduling**
