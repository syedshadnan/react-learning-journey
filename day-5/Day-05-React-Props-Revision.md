# Day 5 — React Props Revision ⚛️

## Purpose

This revision file summarizes the important concepts learned during Day 5: **Props**.

The goal is to reinforce the mental model, syntax, data flow, and practical usage of props without repeating the entire lesson.

---

# 1. What Problem Do Props Solve?

Components allow us to reuse UI.

Without props:

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

If we use this component multiple times:

```tsx
<Profile />
<Profile />
<Profile />
```

Every instance displays the same fixed data.

Props solve this problem by allowing the same component structure to receive different data.

```tsx
<Profile name="Ifty" />
<Profile name="Rahim" />
<Profile name="Karim" />
```

## Mental Model

```text
Same Component Structure
        +
Different Props
        ↓
Different UI
```

Props make reusable components flexible.

---

# 2. Props Are Data Passed From Parent to Child

Example:

```tsx
function App() {
  return <User name="Ifty" age={22} />;
}
```

`App` passes data to `User`.

Conceptually:

```text
App (Parent)
      │
      │ passes props
      ↓
User (Child)
```

Inside the `User` component, React conceptually provides:

```ts
props = {
  name: "Ifty",
  age: 22
};
```

---

# 3. Accessing Props

Props can be accessed using the `props` object.

```tsx
function User(props: { name: string }) {
  return <h1>{props.name}</h1>;
}
```

Here:

```tsx
props.name
```

accesses the `name` prop.

---

# 4. Props Destructuring

Because props are objects, JavaScript object destructuring can be used.

Instead of:

```tsx
function User(props: { name: string }) {
  return <h1>{props.name}</h1>;
}
```

We can write:

```tsx
function User({ name }: { name: string }) {
  return <h1>{name}</h1>;
}
```

These are functionally equivalent.

## Mental Model

This:

```tsx
function User({ name })
```

conceptually extracts:

```ts
const { name } = props;
```

Destructuring is a JavaScript concept, not React-specific magic.

---

# 5. Different Types of Props

Props can contain different JavaScript values.

```tsx
<User
  name="Ifty"
  age={22}
  isStudent={true}
/>
```

Conceptually:

```ts
props = {
  name: "Ifty",
  age: 22,
  isStudent: true
};
```

Types:

```text
name       → string
age        → number
isStudent  → boolean
```

---

# 6. JSX Values and Curly Braces

A string can be passed directly:

```tsx
name="Ifty"
```

A JavaScript value is evaluated using curly braces:

```tsx
age={22}
isStudent={true}
```

The `{}` means:

> Evaluate JavaScript here.

Examples:

```tsx
age={20 + 2}

age={userAge}

isStudent={true}
```

---

# 7. Boolean Values in JSX

Strings and numbers can visibly render:

```tsx
<p>{"Hello"}</p>
```

Displays:

```text
Hello
```

```tsx
<p>{22}</p>
```

Displays:

```text
22
```

But booleans do not directly render as visible text:

```tsx
<p>{true}</p>
```

```tsx
<p>{false}</p>
```

They produce no visible text.

Later, booleans will become useful for conditional rendering.

---

# 8. Required Props

In TypeScript:

```ts
{
  name: string;
  age: number;
}
```

Both props are required.

So:

```tsx
<User name="Ifty" age={22} />
```

is valid.

But:

```tsx
<User name="Ifty" />
```

causes a TypeScript error because `age` is required.

---

# 9. Optional Props

A prop can be marked optional using `?`.

```ts
{
  name: string;
  role?: string;
}
```

Now `role` may or may not be provided.

Both are valid:

```tsx
<User name="Ifty" role="Developer" />
```

```tsx
<User name="Rahim" />
```

## Mental Model

```text
role: string
     ↓
Must be provided

role?: string
     ↓
May be omitted
```

---

# 10. Default Prop Values

A component can provide a default value.

```tsx
function User(
  { name, role = "Student" }: {
    name: string;
    role?: string;
  }
) {
  return <h1>{name} - {role}</h1>;
}
```

If:

```tsx
<User name="Ifty" role="Developer" />
```

Output:

```text
Ifty - Developer
```

If:

```tsx
<User name="Rahim" />
```

Output:

```text
Rahim - Student
```

## Important Distinction

Optional prop:

```ts
role?: string
```

means:

> The parent may omit this prop.

Default value:

```tsx
role = "Student"
```

means:

> Use this value if the prop is missing or `undefined`.

These concepts are related but not identical.

---

# 11. Props Are Read-Only

A child component receives props from its parent.

```text
Parent
   ↓
Props
   ↓
Child
```

The child should read and use props, but should not directly modify them.

Bad idea:

```tsx
function User(props: { name: string }) {
  props.name = "Rahim";

  return <h1>{props.name}</h1>;
}
```

Props belong to the parent data flow.

The child should not decide to directly change the received data.

---

# 12. One-Way Data Flow

React follows a parent-to-child data flow.

```text
Parent
   │
   │ provides data
   ↓
Child
```

Example:

```tsx
function App() {
  return <User name="Ifty" />;
}
```

`App` provides the data.

`User` receives and uses it.

If the name needs to change, the parent should provide a different value.

```tsx
<User name="Rahim" />
```

Important principle:

> A child cannot directly modify the props it receives, but the parent can provide different prop values.

---

# 13. The `children` Prop

`children` is also a prop.

