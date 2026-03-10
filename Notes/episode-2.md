# 📦 NPM, Parcel & Project Setup Notes (Episode 2)

---

# 1️⃣ NPM (Node Package Manager)

**NPM** is the default **package manager for JavaScript and Node.js**.

It helps developers:

- install external libraries (packages)
- manage project dependencies
- track versions of packages
- share reusable code

All packages are stored in the **npm registry**, which is a public collection of JavaScript packages.

Examples of common packages:

- React
- Parcel
- Axios
- Lodash

### Example command

```bash
npm install react
```

This command:

1. Downloads the React package
2. Stores it inside the `node_modules` folder
3. Records the dependency in `package.json`

---

# 2️⃣ package.json

`package.json` is the **configuration file for npm**.

It acts as the **manifest of the project** and contains:

- project metadata
- dependencies
- devDependencies
- scripts
- version information

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0"
  }
}
```

### Purpose

- Keeps track of project dependencies
- Stores configuration for npm
- Helps recreate the project setup on another machine

---

# 3️⃣ Dependencies vs Dev Dependencies

Dependencies are packages required for the project.

### Install a normal dependency

```bash
npm install package-name
```

These packages are required **both in development and production**.

Examples:

- React
- Express
- Axios

---

### Install a dev dependency

```bash
npm install -D package-name
```

or

```bash
npm install --save-dev package-name
```

These packages are needed **only during development**.

Examples:

- Parcel
- Webpack
- ESLint
- Testing libraries

Example:

```bash
npm install -D parcel
```

Parcel is needed only to **build the application**, not to run the final production code.

---

# 4️⃣ Bundlers

A **bundler** combines multiple files into optimized bundles for production.

Modern web applications have many files:

- JavaScript modules
- CSS files
- images
- dependencies

Bundlers process these files and create optimized bundles that browsers can load efficiently.

Popular bundlers:

| Bundler | Description |
|--------|-------------|
| **Parcel** | Zero-configuration bundler |
| **Vite** | Extremely fast development server |
| **Webpack** | Highly configurable bundler |

---

# 5️⃣ Version Symbols in package.json

Version symbols allow npm to install compatible updates.

### Caret (`^`)

```
"react": "^18.2.0"
```

Allows **minor and patch updates**.

Possible updates:

```
18.2.1
18.3.0
```

But **not**:

```
19.0.0
```

---

### Tilde (`~`)

```
"react": "~18.2.0"
```

Allows **patch updates only**.

Possible updates:

```
18.2.1
18.2.2
```

But not:

```
18.3.0
```

---

### Fixed Version

```
"react": "18.2.0"
```

Only installs **that exact version**.

No automatic updates will be installed.

---

# 6️⃣ package-lock.json

`package-lock.json` locks the **exact versions of all dependencies**.

It records:

- exact package versions
- dependency tree
- sub-dependencies

This ensures **consistent installs across machines**.

Example:

If two developers run:

```bash
npm install
```

Both will receive **exactly the same dependency versions**.

---

# 7️⃣ node_modules

`node_modules` contains the **actual code of all installed dependencies**.

Example structure:

```
node_modules/
  react/
  parcel/
  lodash/
```

Important facts:

- It is automatically generated
- It can contain **thousands of files**
- It should **never be pushed to GitHub**

Instead, we push:

- `package.json`
- `package-lock.json`

Then anyone can regenerate `node_modules` using:

```bash
npm install
```

---

# 8️⃣ Transitive Dependencies

Dependencies can have their own dependencies.

Example:

```
Your Project
   ↓
React
   ↓
scheduler
   ↓
another dependency
```

These indirect dependencies are called **transitive dependencies**.

This is why `node_modules` becomes very large.

---

# 9️⃣ .gitignore

`.gitignore` specifies files and folders that **should not be pushed to GitHub**.

Example:

```
node_modules
.parcel-cache
dist
.env
```

### Why ignore these?

Some folders are:

- automatically generated
- very large
- environment specific

Important files to push:

- `package.json`
- `package-lock.json`

---

# 🔟 Running the App with Parcel

First install Parcel:

```bash
npm install -D parcel
```

Start the development server:

```bash
npx parcel index.html
```

Parcel then:

- starts a local server
- bundles the project
- watches files for changes

---

# ▶️ What is npx?

`npx` is used to **execute a package without installing it globally**.

Example:

```
npx parcel index.html
```

This runs Parcel directly from the project dependencies.

Benefits:

- avoids global installs
- ensures the correct version is used

---

# 1️⃣1️⃣ ES Modules Error Fix

After installing React via npm, you may see this error:

```
Cannot use import outside a module
```

This happens because the browser does not treat the script as a module.

Fix it by adding:

```html
<script type="module" src="./app.js"></script>
```

`type="module"` enables **ES Modules** in the browser.

This allows using:

```
import
export
```

---

# 1️⃣2️⃣ Features of Parcel

Parcel provides many built-in features that simplify development and optimize production builds.

---

## Development Features

**Dev Build**  
Creates a development-friendly build with debugging support.

**Local Development Server**  
Runs the app locally in the browser.

Example:

```
http://localhost:1234
```

**Hot Module Replacement (HMR)**  
Updates only the changed modules in the browser **without refreshing the entire page**.

This makes development faster.

**File Watching Algorithm (written in C++)**  
Parcel continuously watches files and automatically rebuilds when changes occur.

Using C++ makes this process very fast.

**Caching**  
Parcel stores build results in `.parcel-cache` to speed up future builds.

---

## Optimization Features

**Image Optimization**  
Automatically compresses images.

**Minification**  
Removes unnecessary spaces, comments, and formatting from code.

Example:

```
function add(a, b) {
  return a + b;
}
```

becomes

```
function add(a,b){return a+b}
```

**Bundling**  
Combines multiple files into fewer optimized bundles.

**File Compression**  
Reduces file size for faster downloads.

**Code Splitting**  
Splits large bundles into smaller chunks so only required code loads initially.

**Tree Shaking**  
Removes unused code from the final bundle.

---

## Compatibility Features

**Differential Bundling**  
Creates different builds for modern and older browsers.

**HTTPS Dev Mode**  
Allows running the development server with HTTPS.

**Diagnostics**  
Provides detailed error messages for debugging.

**Consistent Hashing**  
Adds hashes to filenames to help browsers manage caching.

Example:

```
main.3f4a9.js
```

---

# 1️⃣3️⃣ Parcel Cache

Parcel stores cache in:

```
.parcel-cache
```

This improves build speed by reusing previous build data.

This folder should be added to `.gitignore`.

---

# 1️⃣4️⃣ Production Build

To create an optimized production build:

```bash
npx parcel build index.html
```

Parcel generates optimized files in the **dist folder**.

---

# 1️⃣5️⃣ dist Folder

The `dist` folder contains **production-ready build files**.

Example:

```
dist/
  index.html
  main.js
  styles.css
```

These files are:

- bundled
- minified
- optimized for performance

The `dist` folder is usually **ignored in GitHub**.

---

# 1️⃣6️⃣ Browser Compatibility

To define browser support, add this in `package.json`:

```json
"browserslist": [
  "last 10 Chrome versions",
  "last 2 Firefox versions"
]
```

Parcel uses this configuration to generate compatible builds.

You can check browser support at:

https://browserslist.dev

---

# 🧠 Key Takeaways

- **npm** manages JavaScript packages and dependencies
- **package.json** stores project configuration
- **package-lock.json** locks exact dependency versions
- **node_modules** contains installed packages
- **Parcel** bundles and optimizes the project
- **.gitignore** prevents unnecessary files from being pushed
- **dist** contains the final production build