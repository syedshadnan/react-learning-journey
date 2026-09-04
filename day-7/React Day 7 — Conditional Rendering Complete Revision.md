# ⚛️ React Learning Journey — Day 7 Revision

# Topic: Conditional Rendering in React

---

# 1. What is Conditional Rendering?

Conditional rendering means:

> **Displaying different UI, elements, or components based on specific conditions.**

In a real application, the UI should not always look the same.

For example:

- Logged-in user → Dashboard
- Logged-out user → Login page
- Loading data → Loading screen
- API error → Error message
- Premium user → Premium features
- No notifications → Notification message disappears

React allows us to decide what UI should be displayed based on JavaScript conditions.

---

## Simple Mental Model

Conditional rendering combines:

```text
JavaScript conditions
+
React JSX
=
Dynamic UI
```

The basic idea is:

```text
Condition changes
       ↓
React evaluates the condition
       ↓
Different UI is rendered
```

For example:

```text
If user is logged in
→ Show Dashboard

If user is not logged in
→ Show Login
```

---

# 2. Conditional Rendering is About Conditions, Not Just Different Users

Initially, conditional rendering may sound like showing different UI to different users.

But the same user can also see different UI at different times.

For example:

```text
Before clicking a button
→ Show "Show Details"

After clicking
→ Show Details
```

Or:

```text
Loading
→ Show spinner

Data loaded
→ Show actual content
```

Or:

```text
Logged out
→ Show Login

Logged in
→ Show Profile
```

So conditional rendering means:

> **The UI changes according to the current condition or application state.**

Conditions can depend on:

- User actions
- User data
- Application state
- Loading status
- Error status
- Authentication status
- User roles
- Any JavaScript boolean expression

---

# 3. Conditional Rendering Methods

We learned three major ways to conditionally render UI:

1. `if` statements and early returns
2. Ternary operator `? :`
3. Logical AND `&&`

Each one solves a slightly different UI problem.

---

# PART 1 — TERNARY OPERATOR

# 4. What is a Ternary Operator?

A ternary operator is a JavaScript expression.

General structure:

```tsx
condition ? valueIfTrue : valueIfFalse
```

Meaning:

```text
Check condition

If true
→ use the first value

If false
→ use the second value
```

---

## Example

```tsx
const isAdmin = true;

isAdmin ? "Admin Dashboard" : "User Dashboard"
```

Step-by-step:

```text
Check isAdmin

isAdmin = true

Therefore choose:

"Admin Dashboard"
```

If:

```tsx
const isAdmin = false;
```

Then:

```text
"User Dashboard"
```

will be selected.

---

# 5. Ternary Operator Inside JSX

In React, we can use a ternary operator to decide what JSX should be rendered.

Example:

```tsx
function Dashboard() {
  const isAdmin = false;

  return (
    <div>
      <h1>
        {isAdmin ? "Admin Dashboard" : "User Dashboard"}
      </h1>
    </div>
  );
}
```

Since:

```tsx
isAdmin = false
```

The UI displays:

```text
User Dashboard
```

---

# 6. Why Do We Use `{}` Around a Ternary Inside JSX?

JSX allows us to write JavaScript expressions using curly braces:

```tsx
{}
```

For example:

```tsx
<h1>
  {isAdmin ? "Admin Dashboard" : "User Dashboard"}
</h1>
```

Inside the curly braces, React evaluates the JavaScript expression:

```tsx
isAdmin ? "Admin Dashboard" : "User Dashboard"
```

Then it renders the result.

---

## Mental Flow

```text
JSX sees {}
      ↓
Evaluate JavaScript expression
      ↓
Check condition
      ↓
Choose correct result
      ↓
Render the result
```

---

# Important Connection to Day 3 JSX

From JSX:

```text
{} allows JavaScript expressions to be evaluated inside JSX.
```

Conditional rendering uses this ability.

For example:

```tsx
{condition ? A : B}
```

The ternary is a JavaScript expression.

The curly braces allow JSX to evaluate it.

---

