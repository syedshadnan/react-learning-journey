# ⚛️ React Learning Journey — Day 9 Revision

# React Fundamentals Integration Project

## Day Goal

Until Day 8, React concepts were learned mostly individually:

- JSX
- Components
- Props
- Events
- Conditional Rendering
- Lists
- Keys

Day 9 was different.

The goal was not to learn a completely new React feature.

The goal was to combine everything learned so far into one small project and answer this question:

> Can I use multiple React fundamentals together to build a small application?

The project built today was a **Student Dashboard**.

---

# 1. The Main Project: Student Dashboard

We created an application that displays students dynamically.

Each student contains:

```ts
{
  id: 1,
  name: "Ifty",
  department: "CSE",
  isActive: true,
}
```

The project included:

- A Header
- A Dashboard Summary
- Multiple Student cards
- Conditional status
- Conditional button labels
- Button interactions
- A Footer
- Dynamic calculations

---

# 2. Final Component Structure

The project structure was conceptually:

```text
App
│
├── Header
│
├── DashboardSummary
│
├── Student
├── Student
├── Student
│
└── Footer
```

`App` coordinates the application.

The child components are responsible for displaying specific parts of the UI.

---

# 3. Student Data

We started with a normal JavaScript array:

```ts
const students = [
  {
    id: 1,
    name: "Ifty",
    department: "CSE",
    isActive: true,
  },
  {
    id: 2,
    name: "Rahim",
    department: "EEE",
    isActive: false,
  },
  {
    id: 3,
    name: "Jakir",
    department: "BBA",
    isActive: true,
  },
];
```

This array is the source of information for the dashboard.

React reads this data and uses it to create the UI.

---

# 4. Important: Static Data vs React State

Currently:

```ts
const students = [...]
```

is just normal JavaScript data.

It is not React State.

React can read this data and display it.

However, if we want the data to change and automatically update the UI, normal variables are not enough.

For example:

```text
Student is Active
        ↓
User clicks button
        ↓
Student becomes Inactive
        ↓
UI should update automatically
```

Our current project cannot properly manage this yet.

Why?

Because React needs a mechanism to know:

> The data changed. Please render the UI again.

That mechanism is called **State**, which is the next major topic.

---

# 5. Header Component

We created a simple reusable Header component.

```tsx
function Header() {
  return <h1>Student Dashboard</h1>;
}
```

Then inside App:

```tsx
<Header />
```

This is component composition.

Instead of writing everything inside one large component, we split the UI into smaller components.

---

# 6. Component Composition

Component composition means:

> Building a larger UI by combining smaller React components.

Example:

```tsx
function App() {
  return (
    <div>
      <Header />
      <DashboardSummary />

      <Student />
      <Student />
      <Student />

      <Footer />
    </div>
  );
}
```

Conceptually:

```text
Small Components
       ↓
Combined together
       ↓
Larger Application
```

React applications are usually built this way.

---

# 7. Student Component

We created a reusable component for displaying a student.

Instead of manually writing:

```text
Ifty
CSE
Active

Rahim
EEE
Inactive

Jakir
BBA
Active
```

we created one reusable component.

Conceptually:

```tsx
<Student />
```

Then React creates multiple instances of it with different data.

---

# 8. Props

The Student component needs information.

For example:

- name
- department
- isActive

That information comes from the parent.

```tsx
<Student
  name={student.name}
  department={student.department}
  isActive={student.isActive}
/>
```

The component receives those values:

```tsx
function Student({ name, department, isActive }) {
```

Mental model:

```text
Parent
  │
  │ sends data through props
  ↓
Child
```

Props allow parent components to give data to child components.

---

# 9. TypeScript Props

Because we are using TypeScript, we defined the shape of the props.

Example:

```tsx
type StudentCardProps = {
  name: string;
  department: string;
  isActive: boolean;
};
```

This means:

```text
name       → must be a string
department → must be a string
isActive   → must be a boolean
```

Then:

```tsx
function Student({
  name,
  department,
  isActive,
}: StudentCardProps) {
```

This makes the component safer.

