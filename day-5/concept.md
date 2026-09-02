# ⚛️ React Learning Journey — Day 5: Props

I checked the full master source before starting. Your actual progress is:

* Day 1: React Mental Model ✅
* Day 2: Project Setup ✅
* Day 3: JSX ✅
* Day 4: Components ✅
* Current confidence: roughly 4/5
* Next correct topic: **Props**

Your Day 4 component understanding is especially important because Props directly answer the next question:

> **If I reuse the same component multiple times, how can each version display different data?**

The master source confirms this is exactly the next learning step. 

---

# Part 1: The Problem Props Solve

Let's revisit component reuse.

Imagine this:

```tsx
function Profile() {
  return (
    <div>
      <h2>Ifty</h2>
      <p>Student</p>
    </div>
  );
}
```

Now we use it:

```tsx
function App() {
  return (
    <>
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}
```

All three profiles show:

```text
Ifty
Student

Ifty
Student

Ifty
Student
```

But what if we want:

```text
Ifty — Student
Rahim — Developer
Karim — Designer
```

We want to reuse the same **Profile component structure**, but give each component **different data**.

Without Props, our component is fixed.

That is the problem Props solve.

---

# Part 2: The Core Mental Model

Think of a component as a function.

In normal JavaScript:

```ts
function greet(name: string) {
  return `Hello ${name}`;
}

greet("Ifty");
greet("Rahim");
```

Same function.

Different input.

Different output.

Props work similarly.

A React component receives information from its parent.

```tsx
<Profile name="Ifty" />
```

Here:

```text
Parent
   ↓
passes data
   ↓
Child Component
   ↓
uses that data to create UI
```

The data passed into a component is called:

# Props

---

# Part 3: First Props Example

Parent:

```tsx
function App() {
  return <Profile name="Ifty" />;
}
```

Child:

```tsx
function Profile(props: { name: string }) {
  return <h1>{props.name}</h1>;
}
```

Result:

```text
Ifty
```

Let's break this carefully.

---

## Step 1: Parent passes data

```tsx
<Profile name="Ifty" />
```

This looks similar to an HTML attribute.

But conceptually:

```text
name="Ifty"
```

is data being passed into the `Profile` component.

---

## Step 2: Component receives props

```tsx
function Profile(props: { name: string }) {
```

React gives the component an object containing the props.

Conceptually:

```ts
props = {
  name: "Ifty"
}
```

---

## Step 3: Access the data

```tsx
<h1>{props.name}</h1>
```

So:

```text
props.name
↓
"Ifty"
↓
displayed in JSX
```

---

# Important Connection to Your Previous Learning

You already learned this:

```tsx
const name = "Ifty";

<h1>{name}</h1>
```

Props are also JavaScript data.

The difference is where the data comes from.

### Normal variable

```tsx
const name = "Ifty";
```

The component creates or owns that variable.

### Prop

```tsx
<Profile name="Ifty" />
```

Another component passes the data into this component.

That distinction will become very important later.

---

# Part 4: Why Props Make Components Reusable

Now:

```tsx
function App() {
  return (
    <>
      <Profile name="Ifty" />
      <Profile name="Rahim" />
      <Profile name="Karim" />
    </>
  );
}
```

And:

```tsx
function Profile(props: { name: string }) {
  return <h2>{props.name}</h2>;
}
```

Output:

```text
Ifty
Rahim
Karim
```

Same component.

Same structure.

Different data.

This is the real power of reusable components.

---

# Mental Model

Think of a component as a template.

```text
Profile Component
┌─────────────────┐
│ Name: {name}    │
│ Role: {role}    │
└─────────────────┘
```

Props provide the values.

```text
<Profile
  name="Ifty"
  role="Student"
/>
```

becomes:

```text
Name: Ifty
Role: Student
```

Another use:

```tsx
<Profile
  name="Rahim"
  role="Developer"
/>
```

becomes:

```text
Name: Rahim
Role: Developer
```

Same blueprint.

Different input.

---

# Part 5: Your First Reasoning Challenge

Don't write code yet.

Look at this:

```tsx
function App() {
  return (
    <>
      <User name="Ifty" age={22} />
      <User name="Rahim" age={25} />
    </>
  );
}
```

Assume the `User` component receives these props.

### Answer these three questions:

1. What problem are props solving here?
2. What would the props object conceptually look like inside the first `User` component?
3. Why is `age={22}` written with `{}` while `name="Ifty"` does not need `{}`?

Take your time and reason from what you learned in JSX and components. Don't worry if the answer isn't perfect.
