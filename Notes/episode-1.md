# 🚀 React Basics Notes

---

# 📌 Basic HTML Skeleton

A quick way to generate a basic HTML boilerplate in **VS Code**:

```html
html:5
```

This generates the standard HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

### Important

The `root` div acts as the **container where React renders the UI**.

React **controls everything inside this root element**.

---

# ⚙️ React File & ReactDOM

React applications use two main libraries.

| Library      | Purpose                                                                     |
| ------------ | --------------------------------------------------------------------------- |
| **React**    | Contains the **core React logic** such as creating elements and managing UI |
| **ReactDOM** | Responsible for **rendering React elements into the browser DOM**           |

### Why are they separate?

React is designed to work with **multiple platforms**, not just the browser.

Examples:

| Platform | Renderer     |
| -------- | ------------ |
| Web      | ReactDOM     |
| Mobile   | React Native |
| VR       | React 360    |

So React handles **UI logic**, and the renderer handles **how that UI is displayed on a specific platform**.

---

# 👋 Basic Hello World in React

### HTML

```html
<div id="root"></div>
```

### React Setup (Using CDN)

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>

<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

### JavaScript

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hi there from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

### What happens here?

1. `React.createElement()` creates a **React Element object**
2. `ReactDOM.createRoot()` creates a **root container**
3. `root.render()` tells React to **render that element inside the root div**

Result in the browser:

```html
<h1 id="heading">Hi there from React</h1>
```

---

# 🌐 CDN (Content Delivery Network)

The React scripts above are loaded from a **CDN**.

A **CDN (Content Delivery Network)** is a distributed network of servers that deliver files quickly from the closest server to the user.

Example CDN providers:

- unpkg
- jsdelivr
- cdnjs
- cloudflare

Benefits:

- Faster loading
- No need to download React locally
- Good for quick experiments and learning

---

# 🌍 What is `crossorigin` in the script tag?

Example:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

The `crossorigin` attribute enables **Cross-Origin Resource Sharing (CORS)**.

Since the script is loaded from **another domain (`unpkg.com`)**, the browser treats it as a **cross-origin request**.

The attribute allows the browser to properly request the resource while following security rules.

---

# 🌐 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism.

Browsers normally restrict requests between **different origins**.

### Origin means

```
protocol + domain + port
```

Example:

| URL                   | Origin           |
| --------------------- | ---------------- |
| https://mywebsite.com | same origin      |
| https://unpkg.com     | different origin |

Since React is loaded from **unpkg.com**, it is a **cross-origin request**.

The `crossorigin` attribute allows the browser to safely fetch the script.

### Additional benefit

It allows **better debugging and detailed error messages** when scripts fail.

Without it, errors may appear simply as:

```
Script error
```

---

# 🧠 React.createElement()

Syntax:

```javascript
React.createElement(type, props, children);
```

### Parameters

| Argument     | Meaning                                       |
| ------------ | --------------------------------------------- |
| **type**     | HTML tag or React component                   |
| **props**    | Object containing attributes                  |
| **children** | Content inside the element or another element |

Example:

```javascript
React.createElement("h1", { id: "heading" }, "Hello React");
```

Equivalent HTML:

```html
<h1 id="heading">Hello React</h1>
```

---

# ⚠️ Important

`React.createElement()` **does not return HTML**.

It returns a **JavaScript object called a React Element**.

Example structure (simplified):

```javascript
{
  type: "h1",
  props: {
    id: "heading",
    children: "Hello React"
  }
}
```

React later converts this object into real DOM nodes using **ReactDOM**.

---

# 🏗 Creating Nested Elements

Nested elements can be created by passing another `createElement()` call as the child.

Example:

```javascript
React.createElement("div", {}, React.createElement("h1", {}, "Hey from h1"));
```

Equivalent HTML:

```html
<div>
  <h1>Hey from h1</h1>
</div>
```

---

# 🧩 Creating Sibling Elements

To create multiple children, pass them as an **array** in the third argument.

Example:

```javascript
React.createElement("div", {}, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
]);
```

Equivalent HTML:

```html
<div>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
</div>
```

---

# 📦 npm (Node Package Manager)

**npm** is the default **package manager for JavaScript and Node.js**.

It helps developers:

- install libraries
- manage project dependencies
- track package versions

Example command:

```
npm install react
```

This installs React and records it in `package.json`.

---

# ▶️ npx

`npx` is used to **execute a package without installing it globally**.

Example:

```
npx parcel index.html
```

What happens here:

- `npx` downloads the package temporarily
- runs the command
- does not install it globally on the system

This is useful for running tools like:

- parcel
- create-react-app
- vite

---

# 📚 React is a Library

React is a **JavaScript library for building user interfaces**.

### Key Characteristics

- Focuses only on **UI (View Layer)**
- Can be used in **small parts of a website**
- Highly flexible
- Works with many other libraries

Example uses:

- Single widget on a page
- Entire Single Page Application

---

# ⚖️ React vs Framework

| React                       | Framework                   |
| --------------------------- | --------------------------- |
| UI Library                  | Full application structure  |
| Flexible                    | Opinionated architecture    |
| Integrates with other tools | Provides built-in solutions |

Examples of frameworks:

- Angular
- Next.js
- Django
- Laravel

---

# 🧠 Key Takeaways

- React uses **JavaScript objects to represent UI**
- `React.createElement()` creates React elements
- ReactDOM renders those elements into the browser DOM
- React can be loaded using a **CDN**
- `crossorigin` helps browsers safely fetch cross-origin scripts
- `npm` manages dependencies
- `npx` executes packages without global installation