TypeScript can catch mistakes such as:

```tsx
<Student name={123} />
```

because `name` should be a string.

---

# 10. Conditional Rendering

Students can have two statuses:

```text
Active
Inactive
```

The value is:

```ts
isActive
```

which is a boolean.

Example:

```ts
true
false
```

We used a ternary operator:

```tsx
<h2>{isActive ? "Active" : "Inactive"}</h2>
```

Mental model:

```text
isActive?

true
  ↓
Active

false
  ↓
Inactive
```

A ternary is useful when there are exactly two UI possibilities.

General pattern:

```tsx
condition ? valueIfTrue : valueIfFalse
```

Example:

```tsx
isLoggedIn ? "Logout" : "Login"
```

---

# 11. Rendering Multiple Students with map()

We have an array:

```ts
const students = [
  {...},
  {...},
  {...},
];
```

Instead of manually writing multiple Student components:

```tsx
<Student />
<Student />
<Student />
```

we use `.map()`.

```tsx
{students.map((student) => (
  <Student
    key={student.id}
    name={student.name}
    department={student.department}
    isActive={student.isActive}
  />
))}
```

Mental model:

```text
students array
      ↓
.map()
      ↓
First student → Student component
Second student → Student component
Third student → Student component
```

`.map()` transforms data into UI.

This is one of the most important React patterns.

---

# 12. React Keys

When rendering lists:

```tsx
students.map(...)
```

React requires a key.

We used:

```tsx
key={student.id}
```

Example:

```tsx
{students.map((student) => (
  <Student
    key={student.id}
  />
))}
```

The key belongs on the component directly returned from `.map()`.

Correct:

```tsx
students.map((student) => (
  <Student key={student.id} />
))
```

Why?

React uses keys to identify items between renders.

A key should ideally be:

```text
Unique
Stable
Connected to the actual data
```

Good:

```tsx
key={student.id}
```

Less recommended:

```tsx
key={index}
```

because array positions can change.

---

# 13. Events

We added a button:

```tsx
<button>Click</button>
```

Then attached an event:

```tsx
<button onClick={handleButton}>
  Click
</button>
```

React listens for the click.

Mental model:

```text
User clicks
     ↓
React event runs
     ↓
Function executes
```

---

# 14. Passing Functions as Props

This was one of the most important concepts practiced today.

The parent component has a function:

```tsx
function handleButton(name: string, isActive: boolean) {
  // logic
}
```

The parent passes the function to the child:

```tsx
<Student onView={handleButton} />
```

Important:

```tsx
onView={handleButton}
```

We pass the function itself.

We do NOT immediately call it.

Wrong:

```tsx
onView={handleButton()}
```

That would execute the function immediately.

Correct:

```tsx
onView={handleButton}
```

This gives the child access to the function.

---

# 15. Callback Props

A callback prop is a function passed from a parent to a child.

Example:

```text
App
 │
 │ passes handleButton
 ↓
Student
```

Inside App:

```tsx
function handleButton(name: string, isActive: boolean) {
  alert("Something happened");
}
```

Passed to Student:

```tsx
<Student onView={handleButton} />
```

Student receives:

```tsx
function Student({ onView }) {
```

The child can now call the parent's function.

---

# 16. How Child Components Communicate Upward

Props normally move downward:

```text
Parent
   ↓
Child
```

But what happens when a child needs to notify the parent?

Example:

```text
Student button clicked
```

The child cannot directly modify the parent.

Instead:

```text
Parent creates function
        ↓
Parent passes function to Child
        ↓
Child calls function
        ↓
Parent function runs
```

This is the callback pattern.

Visual model:

```text
App
 │
 │ gives callback function
 ↓
Student
 │
 │ user clicks button
 │
 │ calls callback
 ↓
App function executes
```

This is how child components can communicate user actions upward.

---

# 17. Passing Arguments Through Callback Functions

Our Student component needed to tell App:

- Which student clicked
- Whether that student is active

So we defined:

```tsx
onView: (name: string, isActive: boolean) => void;
```

This means:

> onView is a function that receives a name and an isActive boolean.

