# React Learning Journey --- Day 3 Revision

## JSX

**Day:** 3\
**Topic:** JSX\
**Status:** Completed\
**Confidence:** 4/5

------------------------------------------------------------------------

## 1. What is JSX?

JSX is an HTML-like syntax that works alongside JavaScript to build user
interfaces. It combines UI structure with JavaScript logic and allows us
to write JavaScript expressions, variables, and function calls directly
inside JSX using curly braces `{}`. It also supports attributes,
conditional expressions, nested elements, components, and event
handlers.

### Core mental model

``` text
JSX = HTML-like UI syntax + JavaScript expressions
```

Important:

-   JSX is **not HTML**.
-   JSX is **not a separate programming language**.
-   JSX is syntax used alongside JavaScript/TypeScript.
-   JSX makes UI structure easier to describe.
-   JavaScript expressions can be evaluated inside JSX using `{}`.

------------------------------------------------------------------------

# 2. Connection with Day 2

The simplified React startup flow learned on Day 2 was:

``` text
Browser
   ↓
index.html
   ↓
#root
   ↓
main.tsx
   ↓
App.tsx
   ↓
React UI
```

JSX is mainly what we started seeing inside `App.tsx`.

Example:

``` tsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}
```

The `<h1>Hello React</h1>` part looks like HTML, but it is JSX.

------------------------------------------------------------------------

# 3. Why JSX?

Without JSX, describing a complex UI using JavaScript can become harder
to read.

JSX lets the UI structure be visible directly in the code.

Example:

``` tsx
function App() {
  return (
    <div>
      <header>
        <h1>My Store</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
      </header>

      <main>
        <h2>Products</h2>
      </main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  );
}
```

The nested structure makes the UI hierarchy easy to see.

------------------------------------------------------------------------

# 4. JSX is NOT HTML

JSX looks like HTML, but it follows JSX/JavaScript rules.

For example:

### HTML

``` html
<div class="container">
```

### JSX

``` tsx
<div className="container">
```

Another example:

### HTML

``` html
<label for="email">
```

### JSX

``` tsx
<label htmlFor="email">
```

The important idea is:

> We are describing React UI using HTML-like JSX syntax inside
> JavaScript/TypeScript.

------------------------------------------------------------------------

# 5. JavaScript Expressions Inside JSX

Curly braces `{}` allow JavaScript expressions to be evaluated inside
JSX.

Example:

``` tsx
function App() {
  const name = "Ifty";

  return (
    <h1>Hello {name}</h1>
  );
}
```

The UI displays:

``` text
Hello Ifty
```

### Mental model

``` text
{name}
   ↓
JavaScript expression
   ↓
evaluate it
   ↓
put the result into the UI
```

------------------------------------------------------------------------

# 6. Variables Inside JSX

Example:

``` tsx
const name = "Ifty";
const age = 20;

return (
  <p>{name}</p>
);
```

`{name}` means:

> Evaluate the JavaScript variable `name` and use its value.

------------------------------------------------------------------------

# 7. String Literal vs Variable vs Plain JSX Text

This was an important exercise.

``` tsx
const name = "Syed Shadnan";

return (
  <div>
    <p>Hello {name}</p>
    <p>Hello {"name"}</p>
    <p>Hello name</p>
  </div>
);
```

### First line

``` tsx
<p>Hello {name}</p>
```

Output:

``` text
Hello Syed Shadnan
```

Reason:

`name` is a JavaScript variable, so `{name}` evaluates the variable and
produces its value.

### Second line

``` tsx
<p>Hello {"name"}</p>
```

Output:

``` text
Hello name
```

Reason:

`"name"` is a string literal. Because it is inside `{}`, JSX evaluates
that JavaScript expression, whose value is the string `"name"`.

### Third line

``` tsx
<p>Hello name</p>
```

Output:

``` text
Hello name
```

Reason:

`name` is simply plain JSX text because it is not inside `{}`.

### Key distinction

``` tsx
{name}
```

means:

> Get the value stored in the variable `name`.

While:

``` tsx
{"name"}
```

means:

> Use the exact string `"name"`.

And:

``` tsx
name
```

means:

> Display the text `name`.

------------------------------------------------------------------------

# 8. JSX `{}` Is Not Only for Variables

This is a major mental model.

Curly braces are not specifically a "variable syntax."

They allow JavaScript expressions to be evaluated inside JSX.

Examples:

``` tsx
{name}
```

``` tsx
{age + 1}
```

``` tsx
{name.toUpperCase()}
```

``` tsx
{age >= 18 ? "Adult" : "Minor"}
```