# 7. Ternary Can Render Elements, Not Just Text

We are not limited to strings.

Example:

```tsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
}
```

The condition decides between completely different JSX elements.

Conceptually:

```text
true
→ <h1>Welcome back!</h1>

false
→ <button>Log In</button>
```

---

# 8. Ternary Practice Example

```tsx
function App() {
  const hasNotification = true;

  return (
    <div>
      {hasNotification ? (
        <h1>You have new notifications</h1>
      ) : (
        <h2>No new notifications</h2>
      )}
    </div>
  );
}

export default App;
```

Since:

```tsx
hasNotification = true
```

React renders:

```tsx
<h1>You have new notifications</h1>
```

The false branch is not rendered.

---

# 9. Ternary Can Be Used Directly in Return

Consider:

```tsx
function App() {
  const isPremium = false;

  return isPremium ? <PremiumDashboard /> : <FreeDashboard />;
}
```

This is also valid.

---

## Why Are There No `{}` Here?

Because this code:

```tsx
return isPremium ? <PremiumDashboard /> : <FreeDashboard />;
```

is normal JavaScript.

We are not writing the ternary inside JSX.

Important distinction:

```text
Inside JSX
→ Use {} to evaluate JavaScript expressions

Outside JSX
→ Write normal JavaScript directly
```

---

# Ternary Decision Rule

Use a ternary when:

```text
There are two alternatives.

Condition true
→ UI A

Condition false
→ UI B
```

Example:

```tsx
isLoggedIn ? <Dashboard /> : <Login />
```

---

# PART 2 — IF STATEMENTS

# 10. React Components Are JavaScript Functions

A React component is a JavaScript function.

Example:

```tsx
function App() {
  return <h1>Hello</h1>;
}
```

Because it is a JavaScript function, we can use normal JavaScript logic before returning JSX.

This includes:

- `if`
- variables
- functions
- loops
- conditions

---

# 11. Conditional Rendering Using `if`

Example:

```tsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in</h1>;
}
```

Flow:

```text
Check isLoggedIn

true?
│
├── Yes
│   ↓
│ Return Welcome back
│
└── No
    ↓
    Continue
    ↓
    Return Please log in
```

---

# 12. Why Doesn't React Render Both Returns?

Example:

```tsx
function App() {
  const age = 15;

  if (age >= 18) {
    return <h1>You can access this content.</h1>;
  }

  return <h1>You are too young.</h1>;
}
```

Since:

```tsx
15 >= 18
```

is false, JavaScript skips the first return.

Then it reaches:

```tsx
return <h1>You are too young.</h1>;
```

The component displays:

```text
You are too young.
```

---

# Important JavaScript Rule

When a function executes `return`:

```text
Function returns a value
       ↓
Function execution ends
```

So:

```tsx
return <Something />;
```

does not just tell React what to display.

It also ends that component function execution.

---

# Example with True Condition

```tsx
function App() {
  const age = 20;

  if (age >= 18) {
    return <h1>You can access this content.</h1>;
  }

  return <h1>You are too young.</h1>;
}
```

Flow:

```text
20 >= 18
↓
true
↓
Execute first return
↓
Function ends
↓
Second return is never reached
```

---

# 13. Early Returns

This pattern is called an early return.

Example:

```tsx
function Profile() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <h1>Please log in first.</h1>;
  }

  return (
    <div>
      <h1>Welcome to your profile</h1>
      <p>Your personal information</p>
    </div>
  );
}
```

The logic says:

```text
If user cannot access normal UI
→ Return alternative UI immediately

Otherwise
→ Continue to normal UI
```

---

# 14. Logical NOT Operator `!`

We used:

```tsx
!isLoggedIn
```

The `!` symbol means logical NOT.

It reverses a boolean value.

Example:

```tsx
isLoggedIn = false
```

Then:

```tsx
!isLoggedIn
```

becomes:

```text
NOT false
↓
true
```

Similarly:

```text
!true
↓
false
```

---

# Example

