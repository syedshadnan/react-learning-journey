# React Day 1 --- Revision Notes

## What is React & Why React?

**Learning status:** Completed\
**Confidence:** 4/5\
**Phase:** Phase 0 --- React Mental Model

------------------------------------------------------------------------

# 1. What is UI?

**UI = User Interface.**

The UI is the part of an application that the user sees and interacts
with.

Examples include:

-   Text
-   Buttons
-   Images
-   Inputs
-   Menus
-   Cards
-   Notifications
-   Loading indicators

A UI is often not static. It can change when the user interacts with an
application.

Example:

``` text
Shopping Cart

Apple       $2
Banana      $1

Total:      $3

[ Checkout ]
```

After the user adds an item, the UI may change:

``` text
Shopping Cart (1)

Apple       $2

Total:      $2

[ Checkout ]
```

The important idea is:

> **The UI changes as the application's data changes.**

------------------------------------------------------------------------

# 2. Why Does React Exist?

JavaScript can already create interactive websites. React does **not**
exist because JavaScript is incapable of doing this.

The problem is **complexity**.

A small application may have only a few things that change.

A larger application may have:

-   Products
-   Search
-   Filters
-   Shopping cart
-   Authentication
-   Notifications
-   Discounts
-   Recommendations
-   Stock information
-   Checkout
-   Multiple pages

As the application grows, manually coordinating many UI changes becomes
harder to reason about and maintain.

The main problem is not:

> "JavaScript cannot update the UI."

It can.

The problem is:

> **Keeping many parts of a complex UI correctly synchronized with
> changing application data becomes difficult.**

------------------------------------------------------------------------

# 3. The Core React Mental Model

The most important idea from Day 1:

> **The UI should represent the current state/data of the application.**

Think:

``` text
Application data/state
        ↓
     Desired UI
        ↓
       React
        ↓
     Actual UI
```

When the data changes:

``` text
Old data: 3
     ↓
New data: 2
     ↓
UI should represent 2
```

For example:

``` text
Cart items = 3

UI:
Cart: 3 items
```

After removing an item:

``` text
Cart items = 2

UI:
Cart: 2 items
```

The developer focuses on the relationship:

> **Current data → corresponding UI**

rather than manually describing every individual UI transition.

------------------------------------------------------------------------

# 4. Declarative UI

React uses a **declarative approach** to describing UI.

## Declarative means:

> **Describe what the UI should look like for the current
> situation/state.**

Example:

``` text
If the user is logged in:
    Show the dashboard.

If the user is not logged in:
    Show the login form.
```

You are describing the desired result.

------------------------------------------------------------------------

# 5. Imperative vs Declarative

This distinction is important.

## Imperative

Imperative thinking focuses on **how/which steps to perform**.

Example:

``` text
First show the login form.
When the user logs in:
- hide the login form
- show the dashboard
- change the navigation
- display the user's name
```

This describes a sequence of actions.

Shortcut:

> **Imperative = "Do this, then this, then this."**

------------------------------------------------------------------------

## Declarative

Declarative thinking focuses on **what the UI should be**.

Example:

``` text
If the user is logged in:
    Show the dashboard.

Otherwise:
    Show the login form.
```

Shortcut:

> **Declarative = "Given this situation, this is what I want."**

------------------------------------------------------------------------

# 6. A Simple Analogy

Imagine giving directions to a taxi driver.

### Imperative

``` text
Drive forward 500 meters.
Turn left.
Drive 200 meters.
Turn right.
Stop at the third building.
```

You are describing the procedure.

### Declarative

``` text
Take me to this address.
```

You specify the desired destination rather than every step.

This is only an analogy. React is not literally a taxi driver.

The useful lesson is:

> **Imperative focuses on the procedure. Declarative focuses on the
> desired result.**

------------------------------------------------------------------------

# 7. Components

Large UIs can be broken into smaller pieces called **components**.

Example:

``` text
Website
├── Header
├── Sidebar
├── ProductList
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer
```

For a Todo application:

``` text
TodoApp
├── Header
└── TodoItem
    ├── TodoItem
    └── TodoItem
```

A useful mental model:

> **Components are like Lego blocks for a UI.**

They allow us to break a large interface into smaller, understandable
pieces.

------------------------------------------------------------------------

# 8. Why Components Are Useful

Components help with:

### Manageability

Instead of thinking about the entire application as one giant piece, we
can reason about smaller pieces.

### Reuse

A component can be reused when the same UI structure is needed multiple
times.

For example, instead of separately creating the UI structure for:

``` text
Learn JavaScript
Learn React
Build a project
```

we can conceptually have one reusable:

``` text
TodoItem
```

and use it for each task.

Important:

> **Reuse is a benefit of components, but managing UI complexity is the
> deeper idea.**

Components are not useful only because they prevent repeated code.

------------------------------------------------------------------------

# 9. React Is Not a Replacement for JavaScript

React is a **JavaScript library for building user interfaces**.

Think:

``` text
JavaScript
    ↓
Programming language

React
    ↓
JavaScript library
    ↓
Helps build and organize UI
```

You can build websites using JavaScript without React.

You can also build applications using JavaScript + React.

React does not make JavaScript unnecessary.

------------------------------------------------------------------------