Inside Student:

```tsx
<button onClick={() => onView(name, isActive)}>
  {label}
</button>
```

Suppose the student is:

```ts
{
  name: "Ifty",
  isActive: true
}
```

Clicking the button effectively does:

```tsx
onView("Ifty", true)
```

Since:

```text
onView = handleButton
```

React effectively calls:

```tsx
handleButton("Ifty", true)
```

---

# 18. The Complete Callback Flow

This is the complete mental model.

## Step 1

App creates:

```tsx
function handleButton(name, isActive) {
```

## Step 2

App passes it:

```tsx
<Student onView={handleButton} />
```

## Step 3

Student receives:

```tsx
onView
```

## Step 4

User clicks:

```tsx
onClick={() => onView(name, isActive)}
```

## Step 5

The parent function receives:

```text
name
isActive
```

Full visual flow:

```text
App

handleButton(name, isActive)

        │
        │ passed as prop
        ↓

Student

onView

        │
        │ button clicked
        ↓

onView(name, isActive)

        │
        │ calls original function
        ↓

handleButton(name, isActive)

        │
        ↓

Alert shown
```

---

# 19. Why We Used an Arrow Function in onClick

This:

```tsx
onClick={() => onView(name, isActive)}
```

is important.

We need to call the function later, when the user clicks.

Wrong:

```tsx
onClick={onView(name, isActive)}
```

This would immediately call the function while React renders.

Correct:

```tsx
onClick={() => onView(name, isActive)}
```

The arrow function waits.

Mental model:

```text
React renders button
       ↓
Does NOT call onView yet
       ↓
User clicks
       ↓
Arrow function runs
       ↓
onView(name, isActive)
```

---

# 20. The First Version of the Button Logic

Initially, the button only sent the student's name.

Example:

```tsx
onView(name)
```

Then App received the name and searched the array:

```tsx
function handleButton(name: string) {
  const student = students.find(
    (student) => student.name === name
  );
}
```

Then:

```tsx
student.isActive
```

was used to determine the message.

This worked.

But it was unnecessarily indirect.

Flow:

```text
Student
   ↓
Sends name
   ↓
App
   ↓
Searches students array
   ↓
Finds student
   ↓
Gets isActive
```

---

# 21. Why the First Approach Could Be Improved

The Student component already has:

```text
name
isActive
```

So there was no need to send only:

```text
name
```

and then search the array again.

Also, searching by name can create bugs.

Imagine:

```text
Rahim
Rahim
```

Two students can have the same name.

The `.find()` method would return the first matching student.

That is why unique IDs usually exist.

---

# 22. Improved Callback Design

Instead of:

```tsx
handleButton(name)
```

we changed it to:

```tsx
handleButton(name, isActive)
```

The function:

```tsx
function handleButton(name: string, isActive: boolean) {
  alert(
    isActive
      ? `Hello, ${name}. Welcome to your portal!`
      : `Hello, ${name}. Your account is currently inactive.`
  );
}
```

Now there is no search.

No `.find()`.

The function receives exactly what it needs.

Better flow:

```text
Student already has information
        ↓
Sends necessary information
        ↓
Parent uses information directly
```

Important lesson:

> A callback function should ideally receive the information it actually needs instead of forcing another component to search for that information again.

---

# 23. Dynamic Button Labels

The button label changes depending on student status.

Requirement:

```text
Active student
     ↓
Enter Portal

Inactive student
     ↓
View Details
```

We used:

```tsx
label={
  student.isActive
    ? "Enter Portal"
    : "View Details"
}
```

Then Student displays:

```tsx
<button>{label}</button>
```

This separates:

```text
Decision about label
        ↓
App/map logic

Display of label
        ↓
Student component
```

This approach works.

---

# 24. Dashboard Summary

We created:

```tsx
DashboardSummary
```

The component displays:

```text
Total Students
Active Students
Inactive Students
```

The props type:

```tsx
type SummaryProps = {
  totalStudents: number;
  activeStudents: number;
  inactiveStudents: number;
};
```

Then:

```tsx
function DashboardSummary({
  totalStudents,
  activeStudents,
  inactiveStudents,
}: SummaryProps) {
```

The component only displays the information.

It does not need to know how the numbers were calculated.

---

# 25. Calculating Total Students

We used:

```ts
students.length
```

Example:

```ts
const students = [
  {...},
  {...},
  {...},
];
```

Then:

```ts
students.length
```

returns:

```text
3
```

Important principle:

> Derive values from existing data instead of hardcoding duplicate values.

Bad:

```tsx
Total Students: 3
```

If another student is added, this becomes incorrect.

Better:

```tsx
Total Students: {students.length}
```

Now it updates based on the array.

---

# 26. Calculating Active Students

We used:

```tsx
students.filter(
  (student) => student.isActive
).length
```

Let's understand it.

Suppose:

```ts
[
  { name: "Ifty", isActive: true },
  { name: "Rahim", isActive: false },
  { name: "Jakir", isActive: true },
]
```

First:

```ts
students.filter((student) => student.isActive)
```

returns:

```ts
[
  { name: "Ifty", isActive: true },
  { name: "Jakir", isActive: true },
]
```

Then:

```ts
.length
```

returns:

```text
2
```

So:

```text
students
   ↓
filter active students
   ↓
new array
   ↓
length
   ↓
2
```

---

# 27. Calculating Inactive Students

We used:

```tsx
students.filter(
  (student) => !student.isActive
).length
```

The `!` means NOT.

So:

```ts
!true
```

becomes:

```ts
false
```

And:

```ts
!false
```

becomes:

```ts
true
```

Therefore:

```tsx
!student.isActive
```

means:

> Select students whose isActive value is false.

---

# 28. Calculate Before JSX vs Inside JSX

We initially wrote calculations directly inside JSX:

```tsx
<DashboardSummary
  totalStudents={students.length}
  activeStudents={
    students.filter((student) => student.isActive).length
  }
  inactiveStudents={
    students.filter((student) => !student.isActive).length
  }
/>
```

This works.

But another approach is:

```tsx
const totalStudents = students.length;

const activeStudents = students.filter(
  (student) => student.isActive
).length;

const inactiveStudents = students.filter(
  (student) => !student.isActive
).length;
```

Then:

```tsx
<DashboardSummary
  totalStudents={totalStudents}
  activeStudents={activeStudents}
  inactiveStudents={inactiveStudents}
/>
```

Both approaches are valid.

For readability, calculating before `return` can sometimes be easier.

Mental structure:

```text
Calculate data
      ↓
Prepare values
      ↓
Return JSX
```

---

# 29. Footer

The Footer displayed:

```text
Total Students: X
```

Example:

```tsx
function Footer() {
  return (
    <footer>
      <p>Total Students: {students.length}</p>
    </footer>
  );
}
```

This works because the `students` array is currently available at module level.

---

# 30. Data Ownership Discussion

We discussed two approaches.

## Approach A

Every component directly accesses:

```ts
students
```

Example:

```text
App → students

Footer → directly accesses students

Other component → directly accesses students
```

This can work for small static applications.

---

## Approach B

App calculates values and passes them through props.

Example:

```text
students
   ↓
App calculates
   ↓
Props
   ↓
Child components
```

For example:

```tsx
<Footer totalStudents={students.length} />
```

Then:

```tsx
function Footer({ totalStudents }) {
  return <p>Total Students: {totalStudents}</p>;
}
```

---

# 31. Why Explicit Props Can Be Better

Passing necessary values explicitly can make the application:

- More predictable
- Easier to debug
- Easier to understand
- More reusable

The component does not secretly depend on an external variable.

Instead:

```text
Component says:
Give me the data I need.
I will display it.
```

This makes dependencies clear.

---

# 32. Important Correction: Don't Put Everything in App

It is tempting to think:

> All data should always be stored in App.

This is not always correct.

Large applications can become messy if App owns everything.

Better principle:

> Keep data in the component that should own it, or in the closest common parent that needs to coordinate sharing that data.

This idea will become much more important when learning:

- State
- Lifting State Up
- Context API
- Redux

---

# 33. The StudentList Problem We Initially Skipped

During today's lesson, another architecture challenge was introduced.

The original idea was to move the `.map()` logic out of App.

Current structure:

```text
App
 │
 │ students.map()
 ↓
Student
Student
Student
```

Alternative structure:

```text
App
 │
 ├── Header
 │
 └── StudentList
        │
        ├── Student
        ├── Student
        └── Student
```

At first this was confusing, so we paused it.

Now let's understand it properly.

---

# 34. Why Create a StudentList Component?

Currently App does:

1. Coordinates the application
2. Renders Header
3. Calculates summary
4. Maps students
5. Creates Student components
6. Renders Footer

As an application grows, App can become large.

We can give one responsibility to another component.

`StudentList` can have one job:

> Receive students and render the student list.

---

# 35. StudentList Architecture

Concept:

```text
App
 │
 │ students array
 ↓
StudentList
 │
 │ individual student data
 ↓
Student
```

App:

```tsx
<StudentList students={students} />
```

StudentList receives:

```tsx
function StudentList({ students }) {
```

Then StudentList maps:

```tsx
students.map((student) => (
  <Student />
))
```

---

# 36. Basic StudentList Example

First define the student type.

```tsx
type StudentType = {
  id: number;
  name: string;
  department: string;
  isActive: boolean;
};
```

Then define props:

```tsx
type StudentListProps = {
  students: StudentType[];
};
```

Notice:

```tsx
StudentType[]
```

means:

> An array containing StudentType objects.

Now:

```tsx
function StudentList({
  students,
}: StudentListProps) {
  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          department={student.department}
          isActive={student.isActive}
        />
      ))}
    </div>
  );
}
```

Now App becomes:

```tsx
function App() {
  return (
    <div>
      <Header />

      <StudentList students={students} />

      <Footer />
    </div>
  );
}
```

---

# 37. Why This Can Be Useful

Responsibilities become clearer.

```text
App
→ Coordinates application

StudentList
→ Handles student list rendering

Student
→ Displays one student
```

Instead of one component doing everything.

---

# 38. The Harder Part: Passing Callback Through StudentList

This was the part that initially caused confusion.

Suppose:

```text
App
 ↓
StudentList
 ↓
Student
```

The click handler exists in App:

```tsx
function handleButton(name, isActive) {
}
```

But the button exists inside Student.

How does Student access the function?

Props only move directly between parent and child.

So:

```text
App cannot magically skip StudentList
and directly give a prop to Student.
```

The function must travel through StudentList.

---

# 39. Function Prop Flow Through Multiple Components

The flow becomes:

```text
App
 │
 │ handleButton
 ↓
StudentList
 │
 │ same function passed down
 ↓
Student
```

Step by step:

## App

```tsx
<StudentList
  students={students}
  onView={handleButton}
/>
```

StudentList receives:

```tsx
function StudentList({
  students,
  onView,
}) {
```

Then passes it to each Student:

```tsx
<Student
  onView={onView}
/>
```

Now Student receives it.

---

# 40. Full StudentList Example With Callback

First the types:

```tsx
type StudentType = {
  id: number;
  name: string;
  department: string;
  isActive: boolean;
};

type StudentListProps = {
  students: StudentType[];
  onView: (name: string, isActive: boolean) => void;
};
```

StudentList:

```tsx
function StudentList({
  students,
  onView,
}: StudentListProps) {
  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          department={student.department}
          isActive={student.isActive}
          onView={onView}
          label={
            student.isActive
              ? "Enter Portal"
              : "View Details"
          }
        />
      ))}
    </div>
  );
}
```

App:

```tsx
function App() {
  function handleButton(
    name: string,
    isActive: boolean
  ) {
    alert(
      isActive
        ? `Hello, ${name}. Welcome to your portal!`
        : `Hello, ${name}. Your account is currently inactive.`
    );
  }

  return (
    <div>
      <Header />

      <StudentList
        students={students}
        onView={handleButton}
      />

      <Footer />
    </div>
  );
}
```

