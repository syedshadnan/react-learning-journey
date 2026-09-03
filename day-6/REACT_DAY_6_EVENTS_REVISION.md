# React Learning Journey — Day 6 Revision
# Events in React

> **Goal:** Understand how users interact with a React application and how React runs our code in response to those interactions.

---

# Table of Contents

1. What problem do events solve?
2. What is an event?
3. What is an event handler?
4. `onClick`
5. Function reference vs function invocation
6. Where event handlers should live and JavaScript scope
7. Multiple buttons and reusable handlers
8. Passing arguments to event handlers
9. Arrow-function wrappers
10. Events + props
11. Component definition vs component instances
12. Functions as props
13. Parent logic and child callbacks
14. Function naming conventions
15. The event object
16. Event arguments vs custom arguments
17. Realistic ProductCard example
18. Debugging common event mistakes
19. Complete mental models
20. Day 6 recap and revision checklist

---

# 1. What Problem Do Events Solve?

So far, React components can display UI:

```tsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <button>Click Me</button>
    </>
  );
}
```

The button appears on the screen, but without event handling, our application has no instructions for what should happen when the user clicks it.

Real applications need interaction:

- Clicking buttons
- Typing in inputs
- Submitting forms
- Moving the mouse
- Selecting options

React needs a way to respond to those interactions.

That is what **events** are for.

---

# 2. What Is an Event?

An event is something that happens in the user interface.

Usually, an event happens because of user interaction.

Examples:

| User Action | Event |
|---|---|
| Clicks a button | Click event |
| Types in an input | Input/change event |
| Submits a form | Submit event |
| Moves a mouse | Mouse event |

Today, the main focus is the click event.

Simple definition:

> An event is something that happens in the UI, usually because of user interaction.

Basic flow:

```text
User
  ↓
Clicks Button
  ↓
Event happens
  ↓
React detects the event
  ↓
Your event handler function runs
```

---

# 3. What Is an Event Handler?

An event handler is a function that React runs when a specific event happens.

Example:

```tsx
function handleClick() {
  console.log("Button clicked!");
}

function App() {
  return <button onClick={handleClick}>Click Me</button>;
}
```

There are two different responsibilities here.

## The handler function

```tsx
function handleClick() {
  console.log("Button clicked!");
}
```

This defines:

> **WHAT should happen?**

## The event connection

```tsx
<button onClick={handleClick}>Click Me</button>
```

This defines:

> **WHEN should it happen?**

Mental model:

```text
handleClick → WHAT to do
onClick     → WHEN to do it
```

---

# 4. Understanding `onClick`

`onClick` is used to tell React what function should run when a user clicks an element.

Example:

```tsx
function App() {
  function handleClick() {
    console.log("Hello!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

Flow:

```text
Component renders
      ↓
React receives handleClick
      ↓
Nothing executes yet
      ↓
User clicks button
      ↓
React calls handleClick()
      ↓
Code inside the function runs
```

---

# 5. Function Reference vs Function Invocation

This is one of the most important concepts from Day 6.

Compare these two:

## Version A

```tsx
<button onClick={handleClick}>Click</button>
```

## Version B

```tsx
<button onClick={handleClick()}>Click</button>
```

They look similar, but behave very differently.

---

## A. Function Reference

```tsx
onClick={handleClick}
```

This passes the function itself to React.

The function is **not executed yet**.

React can call it later when the click happens.

Conceptually:

```text
"React, here is the function.
Call it later when the user clicks."
```

Timeline:

```text
Component renders
      ↓
Function reference is given to React
      ↓
Nothing happens yet
      ↓
User clicks
      ↓
React calls handleClick()
```

---

## B. Function Invocation

```tsx
onClick={handleClick()}
```

The parentheses `()` mean:

> Execute this function now.

JavaScript immediately calls:

```tsx
handleClick()
```

while the component is rendering.

Timeline:

```text
Component renders
      ↓
JavaScript immediately executes handleClick()
      ↓
The function's return value goes to onClick
      ↓