```tsx
if (!isLoggedIn) {
  return <h1>Please log in</h1>;
}
```

Meaning:

> If the user is NOT logged in, return the login message.

---

# Alternative Without `!`

This:

```tsx
if (!isLoggedIn) {
  return <h1>Please log in</h1>;
}

return <Dashboard />;
```

can also be written as:

```tsx
if (isLoggedIn) {
  return <Dashboard />;
}

return <h1>Please log in</h1>;
```

Both are valid.

The difference is which condition you choose to handle first.

---

# PART 3 — LOGICAL AND `&&`

# 15. When Do We Use `&&`?

Sometimes we do not need two alternatives.

Example:

```text
If notifications exist
→ Show notification message

If notifications don't exist
→ Show nothing
```

This is a good use case for logical AND.

General pattern:

```tsx
condition && something
```

Inside JSX:

```tsx
{condition && <Component />}
```

---

# Example

```tsx
function App() {
  const hasNotification = true;

  return (
    <div>
      {hasNotification && <h1>You have new notifications!</h1>}
    </div>
  );
}
```

If:

```tsx
hasNotification = true
```

The `<h1>` renders.

If:

```tsx
hasNotification = false
```

The `<h1>` does not render.

Nothing appears in its place.

---

# Mental Model

```text
Condition true
→ Show the element

Condition false
→ Show nothing
```

---

# Example

```tsx
function App() {
  const isPremium = false;

  return (
    <div>
      <h1>Dashboard</h1>

      {isPremium && <button>Access Premium Features</button>}
    </div>
  );
}
```

Since:

```tsx
isPremium = false
```

The UI shows:

```text
Dashboard
```

The premium button does not appear.

---

# `&&` Decision Rule

Use `&&` when:

```text
Condition true
→ Show something

Condition false
→ Show nothing
```

Example:

```tsx
hasNotifications && <Notification />
```

---

# 16. Practical `&&` Example

```tsx
const App = () => {
  const isSaleActive = true;

  return (
    <>
      <h1>Product Store</h1>

      {isSaleActive && <h1>🔥 Sale is live!</h1>}
    </>
  );
};

export default App;
```

When:

```tsx
isSaleActive = true
```

UI:

```text
Product Store
🔥 Sale is live!
```

When:

```tsx
isSaleActive = false
```

UI:

```text
Product Store
```

The sale message disappears.

---

# 17. Comparing the Three Main Patterns

| Pattern | Structure | Best Use |
|---|---|---|
| `if` | `if (condition) return A` | Major UI decisions and multiple states |
| Ternary | `condition ? A : B` | Two alternatives |
| `&&` | `condition && A` | Show something or nothing |

---

# PART 4 — MULTIPLE UI STATES

# 18. Real Applications Have More Than Two States

Real applications often have states like:

```text
Loading
Error
Success
```

Example:

```tsx
function UserProfile() {
  const isLoading = false;
  const hasError = false;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <h1>User profile loaded!</h1>;
}
```

---

# Execution Order

React/JavaScript checks from top to bottom:

```text
Is loading?
│
├── Yes
│   → Loading UI
│
└── No
    ↓
    Is there an error?
    │
    ├── Yes
    │   → Error UI
    │
    └── No
        ↓
        Show Success UI
```

---

# 19. Why Check Loading First?

Imagine:

```tsx
const isLoading = true;
const isLoggedIn = false;
```

While the application is loading, it may not yet know the user's final authentication information.

Therefore, showing login UI immediately could be premature.

The logical process is:

```text
Loading first
↓
Wait until necessary information is available
↓
Then evaluate user-related conditions
```

---

# Important Concept

```text
Not loading ≠ successful
```

Just because loading has finished does not automatically mean success.

The request may have failed.

Therefore:

```text
Loading
↓
Finished
↓
Did an error occur?
├── Yes → Error UI
└── No → Success UI
```

---

# 20. Condition Priority

Example:

```tsx
if (isLoading) {
  return <Loading />;
}

if (hasError) {
  return <Error />;
}

return <Dashboard />;
```