---

# 41. Understanding the Multi-Level Data Flow

This is extremely important.

```text
App
 │
 │ students prop
 ▼
StudentList
 │
 │ individual student props
 ▼
Student
```

Data travels downward.

---

# 42. Understanding the Multi-Level Callback Flow

The function starts in App.

```text
App creates:

handleButton
     │
     │ passes function
     ▼
StudentList
     │
     │ passes same function
     ▼
Student
     │
     │ user clicks
     ▼
handleButton executes
```

StudentList does not necessarily run the function.

It can simply act as a middle component that receives and passes the function.

This pattern is sometimes called passing props through intermediate components.

Later, when applications become large, excessive prop passing can become inconvenient. That eventually leads to concepts such as:

- Context API
- State management libraries

But for now, props are the correct tool.

---

# 43. Full Project Mental Model

The Student Dashboard works like this:

```text
                    STUDENTS ARRAY
                          │
                          ▼
                         App
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
     Header       DashboardSummary       Students
                                            │
                                            ▼
                                      Student cards
                                            │
                                            ▼
                                      Button clicked
                                            │
                                            ▼
                                      Callback function
                                            │
                                            ▼
                                         App logic
```

---

# 44. One-Way Data Flow

React follows a predictable direction.

```text
Parent
   ↓
Props
   ↓
Child
```

In our project:

```text
App
 ↓
Student props
 ↓
Student
```

The child receives information.

When the child needs to notify the parent:

```text
Parent gives callback
       ↓
Child receives callback
       ↓
Child calls callback
```

So conceptually:

```text
DATA

Parent → Child


EVENT / USER ACTION

Child → Parent callback
```

This is a fundamental React mental model.

---

# 45. Current Project Limitation

Suppose we add this requirement:

> When "Enter Portal" is clicked, change the student from Active to Inactive.

Could our current project permanently update the UI?

No.

Why?

Because our student data is static:

```ts
const students = [...]
```

We can run functions.

We can show alerts.

But we currently don't have a React mechanism to tell React:

```text
Data changed
     ↓
Re-render UI
     ↓
Show updated information
```

That is exactly why State exists.

---

# 46. The Problem That State Will Solve

Current situation:

```text
students data
      ↓
React renders UI
      ↓
User clicks button
      ↓
Function runs
      ↓
But React data does not update
      ↓
UI stays the same
```

With State:

```text
State data
      ↓
React renders UI
      ↓
User action
      ↓
State changes
      ↓
React detects change
      ↓
Component re-renders
      ↓
Updated UI appears
```

This is the natural next step after Day 9.

---

# 47. Final Project Code Pattern

The overall architecture of today's project looked like:

```tsx
const students = [
  {
    id: 1,
    name: "Ifty",
    department: "CSE",
    isActive: true,
  },
  {
    id: 2,
    name: "Rahim",
    department: "EEE",
    isActive: false,
  },
];
```

Header:

```tsx
function Header() {
  return <h1>Student Dashboard</h1>;
}
```

Summary props:

```tsx
type SummaryProps = {
  totalStudents: number;
  activeStudents: number;
  inactiveStudents: number;
};
```

Student props:

```tsx
type StudentCardProps = {
  name: string;
  department: string;
  isActive: boolean;
  label: string;
  onView: (
    name: string,
    isActive: boolean
  ) => void;
};
```

Student:

```tsx
function Student({
  name,
  department,
  isActive,
  label,
  onView,
}: StudentCardProps) {
  return (
    <>
      <h1>{name}</h1>

      <h2>{department}</h2>

      <h2>
        {isActive ? "Active" : "Inactive"}
      </h2>

      <button
        onClick={() => onView(name, isActive)}
      >
        {label}
      </button>
    </>
  );
}
```

Parent handler:

```tsx
function handleButton(
  name: string,
  isActive: boolean
) {
  alert(
    isActive
      ? `Hello, ${name}. Welcome to your portal!`
      : `Hello, ${name}. Your account is currently inactive.`
  );
}
```

List rendering:

```tsx
{students.map((student) => (
  <Student
    key={student.id}
    name={student.name}
    department={student.department}
    isActive={student.isActive}
    onView={handleButton}
    label={
      student.isActive
        ? "Enter Portal"
        : "View Details"
    }
  />
))}
```

---

# 48. Mistakes / Improvements From Today

## 1. Component naming consistency

We used:

```tsx
type StudentCardProps
```

but the component was named:

```tsx
function Student()
```

This works.

But clearer consistency would be:

```tsx
type StudentCardProps

function StudentCard()
```

---

## 2. Naming count values

We initially used:

```tsx
totalStudent
activeStudent
inActiveStudent
```

These represent counts of multiple students.

Better:

```tsx
totalStudents
activeStudents
inactiveStudents
```

Plural names communicate meaning more clearly.

---

## 3. InActive vs Inactive

Better spelling:

```text
Inactive
```

rather than:

```text
InActive
```

---

## 4. Searching by name

We initially used:

```tsx
students.find(
  (student) => student.name === name
)
```

This worked but had two problems:

1. Unnecessary search
2. Names might not be unique

Improved solution:

Pass the required information directly:

```tsx
handleButton(name, isActive)
```

---

# 49. Day 9 Core Lessons

The biggest lessons from today are:

### Lesson 1

Individual React concepts become more useful when combined.

### Lesson 2

`.map()` transforms data into repeated UI.

### Lesson 3

Props move data from parent to child.

### Lesson 4

Callback props allow children to notify parents about user actions.

### Lesson 5

Conditional rendering allows the UI to react to data.

### Lesson 6

Values should be derived dynamically instead of hardcoded.

### Lesson 7

Components should ideally have clear responsibilities.

### Lesson 8

A component can receive a function and pass that same function to another child component.

### Lesson 9

Static JavaScript data can display UI, but changing UI dynamically requires React State.

---

# 50. Quick Self-Test

Before moving forward, try answering these without looking above.

### Question 1

What is the difference between:

```tsx
onClick={handleButton}
```

and:

```tsx
onClick={handleButton()}
```

---

### Question 2

Why do we write:

```tsx
onClick={() => onView(name, isActive)}
```

instead of immediately calling:

```tsx
onView(name, isActive)
```

during rendering?

---

### Question 3

Why is this better:

```tsx
handleButton(name, isActive)
```

than:

```tsx
handleButton(name)

→ students.find(...)
```

in our project?

---

### Question 4

What does this do?

```tsx
students.filter(
  (student) => student.isActive
).length
```

---

### Question 5

Why should we use:

```tsx
key={student.id}
```

instead of:

```tsx
key={index}
```

when possible?

---

### Question 6

How can a child component cause a parent function to run?

---

### Question 7

If the structure is:

```text
App
 ↓
StudentList
 ↓
Student
```

How can a function from App reach Student?

---

### Question 8

Why can't our current project permanently change a student's Active status and automatically update the UI?

---

# Day 9 Confidence Checklist

You should now feel reasonably comfortable with:

- [x] Creating components
- [x] Combining multiple components
- [x] Passing props
- [x] Typing props with TypeScript
- [x] Rendering lists
- [x] Using keys
- [x] Conditional rendering
- [x] Handling events
- [x] Passing callback functions
- [x] Sending arguments through callbacks
- [x] Using `.filter()`
- [x] Using `.length`
- [x] Calculating derived values
- [x] Understanding basic one-way data flow
- [x] Passing props through intermediate components

---

# Final Mental Model

Remember today's project like this:

```text
DATA
 │
 ▼
App
 │
 ├── calculates information
 │
 ├── passes data down
 │
 ▼
Child Components
 │
 │
 │ user interacts
 ▼
Callback Function
 │
 ▼
App Logic
```

And the next missing piece is:

```text
What happens when the data itself needs to change?
```

Answer:

# React State (`useState`)

---

# Next Topic

## State

The next learning session will focus on:

> How React remembers changing data and updates the UI when that data changes.

This will build directly on everything learned today.

The Student Dashboard was intentionally the final integration project before State because it exposes the exact limitation that State solves.