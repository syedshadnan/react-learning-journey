# React Learning Journey — Day 10 Revision
## React State and useState Fundamentals

## 1. Day Overview
Today focused on React State: how React remembers changing data and updates the UI when that data changes.

You learned:
- Why normal variables do not update React UI
- What state solves
- `useState` syntax
- State value and setter function
- Initial state
- Re-rendering
- State persistence
- Number, string, boolean, array, and object state
- Multiple independent state values
- Direct updates vs previous-state updater
- Boolean toggling
- State updates and the current render
- Multiple buttons controlling one state
- Conditional rendering based on state

---

# 2. Why Normal Variables Do Not Update React UI

```tsx
function Counter() {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
```

JavaScript can change `count`, but React does not automatically track normal variable changes for rendering.

So:

```text
JavaScript variable changes
↓
React is not automatically notified
↓
No re-render
↓
UI does not update
```

Important distinction:

Wrong: React cannot change JavaScript variables.

Correct: React does not automatically track normal variable changes and re-render the UI because of them.

---

# 3. What State Solves

State is data managed and remembered by React that can change over time and affect the UI.

```text
State changes
↓
React knows about the update
↓
React re-renders the component
↓
UI can reflect the latest state
```

Normal variables:
- are not automatically tracked for rendering
- do not trigger re-renders

React state:
- is remembered by React between renders
- updates can trigger re-renders

---

# 4. useState Syntax

```tsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

Parts:

```text
count
↓
Current state value

setCount
↓
Function used to update the state

0
↓
Initial state value
```

---

# 5. Basic Counter

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
```

Flow:

```text
User clicks
↓
Event handler runs
↓
State setter is called
↓
React updates/schedules state
↓
React re-renders component
↓
Component receives latest state
↓
Updated UI appears
```

---

# 6. Setting Specific Values

```tsx
setCount(1);
```

means:

> Set count to exactly 1.

It does not mean increase by 1.

Example:

```text
Initial: 0
Click 1 → 1
Click 2 → 1
Click 3 → 1
```

Because every click requests:

```tsx
setCount(1);
```

Reset:

```tsx
setCount(0);
```

---

# 7. Updating From Current Value

Basic increase:

```tsx
setCount(count + 1);
```

Example:

```text
0 → 1 → 2 → 3
```

Decrease:

```tsx
setCount(count - 1);
```

Double:

```tsx
setCount(count * 2);
```

If initial value is 10:

```text
10 → 20 → 40 → 80
```

---

# 8. Initial State Is Not Reapplied on Every Render

```tsx
const [count, setCount] = useState(0);
```

First render:

```text
React creates the state
↓
count = 0
```

Later:

```tsx
setCount(5);
```

After re-render, `count` is 5.

React does not reset it to 0.

Mental model:

```text
FIRST RENDER
useState(0)
↓
count = 0

STATE UPDATE
setCount(5)

NEXT RENDER
React remembers count = 5
↓
count = 5
```

Best rule:

> The initial value in `useState(initialValue)` is used when React creates that state for the first time. Later, React preserves and returns the latest state value.

Important wording:

React does not ignore the whole `useState` call. The component still runs the call. React ignores the initial value argument for resetting existing state on later renders.

---

# 9. State Is Preserved Between Renders

A component function can run again from the top, but React remembers state separately.

```text
Component function runs again
↓
React provides latest remembered state
↓
Component calculates what UI should look like
```

A re-render does not mean all state resets.

---

# 10. Multiple Independent State Values

```tsx
const [count, setCount] = useState(0);
const [isOnline, setIsOnline] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Suppose:

```text
count = 5
isOnline = true
isLoggedIn = false
```

If Login changes:

```text
count = 5
isOnline = true
isLoggedIn = true
```

Only the updated state gets a new value.

```text
[count state]      → independent
[isOnline state]   → independent
[isLoggedIn state] → independent
```

---

# 11. State Can Hold Normal JavaScript Data Types

Number:

```tsx
const [score, setScore] = useState(0);
```

String:

```tsx
const [name, setName] = useState("Ifty");
```

Boolean:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

Array:

```tsx
const [students, setStudents] = useState([]);
```

Object:

```tsx
const [profile, setProfile] = useState({
  name: "Ifty",
  age: 20,
});
```

State uses normal JavaScript data types.

Examples:

| Data | Type |
|---|---|
| Score | Number |
| Modal open/closed | Boolean |
| Username | String |
| List of students | Array |
| Cart items | Array of objects |

Example cart:

```tsx
[
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 }
]
```

---

# 12. Boolean State and Toggle

```tsx
const [isOnline, setIsOnline] = useState(false);
```

Meaning:

```text
false → Offline
true → Online
```

The `!` operator reverses a boolean:

```text
true → false
false → true
```

Basic toggle:

```tsx
setIsOnline(!isOnline);
```

Recommended previous-state form:

```tsx
setIsOnline((prevIsOnline) => !prevIsOnline);
```

---

# 13. Online/Offline Example

```tsx
function Profile() {
  const [isOnline, setIsOnline] = useState(false);

  const handleActivity = () => {
    setIsOnline((prevIsOnline) => !prevIsOnline);
  };

  return (
    <div>
      <h1>
        Status: {isOnline ? "Online" : "Offline"}
      </h1>

      <button onClick={handleActivity}>
        Change Status
      </button>
    </div>
  );
}
```

This combines:

```text
State
+
Events
+
Conditional rendering
```

---

# 14. Login/Logout Example

```tsx
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
  setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
};
```

Button:

```tsx
<button onClick={handleLogin}>
  {isLoggedIn ? "Logout" : "Login"}