The order matters because:

> The first matching early return wins.

When a return executes:

```text
Return
↓
Component function ends
↓
Remaining conditions are not checked
```

Therefore:

```text
Condition order = UI priority
```

---

# 21. Multiple State Practice Pattern

Example:

```tsx
function App() {
  const isLoading = false;
  const isLoggedIn = false;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoggedIn) {
    return <h1>Please log in</h1>;
  }

  return (
    <div>
      <h1>Welcome back!</h1>
      <p>You are successfully logged in.</p>
    </div>
  );
}
```

---

# Flow

Given:

```tsx
isLoading = false
isLoggedIn = false
```

Execution:

```text
Check isLoading
↓
false
↓
Continue

Check !isLoggedIn
↓
true
↓
Return Please log in
↓
Function ends
```

---

# 22. Unnecessary Fragment

Example:

```tsx
return (
  <>
    <div>
      <h1>Welcome</h1>
    </div>
  </>
);
```

This works.

But the Fragment is unnecessary because there is already one root element:

```tsx
<div>
```

Cleaner:

```tsx
return (
  <div>
    <h1>Welcome</h1>
  </div>
);
```

Classification:

```text
Wrong?
No

Works?
Yes

Can be improved?
Yes

Recommended?
Remove unnecessary Fragment
```

---

# PART 5 — COMBINING CONDITIONAL RENDERING PATTERNS

# 23. User Account Example

```tsx
const App = () => {
  const isLoading = false;
  const hasError = false;
  const isLoggedIn = true;
  const hasNotifications = true;

  if (isLoading) {
    return <h1>Loading account...</h1>;
  }

  if (hasError) {
    return <h1>Failed to load account.</h1>;
  }

  if (!isLoggedIn) {
    return <h1>Please log in to continue.</h1>;
  }

  return (
    <div>
      <h1>Welcome to your account!</h1>

      {hasNotifications && (
        <p>You have new notifications.</p>
      )}
    </div>
  );
};

export default App;
```

---

# Pattern Analysis

## Priority States

We use early returns:

```tsx
if (isLoading) {
  return <Loading />;
}

if (hasError) {
  return <Error />;
}

if (!isLoggedIn) {
  return <Login />;
}
```

Because these states determine whether the normal dashboard should even be rendered.

---

## Notification

We use:

```tsx
hasNotifications && <Notification />
```

Because:

```text
Notification exists
→ Show it

Notification does not exist
→ Show nothing
```

No alternative UI is required.

---

# PART 6 — ROLE-BASED CONDITIONAL RENDERING

# 24. Three Possible UI States

Consider:

```tsx
const isLoggedIn = true;
const isAdmin = false;
```

Requirements:

```text
Not logged in
→ Login

Logged in + not admin
→ User Dashboard

Logged in + admin
→ Admin Dashboard
```

There are three explicit UI states.

---

# Conditions

### State 1

```tsx
!isLoggedIn
```

Render:

```tsx
<Login />
```

---

### State 2

```tsx
isLoggedIn && !isAdmin
```

Render:

```tsx
<UserDashboard />
```

---

### State 3

```tsx
isLoggedIn && isAdmin
```

Render:

```tsx
<AdminDashboard />
```

---

# 25. Important Mistake: Separate JSX Conditions Can Conflict

Incorrect approach:

```tsx
<div>
  {!isLoggedIn && <Login />}

  {isAdmin ? <AdminDashboard /> : <UserDashboard />}
</div>
```

At first glance, this may seem correct.

But consider:

```tsx
isLoggedIn = false
isAdmin = true
```

---

## First Expression

```tsx
!isLoggedIn && <Login />
```

Becomes:

```text
true && <Login />
```

So:

```tsx
<Login />
```

renders.

---

## Second Expression

```tsx
isAdmin ? <AdminDashboard /> : <UserDashboard />
```

Since:

```tsx
isAdmin = true
```

React renders:

```tsx
<AdminDashboard />
```

---

# Result

Both components render:

