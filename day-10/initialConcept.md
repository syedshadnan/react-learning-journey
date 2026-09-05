# ⚛️ React Learning Journey — Day 10

I checked the master source completely. You have completed Day 9, including the Fundamentals Integration Project, and the correct next topic is:

## Day 10 — Understanding State

Your current situation is important:

> You already know how to display data, pass data through props, handle events, render lists, and conditionally show UI.

But in Day 9, we reached a limitation.

You correctly identified it:

```text
Static data renders UI
        ↓
User clicks something
        ↓
A function can run
        ↓
But changing the data does not automatically update the UI
```

That problem is exactly why **State** exists.

---

# Today's Main Question

> How can React remember changing data and update the UI when that data changes?

Today we will learn:

1. What state actually is
2. Why normal variables are not enough
3. What a re-render means
4. The relationship between state and UI
5. The mental model:

```text
State changes
    ↓
React renders again
    ↓
UI reflects the new state
```

**Important:** Today is about understanding state deeply. We will not rush into memorizing `useState` syntax yet. That is Day 11.

---

# Step 1: Start with a familiar problem

Imagine this component:

```tsx
function Counter() {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
```

Before I explain anything:

## Your task

When you click the button, what do you think will happen?

Specifically answer these two questions:

1. What will `console.log(count)` show after clicking?
2. Will the number displayed in `<h1>{count}</h1>` change on the screen?

Don't guess based on what you think React *should* do. Reason from what you currently know. 

## Check the revision file for the full day-10