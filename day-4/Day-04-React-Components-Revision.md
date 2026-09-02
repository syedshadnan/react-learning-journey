# Day 4 — React Components: Revision Notes

## Purpose

Use this file to revise everything learned during Day 4. The goal is not to memorize syntax blindly, but to understand why React components exist, how they relate to each other, and how to decide when a piece of UI should become a component.

---

# 1. Where Day 4 Fits

Before Day 4, the following topics were completed:

- Day 1 — React mental model
- Day 2 — React project setup
- Day 3 — JSX

Day 4 builds directly on JSX.

Previously, we learned how to write UI using JSX:

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

The next question is:

> What happens when the UI becomes large and complex?

For example:

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

Putting everything inside one giant `App.tsx` file would eventually become difficult to:

- read
- organize
- maintain
- reuse

This is one of the main problems React components help solve.

---

# 2. What Is a React Component?

A React component is a piece of UI packaged into a reusable unit.

Example:

```tsx
function Greeting() {
  return <h1>Hello!</h1>;
}
```

This is technically a JavaScript/TypeScript function.

However, its special purpose in React is:

> It returns JSX describing a piece of UI.

A website can be broken into components:

```text
App
├── Navbar
├── Hero
├── ProductList
└── Footer
```

Each meaningful part of the UI can potentially become a component.

---

# 3. Why Do Components Exist?

Components help break a large UI into smaller, manageable pieces.

Benefits include:

- better organization
- reusability
- separation of responsibilities
- easier maintenance
- component composition

For example:

Instead of one large component:

```text
App
└── Everything
```

We can create:

```text
App
├── Header
├── Main
└── Footer
```

Important:

> More components does not automatically mean better code.

Splitting every small HTML element into its own component can make an application unnecessarily fragmented.

Components should generally represent meaningful UI or logic boundaries.

---

# 4. Function Components

A basic React component is usually written as a function:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

This is called a function component.

The function returns JSX.

General structure:

```tsx
function ComponentName() {
  return (
    <SomeUI />
  );
}
```

---

# 5. Creating a Component vs Using a Component

These are two different things.

## Creating / Defining a Component

```tsx
function Welcome() {
  return <h1>Welcome!</h1>;
}
```

This defines the component.

## Using a Component

```tsx
<Welcome />
```

This uses the component inside JSX.

A useful distinction:

```text
function Welcome() {}
        ↓
Component definition

<Welcome />
        ↓
Component usage
```

---

# 6. Normal JavaScript Function Call vs React Component Usage

Consider this component:

```tsx
function Header() {
  return <h1>My Website</h1>;
}
```

## Normal JavaScript function call

```ts
Header()
```

Here, JavaScript directly calls the function.

## React component usage

```tsx
<Header />
```

Here, JSX describes a React component that should be rendered.

Conceptually:

```text
<App />
    ↓
React processes App
    ↓
Finds <Header />
    ↓
React renders Header
    ↓
<h1>My Website</h1>
```

Important mental model:

> A React component is technically a JavaScript function, but in normal React code we use components through JSX syntax and let React manage the rendering process.

Recommended:

```tsx
<Header />
```

Not the normal React component usage:

```tsx
Header()
```

---

# 7. Why Component Names Start With Capital Letters

React components should use PascalCase.

Correct:

```tsx
Header
Navbar
UserProfile
ProductCard
Footer
LoginForm
```

Example:

```tsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

Then:

```tsx
<Welcome />
```

Capitalization helps distinguish custom React components from built-in HTML elements.

For example:

```tsx
<div />
```

is a built-in HTML element.

But:

```tsx
<Welcome />
```

is a custom React component.

Always use PascalCase for component names.

---

# 8. Components Can Be Reused

Suppose we have:

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

We can use the same component multiple times:

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

One component definition can be used multiple times.

Later, props will allow each usage to display different data.

---

# 9. Component Composition

Components can contain other components.

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

The structure is:

```text
App
├── Header
├── Main content
└── Footer
```

The process of combining smaller components to build larger UI is called:

> Component composition.

A parent component can compose multiple smaller child components together.

---

# 10. Component Trees

React applications can be understood as trees of components.

Example:

```tsx
function Avatar() {
  return <img src="profile.jpg" alt="Profile" />;
}

function UserProfile() {
  return (
    <div>
      <Avatar />
      <h2>Ifty</h2>
    </div>
  );
}

function App() {
  return <UserProfile />;
}
```

Component tree:

```text
App
└── UserProfile
    └── Avatar
```

This introduces parent, child, and descendant relationships.

---

# 11. Parent, Direct Child, and Descendant

Consider:

```text
App
└── UserProfile
    └── Avatar