```text
Login
Admin Dashboard
```

This violates the requirement.

---

# 26. Critical Lesson: `&&` Does Not Stop the Component

This is one of the most important lessons from Day 7.

Consider:

```tsx
{!isLoggedIn && <Login />}
```

This only controls that particular JSX expression.

It does NOT:

```text
Stop the component
Stop later JSX
Stop other conditions
```

---

# Compare

## Logical AND

```tsx
condition && <Component />
```

Meaning:

> Conditionally render this one expression.

---

## Early Return

```tsx
if (condition) {
  return <Component />;
}
```

Meaning:

```text
Return component
↓
Stop component function
↓
Do not continue to later code
```

---

# Key Rule

```text
&& controls one JSX expression

return stops the entire component function
```

This is a major debugging lesson.

---

# 27. Correct Role-Based Solution

```tsx
function Login() {
  return <h1>Please Login</h1>;
}

function UserDashboard() {
  return (
    <h1>
      You're Successfully Logged in as a <i>User</i>
    </h1>
  );
}

function AdminDashboard() {
  return (
    <h1>
      You're Successfully Logged in as <i>Admin</i>
    </h1>
  );
}

function App() {
  const isLoggedIn = true;
  const isAdmin = true;

  if (!isLoggedIn) {
    return <Login />;
  }

  if (!isAdmin) {
    return <UserDashboard />;
  }

  return <AdminDashboard />;
}
```

---

# Why This Logic Works

## Case 1

```tsx
isLoggedIn = false
isAdmin = true
```

Flow:

```text
!isLoggedIn
↓
true
↓
Return Login
↓
Function ends
```

Admin status is irrelevant.

---

## Case 2

```tsx
isLoggedIn = true
isAdmin = false
```

Flow:

```text
!isLoggedIn
↓
false
↓
Continue

!isAdmin
↓
true
↓
Return UserDashboard
```

---

## Case 3

```tsx
isLoggedIn = true
isAdmin = true
```

Flow:

```text
!isLoggedIn
↓
false

!isAdmin
↓
false

Reach final return
↓
AdminDashboard
```

---

# Important Programming Principle

Previous conditions reduce what needs to be checked later.

Example:

```tsx
if (!isLoggedIn) {
  return <Login />;
}
```

If execution continues after this point, we already know:

```text
isLoggedIn = true
```

Then:

```tsx
if (!isAdmin) {
  return <UserDashboard />;
}
```

If execution continues again, we know:

```text
isAdmin = true
```

Therefore:

```tsx
return <AdminDashboard />;
```

is safe.

We do not need to check:

```tsx
if (isLoggedIn && isAdmin)
```

again.

---

# PART 7 — FINAL INDEPENDENT CHALLENGE

# 28. Smart Dashboard

Requirements:

Variables:

```tsx
const isLoading = false;
const hasError = false;
const isLoggedIn = true;
const isAdmin = false;
const hasNotifications = true;
```

Priority:

1. Loading
2. Error
3. Login
4. Dashboard

Dashboard:

```text
Admin → Admin UI
User → User UI
```

Extra:

```text
Notifications true → Show notification
Notifications false → Show nothing
```

---

# Solution

```tsx
const Admin = () => {
  return (
    <div>
      <h1>Welcome Admin!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

const User = () => {
  return (
    <div>
      <h1>Welcome User!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

const App = () => {
  const isLoading = false;
  const hasError = false;
  const isLoggedIn = true;
  const isAdmin = false;
  const hasNotifications = true;

  if (isLoading) {
    return <h1>Loading dashboard...</h1>;
  }

  if (hasError) {
    return <h1>Something went wrong!</h1>;
  }

  if (!isLoggedIn) {
    return <h1>Please log in first.</h1>;
  }

  return (
    <div>
      {isAdmin ? <Admin /> : <User />}

      {hasNotifications && (
        <p>You have new notifications!</p>
      )}
    </div>
  );
};

export default App;
```

---

# Why Each Pattern Was Used

## `if` + Early Return

Used for:

```text
Loading
Error
Not logged in
```

Because these states have priority.

If one matches, the dashboard should not render.

---

## Ternary

```tsx
isAdmin ? <Admin /> : <User />
```

Used because there are exactly two alternatives.

---

## Logical AND

```tsx
hasNotifications && <Notification />
```

Used because:

```text
True → Show notification
False → Show nothing
```

---

# Current Value Execution

Given:

```tsx
isLoading = false
hasError = false
isLoggedIn = true
isAdmin = false
hasNotifications = true
```

Flow:

```text
Loading?
false
↓
Continue

Error?
false
↓
Continue

Not logged in?
false
↓
Continue

Admin?
false
↓
Render User dashboard

Notifications?
true
↓
Render notification
```

Final UI:

```text
Welcome User!
This is your dashboard.
You have new notifications!
```

---

# If isLoggedIn Becomes False

```tsx
isLoggedIn = false
```

Then:

```tsx
if (!isLoggedIn) {
  return <h1>Please log in first.</h1>;
}
```

executes.

Result:

```text
Please log in first.
```

The dashboard and notification conditions are never reached.

---

# PART 8 — COMPONENT DESIGN OBSERVATION

# 29. Avoid Unnecessary Components

Consider:

```tsx
const Admin = () => {
  return (
    <div>
      <h1>Welcome Admin!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

const User = () => {
  return (
    <div>
      <h1>Welcome User!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};
```

Most of the UI is identical.

Only this changes:

```text
Admin
vs
User
```

In this small situation, we could simplify:

```tsx
<div>
  <h1>Welcome {isAdmin ? "Admin" : "User"}!</h1>

  <p>This is your dashboard.</p>

  {hasNotifications && (
    <p>You have new notifications!</p>
  )}
</div>
```

---

# Which Approach Is Better?

Both are valid.

## Separate Components

Better when:

```text
Admin dashboard becomes significantly different
User dashboard becomes significantly different
Components have their own complexity
Components may be reused
```

## Single Component

Better when:

```text
Only small pieces of text/UI change
Creating separate components would duplicate code
The UI difference is very small
```

---

# Important Architecture Principle

> Do not create components just because you can.

Create components when they represent:

- Meaningful UI sections
- Reusable logic
- Independent complexity
- Clear separation of responsibility

---

# PART 9 — HOW TO CHOOSE THE RIGHT CONDITIONAL PATTERN

# 30. Decision Guide

## Situation 1: Two alternatives

Example:

```text
Logged in → Dashboard
Not logged in → Login
```

Use:

```tsx
condition ? A : B
```

Example:

```tsx
isLoggedIn ? <Dashboard /> : <Login />
```

---

## Situation 2: Show something or nothing

Example:

```text
Notifications exist → Show badge
No notifications → Nothing
```

Use:

```tsx
condition && A
```

Example:

```tsx
hasNotifications && <NotificationBadge />
```

---

## Situation 3: Multiple priority states

Example:

```text
Loading
Error
Authentication
Success
```

Use:

```tsx
if (isLoading) return <Loading />;
if (hasError) return <Error />;
if (!isLoggedIn) return <Login />;

return <Dashboard />;
```

---

# Quick Decision Table

| Situation | Recommended Pattern |
|---|---|
| A or B | Ternary |
| Show or hide | `&&` |
| Multiple priority states | `if` + early returns |
| Complex logic before JSX | `if` |
| Entire component output changes | Often early return |

---

# PART 10 — DAY 7 FINAL RECALL QUESTIONS

# 31. What is Conditional Rendering?

Conditional rendering is:

> **The practice of displaying different UI, elements, or components based on specific conditions.**

---

# 32. Ternary vs Logical AND

## Ternary

```tsx
condition ? A : B
```

Use when there are alternatives.

```text
True → A
False → B
```

---

## Logical AND

```tsx
condition && A
```

Use when there is only one optional UI element.

```text
True → A
False → Nothing
```

---

# 33. Major Difference Between `&&` and Early Return

## Logical AND