All of these are JavaScript expressions.

------------------------------------------------------------------------

# 9. Expressions in JSX

Example:

``` tsx
function App() {
  const name = "Syed Shadnan";
  const age = 20;

  return (
    <div>
      <h1>{name}</h1>
      <p>Next year I will be {age + 1}</p>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>
      <p>{name.toUpperCase()}</p>
    </div>
  );
}
```

### Line 1

``` tsx
<h1>{name}</h1>
```

Output:

``` text
Syed Shadnan
```

`name` is evaluated.

### Line 2

``` tsx
<p>Next year I will be {age + 1}</p>
```

Output:

``` text
Next year I will be 21
```

`age + 1` calculates `20 + 1`.

Important:

``` tsx
age + 1
```

does **not** change the `age` variable.

If:

``` tsx
age === 20
```

then after evaluating `age + 1`, `age` is still `20`.

This is different from an operation such as:

``` tsx
age++
```

which changes the variable.

### Line 3

``` tsx
<p>{age >= 18 ? "Adult" : "Minor"}</p>
```

Because:

``` text
20 >= 18 → true
```

the result is:

``` text
Adult
```

### Line 4

``` tsx
<p>{name.toUpperCase()}</p>
```

The JavaScript string method `toUpperCase()` is called.

Result:

``` text
SYED SHADNAN
```

------------------------------------------------------------------------

# 10. Ternary Operator in JSX

The ternary operator can be used as a JavaScript expression inside JSX.

Syntax:

``` tsx
condition ? valueIfTrue : valueIfFalse
```

Example:

``` tsx
{age >= 18 ? "Adult" : "Minor"}
```

If:

``` text
age = 20
```

then:

``` text
20 >= 18 → true
```

so:

``` text
Adult
```

This was introduced as an example of an expression. Conditional
rendering will be studied more deeply later.

------------------------------------------------------------------------

# 11. Expression vs Statement

A useful distinction introduced today:

### Expression

An expression produces a value.

Examples:

``` tsx
age + 1
```

``` tsx
name.toUpperCase()
```

``` tsx
age >= 18 ? "Adult" : "Minor"
```

### Statement

A statement controls or performs an action rather than simply producing
a value in the same way.

Example:

``` tsx
if (age >= 18) {
  // ...
}
```

We learned that JSX `{}` expects an expression, so this is not valid:

``` tsx
<p>{if (age >= 18) "Adult"}</p>
```

The deeper conditional-rendering rules will be covered later.

------------------------------------------------------------------------

# 12. JSX Root Element

A JSX return needs one root element or Fragment at the top level.

### Invalid

``` tsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

There are two top-level elements:

``` text
<h1> ← root #1
<p>  ← root #2
```

### Valid with a wrapper

``` tsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Now there is one root:

``` text
<div>
 ├── <h1>
 └── <p>
```

### Valid with a Fragment

``` tsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

The Fragment provides one JSX root without adding an extra HTML element.

### Important wording

Instead of saying:

> JSX must have one parent element.

Use the more precise wording:

> A JSX return must have one root element or Fragment at the top level.

------------------------------------------------------------------------

# 13. Fragment

A Fragment lets us group multiple JSX elements without adding an extra
HTML element.

Short syntax:

``` tsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

A Fragment is useful when multiple elements need to be returned together
but an additional `<div>` is unnecessary.

### Example

``` tsx
return (
  <>
    <p>Hello</p>
    <p>Welcome</p>
  </>
);
```

No extra wrapper element is needed.

------------------------------------------------------------------------

# 14. Important Fragment Observation

In the final profile challenge, this was written:

``` tsx
return (
  <>
    <div className="Profile">
      <h2>Hello, {name}</h2>
      <p>Age: {age}</p>
      <p>{age >= 18 ? `Status: Adult` : `Status: Minor`}</p>
    </div>
  </>
);
```

This is valid.

However, the Fragment is unnecessary because `<div>` is already the only
root element.

This would also be valid:

``` tsx
return (
  <div className="Profile">
    <h2>Hello, {name}</h2>
    <p>Age: {age}</p>
    <p>{age >= 18 ? "Status: Adult" : "Status: Minor"}</p>
  </div>
);
```

This is a **style/structure improvement**, not a correction of invalid
code.

------------------------------------------------------------------------

# 15. JSX Elements Must Be Properly Closed

JSX requires elements to be properly closed.

### Normal element

``` tsx
<p>Hello</p>
```

### Self-closing element

``` tsx
<img src="photo.jpg" />
```

### Invalid

``` tsx
<img src="photo.jpg">
```

### Why?