When content is placed between a component's opening and closing tags:

```tsx
<Card>
  Hello World
</Card>
```

React provides that content to the component as:

```ts
props = {
  children: "Hello World"
};
```

---

# 14. JSX as Children

Children can also contain JSX elements.

```tsx
<Card>
  <h1>React</h1>
  <p>I am learning props.</p>
</Card>
```

Conceptually, the content inside the tags becomes the `children` prop.

The important idea is:

```text
Content inside component tags
            ↓
children prop
            ↓
Child component receives it
```

---

# 15. Rendering Children

Example:

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>My Card</h2>

      {children}
    </div>
  );
}
```

Usage:

```tsx
<Card>
  <p>Hello Ifty</p>
  <button>Learn React</button>
</Card>
```

Visible result:

```text
My Card

Hello Ifty

[Learn React]
```

---

# 16. Who Controls `children`?

This is an important component design concept.

```text
Parent decides WHAT content to pass.

Child decides WHERE to render it.
```

Example:

```tsx
function App() {
  return (
    <ProfileCard>
      <p>Hello</p>
    </ProfileCard>
  );
}
```

`App` provides:

```tsx
<p>Hello</p>
```

But `ProfileCard` decides where it appears:

```tsx
function ProfileCard({ children }: Props) {
  return (
    <div>
      {children}

      <h1>Profile</h1>
    </div>
  );
}
```

The child controls its own UI structure.

---

# 17. Self-Closing Components and Children

Self-closing:

```tsx
<Card />
```

No children are provided.

Opening and closing tags:

```tsx
<Card>
  Hello
</Card>
```

Children are provided.

If:

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Card</h1>
      {children}
    </div>
  );
}
```

Then:

```tsx
<Card />
```

displays only:

```text
Card
```

because `{children}` has no visible content.

---

# 18. Complete Props Example

```tsx
type ProfileCardProps = {
  name: string;
  age: number;
  role?: string;
  children: React.ReactNode;
};

function ProfileCard({
  name,
  age,
  role = "Student",
  children,
}: ProfileCardProps) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>

      {children}
    </>
  );
}

function App() {
  return (
    <>
      <ProfileCard name="Ifty" age={22}>
        <p>I am learning React.</p>
      </ProfileCard>

      <ProfileCard
        name="Rahim"
        age={25}
        role="Developer"
      >
        <button>View Profile</button>
      </ProfileCard>
    </>
  );
}

export default App;
```

This example combines:

* Required props
* Optional props
* Default values
* TypeScript types
* Props destructuring
* `children`
* Parent → child data flow
* Component reuse

---

# 19. Core Props Mental Model

```text
Parent Component
       │
       │ passes data
       ↓
Reusable Child Component
       │
       │ receives props
       ↓
Props Object
       │
       ├── name
       ├── age
       ├── role
       └── children
       │
       ↓
Component creates UI using that data
```

Different props:

```text
Same Component
       +
Different Data
       ↓
Different UI
```

---

# 20. Common Mistakes to Avoid

### Mistake 1: Thinking props are fixed forever

Incorrect:

> Props can never change.

Correct:

> The child cannot directly change props, but the parent can provide different prop values.

---

### Mistake 2: Confusing parent and child direction

Correct flow:

```text
Parent → Props → Child
```

Not:

```text
Child → Props → Parent
```

---

### Mistake 3: Thinking `children` is unrelated to props

`children` is a prop.

It is special because React automatically provides it from content placed between component tags.

---

### Mistake 4: Confusing optional props with default values

```ts
role?: string
```

Allows omission.

```tsx
role = "Student"
```

Provides a fallback.

They solve different problems.

---

### Mistake 5: Thinking `{}` means "number syntax"

Incorrect:

> `{}` makes a value a number.

Correct:

> `{}` evaluates a JavaScript expression inside JSX.

---

# 21. Quick Self-Test

Try answering these without looking at the previous sections.

### Question 1

What problem do props solve?

### Question 2

What is the direction of props data flow?

### Question 3

What does this conceptually receive?

```tsx
<User name="Ifty" age={22} />
```

### Question 4

What is the difference between:

```tsx
props.name
```

and:

```tsx
{ name }
```

in a component parameter?

### Question 5

What does `?` mean here?

```ts
role?: string
```

### Question 6

What is the difference between:

```ts
role?: string
```

and:

```tsx
role = "Student"
```

### Question 7

Can a child directly modify a prop?

Why or why not?

### Question 8

What becomes the `children` prop here?

```tsx
<Card>
  <p>Hello</p>
</Card>
```

### Question 9

Who decides what content is passed as children?

### Question 10

Who decides where children appear inside the UI?

---

# Final Summary

Props allow components to receive external data.

The most important mental model is:

```text
Parent provides data
        ↓
Child receives props
        ↓
Child uses props to build UI
```

Props make components reusable because the same component structure can receive different values.

`children` follows the same prop system:

```text
Parent decides WHAT to pass
        ↓
Child receives children
        ↓
Child decides WHERE to render it
```

---

# Confidence Check

Current confidence:

```text
Props: 4/5
```

The goal is not yet memorization.

Future topics such as Events, Conditional Rendering, Lists, and State will naturally reinforce the Props mental model.

---

## Next Topic

# Day 6 — React Events

The next question is:

> How does a React application respond when the user interacts with the UI?

Upcoming concepts include:

* `onClick`
* Event handlers
* Passing functions
* Events + props