User has not clicked yet
```

---

## Core Rule

```text
functionName    → function reference / pass for later
functionName()  → function invocation / execute now
```

In React events, we usually want to give React a function to call later:

```tsx
onClick={handleClick}
```

not execute the function during rendering:

```tsx
onClick={handleClick()}
```

---

# 6. Event Handler Naming Convention

You can name a handler anything:

```tsx
function hello() {
  console.log("Clicked");
}
```

This works:

```tsx
<button onClick={hello}>Click</button>
```

However, a common React naming convention is:

```tsx
function handleClick() {}
function handleSubmit() {}
function handleChange() {}
function handleDelete() {}
function handleLogin() {}
```

The word `handle` communicates:

> This function handles a particular event or action.

These names are conventions, not special React keywords.

---

# 7. Multiple Buttons and Reusable Event Handlers

One event handler can be reused by multiple elements.

Example:

```tsx
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

All three buttons use the same handler.

```text
Click Button 1 → handleClick()
Click Button 2 → handleClick()
Click Button 3 → handleClick()
```

If different buttons need completely different behavior, separate handlers can be used:

```tsx
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

---

# 8. Where Should Event Handlers Live?

Consider these two versions.

## Outside the component

```tsx
function sayHello() {
  console.log("Hello");
}

function ActionButtons() {
  return <button onClick={sayHello}>Hello</button>;
}
```

## Inside the component

```tsx
function ActionButtons() {
  function sayHello() {
    console.log("Hello");
  }

  return <button onClick={sayHello}>Hello</button>;
}
```

Both work.

So React does not require every handler to be inside a component.

The decision depends on what the function needs access to.

---

# 9. JavaScript Scope and Event Handlers

Suppose a component receives a prop:

```tsx
function ActionButtons({ userName }: { userName: string }) {
  function sayHello() {
    console.log(`Hello ${userName}`);
  }

  return <button onClick={sayHello}>Hello</button>;
}
```

`userName` exists inside the scope of `ActionButtons`.

Because `sayHello` is defined inside that scope, it can access `userName`.

Conceptually:

```text
ActionButtons
│
├── userName
│
└── sayHello()
      ↓
   Can access userName
```

This happens because of normal JavaScript lexical scope.

---

## What if the function is outside?

```tsx
function sayHello() {
  console.log(userName);
}

function ActionButtons({ userName }: { userName: string }) {
  return <button onClick={sayHello}>Hello</button>;
}
```

Now `sayHello` cannot directly access `userName` through component scope.

Why?

Because `userName` only exists inside the execution scope of `ActionButtons`.

It is not a global variable.

---

## Important Precision

It is not true that a function outside the component can never use component data.

For example, data can explicitly be passed as an argument:

```tsx
function sayHello(userName: string) {
  console.log(userName);
}
```

The important difference is:

> A function inside the component can access component-local values through JavaScript scope. A function outside the component does not automatically have access to that scope.

---

## General Guideline

### Function outside the component

Useful when the function:

- Does not need component props
- Does not need component state
- Does not depend on a specific component instance
- Is a reusable utility

### Function inside the component

Useful when the function needs access to:

- Props
- State
- Component-specific variables

Event handlers are often inside components because they commonly need component-specific data.

---

# 10. Passing Arguments to Event Handlers

Suppose we have:

```tsx
function handleGreeting(name: string) {
  console.log(`Hello ${name}`);
}
```

We want different buttons:

```text
Ifty  → Hello Ifty
Rahim → Hello Rahim
Karim → Hello Karim
```

This does NOT work correctly:

```tsx
<button onClick={handleGreeting("Ifty")}>
  Ifty
</button>
```

Why?

Because:

```tsx
handleGreeting("Ifty")
```

immediately invokes the function during rendering.

The user has not clicked anything yet.

---

# 11. The Arrow-Function Wrapper

The common solution is:

```tsx
<button onClick={() => handleGreeting("Ifty")}>
  Ifty
</button>
```

The arrow function:

```tsx
() => handleGreeting("Ifty")
```

is itself a function.

React receives this function but does not execute it immediately.

Flow:

```text
Component renders
      ↓
React receives arrow function
      ↓
Nothing happens yet
      ↓
User clicks
      ↓
React calls arrow function
      ↓
Arrow function calls handleGreeting("Ifty")
```

There are conceptually two functions:

```text
User clicks
    ↓
() => handleGreeting("Ifty")
    ↓
handleGreeting("Ifty")
```

The arrow function acts as a wrapper.

It waits for the event and then calls the desired function with the argument we choose.

---

# 12. When No Argument Is Needed vs When an Argument Is Needed

## No argument needed

```tsx
function handleClick() {
  console.log("Clicked");
}