# 10. Vanilla JavaScript vs React

**Vanilla JavaScript** means JavaScript without a library/framework such
as React.

## Simple application

Example:

``` text
My Portfolio

About me
My skills
Contact information

[Email Me]
```

For a simple, mostly static website, vanilla JavaScript may be enough.

Using React could introduce unnecessary complexity if the problem does
not benefit from React's structure.

------------------------------------------------------------------------

## Complex application

Example:

``` text
Online Store

Products
Search
Filters
Cart
Login
User profile
Checkout
Orders
Notifications
```

Here React may provide useful structure because the UI has many
interacting pieces and changing states.

React can help organize these pieces into components and describe the UI
based on current application data/state.

------------------------------------------------------------------------

# 11. Do Not Use This Rule

Do NOT memorize:

> Big project = React\
> Small project = JavaScript

That is too simplistic.

A better question is:

> **How much dynamic, interactive UI and UI complexity does the
> application have?**

A small React application can be reasonable.

A surprisingly large website can still be built without React.

The choice should depend on the problem, not simply the size of the
project.

------------------------------------------------------------------------

# 12. Todo App Example

Consider:

``` text
Todos: 3

☑ Learn JavaScript
☐ Learn React
☐ Build a project
```

The user completes "Learn React":

``` text
Todos: 3

☑ Learn JavaScript
☑ Learn React
☐ Build a project
```

## What changed?

The application's data/state changed.

## What should the UI do?

The UI should reflect the new data/state.

Conceptually:

``` text
Old data
   ↓
New data
   ↓
New UI
```

## Why is the declarative approach useful?

Instead of concentrating on a step-by-step sequence for changing
individual pieces of the interface, we describe what the interface
should look like for the current state.

## Where can components fit?

For example:

``` text
TodoApp
├── Header
└── TodoItem
    ├── TodoItem
    └── TodoItem
```

A reusable `TodoItem` can represent individual tasks.

------------------------------------------------------------------------

# 13. The Most Important Day 1 Relationship

Remember this:

``` text
User interaction
       ↓
Data/state changes
       ↓
UI should reflect the current data/state
```

React helps us structure this relationship.

------------------------------------------------------------------------

# 14. Three Big Ideas From Day 1

## 1. UI depends on data/state

``` text
Data/state
    ↓
   UI
```

The UI should represent the current application state.

------------------------------------------------------------------------

## 2. Declarative thinking

``` text
Imperative:
"How do I change the UI?"

Declarative:
"What should the UI look like?"
```

------------------------------------------------------------------------

## 3. Components

``` text
Large UI
   ↓
Smaller components
   ↓
Composed together
```

Components make complex interfaces easier to organize and can provide
reuse.

------------------------------------------------------------------------

# 15. Your Day 1 Understanding

You successfully explained:

-   What UI means
-   Why complex UI becomes difficult to manage
-   What problem React helps solve
-   Declarative vs imperative thinking
-   Why components are useful
-   React vs vanilla JavaScript
-   The relationship between data/state and UI
-   How the concepts apply to a Todo application

### Current confidence

**React mental model: 4/5**

This is not 5/5 yet because 5/5 means being able to confidently explain
and apply the ideas in less familiar situations. More practice will
verify that.

------------------------------------------------------------------------

# 16. Important Corrections From Day 1

### Correction 1

Instead of:

> React is a library of JavaScript.

Prefer:

> **React is a JavaScript library for building user interfaces.**

### Correction 2

Do not think:

> React = automatically makes everything efficient.

React provides a useful UI model, but React applications can still be
inefficient.

Performance will be studied later.

### Correction 3

Do not think:

> React is always better than vanilla JavaScript.

Instead:

> **Choose React when its structure and UI model provide value for the
> problem you're solving.**

### Correction 4

We discussed DOM manipulation briefly, but **DOM is not a Day 1
prerequisite you need to know yet**. Do not worry about memorizing DOM
APIs from this lesson.

------------------------------------------------------------------------

# 17. Day 1 Revision Questions

Try answering these without looking at the notes.

### Question 1

What problem does React help solve?

### Question 2

What does "declarative UI" mean?

### Question 3

What is the difference between imperative and declarative thinking?

### Question 4

Why are components useful?

### Question 5

Why isn't React automatically the right choice for every website?

### Question 6

If application data changes from:

``` text
items = 3
```

to:

``` text
items = 2
```

what should happen conceptually?

### Question 7

Explain React to another beginner in 3--5 sentences.

------------------------------------------------------------------------

# 18. Day 1 One-Minute Recap

If you only have one minute to revise, remember:

> **React is a JavaScript library for building user interfaces.**

> **The UI should represent the current application data/state.**

> **React encourages declarative thinking: describe what the UI should
> look like instead of focusing on step-by-step UI changes.**

> **Components break complex UIs into smaller pieces that can be
> composed and reused.**

> **React is especially useful when an interface has significant
> interaction and UI complexity, but it is not automatically better than
> vanilla JavaScript.**

------------------------------------------------------------------------

# Next

**Day 2 --- React Project Setup**

Topics:

-   Node/npm basics needed for React
-   Vite
-   Project structure
-   Development server
-   Entry point
-   How the browser receives the React app
-   First React application

No assumption will be made that you already understand these concepts.