```

## App

`App` is the top-level parent.

## UserProfile

`UserProfile` is the direct parent of `Avatar`.

## Avatar

`Avatar` is:

- a direct child of `UserProfile`
- a descendant of `App`
- not a direct child of `App`

This distinction matters.

For example:

```text
App
├── Header
├── BlogSection
│   ├── BlogCard
│   ├── BlogCard
│   └── BlogCard
└── Footer
```

Here:

- `Header`, `BlogSection`, and `Footer` are direct children of `App`.
- `BlogCard` is a direct child of `BlogSection`.
- `BlogCard` is a descendant of `App`.

---

# 12. First Practice: Breaking UI Into Components

A UI:

```text
App
├── Header
├── Main
└── Footer
```

Example implementation:

```tsx
function Header() {
  return <h1>My Portfolio</h1>;
}

function Main() {
  return (
    <>
      <h2>Hello, I'm Shadnan</h2>
      <p>I am learning React!</p>
    </>
  );
}

function Footer() {
  return <footer>© 2026 Shadnan</footer>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```

What this demonstrates:

- separate components
- PascalCase naming
- component composition
- JSX Fragment usage
- parent-child structure

Tree:

```text
App
├── Header
├── Main
└── Footer
```

---

# 13. Fragments vs <div>

Both can group JSX elements, but they are not identical.

## Fragment

```tsx
<>
  <Avatar />
  <UserInfo />
</>
```

A Fragment groups JSX elements.

However, it does not create an extra HTML element in the browser.

Conceptually, the browser might receive:

```html
<img src="..." alt="Profile">
<h2>Name: Shadnan</h2>
<p>Role: React Learner</p>
```

No extra wrapper exists.

## div

```tsx
<div>
  <Avatar />
  <UserInfo />
</div>
```

A `<div>` creates a real HTML element in the browser.

Conceptually:

```html
<div>
  <img src="..." alt="Profile">
  <h2>Name: Shadnan</h2>
  <p>Role: React Learner</p>
</div>
```

---

# 14. When to Use a Fragment

Use a Fragment when you only need to group multiple JSX elements.

Example:

```tsx
function ContactInfo() {
  return (
    <>
      <h2>Contact Me</h2>
      <p>Email: example@email.com</p>
    </>
  );
}
```

There is no need for an actual HTML wrapper.

The Fragment satisfies JSX's grouping requirement without creating extra browser markup.

Mental model:

```text
Fragment
│
├── Element
└── Element

Browser:
No extra container
```

---

# 15. When to Use a div or Another Real HTML Element

Use a real HTML element when the wrapper itself serves a purpose.

For example:

```tsx
function Profile() {
  return (
    <div className="profile">
      <Avatar />
      <UserInfo />
    </div>
  );
}
```

The wrapper can be useful for:

- styling
- layout
- grouping a section of the actual DOM
- other structural or DOM-related purposes

Mental model:

```text
div
│
├── Element
└── Element

Browser:
A real HTML element exists
```

Important:

> Styling is one reason to use a real wrapper, but not the only reason.

---

# 16. Fragment vs div Summary

| Feature | Fragment | `<div>` |
|---|---|---|
| Groups JSX elements | Yes | Yes |
| Satisfies JSX grouping requirement | Yes | Yes |
| Creates actual HTML element | No | Yes |
| Adds extra browser markup | No | Yes |
| Can act as a real wrapper for layout/styling | No directly | Yes |

Rule of thumb:

> If you only need grouping, prefer a Fragment. If you need an actual wrapper element, use an appropriate HTML element.

---

# 17. Nested Component Challenge

A more complex structure:

```text
App
├── Navbar
├── Profile
│   ├── Avatar
│   └── UserInfo
└── Footer
```

Implementation:

```tsx
function Navbar() {
  return <h1>My Profile</h1>;
}

function Avatar() {
  return (
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
    />
  );
}

function UserInfo() {
  return (
    <>
      <h2>Name: Shadnan</h2>
      <p>Role: React Learner</p>
    </>
  );
}

function Profile() {
  return (
    <div>
      <Avatar />
      <UserInfo />
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Shadnan</footer>;
}

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
```

Important composition:

```text
Profile
├── Avatar
└── UserInfo
```

Then:

```text
App
├── Navbar
├── Profile
└── Footer
```

This demonstrates composition at multiple levels.

---

# 18. Why Use a div in Profile?

Both of these are valid:

```tsx
function Profile() {
  return (
    <>
      <Avatar />
      <UserInfo />
    </>
  );
}
```

and:

```tsx
function Profile() {
  return (
    <div>
      <Avatar />
      <UserInfo />
    </div>
  );
}
```

The difference is intention.

If `Profile` represents one real visual section that may need layout or styling as a group, a real wrapper can be useful:

```tsx
<section className="profile-section">
  <Avatar />
  <UserInfo />
</section>
```

If no actual wrapper is needed, a Fragment can be enough.

Both approaches can be valid depending on the UI requirements.

---

# 19. Reusability Is Not the Only Reason for Components

A common beginner assumption is:

> If something can be reused, it should always become a component.

Reusability is a good reason, but it is not the only consideration.

For example:

```tsx
function ProductDetails() {
  return (
    <div>
      <h2>Product Name</h2>
      <p>$50</p>
      <button>Add to Cart</button>
    </div>
  );
}
```

This is perfectly valid.

You do not necessarily need:

```text
ProductDetails
├── ProductTitle
├── ProductPrice
└── AddToCartButton
```

Creating too many tiny components can make code harder to follow.

A separate component may make sense when:

- it is reused
- it has significant complexity
- it has its own logic or behavior
- it represents a meaningful UI unit
- separating it makes the parent easier to understand

---

# 20. When Should Something Become a Component?

There is no exact universal formula.

Ask questions like:

### Is it reused?

If yes, a component may be useful.

### Does it have its own complexity?

If yes, separating it may improve readability.

### Does it have its own logic or behavior?

If yes, it may deserve its own component.

### Is it a meaningful UI unit?

For example:

- Navbar
- ProductCard
- Profile
- Comment
- Footer

These are often natural component boundaries.

### Would extracting it make the parent easier to understand?

If yes, extraction may help.

But avoid:

> Creating a component for every HTML element.

Component design involves judgment.

---

# 21. Product Page Component Tree Reasoning

Example:

```text
App
│
├── Navbar
│
├── ProductSection
│     ├── ProductImage
│     ├── ProductDetails
│     │      ├── ProductTitle
│     │      ├── ProductPrice
│     │      └── AddToCartButton
│
└── Footer
```

Answers:

### What is the direct parent of ProductTitle?

`ProductDetails`.

### Is ProductTitle a direct child of ProductSection?

No.

It is a descendant of `ProductSection`, but not a direct child.

### Is ProductTitle a descendant of App?

Yes.

### Why might AddToCartButton deserve its own component?

Possible reasons:

- it may be reused
- it may become complex
- it may contain its own behavior or logic
- separating it may improve the readability of `ProductDetails`

However:

> A simple button does not automatically need its own component.

---

# 22. BlogCard Component Thinking

Suppose the UI is:

```text
App
│
├── Header
│
├── BlogSection
│     ├── BlogCard
│     ├── BlogCard
│     └── BlogCard
│
└── Footer
```

Each `BlogCard` contains:

```text
Title
Short description
Read More button
```

## Why is BlogCard a good component?

Because multiple blog posts likely share the same:

- structure
- layout
- styling

A single `BlogCard` structure can be reused.

Later, props will allow each card to display different content.

## Should Title, Description, and ReadMoreButton always become separate components?

No.

A simple implementation can be:

```tsx
function BlogCard() {
  return (
    <article>
      <h2>Title</h2>
      <p>Description</p>
      <button>Read More</button>
    </article>
  );
}
```

This is often clearer than creating unnecessary tiny components.

Separate components may be appropriate if those parts become reusable or complex.

## Which component directly owns the BlogCard usages?

`BlogSection`.

Tree:

```text
App
├── Header
├── BlogSection
│   ├── BlogCard
│   ├── BlogCard
│   └── BlogCard
└── Footer
```

---

# 23. Final Independent Challenge

Required structure:

```text
App
├── WebsiteHeader
├── ProfileSection
│   ├── ProfileImage
│   └── ProfileDetails
└── WebsiteFooter
```

One correct implementation:

```tsx
function WebsiteHeader() {
  return <h1>Welcome to My Website</h1>;
}

function ProfileImage() {
  return (
    <img
      src="https://via.placeholder.com/150"
      alt="Profile Image"
    />
  );
}

function ProfileDetails() {
  return (
    <>
      <h2>Syed Shadnan Mozammel</h2>
      <p>Student</p>
      <p>Learning React</p>
    </>
  );
}

function ProfileSection() {
  return (
    <>
      <ProfileImage />
      <ProfileDetails />
    </>
  );
}

function WebsiteFooter() {
  return <footer>© 2026 Shadnan</footer>;
}

function App() {
  return (
    <>
      <WebsiteHeader />
      <ProfileSection />
      <WebsiteFooter />
    </>
  );
}

export default App;
```

Component tree:

```text
App
├── WebsiteHeader
├── ProfileSection
│   ├── ProfileImage
│   └── ProfileDetails
└── WebsiteFooter
```

This challenge demonstrated:

- component creation
- PascalCase naming
- component composition
- nested components
- component hierarchy
- JSX grouping with Fragments

---

# 24. Common Mistakes to Avoid

## Mistake 1: Lowercase component names

Avoid:

```tsx
function header() {
  return <h1>Hello</h1>;
}
```

Prefer:

```tsx
function Header() {
  return <h1>Hello</h1>;
}
```

React components should use PascalCase.

---

## Mistake 2: Manually calling components

Avoid normal usage like:

```tsx
Header()
```

Use:

```tsx
<Header />
```

The component is used through JSX, allowing React to manage rendering.

---

## Mistake 3: Creating too many tiny components

Avoid automatically turning every element into a component:

```text
BlogCard
├── Title
├── Description
└── Button
```

unless there is a meaningful reason.

Ask whether extraction improves:

- reuse
- clarity
- organization
- complexity management

---

## Mistake 4: Thinking Fragment and div are identical

Both group JSX, but:

```tsx
<>
```

does not create a browser element.

While:

```tsx
<div>
```

creates a real HTML element.

Choose based on whether you need an actual wrapper.

---

## Mistake 5: Confusing direct child and descendant

Example:

```text
App
└── Profile
    └── Avatar
```

`Avatar` is:

- direct child of `Profile`
- descendant of `App`
- not direct child of `App`

---

# 25. The Core Mental Model

The central idea of components:

```text
Large UI
   ↓
Break into meaningful pieces
   ↓
Create components
   ↓
Compose components together
   ↓
Build the complete UI
```

React applications can be viewed as component trees:

```text
Parent Component
│
├── Child Component
│   └── Descendant Component
│
└── Child Component
```

---

# 26. Day 4 Key Takeaways

By the end of Day 4, the following concepts were understood:

1. A React component is a reusable unit of UI.
2. Components are usually JavaScript/TypeScript functions that return JSX.
3. Component names should use PascalCase.
4. Components are defined as functions but normally used with JSX syntax.
5. `<Component />` is different from manually calling `Component()`.
6. Components can be reused multiple times.
7. Components can contain other components.
8. Combining components is called component composition.
9. Components form parent-child trees.
10. A descendant is not necessarily a direct child.
11. Fragments group JSX without creating extra HTML elements.
12. `<div>` creates a real browser element.
13. Real wrappers should be used when they serve an actual purpose.
14. Not every piece of HTML needs its own component.
15. Good component boundaries often involve reuse, complexity, logic, meaningful UI units, and readability.

---

# 27. Confidence and Revision Focus

Current assessment:

**React Components: 4/5**

Why not 5/5 yet?

The fundamental mental model is strong, but components have not yet been tested with:

- props
- dynamic data
- passing different values to reusable components
- more realistic component communication

These topics will reinforce today's learning.

Revision focus:

- Explain component composition without looking at notes.
- Draw component trees from unfamiliar UI structures.
- Identify direct parent vs ancestor vs descendant.
- Explain the difference between `<Component />` and `Component()`.
- Decide when a Fragment is preferable to a real wrapper.
- Practice deciding whether a UI piece deserves its own component.

---

# 28. Quick Self-Test

Try answering these without looking above.

### Question 1

What problem do components solve?

### Question 2

What is the difference between:

```tsx
function Header() {}
```

and:

```tsx
<Header />
```

### Question 3

Why should React component names start with uppercase letters?

### Question 4

What is component composition?

### Question 5

Given:

```text
App
└── Profile
    └── Avatar
```

Is `Avatar` a direct child of `App`?

### Question 6

What is the difference between:

```tsx
<>
```

and:

```tsx
<div>
```

### Question 7

Should every HTML element become a React component? Why or why not?

### Question 8

Name three good reasons to extract something into a separate component.

---

# 29. Looking Ahead: Day 5 — Props

Currently, this:

```tsx
<BlogCard />
<BlogCard />
<BlogCard />
```

would display the same component structure/content.

The next question is:

> How can one reusable component receive different data?

For example:

```tsx
<BlogCard title="React Components" />
<BlogCard title="Understanding JSX" />
<BlogCard title="Learning Props" />
```

Day 5 will introduce Props, which allow data to flow from parent components to child components.

Components + Props together are a major foundation of React.

---

## Final Summary

The most important thing to remember from Day 4 is not the syntax.

It is this idea:

> A React application can be broken into meaningful pieces called components. Those components can be organized into a tree and composed together to build larger user interfaces.

And good component design requires judgment:

> Don't split everything. Split meaningful things.