<button onClick={handleClick}>Click</button>
```

React can directly call:

```tsx
handleClick()
```

later.

---

## Custom argument needed

```tsx
function handleGreeting(name: string) {
  console.log(`Hello ${name}`);
}

<button onClick={() => handleGreeting("Ifty")}>
  Ifty
</button>
```

We need the wrapper because we want to explicitly provide:

```tsx
"Ifty"
```

at click time.

---

# 13. Example: Multiple Greeting Buttons

```tsx
function App() {
  function handleGreeting(name: string) {
    alert(`Hello, ${name}`);
  }

  return (
    <>
      <button onClick={() => handleGreeting("Ifty")}>
        Ifty
      </button>

      <button onClick={() => handleGreeting("Rahim")}>
        Rahim
      </button>

      <button onClick={() => handleGreeting("Karim")}>
        Karim
      </button>
    </>
  );
}

export default App;
```

Flow for the Rahim button:

```text
User clicks Rahim
      ↓
React calls:
() => handleGreeting("Rahim")
      ↓
handleGreeting receives "Rahim"
      ↓
Alert: Hello, Rahim
```

---

# 14. Events + Props

Events can work together with props.

Example:

```tsx
type UserButtonProps = {
  name: string;
};

function UserButton({ name }: UserButtonProps) {
  return (
    <button onClick={() => alert(`Hello, ${name}`)}>
      {name}
    </button>
  );
}
```

Usage:

```tsx
function App() {
  return (
    <>
      <UserButton name="Ifty" />
      <UserButton name="Rahim" />
      <UserButton name="Karim" />
    </>
  );
}
```

Each `UserButton` receives a different `name`.

The same component definition creates different output and behavior based on props.

```text
Click Ifty  → Hello, Ifty
Click Rahim → Hello, Rahim
Click Karim → Hello, Karim
```

---

# 15. Inline Handler vs Named Handler

The previous example used an inline arrow function:

```tsx
<button onClick={() => alert(`Hello, ${name}`)}>
  {name}
</button>
```

This is valid and concise for simple logic.

Another valid approach is a named handler:

```tsx
function UserButton({ name }: UserButtonProps) {
  function handleClick() {
    alert(`Hello, ${name}`);
  }

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
}
```

Both are valid.

---

## When Inline Logic Is Useful

```tsx
onClick={() => alert(`Hello, ${name}`)}
```

Useful when the logic is very small and easy to read.

## When a Named Handler Is Useful

```tsx
function handleClick() {
  // multiple lines of logic
}
```

Useful when:

- The logic becomes longer
- Multiple statements are required
- The handler has meaningful behavior
- A named function improves readability

Do not create unnecessary functions for extremely simple code, but also do not put complicated logic directly inside JSX.

---

# 16. Component Definition vs Component Instances

Consider:

```tsx
function UserButton({ name }: UserButtonProps) {
  // component code
}
```

This is one **component definition**.

Now:

```tsx
<UserButton name="Ifty" />
<UserButton name="Rahim" />
<UserButton name="Karim" />
<UserButton name="Sakib" />
```

uses that definition four times.

There is:

```text
1 component definition
4 component instances/usages
```

Blueprint analogy:

```text
One house blueprint
        ↓
Build House 1
Build House 2
Build House 3
Build House 4
```

There is one blueprint but four separate houses.

Similarly:

```text
One UserButton definition
            ↓
    ┌───────┼────────┐
    ↓       ↓        ↓       ↓
Instance 1 Instance 2 Instance 3 Instance 4

Ifty       Rahim      Karim      Sakib
```

Important:

> Component reuse does not mean there is only one rendered component instance.

There can be one definition and many instances.

This will become especially important when learning state because each component instance can have its own state.

---

# 17. Functions Can Also Be Props

Props are not limited to strings and numbers.

You already know:

```tsx
<UserButton name="Ifty" />
```

passes a string.

But functions are JavaScript values too.

A parent can pass a function to a child:

```tsx
<DeleteButton onDelete={handleDelete} />
```

Here:

```text
onDelete      → prop name
handleDelete  → actual function being passed
```

---

# 18. Functions as Props: Complete Example

## Parent

```tsx
function App() {
  function handleDelete() {
    console.log("Deleted!");
  }

  return <DeleteButton onDelete={handleDelete} />;
}
```

The parent owns:

```tsx
handleDelete
```

and passes it as a prop called:

```tsx
onDelete
```

---

## Child

```tsx
type DeleteButtonProps = {
  onDelete: () => void;
};

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <button onClick={onDelete}>
      Delete
    </button>
  );
}
```

The child receives the function and gives it to `onClick`.

---

# 19. Understanding the Function Type

```tsx
onDelete: () => void;
```

Means:

- The value must be a function
- It takes no arguments
- It does not return a meaningful value

Compare:

```tsx
() => void
```

with:

```tsx
(name: string) => void
```

The second one means:

> A function that receives a string argument and returns nothing meaningful.

We will study TypeScript function types more deeply later. For now, understand them enough to read callback props.

---

# 20. Parent Logic and Child Callbacks

The flow looks like this:

```text
Parent
  ↓ passes function