```tsx
{isLoggedIn && <Dashboard />}
```

Controls only that JSX expression.

It does not stop the component.

---

## Early Return

```tsx
if (!isLoggedIn) {
  return <Login />;
}
```

Returns UI and stops the component function.

Later conditions are not reached.

---

# 34. Why Does Condition Order Matter?

Example:

```tsx
if (isLoading) return <Loading />;
if (hasError) return <Error />;

return <Dashboard />;
```

Because:

```text
First matching return wins.
```

And:

```text
return
↓
Ends component execution
```

Therefore:

> The order of early return conditions determines UI priority.

---

# 35. Login and Admin Prediction

Given:

```tsx
const isLoggedIn = false;
const isAdmin = true;

if (!isLoggedIn) {
  return <Login />;
}

if (isAdmin) {
  return <AdminDashboard />;
}

return <UserDashboard />;
```

Result:

```text
<Login />
```

Why?

```text
!isLoggedIn
↓
true
↓
Return Login
↓
Function ends
```

`isAdmin` is never checked.

---

# PART 11 — MOST IMPORTANT DAY 7 CONCEPTS

# Conditional Rendering

```text
Condition
↓
React decides which UI should exist
↓
Render appropriate UI
```

---

# Ternary

```tsx
condition ? A : B
```

Use:

```text
A or B
```

---

# Logical AND

```tsx
condition && A
```

Use:

```text
A or nothing
```

---

# Early Return

```tsx
if (condition) {
  return A;
}
```

Use:

```text
Priority UI states
Complex conditional decisions
Entire component output changes
```

---

# Critical Difference

```text
&&
→ Controls one JSX expression

return
→ Stops the component function
```

---

# Priority

```text
Condition order matters.

First matching early return wins.
```

---

# Multiple UI States

Common real-world order:

```text
Loading
↓
Error
↓
Authentication
↓
Success / Normal UI
```

---

# Day 7 Mistake to Remember

Incorrect assumption:

> A conditional JSX expression will stop later JSX expressions.

Wrong.

Example:

```tsx
{condition && <A />}
{otherCondition && <B />}
```

Both can render.

If you need mutually exclusive UI with priority, use:

```tsx
if (condition) return <A />;
```

or a properly structured ternary.

---

# Day 7 Final Cheat Sheet

```tsx
// IF + EARLY RETURN

if (isLoading) {
  return <Loading />;
}

if (hasError) {
  return <Error />;
}

return <AppContent />;
```

---

```tsx
// TERNARY

{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

---

```tsx
// LOGICAL AND

{
  hasNotifications &&
    <Notification />
}
```

---

```text
Two alternatives?
→ Ternary

One optional thing?
→ &&

Multiple priority states?
→ if + early returns
```

---

# Final Day 7 Assessment

## Topic

Conditional Rendering

## Status

Completed ✅

## Confidence

4.5 / 5

## Strengths

- Understands conditional rendering conceptually
- Can use ternary operators correctly
- Can use `&&` correctly
- Understands `if` statements
- Understands early returns
- Understands why `return` stops execution
- Can handle multiple UI states
- Understands condition priority
- Can choose appropriate conditional patterns
- Successfully debugged conflicting conditional rendering
- Completed independent Smart Dashboard challenge

## Important Lesson Learned

> `&&` conditionally controls one JSX expression, while `return` stops the entire component function.

## Minor Area to Reinforce Later

Condition priority in more complex real-world scenarios involving:

- API data
- Loading states
- Errors
- Authentication
- Async operations

These concepts will naturally be revisited when learning:

- State
- `useEffect`
- API integration
- Data fetching
- Error handling

---

# Next Topic

## Lists and Keys

Next, React will introduce a new question:

> How can we take JavaScript arrays and dynamically render multiple UI elements?

This topic will connect strongly with:

```tsx
.map()
```

and later:

```text
keys
```

in React.

---

# Day 7 Complete ✅

You can now conditionally decide what React should render based on application conditions.

The foundation is ready for Lists & Keys.