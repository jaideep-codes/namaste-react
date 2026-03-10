# 🍔 React Episode 4 — Building the Food Ordering Website (Swiggy Clone)

---

# 1️⃣ Planning the Application Structure

Before writing code, the **first step in building any application is planning the UI structure**.

Breaking the UI into **smaller reusable components** makes development easier and more maintainable.

### Planned Structure

```
App
 ├── Header
 │     ├── Logo
 │     └── Navigation Items
 │
 ├── Body
 │     ├── Search Bar
 │     └── RestaurantContainer
 │            └── RestaurantCards
 │
 └── Footer
       ├── Copyright
       └── Links
```

This approach helps in:

- separating concerns
- reusing components
- making the codebase easier to maintain

---

# 2️⃣ Writing CSS in JSX

In React, styling can be applied in multiple ways.

One common way is **inline styling using JSX**.

Example:

```javascript
const styleCard = {
  backgroundColor: "#f0f0f0",
};

<div style={styleCard}></div>;
```

Important things to note:

- The `style` attribute takes a **JavaScript object**
- CSS properties use **camelCase**

Example:

| CSS              | JSX Style       |
| ---------------- | --------------- |
| background-color | backgroundColor |
| font-size        | fontSize        |

---

# 3️⃣ Passing Props to Components

Props (short for **properties**) allow us to **pass data from one component to another**.

Props make components **dynamic and reusable**.

Example:

```javascript
const RestaurantCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.cuisine}</p>
    </div>
  );
};
```

Using the component:

```javascript
<RestaurantCard name="Meghana Foods" cuisine="Biryani" />
```

Here:

- `name`
- `cuisine`

are **props passed to the component**.

---

# 4️⃣ Config Driven UI

Modern applications often follow a **config-driven UI approach**.

This means:

> The UI is generated based on **data received from a configuration or API**.

Example:

Restaurant list comes from an API:

```javascript
[
  {
    name: "Meghana Foods",
    rating: 4.5,
  },
  {
    name: "KFC",
    rating: 4.2,
  },
];
```

Instead of manually writing multiple components, we **generate them dynamically using the data**.

---

# 5️⃣ When to Create Components

A good industry practice:

> **If a piece of UI can be reused with different data, it should be made into a component.**

Example:

Restaurant cards have the same structure but different information.

Instead of writing many cards manually:

```
RestaurantCard 1
RestaurantCard 2
RestaurantCard 3
```

We create **one reusable component** and pass different props.

---

# 6️⃣ Industry Practice — Object Destructuring

Bad practice:

```javascript
resObj.data.name;
resObj.data.rating;
resObj.data.cuisine;
```

This becomes repetitive and harder to read.

Better practice:

```javascript
const { name, rating, cuisine } = resObj.data;
```

Then use:

```javascript
<h3>{name}</h3>
<p>{rating}</p>
<p>{cuisine}</p>
```

Benefits:

- cleaner code
- easier readability
- shorter syntax

---

# 7️⃣ Important JavaScript Concepts

While building dynamic UI, we frequently use:

### map()

Used to **loop through arrays and transform data**.

Example:

```javascript
const numbers = [1, 2, 3];

numbers.map((num) => num * 2);
```

Output:

```
[2,4,6]
```

In React it is commonly used to **render lists of components**.

---

### filter()

Used to **filter elements from an array based on a condition**.

Example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.filter((num) => num > 2);
```

Output:

```
[3,4]
```

---

### reduce()

Used to **reduce an array into a single value**.

Example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.reduce((sum, num) => sum + num, 0);
```

Output:

```
10
```

---

# 8️⃣ Using Keys in React Lists

When rendering multiple components using `map`, **React requires a key for each element**.

Example:

```javascript
restaurants.map((restaurant) => (
  <RestaurantCard key={restaurant.id} data={restaurant} />
));
```

---

## Why Keys Are Important

Keys help React **identify which items changed, added, or removed**.

This allows React to **update only the necessary parts of the DOM** instead of re-rendering everything.

This improves performance significantly.

---

# 9️⃣ Why Not Use Index as Key?

Example:

```javascript
restaurants.map((restaurant, index) => <RestaurantCard key={index} />);
```

Using **index as a key is considered bad practice** because:

- the order of elements may change
- React may update incorrect components
- can cause UI bugs

---

# 🔟 Correct Key Usage Priority

Best practices for keys:

```
No key ❌ (Not acceptable)

Index as key ⚠️ (Bad practice)

Unique ID as key ✅ (Best practice)
```

Example of good key:

```javascript
key={restaurant.id}
```

This ensures each component is **uniquely identifiable**.

---

# 🧠 Key Takeaways

- Always **plan the UI structure before coding**
- Break UI into **small reusable components**
- Props allow **passing data between components**
- Config-driven UI generates components **based on data**
- Use **object destructuring** for cleaner code
- `map`, `filter`, and `reduce` are essential JavaScript tools
- Always provide **unique keys when rendering lists**
- Avoid using **index as a key**