</button>
```

Message:

```tsx
<h2>
  {isLoggedIn ? "Welcome back!" : "Please log in."}
</h2>
```

---

# 15. Direct Value vs Previous-State Updater

There are two important patterns.

## Direct value

Use when you know the exact next value.

```tsx
setScore(0);
setUsername("Ifty");
```

Question:

> Do I already know exactly what the next value should be?

If yes, direct value works.

## Previous-state updater

Use when the next value depends on previous/current state.

```tsx
setCount((previousCount) => previousCount + 1);
```

Examples:

```tsx
setScore((prevScore) => prevScore + 5);
setScore((prevScore) => prevScore * 2);
setIsOnline((prev) => !prev);
```

Main rule:

```text
Do I need the previous state to calculate the next state?

No
↓
Direct value

Yes
↓
Previous-state updater
```

---

# 16. Why the Previous-State Updater Matters

Consider:

```tsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
};
```

If:

```text
count = 0
```

First line becomes:

```tsx
setCount(1);
```

The second line still uses the same `count` value from the current render:

```tsx
setCount(1);
```

So conceptually:

```tsx
setCount(1);
setCount(1);
```

Final result can be 1, not 2.

When updates depend on previous state:

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

can apply:

```text
0 → 1 → 2
```

Rule:

> If the next state depends on previous state, prefer the functional/previous-state updater.

---

# 17. State Updates Are Not Immediately Reflected in the Current Function

```tsx
const handleClick = () => {
  setCount(count + 1);
  console.log(count);
};
```

Suppose:

```text
count = 0
```

The console logs:

```text
0
```

Why?

`setCount` does not immediately mutate the `count` variable inside the currently running function.

Timeline:

```text
CURRENT RENDER
count = 0
↓
Click
↓
setCount(1)
↓
Current function still sees count = 0
↓
console.log(count) → 0

NEXT RENDER
↓
React provides count = 1
```

Mental model:

> The setter tells React about the next state. The current function execution still has the state value from its current render.

---

# 18. Example With Calculation

```tsx
const handleClick = () => {
  setCount(count + 1);

  console.log("Count:", count);
  console.log("After calculation:", count + 1);
};
```

If:

```text
count = 5
```

Output:

```text
Count: 5
After calculation: 6
```

Because the current function still has `count = 5`, while JavaScript can still calculate `5 + 1`.

---

# 19. Multiple Buttons Can Control One State

State is not attached to a single button.

Example:

```text
          score state
              │
      ┌───────┼────────┐
      ↓       ↓        ↓
    [+1]    [+5]    [Reset]
```

One state:

```tsx
const [score, setScore] = useState(0);
```

Three handlers:

```tsx
const handleAddOne = () => {
  setScore((prevScore) => prevScore + 1);
};

const handleAddFive = () => {
  setScore((prevScore) => prevScore + 5);
};

const handleReset = () => {
  setScore(0);
};
```

Buttons:

```tsx
<button onClick={handleAddOne}>+1</button>
<button onClick={handleAddFive}>+5</button>
<button onClick={handleReset}>Reset</button>
```

Important lesson:

> Multiple UI elements can read from and update the same state.

---

# 20. Practical Challenge: Score Board

Requirements:

```text
Score: 0

[+1] [+5] [Reset]

Below 10 → Keep going!
10 or above → Excellent!
```

Logic:

```tsx
const [score, setScore] = useState(0);

const handleAddOne = () => {
  setScore((prevScore) => prevScore + 1);
};

const handleAddFive = () => {
  setScore((prevScore) => prevScore + 5);
};

const handleReset = () => {
  setScore(0);
};
```

UI:

```tsx
<div>
  <h1>{score}</h1>

  <button onClick={handleAddOne}>+1</button>
  <button onClick={handleAddFive}>+5</button>
  <button onClick={handleReset}>Reset</button>

  <h3>
    {score >= 10 ? "Excellent!" : "Keep going!"}
  </h3>
</div>
```

Concepts combined:

```text
useState
+
Multiple handlers
+
One shared state
+
Previous-state calculations
+
Direct update
+
Conditional rendering
```

---

# 21. Practical Challenge: Product Quantity Controller

Requirements:

```text
Product: React Book
Quantity: 1

