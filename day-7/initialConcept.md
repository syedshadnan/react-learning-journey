# ⚛️ React Learning Journey — Day 7

I checked the master source before starting. 

## Your current position

* **Completed:** Days 1–6
* **Strong recent topic:** Events (4.5/5)
* **Current phase:** React Fundamentals
* **Today's topic:** **Conditional Rendering**
* **Main goal today:** Learn how React decides **which UI to show based on conditions**.

This connects directly with things you already know:

* JSX → writing UI
* Components → structuring UI
* Props → receiving data
* Events → responding to interaction
* **Conditional Rendering → showing different UI depending on data/conditions**

---

# Before we start: a simple question

Imagine this component:

```tsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}
```

Now imagine the requirement:

* If the user is logged in → show **"Welcome back!"**
* If the user is not logged in → show **"Please log in"**

Don't write React code yet.

### Question:

**Conceptually, what problem does conditional rendering solve? Why can't we always show the exact same UI to every user?**

Explain in your own words first. Then we'll build the concept from JavaScript conditions → React UI decisions.