JSX requires the element to be explicitly closed.

For elements that do not have child content, the self-closing form is
used:

``` tsx
<img />
<input />
<br />
```

------------------------------------------------------------------------

# 16. JSX Attributes

JSX elements can have attributes.

Example:

``` tsx
<img src="profile.jpg" />
```

Here:

``` text
src="profile.jpg"
```

is an attribute.

Other examples:

``` tsx
<div className="profile">
```

``` tsx
<input type="text" />
```

``` tsx
<button disabled>Save</button>
```

------------------------------------------------------------------------

# 17. Static Attribute Values vs JavaScript Values

This distinction is important.

### Static text value

``` tsx
<img src="profile.jpg" />
```

The value is the literal text:

``` text
profile.jpg
```

### JavaScript variable

``` tsx
const imageUrl = "profile.jpg";

return (
  <img src={imageUrl} />
);
```

Here:

``` tsx
src={imageUrl}
```

means:

> Evaluate the JavaScript variable `imageUrl`.

So:

``` text
imageUrl
   ↓
"profile.jpg"
   ↓
used as src
```

------------------------------------------------------------------------

# 18. `src={imageUrl}` vs `src="imageUrl"`

These are different:

``` tsx
<img src={imageUrl} />
```

means:

> Use the value stored in the JavaScript variable `imageUrl`.

If:

``` tsx
const imageUrl = "profile.jpg";
```

then the source becomes:

``` text
profile.jpg
```

But:

``` tsx
<img src="imageUrl" />
```

means:

> Use the literal string `"imageUrl"` as the source.

It does not look for the JavaScript variable.

Calling the second one a "false src" is not precise. It is better to
call it a **literal string value**.

------------------------------------------------------------------------

# 19. `className`

In JSX, use:

``` tsx
className
```

instead of:

``` tsx
class
```

Example:

``` tsx
<div className="profile">
```

The main rule to remember is:

> JSX uses `className` for the HTML `class` attribute.

Similarly, JSX uses:

``` tsx
htmlFor
```

instead of:

``` tsx
for
```

------------------------------------------------------------------------

# 20. Boolean JSX Attributes

Example:

``` tsx
<input type="text" disabled />
```

Here:

``` tsx
disabled
```

is a boolean attribute.

You can write:

``` tsx
disabled
```

when you want it enabled/present rather than needing to write:

``` tsx
disabled={true}
```

This was introduced today; more detailed prop behavior will come later.

------------------------------------------------------------------------

# 21. JavaScript vs JSX Inside a `.tsx` File

Example:

``` tsx
function App() {
  const username = "Shadnan";

  return (
    <div>
      <h1 className="title">Hello {username}</h1>
      <input type="text" disabled />
    </div>
  );
}
```

### JavaScript/TypeScript

``` tsx
function App() {
```

``` tsx
const username = "Shadnan";
```

``` tsx
username
```

inside `{username}` is a JavaScript expression.

### JSX

``` tsx
<div>
```

``` tsx
<h1>
```

``` tsx
<input />
```

### JSX attributes

``` tsx
className="title"
```

``` tsx
type="text"
```

``` tsx
disabled
```

### JavaScript expression embedded in JSX

``` tsx
{username}
```

The important idea is that a `.tsx` file can contain both
JavaScript/TypeScript and JSX.

------------------------------------------------------------------------

# 22. Day 3 Practice Exercise --- Answer

### Task

Create an `App.tsx` that displays:

``` text
Syed Shadnan
Age: 20
Status: Adult
```

Requirements:

1.  Store the name in a variable.
2.  Store the age in a variable.
3.  Calculate the status using a ternary expression inside JSX.
4.  Use a `className` on the main container.
5.  Use a Fragment as the root.
6.  Do not hardcode the name or age into the displayed text.

### Completed solution from the session

``` tsx
function App() {
  const name = 'Syed Shadnan';
  const age = 20;

  return (
    <>
      <div className="Profile">
        <h2>Hello, {name}</h2>
        <p>Age: {age}</p>
        <p>{age >= 18 ? `Status: Adult` : `Status: Minor`}</p>
      </div>
    </>
  );
}
```

### Review

-   Name stored in variable → correct.
-   Age stored in variable → correct.
-   Ternary expression inside JSX → correct.
-   `className` used → correct.
-   Fragment used as root → correct.
-   Name and age are not hardcoded into the displayed values → correct.

### Improvement

The Fragment is unnecessary because the `<div>` is already the only
root.

Also, template literals are not needed here:

``` tsx
`Status: Adult`
```

could simply be:

``` tsx
"Status: Adult"
```