[Remove] [Add] [Reset]

0 → Out of Stock
More than 0 → Available
```

State:

```tsx
const [quantity, setQuantity] = useState(1);
```

This is a number, not an object.

## Decrease without going negative

```tsx
const handleDecrease = () => {
  setQuantity((prevQuantity) =>
    Math.max(0, prevQuantity - 1)
  );
};
```

Why?

```text
3 → 2
2 → 1
1 → 0
0 → remains 0
```

`Math.max(0, ...)` prevents negative values.

## Increase

```tsx
const handleIncrease = () => {
  setQuantity((prevQuantity) => prevQuantity + 1);
};
```

## Reset

```tsx
const handleReset = () => {
  setQuantity(1);
};
```

The reset value is 1 because the requirement says return to the initial quantity.

## Status

```tsx
<h2>
  Status: {quantity > 0 ? "Available" : "Out of Stock"}
</h2>
```

---

# 22. Code Quality Lessons

## Use clear state names

Less clear:

```tsx
const [current, setStatus] = useState("Offline");
```

Clearer:

```tsx
const [status, setStatus] = useState("Offline");
```

Ask:

> Current what?

State names should describe the data.

## Unnecessary return

Works:

```tsx
return setStatus("Online");
```

Cleaner:

```tsx
setStatus("Online");
```

## Avoid unnecessary headings inside buttons

Instead of:

```tsx
<button>
  <h2>+1</h2>
</button>
```

For simple text:

```tsx
<button>+1</button>
```

---

# 23. Multiple State Values vs One Object

We briefly discussed:

Separate state:

```tsx
const [name, setName] = useState("Ifty");
const [age, setAge] = useState(20);
const [city, setCity] = useState("Dhaka");
```

Or object state:

```tsx
const [profile, setProfile] = useState({
  name: "Ifty",
  age: 20,
  city: "Dhaka",
});
```

Both can be valid.

Useful question:

> Do these pieces of data naturally belong together and change together?

There is no universal rule that one approach is always correct.

Object and array state updates will be learned in more depth later.

---

# 24. Common Beginner Mistakes

## Mistake: Expecting normal variables to update UI

```tsx
let count = 0;
count++;
```

JavaScript changes the data, but React is not automatically notified.

## Mistake: Thinking useState resets every render

```tsx
useState(0)
```

does not mean:

> Set state to 0 every time.

It means:

> Use 0 when React first creates this state.

## Mistake: Expecting setter to immediately change current variable

```tsx
setCount(count + 1);
console.log(count);
```

The current function can still see the old value.

## Mistake: Using direct calculations when previous state matters

Prefer:

```tsx
setCount((prev) => prev + 1);
```

when calculating from previous state.

---

# 25. Day 10 Key Rules

1. Use state for changing data that affects the UI.
2. React does not automatically track normal variable changes for rendering.
3. State updates trigger React re-renders.
4. `useState(initialValue)` uses the initial value when state is first created.
5. React preserves state between renders.
6. One component can have multiple independent state values.
7. Known exact next value → direct update.

```tsx
setCount(0);
```

8. Next value depends on previous state → previous-state updater.

```tsx
setCount((prev) => prev + 1);
```

9. State setter does not immediately change the current render's variable.
10. Multiple buttons can control the same state.

---

# 26. Complete Mental Model

```text
STATE
↓
UI displays current state
↓
USER INTERACTION
↓
EVENT HANDLER
↓
STATE SETTER
↓
REACT UPDATES/SCHEDULES NEW STATE
↓
REACT RE-RENDERS COMPONENT
↓
COMPONENT RECEIVES LATEST STATE
↓
UPDATED UI APPEARS
```

The central answer to today's lesson:

> React state is data managed and remembered by React that can change over time, and when state changes, React re-renders the component so the UI can reflect the latest state.

---

# 27. Self-Test Questions

Before moving forward, test yourself:

1. Why doesn't changing a normal variable automatically update React UI?
2. What problem does `useState` solve?
3. Explain:

```tsx
const [count, setCount] = useState(0);
```

4. What happens after a state setter is called?
5. Does `useState(0)` reset state to 0 on every render?
6. Why does React preserve state?
7. When should you use `setCount(0)`?
8. When should you use `setCount(prev => prev + 1)`?
9. Why can two `setCount(count + 1)` calls use the same value?
10. Why can `console.log(count)` show an old value immediately after a setter?
11. Can multiple buttons update one state?
12. Can a component contain multiple independent states?
13. Choose appropriate types for score, username, modal state, and cart items.

---

# Day 10 Status

**Completed**

Practical work completed:
- Counter
- Online/offline toggle
- Login/logout toggle
- Score board
- Product quantity controller

Mentor assessment:
- Strong foundational understanding of state
- Good practical application
- Main improvement area: explain React behavior with precise wording