Child
  ↓ user triggers event
Child calls received function
  ↓
Parent's logic executes
```

Example:

```tsx
function App() {
  function handleDelete() {
    console.log("Deleted!");
  }

  return <DeleteButton onDelete={handleDelete} />;
}
```

The child does not need to know what deletion actually means.

It only knows:

> "When the user clicks me, I should call the function I received."

This creates separation of responsibility.

---

# 21. `handleSomething` vs `onSomething`

A common React naming convention is:

## Parent/internal handler

```tsx
handleDelete
handleLogin
handleSubmit
```

Usually communicates:

> This function contains or handles some logic.

## Callback prop

```tsx
onDelete
onLogin
onSubmit
```

Usually communicates:

> This function can be called when a particular action happens.

Example:

```tsx
function App() {
  function handleDelete() {
    console.log("Deleted");
  }

  return <DeleteButton onDelete={handleDelete} />;
}
```

The names do not have to be identical.

```text
Child prop:       onDelete
Actual function:  handleDelete
```

The child only cares that it receives a compatible function.

These are conventions, not React-enforced rules.

---

# 22. Practice Example: Reusable ActionButton

```tsx
type ActionButtonProps = {
  label: string;
  onAction: () => void;
};

function ActionButton({ label, onAction }: ActionButtonProps) {
  return <button onClick={onAction}>{label}</button>;
}

function App() {
  function handleLike() {
    alert("Liked!");
  }

  function handleShare() {
    alert("Shared!");
  }

  function handleSubscribe() {
    alert("Subscribed!");
  }

  return (
    <>
      <ActionButton label="Like" onAction={handleLike} />
      <ActionButton label="Share" onAction={handleShare} />
      <ActionButton label="Subscribe" onAction={handleSubscribe} />
    </>
  );
}

export default App;
```

---

## Flow for Share

```text
App
 │
 │ has handleShare function
 │
 └── passes handleShare as onAction prop
             ↓
        ActionButton
             ↓
receives onAction
             ↓
User clicks button
             ↓
onClick calls onAction
             ↓
handleShare from App runs
             ↓
"Shared!"
```

---

# 23. Important Mistake: Invoking a Function Prop

This is wrong:

```tsx
function ActionButton({ label, onAction }: ActionButtonProps) {
  return <button onClick={onAction()}>{label}</button>;
}
```

Why?

Because:

```tsx
onAction()
```

immediately invokes the function while rendering.

Correct:

```tsx
<button onClick={onAction}>{label}</button>
```

Again:

```text
onAction    → pass function
onAction()  → execute function
```

This principle remains the same whether the function was:

- Defined inside the component
- Defined in the parent
- Received through props

---

# 24. The Event Object

When a user interacts with an element, React can provide information about that interaction.

That information is contained in an **event object**.

Simple definition:

> An event object is an object containing information about an event that happened.

For example, when a user clicks a button, information may include things related to:

- The type of event
- The element involved
- The mouse interaction

---

# 25. Receiving the Event Object

Example:

```tsx
function handleClick(event) {
  console.log(event);
}

<button onClick={handleClick}>Click Me</button>
```

Here:

```tsx
event
```

is a normal JavaScript function parameter.

The important question is:

> Who provides its value?

Answer:

> React provides it when the event happens.

---

# 26. Understanding It Through Normal JavaScript

Consider:

```tsx
function greet(name) {
  console.log(name);
}

greet("Ifty");
```

Here:

```text
"Ifty" → argument
name   → parameter receiving the argument
```

The same basic idea applies to event handlers:

```tsx
function handleClick(event) {
  console.log(event);
}
```

When the user clicks, React conceptually does something like:

```tsx
handleClick(eventObject);
```

Therefore:

```text
eventObject → argument provided by React
event       → parameter receiving it
```

You do not manually create or provide the event argument.

React calls your handler and supplies the event information.

---

# 27. Complete Event Object Flow

```text
You define:

handleClick(event)

        ↓

You pass:

onClick={handleClick}

        ↓

User clicks button

        ↓

React detects the event

        ↓

React calls handleClick

        ↓

React provides event information

        ↓

event parameter receives the event object
```

This is why we do NOT write:

```tsx
onClick={handleClick(event)}
```

That would immediately invoke the function during rendering.

Instead:

```tsx
onClick={handleClick}
```

passes the function reference to React.

React later calls it with the event object.

---

# 28. Basic Event Object Example

Conceptually:

```tsx
function handleClick(event) {
  console.log(event);
}

<button onClick={handleClick}>
  Click Me
</button>
```

When the click happens:

```text
React detects click
      ↓
React creates/provides event information
      ↓
React calls handleClick(eventInformation)
      ↓
event parameter receives that information
```

One possible useful property is:

```tsx
event.target
```

which can provide information about the element related to the event.

Do not try to memorize every event property yet. The important Day 6 concept is understanding where the event object comes from.

---

# 29. Important: React Provides Event Arguments

Suppose:

```tsx
function handleClick(event) {
  console.log("Clicked!");
  console.log(event);
}

<button onClick={handleClick}>
  Click Me
</button>
```

When clicked:

### Who calls `handleClick`?

React.

### Where does `event` come from?

React provides it when calling the handler.

Conceptually:

```text
User clicks
   ↓
React detects click
   ↓
React has event information
   ↓
React calls:
handleClick(event)
```

---

# 30. React's Event Argument vs Your Custom Argument

This is a very important distinction.

Suppose:

```tsx
onClick={onBuy}
```

React can call the handler with information about the click event.

But suppose your function expects:

```tsx
(name: string) => void
```

You do not want the click event as the argument.

You want to provide a product name.

That is why we use:

```tsx
onClick={() => onBuy(name)}
```

The wrapper gives us control.

---

## Comparison

| Code | Argument behavior |
|---|---|
| `onClick={onBuy}` | React controls/provides the event argument |
| `onClick={() => onBuy(name)}` | We explicitly provide `name` |

This is one of the most important reasons arrow-function wrappers are useful.

---

# 31. Realistic Example: ProductCard

Suppose we have products:

```text
Laptop
Mouse
Keyboard
```

We want:

```text
Click Buy on Laptop → Buying Laptop
Click Buy on Mouse → Buying Mouse
Click Buy on Keyboard → Buying Keyboard
```

The parent owns the buying logic.

The child displays product information and triggers the callback.

---

# 32. ProductCard Props

```tsx
type ProductCardProps = {
  name: string;
  price: number;
  onBuy: (name: string) => void;
};
```

The child needs:

- `name`
- `price`
- `onBuy`

The callback expects a product name.

---

# 33. ProductCard Component

```tsx
function ProductCard({ name, price, onBuy }: ProductCardProps) {
  return (
    <>
      <h1>Product Name: {name}</h1>
      <h2>Price: {price}</h2>

      <button onClick={() => onBuy(name)}>
        Buy
      </button>
    </>
  );
}
```

The key line is:

```tsx
onClick={() => onBuy(name)}
```

The wrapper waits for the click.

After the click:

```tsx
onBuy(name)
```

runs.

---

# 34. Parent Component

```tsx
function App() {
  function handleBuy(name: string) {
    alert(`Buying ${name}`);
  }

  return (
    <>
      <ProductCard
        name="Laptop"
        price={1000}
        onBuy={handleBuy}
      />

      <ProductCard
        name="Mouse"
        price={50}
        onBuy={handleBuy}
      />

      <ProductCard
        name="Keyboard"
        price={80}
        onBuy={handleBuy}
      />
    </>
  );
}
```

One handler is reused for all products.

We do not need:

```tsx
handleLaptopBuy()
handleMouseBuy()
handleKeyboardBuy()
```

Instead:

```tsx
handleBuy(productName)
```

can handle different products dynamically.

---

# 35. Complete ProductCard Flow

Let's trace the Laptop card.

```tsx
<ProductCard
  name="Laptop"
  price={1000}
  onBuy={handleBuy}
/>
```

## Step 1

The parent passes:

```text
name → "Laptop"
price → 1000
onBuy → handleBuy function
```

## Step 2

`ProductCard` receives:

```tsx
function ProductCard({ name, price, onBuy })
```

## Step 3

It renders:

```tsx
<button onClick={() => onBuy(name)}>
  Buy
