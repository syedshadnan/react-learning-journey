# ⚛️ React Learning Journey — Day 6: Events

I checked the master source and we’re continuing from the correct point:

* Day 1: React Mental Model ✅
* Day 2: Project Setup ✅
* Day 3: JSX ✅
* Day 4: Components ✅
* Day 5: Props ✅
* **Today: Day 6 — Events** 🎯

Your current overall confidence is around **4/5**, so we don't need to restart old topics. Today we'll connect something important to everything you've already learned: **how users interact with React UI**. 

---

# Today's Goal

By the end of today, you should understand:

1. What an event is
2. What event handlers are
3. `onClick`
4. How to pass functions to events
5. Why `onClick={function}` and `onClick={function()}` are different
6. Event handler functions
7. Events + props
8. The basic mental model of user interaction in React

Important: **We are not learning state today.**

That means we can react to a click and run code, but we won't yet make the UI permanently update using React state.

---

# Part 1: What Problem Do Events Solve?

So far, you've built React UI like this:

```tsx
function App() {
  return (
    <>
      <h1>Hello Ifty</h1>
      <button>Click Me</button>
    </>
  );
}
```

But currently, the button is just visual.

The user can physically click it, but our React code doesn't know what to do.

Real applications need interaction:

* Click a button
* Type into an input
* Submit a form
* Hover over something
* Select an option

These user actions are called **events**.

## Simple definition

> An event is something that happens in the UI, usually because of user interaction.

Examples:

| User action    | Event              |
| -------------- | ------------------ |
| Clicks button  | click event        |
| Types in input | change/input event |
| Submits form   | submit event       |
| Moves mouse    | mouse event        |

Today we'll primarily focus on clicks.

---

# Mental Model

Think about a button:

```text
User
  ↓
Clicks Button
  ↓
Event happens
  ↓
React detects event
  ↓
Your event handler function runs
```

The important new idea is:

> **An event handler is a function that React runs when a specific event happens.**

---

# Your First Event

```tsx
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

Let's break this carefully.

### Step 1: We create a function

```tsx
function handleClick() {
  console.log("Button clicked!");
}
```

This is just a normal JavaScript/TypeScript function.

React did not invent functions.

---

### Step 2: We connect it to the button

```tsx
<button onClick={handleClick}>
```

Here:

* `onClick` = React event attribute
* `{handleClick}` = the function React should use when the click happens

So:

```text
Button clicked
      ↓
onClick notices click
      ↓
handleClick runs
      ↓
console.log executes
```

---

# Important Connection to What You Already Know

Remember props?

```tsx
<Student name="Ifty" age={22} />
```

The parent passes values.

Similarly:

```tsx
<button onClick={handleClick}>
```

`onClick` is also receiving something.

But this time, instead of receiving a string or number:

```tsx
name="Ifty"
```

it receives a **function**:

```tsx
onClick={handleClick}
```

This is your first exposure to an extremely important React idea:

> Functions can be passed around just like other values.

Don't worry—we'll explore this deeply.

---

# Your First Reasoning Question

Look at these two versions:

### Version A

```tsx
function handleClick() {
  console.log("Hello");
}

<button onClick={handleClick}>Click</button>
```

### Version B

```tsx
function handleClick() {
  console.log("Hello");
}

<button onClick={handleClick()}>Click</button>
```

## Question:

Without running the code, what do you think is the difference between:

```tsx
onClick={handleClick}
```

and:

```tsx
onClick={handleClick()}
```

Take your time and reason from your JavaScript knowledge.

Don't guess based on React syntax—think about what `handleClick` versus `handleClick()` means in normal JavaScript.


## Part 2: Writing Event Handlers

Now let's go one level deeper.

You already know this:

```tsx id="1wfw4c"
function handleClick() {
  console.log("Button clicked!");
}

function App() {
  return <button onClick={handleClick}>Click Me</button>;
}
```

But let's separate the two responsibilities.

### The handler function

```tsx id="41l2ac"
function handleClick() {
  console.log("Button clicked!");
}
```

This defines **what should happen**.

### The event connection

```tsx id="x8c1ty"
<button onClick={handleClick}>Click Me</button>
```

This defines **when it should happen**.

So:

```text id="tdzj7m"
handleClick → WHAT to do
onClick     → WHEN to do it
```

That's a useful distinction.

---

# Naming Convention

You could technically write:

```tsx id="p6t10x"
function hello() {
  console.log("Clicked");
}
```

and:

```tsx id="x0v4fh"
<button onClick={hello}>Click</button>
```

This works.

But in React, a common convention is:

```tsx id="p4z53n"
function handleClick() {
  console.log("Clicked");
}
```

The word `handle` communicates:

> This function handles an event.

Other common examples:

```tsx id="bqyv5t"
handleSubmit
handleChange
handleDelete
handleLogin
```

These aren't special React keywords. They're simply naming conventions.

---

# Multiple Buttons

Now consider this:

```tsx id="t56ccn"
function App() {
  function handleClick() {
    console.log("A button was clicked!");
  }

  return (
    <>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button>
    </>
  );
}
```

All three buttons use the same function.

So whichever button the user clicks:

```text id="47amvm"
Click Button 1 → handleClick()
Click Button 2 → handleClick()
Click Button 3 → handleClick()
```

This demonstrates something important:

> A function can be reused as an event handler just like a component can be reused as UI.

---

# But What If Each Button Should Do Something Different?

For example:

```text id="ocwpqv"
Button 1 → Print "Hello"
Button 2 → Print "Welcome"
Button 3 → Print "Goodbye"
```

One approach:

```tsx id="95mtyf"
function App() {
  function sayHello() {
    console.log("Hello");
  }

  function sayWelcome() {
    console.log("Welcome");
  }

  function sayGoodbye() {
    console.log("Goodbye");
  }

  return (
    <>
      <button onClick={sayHello}>Hello</button>
      <button onClick={sayWelcome}>Welcome</button>
      <button onClick={sayGoodbye}>Goodbye</button>
    </>
  );
}
```

This works perfectly.

But notice the pattern:

```text id="6xzfco"
Event happens
     ↓
Specific handler runs
     ↓
Specific code executes
```

---

# Your First Small Practice

Create a component called:

```tsx id="xopg2s"
ActionButtons
```

It should contain three buttons:

```text id="x2b9ac"
Like
Share
Subscribe
```

Requirements:

* Create a separate handler function for each button.
* Clicking Like should log:

```text id="xpksp2"
Liked!
```

* Clicking Share should log:

```text id="1zcxke"
Shared!
```

* Clicking Subscribe should log:

```text id="f4vzm9"
Subscribed!
```

### Important

Try to write it yourself without looking back at the example.

When you're done, send me your code. I'll review it before we move to the next event concept.