This is a readability/style improvement, not an error.

------------------------------------------------------------------------

# 23. Question Review --- Root Element

### Question

Why is this invalid?

``` tsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

### Answer

Because there are two adjacent top-level JSX elements.

JSX needs one root element or Fragment at the top level.

------------------------------------------------------------------------

# 24. Question Review --- Fragment

### Question

Why is this valid?

``` tsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

### Answer

The Fragment acts as the single root without adding an extra HTML
element.

------------------------------------------------------------------------

# 25. Question Review --- Self-Closing Elements

### Question

Why is this invalid?

``` tsx
<img src="photo.jpg">
```

### Answer

JSX requires elements to be properly closed.

The self-closing version is:

``` tsx
<img src="photo.jpg" />
```

------------------------------------------------------------------------

# 26. Question Review --- Variables and Strings

Given:

``` tsx
const name = "Syed Shadnan";

return (
  <div>
    <p>Hello {name}</p>
    <p>Hello {"name"}</p>
    <p>Hello name</p>
  </div>
);
```

### Answers

1.  First paragraph:

``` text
Hello Syed Shadnan
```

2.  Second paragraph:

``` text
Hello name
```

3.  Third paragraph:

``` text
Hello name
```

### Why?

-   `{name}` → JavaScript variable.
-   `{"name"}` → string literal.
-   `name` without `{}` → plain JSX text.

------------------------------------------------------------------------

# 27. Question Review --- Expressions

Given:

``` tsx
const name = "Syed Shadnan";
const age = 20;

return (
  <div>
    <h1>{name}</h1>
    <p>Next year I will be {age + 1}</p>
    <p>{age >= 18 ? "Adult" : "Minor"}</p>
    <p>{name.toUpperCase()}</p>
  </div>
);
```

### Answers

1.  `{name}` → `Syed Shadnan`
2.  `{age + 1}` → `21`
3.  `{age >= 18 ? "Adult" : "Minor"}` → `Adult`
4.  `{name.toUpperCase()}` → `SYED SHADNAN`

------------------------------------------------------------------------

# 28. Question Review --- Attributes

Given:

``` tsx
function App() {
  const username = "Shadnan";

  return (
    <div>
      <h1 className="title">Hello {username}</h1>
      <input type="text" disabled />
    </div>
  );
}
```

Identify the JSX features.

### Answer

-   `username` → JavaScript variable.
-   `<div>` → root JSX element in this example.
-   `<h1>` and `<input>` → JSX elements.
-   `{username}` → JavaScript expression embedded inside JSX.
-   `className` → JSX attribute.
-   `type` → JSX attribute.
-   `disabled` → boolean JSX attribute.
-   `<input ... />` → self-closing JSX element.

------------------------------------------------------------------------

# 29. Question Review --- Attribute Values

Given:

``` tsx
const imageUrl = "profile.jpg";

return (
  <div>
    <img src={imageUrl} />
    <img src="imageUrl" />
  </div>
);
```

### Answer

``` tsx
src={imageUrl}
```

uses the JavaScript variable.

``` tsx
src="imageUrl"
```

uses the literal string `"imageUrl"`.

The first one resolves to:

``` text
profile.jpg
```

The second one literally gives the browser:

``` text
imageUrl
```

as the source value.

------------------------------------------------------------------------

# 30. Question Review --- JSX Capabilities

JSX allows us to:

-   Describe UI structure using HTML-like syntax.
-   Embed JavaScript expressions using `{}`.
-   Use variables in UI.
-   Perform calculations in JSX expressions.
-   Call functions/methods in expressions.
-   Use conditional expressions such as ternaries.
-   Use JSX attributes.
-   Nest elements.
-   Group elements with Fragments.
-   Attach things such as event handlers to elements.

Example:

``` tsx
function App() {
  const name = "Shadnan";
  const age = 20;

  return (
    <>
      <div className="profile">
        <h1>Hello {name}</h1>
        <p>Next year: {age + 1}</p>
        <p>{age >= 18 ? "Adult" : "Minor"}</p>
      </div>
    </>
  );
}
```

------------------------------------------------------------------------

# 31. Common Mistakes From Day 3

## Mistake 1 --- Thinking JSX is HTML

Incorrect mental model:

``` text
React = HTML inside JavaScript
```

Better:

``` text
JSX = HTML-like syntax used alongside JavaScript
```

------------------------------------------------------------------------

## Mistake 2 --- Thinking `{}` is only for variables

Incorrect:

> Curly braces are used to insert variables.

Better:

> Curly braces allow JavaScript expressions to be evaluated inside JSX.