</button>
```

## Step 4

The user clicks.

## Step 5

React calls the wrapper:

```tsx
() => onBuy(name)
```

## Step 6

The wrapper calls:

```tsx
onBuy("Laptop")
```

## Step 7

`onBuy` refers to the parent's:

```tsx
handleBuy
```

So conceptually:

```tsx
handleBuy("Laptop")
```

runs.

## Step 8

The alert appears:

```text
Buying Laptop
```

---

# 36. Why Not Use `onClick={onBuy}`?

Suppose the child contains:

```tsx
<button onClick={onBuy}>Buy</button>
```

This directly passes the callback to React.

But our callback expects:

```tsx
(name: string) => void
```

We need to provide the product name.

The wrapper:

```tsx
() => onBuy(name)
```

solves this.

It waits for the click and explicitly passes the component's `name` prop.

Your mental model can be:

> The arrow function acts as a wrapper. It waits for the click and explicitly passes the `name` variable from the component's props/scope into `onBuy`.

---

# 37. Common Event Mistakes

## Mistake 1: Calling the handler immediately

Wrong:

```tsx
<button onClick={handleClick()}>
```

Correct:

```tsx
<button onClick={handleClick}>
```

---

## Mistake 2: Calling a function with an argument immediately

Wrong:

```tsx
<button onClick={handleGreeting("Ifty")}>
```

Correct:

```tsx
<button onClick={() => handleGreeting("Ifty")}>
```

---

## Mistake 3: Invoking a function prop during render

Wrong:

```tsx
<button onClick={onAction()}>
```

Correct:

```tsx
<button onClick={onAction}>
```

---

## Mistake 4: Calling a callback with component data immediately

Wrong:

```tsx
<button onClick={onBuy(name)}>
```

Correct:

```tsx
<button onClick={() => onBuy(name)}>
```

---

## Mistake 5: Invoking a parent function while passing it as a prop

Wrong:

```tsx
<ProductCard name="Laptop" onBuy={handleBuy()} />
```

Problems:

1. `handleBuy()` runs immediately during rendering.
2. If `handleBuy` expects a required argument, no argument is being provided.
3. The child receives the return value instead of the intended function reference.

Correct:

```tsx
<ProductCard name="Laptop" onBuy={handleBuy} />
```

---

# 38. Debugging Example

Consider this broken code:

```tsx
type ProductCardProps = {
  name: string;
  onBuy: (name: string) => void;
};

function ProductCard({ name, onBuy }: ProductCardProps) {
  return (
    <button onClick={onBuy(name)}>
      Buy {name}
    </button>
  );
}

function App() {
  function handleBuy(productName: string) {
    alert(`Buying ${productName}`);
  }

  return (
    <>
      <ProductCard name="Laptop" onBuy={handleBuy()} />
      <ProductCard name="Mouse" onBuy={handleBuy} />
    </>
  );
}
```

There are multiple problems.

---

## Problem 1

```tsx
onClick={onBuy(name)}
```

### Why?

It invokes `onBuy(name)` immediately while rendering.

### Fix

```tsx
onClick={() => onBuy(name)}
```

The wrapper delays the function call until the click.

---

## Problem 2

```tsx
onBuy={handleBuy()}
```

### Why?

The parentheses immediately invoke `handleBuy`.

The function is supposed to receive:

```tsx
productName: string
```

but it is being called without the required argument.

### Fix

```tsx
onBuy={handleBuy}
```

This passes the function reference to the child.

---

# 39. Parent → Child Callback Pattern

This is a major React pattern.

```text
Parent owns function
        ↓
Parent passes function as prop
        ↓
Child receives function
        ↓
User triggers event in child
        ↓
Child calls received function
        ↓
Parent's function executes
```

Example:

```text
App
 │
 │ defines handleBuy
 │
 ├── ProductCard (Laptop)
 │      │
 │      └── click → onBuy("Laptop")
 │
 ├── ProductCard (Mouse)
 │      │
 │      └── click → onBuy("Mouse")
 │
 └── ProductCard (Keyboard)
        │
        └── click → onBuy("Keyboard")
```

This pattern allows reusable child components to trigger parent-owned logic.

---

# 40. Complete Day 6 Mental Model

## Basic Event

```text
User clicks
    ↓
