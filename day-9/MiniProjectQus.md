
# Day 9 — React Fundamentals Integration Project

## Project: Student Dashboard

Build a simple **Student Dashboard** using the React fundamentals learned so far.

### Requirements

Create a React application that displays a list of students and their information.

Each student should have:

* `id`
* `name`
* `department`
* `isActive`

Example:

```ts
{
  id: 1,
  name: "Ifty",
  department: "CSE",
  isActive: true,
}
```

## Features to Implement

### 1. Component Structure

Create the following components:

* `Header`
* `DashboardSummary`
* `StudentCard`
* `Footer`

Use these components inside the main `App` component.

---

### 2. Student List

Store at least 3 students in an array.

Render the students dynamically using:

```tsx
students.map()
```

Use each student's unique `id` as the React key.

---

### 3. Student Card

Each student card should display:

* Student name
* Department
* Status (`Active` or `Inactive`)

Use conditional rendering to display the correct status.

---

### 4. Dashboard Summary

Display the following information dynamically:

* Total Students
* Active Students
* Inactive Students

Calculate these values from the students array.

Pass the calculated values to the `DashboardSummary` component through props.

---

### 5. Dynamic Button

Each student should have a button.

If the student is active:

```text
Enter Portal
```

If the student is inactive:

```text
View Details
```

The button label should be determined dynamically based on the student's status.

---

### 6. Button Interaction

When a student clicks the button:

* Active student:

```text
Hello, [Name]. Welcome to your portal!
```

* Inactive student:

```text
Hello, [Name]. Your account is currently inactive.
```

Use event handling and callback props.

Pass the necessary student information directly to the callback function. Do not search the students array again using `.find()`.

---

### 7. Footer

Display the total number of students dynamically.

Example:

```text
Total Students: 5
```

Do not hardcode the number.

---

## Concepts Practiced

This project should demonstrate understanding of:

* JSX
* Components
* Component composition
* Props
* TypeScript prop types
* Events
* Callback functions
* Conditional rendering
* List rendering with `.map()`
* Filtering data with `.filter()`
* Array `.length`
* React keys
* One-way data flow

---

