# ⚛️ React Day 3 — JSX

Today’s goal is **not** to memorize JSX syntax.

By the end, you should understand:

* What JSX actually is
* Why React uses it
* JSX vs HTML
* How JavaScript expressions work inside JSX
* `className`
* The basic rules JSX follows
* Fragments
* How JSX ultimately relates to JavaScript

---

## 1. First, let's connect it to Day 2

You already understand this simplified startup:

```text
Browser
   ↓
index.html
   ↓
#root
   ↓
main.tsx
   ↓
App.tsx
   ↓
React UI
```

Now we're going to zoom into **`App.tsx`**.

You probably have something resembling:

```tsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
```

The interesting part is:

```tsx
<h1>Hello React</h1>
```

At first glance, that looks like HTML.

**But it isn't HTML.**

That's the first important idea of today.

---

# 2. What is JSX?

JSX is a syntax that lets us write **HTML-like UI markup inside JavaScript/TypeScript code**.

For example:

```tsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}
```

Here we have:

```text
JavaScript/TypeScript
       +
HTML-like syntax
       ↓
      JSX
```

JSX makes it easier to describe what the UI should look like.

And notice something important:

```tsx
function App() {
```

is JavaScript/TypeScript.

While:

```tsx
<h1>Hello React</h1>
```

is JSX.

So JSX is **not a separate programming language**.

It's syntax that works alongside JavaScript.

---

# 3. Why not just use JavaScript?

You could technically create UI using JavaScript without JSX.

But imagine trying to describe this:

```text
A page
 ├── header
 │    ├── logo
 │    └── navigation
 ├── main
 │    ├── title
 │    └── product list
 └── footer
```

With JSX, the structure is visually obvious:

```tsx
function App() {
  return (
    <div>
      <header>
        <h1>My Store</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
      </header>

      <main>
        <h2>Products</h2>
      </main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  );
}
```

The structure of the UI is directly visible in the code.

That's one of the major benefits of JSX.

---

# 4. JSX is NOT HTML

This distinction is extremely important.

JSX **looks like HTML**, but it follows JavaScript/React rules.

For example, HTML uses:

```html
<div class="container">
```

In JSX:

```tsx
<div className="container">
```

Why?

Because `class` has a different meaning in JavaScript, so JSX uses:

```tsx
className
```

instead.

Similarly:

### HTML

```html
<label for="email">
```

### JSX

```tsx
<label htmlFor="email">
```

So don't think:

> "I'm writing HTML inside React."

A better mental model is:

> **"I'm describing React UI using HTML-like JSX syntax inside JavaScript."**

---

# 5. JavaScript expressions inside JSX

This is where JSX becomes particularly powerful.

Suppose:

```tsx
const name = "Ifty";
```

You can put that value into JSX using `{}`:

```tsx
function App() {
  const name = "Ifty";

  return (
    <h1>Hello {name}</h1>
  );
}
```

The browser displays:

```text
Hello Ifty
```

The `{}` means:

> "Evaluate this JavaScript expression here."

For example:

```tsx
const age = 20;

return (
  <p>I am {age} years old.</p>
);
```

Or:

```tsx
const firstName = "Ifty";
const lastName = "Ahmed";

return (
  <h1>{firstName} {lastName}</h1>
);
```

You can even use expressions:

```tsx
const a = 10;
const b = 20;

return (
  <p>{a + b}</p>
);
```

Result:

```text
30
```

---

# 🧠 Mental model

Think of JSX like this:

```text
JSX
 │
 ├── UI structure
 │
 └── { JavaScript expression }
```

For example:

```tsx
<h1>Hello {name}</h1>
```

means roughly:

```text
Create an h1
     +
put "Hello "
     +
evaluate the JavaScript expression `name`
     ↓
display the result
```

---

# 6. Your first attempt 🧪

Don't copy a solution yet.

Create this in your `App.tsx`:

```tsx
function App() {
  const name = "Your Name";
  const age = 20;

  return (
    // your JSX here
  );
}
```

### Your task

Make the UI display:

```text
Hello, Your Name
I am 20 years old.
```

But there is one additional requirement:

**Do not hardcode the name and age inside the JSX.**

Use the variables:

```tsx
name
age
```

through `{}`.

### Think before coding

Ask yourself:

1. Where does the JavaScript go?
2. Where does the JSX go?
3. Where do I need `{}`?
4. How can I create two separate lines/elements?

Send me your `App.tsx` attempt.

**I won't give you the solution yet.** I'll review your approach first.