React detects event
    ↓
React finds event handler
    ↓
React calls handler
    ↓
Handler code runs
```

---

## Function Reference

```tsx
onClick={handleClick}
```

```text
Give React the function.
React will call it later.
```

---

## Function Invocation

```tsx
onClick={handleClick()}
```

```text
Call the function right now.
Do not wait for the event.
```

---

## Passing Custom Arguments

```tsx
onClick={() => handleBuy(name)}
```

```text
Give React a wrapper function.
        ↓
User clicks
        ↓
React calls wrapper
        ↓
Wrapper calls handleBuy(name)
```

---

## Function as Prop

```tsx
<ActionButton onAction={handleLike} />
```

```text
Parent gives child a function.
Child can call it later.
```

---

## Child Callback with Data

```tsx
onClick={() => onBuy(name)}
```

```text
Child has its own data
        ↓
Child waits for event
        ↓
Child calls parent callback
        ↓
Child provides its data as an argument
        ↓
Parent logic runs
```

---

## Event Object

```tsx
function handleClick(event) {
  console.log(event);
}
```

```text
User interacts
        ↓
React detects event
        ↓
React calls handler
        ↓
React provides event object as an argument
```

---

# 41. Important Rules to Remember

### Rule 1

```tsx
onClick={functionName}
```

Passes a function for later.

### Rule 2

```tsx
onClick={functionName()}
```

Calls the function immediately.

### Rule 3

When custom arguments are needed:

```tsx
onClick={() => functionName(argument)}
```

Use a wrapper function.

### Rule 4

Functions can be passed as props:

```tsx
<Child onAction={handleAction} />
```

### Rule 5

A child can call a parent-provided function:

```tsx
function Child({ onAction }) {
  return <button onClick={onAction}>Click</button>;
}
```

### Rule 6

If a child needs to pass its own data:

```tsx
onClick={() => onAction(data)}
```

### Rule 7

React can provide an event object to event handlers:

```tsx
function handleClick(event) {}
```

You do not manually provide the event when using:

```tsx
onClick={handleClick}
```

React provides it when the event happens.

---

# 42. Day 6 Practice Code

## Basic Event

```tsx
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## Multiple Handlers

```tsx
function ActionButtons() {
  function handleLike() {
    console.log("Liked!");
  }

  function handleShare() {
    console.log("Shared!");
  }

  function handleSubscribe() {
    console.log("Subscribed!");
  }

  return (
    <>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleShare}>Share</button>
      <button onClick={handleSubscribe}>Subscribe</button>
    </>
  );
}
```

---

## Passing Arguments

```tsx
function App() {
  function handleGreeting(name: string) {
    alert(`Hello, ${name}`);
  }

  return (
    <>
      <button onClick={() => handleGreeting("Ifty")}>
        Ifty
      </button>

      <button onClick={() => handleGreeting("Rahim")}>
        Rahim
      </button>
    </>
  );
}
```

---

## Events + Props

```tsx
type UserButtonProps = {
  name: string;
};

function UserButton({ name }: UserButtonProps) {
  function handleClick() {
    alert(`Hello, ${name}`);
  }

  return <button onClick={handleClick}>{name}</button>;
}

function App() {
  return (
    <>
      <UserButton name="Ifty" />
      <UserButton name="Rahim" />
    </>
  );
}
```

---

## Function as Prop

```tsx
type ActionButtonProps = {
  label: string;
  onAction: () => void;
};

function ActionButton({ label, onAction }: ActionButtonProps) {
  return <button onClick={onAction}>{label}</button>;
}

function App() {
  function handleLike() {
    alert("Liked!");
  }

  return (
    <ActionButton
      label="Like"
      onAction={handleLike}
    />
  );
}
```

---

## Function Prop with Argument

```tsx
type ProductCardProps = {
  name: string;
  price: number;
  onBuy: (name: string) => void;
};

function ProductCard({ name, price, onBuy }: ProductCardProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>Price: ${price}</p>

      <button onClick={() => onBuy(name)}>
        Buy
      </button>
    </>
  );
}

function App() {
  function handleBuy(productName: string) {
    alert(`Buying ${productName}`);
  }

  return (
    <>
      <ProductCard
        name="Laptop"
        price={1000}
        onBuy={handleBuy}
      />

      <ProductCard
        name="Mouse"
        price={50}
        onBuy={handleBuy}
      />
    </>
  );
}

export default App;
```

