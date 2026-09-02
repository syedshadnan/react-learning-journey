# Day 4 — React Components ⚛️

I checked the full master source before starting. You completed:

* Day 1: React mental model — 4/5
* Day 2: Project setup — 4/5
* Day 3: JSX — 4/5

Today we move to the correct next topic: **Components**. 

---

## 1. Quick connection with what you already know

Yesterday you wrote JSX like this:

```tsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

Question:

> What happens when this UI becomes much bigger?

Imagine:

```text
Website
│
├── Navbar
├── Hero Section
├── Product Section
│   ├── Product
│   ├── Product
│   └── Product
├── Testimonials
│   ├── Testimonial
│   └── Testimonial
└── Footer
```

Putting everything inside one giant `App.tsx` would eventually become difficult to read, maintain, and reuse.

**This is the problem components solve.**

---

# 2. What is a Component?

A React component is a **piece of UI packaged into a reusable unit**.

For example:

```text
App
├── Navbar
├── Hero
├── ProductList
└── Footer
```

Each of those can be a separate component.

A simple component:

```tsx
function Greeting() {
  return <h1>Hello!</h1>;
}
```

This is a JavaScript/TypeScript function.

But it has a special purpose:

> It returns JSX describing a piece of UI.

---

# 3. Mental Model

Think of components like LEGO blocks.

A website:

```text
🧱 Navbar
🧱 Hero
🧱 Card
🧱 Card
🧱 Card
🧱 Footer
```

Instead of manually building everything as one huge structure, you create smaller pieces and combine them.

React components allow:

* organization
* reuse
* separation of responsibilities
* easier maintenance
* composition

But an important warning:

> Components are not automatically good just because you split everything into many files.

We will later discuss **when something deserves its own component**. Over-componentization can also make code harder to understand.

---

# 4. Your first Component

Let's create:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

Now this function exists, but React is not showing it yet.

We need to **use the component**.

```tsx
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

Full example:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

---

# 5. Important mental model: Component vs Component Usage

Look carefully:

```tsx
function Welcome() {
  return <h1>Welcome!</h1>;
}
```

This is the **component definition**.

But:

```tsx
<Welcome />
```

This is the **component usage**.

You define a component as a function.

You use/render it with JSX-like syntax.

---

# 6. Why Capital Letter?

This matters:

```tsx
function welcome() {
  return <h1>Hello</h1>;
}
```

versus:

```tsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

React components should start with an uppercase letter.

Why?

React uses capitalization to distinguish between:

```tsx
<div />
```

A built-in HTML element.

And:

```tsx
<Welcome />
```

A custom React component.

So:

```tsx
<navbar />
```

would not be treated the same as:

```tsx
<Navbar />
```

Convention and React behavior meet here, so always use PascalCase for component names.

Examples:

```tsx
Navbar
UserProfile
ProductCard
Footer
LoginForm
```

---

# 7. Components Can Contain Components

This is called **component composition**.

Example:

```tsx
function Header() {
  return <header>My Website</header>;
}

function Footer() {
  return <footer>Copyright 2026</footer>;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  );
}
```

The relationship is:

```text
App
├── Header
├── Main content
└── Footer
```

`App` is composing smaller UI pieces together.

---

# 8. Reusability

Now consider this:

```tsx
function ProductCard() {
  return (
    <div>
      <h2>Product Name</h2>
      <p>Product description</p>
    </div>
  );
}
```

You can use it multiple times:

```tsx
function App() {
  return (
    <>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  );
}
```

React will render three instances of that component.

Conceptually:

```text
<ProductCard />
       ↓
Product UI

<ProductCard />
       ↓
Product UI

<ProductCard />
       ↓
Product UI
```

Later, when we learn **props**, we'll make each card display different data.

For now, just understand:

> One component definition can be used multiple times.

---

# Your Turn — Think Before Coding 🧠

Suppose you are building this page:

```text
--------------------------------
My Blog
--------------------------------

Latest Articles

[ Article 1 ]

[ Article 2 ]

[ Article 3 ]

--------------------------------
Copyright 2026
--------------------------------
```

Don't write code yet.

Answer these three questions:

### 1.

What parts would you potentially make into separate components?

### 2.

Which component would probably be the parent/root component?

### 3.

Why might `Article` be a component instead of manually writing three article sections?

Answer in your own words. Then we'll review your reasoning and move into writing components.
