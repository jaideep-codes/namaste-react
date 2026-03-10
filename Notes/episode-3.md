# ⚛️ React Episode 3 Notes – JSX & Functional Components

---

# 1️⃣ Building Scripts in package.json

To simplify running the project, we add **scripts** in `package.json`.

Example:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

### Start the development server

```bash
npm start
```

or

```bash
npm run start
```

Both commands work for the **start script**.

---

### Create production build

```bash
npm run build
```

This creates an **optimized production bundle** using Parcel.

⚠️ Important:

We **cannot run**:

```
npm build
```

because npm only executes scripts through:

```
npm run <script-name>
```

Exception: `start` can be run without `run`.

---

# 2️⃣ DOM Elements vs React Elements

### DOM Elements

DOM elements are **HTML elements created by the browser**.

Example:

```html
<h1>Hello</h1>
```

---

### React Elements

React elements are **JavaScript objects representing DOM elements**.

They describe what the UI should look like.

Example:

```javascript
React.createElement("h1", {}, "Hello");
```

React then converts these objects into **actual DOM elements**.

---

# 3️⃣ JSX

JSX stands for **JavaScript XML**.

Important:

JSX is **not HTML inside JavaScript**.

It is **HTML-like syntax** that makes writing React code easier.

Example:

```javascript
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
```

This is equivalent to:

```javascript
const jsxHeading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using JSX",
);
```

Both of these produce **React Elements (JavaScript objects)**.

---

# 4️⃣ JSX Compilation Process

JavaScript engines **do not understand JSX directly**.

They only understand **ECMAScript (JavaScript)**.

So JSX must be **transpiled** before execution.

Parcel uses **Babel** to do this transformation.

### Flow

```
JSX
   ↓
Babel transpiles
   ↓
React.createElement()
   ↓
React Element (JS Object)
   ↓
Rendered as HTML in DOM
```

---

# 5️⃣ Multi-line JSX Rule

If JSX spans **multiple lines**, it must be wrapped in parentheses.

Example:

```javascript
const heading = <h1>Namaste React</h1>;
```

This helps **Babel correctly interpret the JSX**.

For single-line JSX, parentheses are optional.

---

# 6️⃣ JSX vs HTML Differences (Important)

JSX looks like HTML but has some differences.

Examples:

| HTML                 | JSX       |
| -------------------- | --------- |
| class                | className |
| for                  | htmlFor   |
| onclick              | onClick   |
| attributes lowercase | camelCase |

Example:

```javascript
<h1 className="heading">Hello</h1>
```

---

# 7️⃣ React Components

It is often said:

> **Everything in React is a component**

There are two types of components.

### 1️⃣ Class Components (Older)

- Based on ES6 classes
- Used in older React code
- Rarely used today

### 2️⃣ Functional Components (Modern)

- Simple JavaScript functions
- Return JSX
- Most commonly used today

---

# 8️⃣ Functional Components

A **functional component** is simply a **JavaScript function that returns JSX**.

Example:

```javascript
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
```

---

### Shorter Arrow Function Syntax

Example:

```javascript
const fn = () => true;

const fn2 = () => {
  return true;
};
```

If the function contains a **single expression**, `return` can be omitted.

---

### Functional Component Without Explicit Return

```javascript
const HeadingComponent = () => (
  <h1 className="heading">Namaste React Functional</h1>
);
```

---

# 9️⃣ Component Naming Rule

React components must start with a **capital letter**.

Example:

```javascript
const HeadingComponent = () => <h1>Hello</h1>;
```

If the first letter is lowercase, React treats it as an **HTML tag**.

---

# 🔟 Rendering Components

We cannot directly pass the function name like this:

```javascript
root.render(HeadingComponent); ❌
```

Instead we render it using **JSX syntax**.

```javascript
root.render(<HeadingComponent />);
```

---

# 1️⃣1️⃣ Component Composition

Component Composition means **using components inside other components**.

Example:

```javascript
const Heading = () => <h1>React Component</h1>;

const Page = () => (
  <div>
    <Heading />
    <h3>A component is a JavaScript function returning JSX.</h3>
  </div>
);

root.render(<Page />);
```

This allows us to **build complex UI using small reusable components**.

---

# 1️⃣2️⃣ Writing JavaScript inside JSX

JavaScript expressions can be written inside **curly braces `{}`**.

Example:

```javascript
const Page = () => (
  <div>
    <h1>{100 + 200}</h1>
    <Heading />
  </div>
);
```

Anything inside `{}` is treated as **JavaScript**.

---

# 1️⃣3️⃣ Rendering React Elements inside Components

React elements can also be inserted inside JSX.

Example:

```javascript
const heading = <h1>React Component</h1>;

const Page = () => (
  <div>
    {heading}
    <h3>React elements can be rendered inside components.</h3>
  </div>
);
```

---

# 1️⃣4️⃣ JSX Composition Flexibility

In React we can compose many things together:

- Component inside component
- Element inside component
- Component inside element
- Element inside element

This flexibility allows building **complex UI structures**.

---

# 1️⃣5️⃣ JSX and Security (XSS Protection)

XSS = **Cross-Site Scripting Attack**

This happens when malicious JavaScript is injected into a webpage.

Example of malicious code:

```
stealing cookies
injecting scripts
running unwanted JS
```

React helps prevent this because **JSX automatically escapes values**.

Example:

```javascript
<h1>{userInput}</h1>
```

React **sanitizes the value** before rendering it.

This prevents malicious scripts from executing.

---

# 1️⃣6️⃣ Calling Components as Functions

React functional components are **just JavaScript functions**.

So technically they can be called like:

```javascript
{
  Heading();
}
```

However, the recommended way is:

```javascript
<Heading />
```

Because React treats this as a **component and manages its lifecycle properly**.

---

# 🧠 Key Takeaways

- JSX is **HTML-like syntax used in React**
- JSX is **transpiled by Babel into `React.createElement()`**
- React elements are **JavaScript objects**
- Functional components are **JavaScript functions returning JSX**
- Components must start with a **capital letter**
- JavaScript expressions inside JSX use **curly braces `{}`**
- JSX automatically **prevents XSS attacks**
- React allows **component composition to build complex UIs**