Examples:

``` tsx
{name}
```

``` tsx
{age + 1}
```

``` tsx
{name.toUpperCase()}
```

``` tsx
{age >= 18 ? "Adult" : "Minor"}
```

------------------------------------------------------------------------

## Mistake 3 --- Forgetting the root rule

Invalid:

``` tsx
return (
  <h1>Hello</h1>
  <p>Hello</p>
);
```

Valid:

``` tsx
return (
  <div>
    <h1>Hello</h1>
    <p>Hello</p>
  </div>
);
```

or:

``` tsx
return (
  <>
    <h1>Hello</h1>
    <p>Hello</p>
  </>
);
```

------------------------------------------------------------------------

## Mistake 4 --- Forgetting self-closing syntax

Invalid:

``` tsx
<img src="photo.jpg">
```

Valid:

``` tsx
<img src="photo.jpg" />
```

------------------------------------------------------------------------

## Mistake 5 --- Confusing a variable with a string

``` tsx
{name}
```

is a variable.

``` tsx
{"name"}
```

is a string literal.

``` tsx
name
```

is plain JSX text.

------------------------------------------------------------------------

## Mistake 6 --- Calling a literal string a variable

``` tsx
src="imageUrl"
```

does not access the variable `imageUrl`.

To access the variable:

``` tsx
src={imageUrl}
```

------------------------------------------------------------------------

## Mistake 7 --- Assuming every Fragment is necessary

This is valid:

``` tsx
<>
  <div>...</div>
</>
```

but if the `<div>` is already the only root, the Fragment is
unnecessary.

------------------------------------------------------------------------

# 32. Day 3 Final Mental Model

Think about JSX like this:

``` text
             .tsx file
                 │
        ┌────────┴────────┐
        ↓                 ↓
 JavaScript/TS           JSX
        │                 │
 variables              UI structure
 functions              elements
 expressions            attributes
        │                 │
        └───────┬─────────┘
                ↓
       { JavaScript expression }
                ↓
          dynamic UI output
```

Example:

``` tsx
const name = "Shadnan";
const age = 20;

return (
  <div className="profile">
    <h1>Hello {name}</h1>
    <p>Age: {age}</p>
    <p>{age >= 18 ? "Adult" : "Minor"}</p>
  </div>
);
```

Read it as:

> Build this UI structure, and wherever `{}` appears, evaluate the
> JavaScript expression and place its result into the UI.

------------------------------------------------------------------------

# 33. Quick Revision Checklist

Before moving beyond Day 3, you should be able to explain these without
notes:

-   [ ] What JSX is.
-   [ ] Why JSX is called HTML-like rather than HTML.
-   [ ] Why JSX is useful.
-   [ ] What `{}` means inside JSX.
-   [ ] Difference between `{name}`, `{"name"}`, and `name`.
-   [ ] What a JavaScript expression is in the context of JSX.
-   [ ] Why JSX needs one root at the top level.
-   [ ] What a Fragment is.
-   [ ] When a Fragment is unnecessary.
-   [ ] Why JSX elements must be properly closed.
-   [ ] What self-closing JSX elements are.
-   [ ] What JSX attributes are.
-   [ ] Difference between `src={imageUrl}` and `src="imageUrl"`.
-   [ ] Why `className` is used.
-   [ ] What a boolean attribute such as `disabled` is.
-   [ ] Difference between JavaScript/TypeScript and JSX inside a `.tsx`
    file.
-   [ ] How a ternary expression can be evaluated inside JSX.

------------------------------------------------------------------------

# 34. One-Sentence Definition to Memorize

Do not memorize the wording blindly; understand the idea first.

> **JSX is an HTML-like syntax that works alongside JavaScript to build
> user interfaces, allowing JavaScript expressions to be evaluated
> inside JSX using curly braces `{}`.**

------------------------------------------------------------------------

# 35. Day 3 Assessment

**Status:** Completed

**Confidence:** 4/5

**Mentor assessment:**

The learner demonstrated understanding by:

-   explaining JSX in their own words,
-   correctly identifying JavaScript expressions,
-   distinguishing variables from string literals and plain JSX text,
-   understanding the root-element rule,
-   understanding Fragments,
-   identifying self-closing elements,
-   identifying JSX attributes,
-   distinguishing static attribute values from JavaScript values,
-   completing an independent JSX profile challenge,
-   correcting mistakes after feedback.

**Remaining gap:**

JSX is not yet considered 5/5 mastery. Continued exposure to different
JSX structures and debugging situations is recommended.

**Next topic:**

Day 4 --- Components.