---

# 43. Frequently Asked Questions

## Q1: Why can't I write `onClick={handleClick()}`?

Because the parentheses invoke the function immediately during rendering.

Use:

```tsx
onClick={handleClick}
```

to give React the function for later.

---

## Q2: Why do I sometimes need an arrow function?

Usually when you need to control the function call or pass custom arguments.

Example:

```tsx
onClick={() => handleBuy(name)}
```

The arrow function waits for the click and then calls `handleBuy` with `name`.

---

## Q3: Is the arrow function itself called immediately?

No.

In:

```tsx
onClick={() => handleBuy(name)}
```

the arrow function is created and passed to React.

Its body:

```tsx
onBuy(name)
```

does not run until React calls the arrow function after the click.

---

## Q4: Can functions be props?

Yes.

Example:

```tsx
<DeleteButton onDelete={handleDelete} />
```

Functions are JavaScript values and can be passed through props.

---

## Q5: Does the child own the parent function?

No.

The function still belongs to the parent logic/scope. The child receives a reference to it and can call it.

---

## Q6: Why use `handleBuy` in the parent and `onBuy` in the child?

This is a naming convention that communicates responsibility.

```text
handleBuy → implementation/handler
onBuy     → callback prop
```

But other names can technically work.

---

## Q7: What is the event object?

It is an object containing information about an event that occurred.

React provides it to your handler when the event happens.

---

## Q8: Why don't I manually pass the event object?

Because React calls your handler and automatically supplies event information.

Conceptually:

```tsx
handleClick(eventObject);
```

is done by React after the event occurs.

---

# 44. Day 6 Revision Checklist

Before moving forward, make sure you can explain all of these without looking.

### Events

- [ ] What is an event?
- [ ] What problem do events solve?
- [ ] What is an event handler?
- [ ] What does `onClick` do?

### Functions

- [ ] Difference between `handleClick` and `handleClick()`
- [ ] What is a function reference?
- [ ] What is function invocation?
- [ ] Why does `()` cause immediate execution?

### Arguments

- [ ] Why `onClick={handleGreeting("Ifty")}` is wrong
- [ ] Why `onClick={() => handleGreeting("Ifty")}` works
- [ ] What the arrow-function wrapper does

### Scope

- [ ] Why handlers inside components can access props
- [ ] How JavaScript lexical scope is involved
- [ ] When a function outside a component may be appropriate

### Components

- [ ] Difference between one component definition and multiple instances
- [ ] Why each component instance can receive different props

### Function Props

- [ ] How a parent passes a function to a child
- [ ] How a child calls a received function
- [ ] Difference between `handleSomething` and `onSomething`
- [ ] How a child can pass data to a parent callback

### Event Object

- [ ] What the event object is
- [ ] Who provides it
- [ ] Why we don't manually write `onClick={handleClick(event)}`

---

# 45. Final Day 6 Summary

React events allow users to interact with the UI.

The fundamental pattern is:

```tsx
<button onClick={handleClick}>
  Click Me
</button>
```

You pass React a function reference.

When the event happens:

```text
User interacts
      ↓
React detects the event
      ↓
React calls your handler
      ↓
Your code runs
```

The biggest concept to remember is:

```text
functionName    → pass the function
functionName()  → call the function now
```

When custom arguments are needed:

```tsx
onClick={() => functionName(argument)}
```

The arrow function acts as a wrapper that waits for the event and then calls the function with the arguments you choose.

Functions can also travel through props:

```text
Parent defines function
        ↓
Parent passes function to child
        ↓
Child receives function
        ↓
User triggers event
        ↓
Child calls function
        ↓
Parent logic runs
```

This is one of the foundational patterns for building interactive and reusable React components.

---

# Day 6 Mentor Assessment

## Status

**Completed**

## Confidence

**4.5 / 5**

## Strong Areas

- Function reference vs invocation
- Understanding why arrow-function wrappers are needed
- Passing arguments to handlers
- JavaScript scope inside components
- Functions as props
- Parent-to-child callback flow
- Passing child-specific data through callbacks
- Debugging immediate invocation mistakes

## Mistake Made and Corrected

### Component definition vs component instances

Initially, component reuse was confused with there being only one component instance.

Correct understanding:

```text
One component definition
        +
Multiple component instances/usages
```

## Next Topic

**Day 7 — Conditional Rendering**

The next step is learning how React decides what UI to display depending on conditions.
