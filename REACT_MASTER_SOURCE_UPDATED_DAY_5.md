# React Learning Master Source

> **Purpose:** This is the single source of truth for the React learning journey.
> Update this file after each meaningful learning session/day. When starting a new day,
> read this entire file first. Do not rely on memory or partial context.

---

# 1. PROJECT IDENTITY

**Learning Track:** React  
**Level:** Complete Beginner  
**Primary Goal:** Become confident building real-world React applications, eventually using React + TypeScript.

**Learning Philosophy:**
- Understand concepts before memorizing syntax.
- Build mental models before moving to abstractions.
- Attempt problems before seeing solutions.
- Prefer hints over immediate full solutions.
- Learn from mistakes instead of hiding them.
- Use projects to connect concepts.
- Challenge assumptions and explain trade-offs.
- Do not rush just because an external course has moved ahead.

**External Course:** Programming Hero React course may be used as a supplementary source, not as the authority for this roadmap.

---

# 2. CURRENT STATUS

**Current Day:** Day 5  
**Current Phase:** Phase 1 — React Fundamentals  
**Current Topic:** Props  
**Status:** Completed

**Overall Progress:** 9%

**Last Completed Day:** Day 5

**Next Planned Topic:** Events

---

# 3. LEARNING RULES FOR THE MENTOR

Before starting every new React learning day:

1. Read this entire file.
2. Identify:
   - current day
   - completed topics
   - weak areas
   - unresolved questions
   - recent mistakes
   - next planned topic
3. Continue from the actual progress recorded here.
4. Do not assume a topic is understood merely because it was covered.
5. If the user is struggling, slow down and rebuild the prerequisite mental model.
6. Do not introduce multiple major new concepts unnecessarily in one lesson.
7. Encourage the user to attempt code first.
8. Give hints before complete solutions when appropriate.
9. Review the user's code line by line when useful.
10. Explain not only what works, but why it works and what could be improved.
11. Increase difficulty gradually.
12. Revisit weak concepts through targeted practice.
13. Connect React concepts to JavaScript/TypeScript knowledge when useful.
14. Do not blindly follow Programming Hero's sequence if it conflicts with understanding.
15. Never mark a topic "mastered" just because the user completed an exercise.
16. Prioritize conceptual understanding over speed.

---

# 4. DAILY LEARNING WORKFLOW

Each learning day should generally follow this sequence:

## A. Review
Briefly review relevant previous concepts.

## B. Concept
Explain the new concept from first principles.

## C. Mental Model
Explain what is happening underneath the syntax.

## D. Small Examples
Use simple examples before realistic examples.

## E. User Attempt
Give the user a chance to write/solve code.

## F. Feedback
Review the attempt:
- correctness
- logic
- React conventions
- readability
- possible improvements
- misconceptions

## G. Practice
Give progressively harder exercises.

## H. Challenge
Give one problem that requires independent thinking.

## I. Recap
Summarize:
- what was learned
- what remains weak
- common mistakes

## J. Source Update
At the end of the day, update this file with:
- progress
- concepts learned
- practice completed
- mistakes
- questions
- weak areas
- mentor feedback
- next topic

---

# 5. ROADMAP

The roadmap is adaptive. Days may be split, merged, repeated, or reordered when needed for understanding.

## PHASE 0 — React Mental Model

### Day 1 — What is React & Why React?
- What React is
- What UI means
- Problems with manually managing complex UI
- Component-based thinking
- Declarative UI
- React's basic mental model
- React vs vanilla JavaScript at a high level

### Day 2 — React Project Setup
- Node/npm basics needed for React
- Vite
- Project structure
- Development server
- Entry point
- How the browser receives the React app
- First React application

---

## PHASE 1 — React Fundamentals

### Day 3 — JSX
- JSX
- JSX vs HTML
- JavaScript expressions in JSX
- `className`
- JSX rules
- Fragments

### Day 4 — Components
- Components
- Function components
- Component naming
- Component composition
- Reusable UI

### Day 5 — Props
- Props
- Parent → child data flow
- Multiple props
- Props destructuring
- `children`

### Day 6 — Events
- `onClick`
- `onChange`
- Event handlers
- Passing functions
- Events + props

### Day 7 — Conditional Rendering
- `if`
- ternary operator
- `&&`
- Multiple UI states

### Day 8 — Rendering Lists
- `.map()`
- `key`
- Dynamic components
- Array → UI

### Day 9 — Fundamentals Practice Project
Build a small project using Days 3–8.

Possible projects:
- Product List
- Student Dashboard
- Movie List

---

## PHASE 2 — STATE & INTERACTION

### Day 10 — Understanding State
- State vs normal variables
- Why state exists
- Re-render concept
- UI as a function of state

### Day 11 — `useState`
- `useState`
- Updating state
- Previous state
- Multiple state values

### Day 12 — Object State
- Object state
- Updating objects
- Immutability
- Nested object updates

### Day 13 — Array State
- Add
- Remove
- Update
- Array state patterns

### Day 14 — Forms
- Input state
- Controlled components
- `onChange`
- Form submission

### Day 15 — Lifting State Up
- Shared state
- Parent state
- Child → parent communication

### Day 16 — State Practice Project
Possible projects:
- Todo App
- Expense Tracker
- Shopping Cart

---

## PHASE 3 — EFFECTS & DATA

### Day 17 — Rendering & Re-rendering
- What causes a render
- Parent/child rendering
- Common misconceptions

### Day 18 — Component Design
- Component boundaries
- Reusability
- Props design
- Composition

### Day 19 — `useEffect`
- What an effect is
- Why effects exist
- Dependency array
- Cleanup

### Day 20 — API Calls
- `fetch`
- API request lifecycle
- Loading state
- Error state
- Empty state
- Success state

### Day 21 — API Project
Possible projects:
- Movie Explorer
- Product Explorer
- User Explorer

---

## PHASE 4 — FORMS & UI LOGIC

### Day 22 — Advanced Forms
- Multiple inputs
- Form state
- Basic validation

### Day 23 — Reusable Form Patterns
- Reusable input components
- Error messages
- Submit states

### Day 24 — Search, Filter & Sort
- Search
- Filtering
- Sorting
- Derived data

### Day 25 — Pagination & UI States
- Pagination
- Loading
- Error
- Empty
- Success

---

## PHASE 5 — HOOKS

### Day 26 — `useRef`
- DOM references
- Mutable values
- `useRef` vs `useState`

### Day 27 — `useMemo`
- Memoization
- Expensive calculations
- When not to use it

### Day 28 — `useCallback`
- Function references
- Re-render concerns
- Relationship with memoization

### Day 29 — Custom Hooks
- What custom hooks are
- Extracting reusable logic
- Building custom hooks

### Day 30 — Hooks Revision Challenge

---

## PHASE 6 — ROUTING

### Day 31 — React Router
- SPA concept
- Routes
- Links
- Navigation

### Day 32 — Dynamic Routes
- URL parameters
- `useParams`
- Detail pages

### Day 33 — Nested Routes
- Layouts
- Nested routing
- Outlet

### Day 34 — Protected Routes
- Authentication concepts
- Route protection

### Day 35 — Routing Project

---

## PHASE 7 — GLOBAL STATE

### Day 36 — Context API
- Context problem
- Provider
- `useContext`
- When Context is useful

### Day 37 — Context + State
- Global state
- Context trade-offs
- When not to use Context

### Day 38 — Redux Concepts
- Why state management libraries exist
- Store
- Action
- Reducer
- Dispatch

### Day 39 — Redux Toolkit
- Store setup
- Slices
- Reducers
- `useSelector`
- `useDispatch`

### Day 40 — State Management Project

---

## PHASE 8 — TYPESCRIPT + REACT

### Day 41 — TypeScript + React Setup
- Typed props
- Component types

### Day 42 — Props & Children Types
- `type`
- `interface`
- Optional props
- Children

### Day 43 — State Types
- `useState<T>`
- Object state
- Array state
- Union types

### Day 44 — Event Types
- Input events
- Form events
- Mouse events

### Day 45 — API Types
- Response types
- Interfaces
- Generic patterns

### Day 46 — Typed Custom Hooks

### Day 47 — TypeScript + React Challenge

---

## PHASE 9 — PROFESSIONAL REACT

### Day 48 — Project Architecture
- Folder structure
- Feature-based organization
- Component organization

### Day 49 — Reusable UI
- Buttons
- Inputs
- Cards
- Modals
- Layout components

### Day 50 — Performance
- Rendering behavior
- Memoization
- Lazy loading
- Code splitting

### Day 51 — Error Handling
- Error boundaries
- API errors
- User-friendly error states

### Day 52 — React Patterns
- Composition
- Controlled/uncontrolled components
- Container/presentational thinking
- Custom hooks

### Day 53 — TanStack Query
- Server state vs client state
- Queries
- Mutations
- Caching

### Day 54 — Authentication Architecture
- Login
- Token concepts
- Auth state
- Protected UI

---

## PHASE 10 — FINAL PROJECT

### Day 55+ — Full React Project

The final project should gradually combine:

- React
- TypeScript
- React Router
- API integration
- Authentication
- Forms
- Custom Hooks
- Context and/or Redux Toolkit
- TanStack Query
- Responsive UI
- Loading/error/empty states
- Clean component architecture
- Git/GitHub workflow

The final project should be treated as an independent engineering exercise.

The mentor should avoid writing the whole project for the user. The user should make architectural decisions and implement features, while the mentor reviews, challenges, and guides.

---

# 6. PROJECT / PRACTICE RULES

For every practice problem:

### Difficulty progression
1. Understand the requirement.
2. Identify the required React concepts.
3. Think through the logic.
4. Attempt independently.
5. Receive hints if stuck.
6. Review the solution.
7. Refactor if appropriate.

### Do not optimize prematurely.
Correctness and understanding come first.

### Do not blindly copy solutions.
If a solution is provided after hints, the user should explain the important parts and ideally reproduce the logic independently.

---

# 7. MISTAKE TRACKER

Record important recurring mistakes here.

| Topic | Mistake | Why it happened | Fix / Lesson |
|---|---|---|---|
| React basics | Initially described React as a "library of JavaScript" | Informal wording | Say "JavaScript library for building user interfaces." |
| React basics | DOM manipulation was introduced before DOM had been taught | Teaching moved ahead of the learner's prerequisite knowledge | Do not assume DOM knowledge; teach prerequisites explicitly when needed. |
| React mental model | React could be interpreted as automatically making everything efficient | Declarative UI was being connected too strongly with performance | Separate UI correctness/synchronization from performance; performance comes later. |
| JSX | Initially marked a valid single-root `<div>` return as invalid | Misread the JSX structure while applying the root-element rule | Check the actual top-level structure: one `<div>` is already a valid root. |

---

# 8. WEAK AREAS

Track concepts that need revision.

| Concept | Confidence | What is unclear? | Revision Needed? |
|---|---|---|---|
| React mental model | 4/5 | Needs more application in unfamiliar situations before 5/5 | Light revision |
| React basics | 4/5 | No major blocker; syntax and implementation not yet learned | No immediate revision |
| Components | 4/5 | Needs more real-project application before mastery | Light revision |
| Props | 4/5 | Core concepts understood; needs reinforcement through future interaction/state topics | Light revision |

Confidence scale:
- 0 = Don't understand
- 1 = Recognize the concept
- 2 = Can follow examples
- 3 = Can write with guidance
- 4 = Can solve independently
- 5 = Can explain and apply confidently

---

# 9. QUESTION / PRACTICE HISTORY

Record meaningful exercises and challenges.

| Day | Exercise | Result | Notes |
|---|---|---|---|
| 1 | Counter data → UI reasoning | Completed | Explained that UI should reflect changed data. |
| 1 | Imperative vs declarative examples | Completed | Correctly distinguished step-by-step instructions from desired UI. |
| 1 | Component reasoning | Completed | Identified manageability and reuse as benefits. |
| 1 | Vanilla JS vs React comparison | Completed | Correctly reasoned that React is useful when UI complexity/interactivity warrants it. |
| 1 | Todo App mental-model challenge | Completed | Successfully applied data → UI, declarative thinking, and components. |
| 4 | Component composition challenges | Completed | Built nested components independently and reasoned about parent/child/descendant relationships. |
| 5 | Student props exercise | Completed | Built a reusable typed component with different prop values. |
| 5 | Props reasoning checks | Completed | Correctly explained props objects, destructuring, value types, optional props, and defaults. |
| 5 | ProfileCard combined challenge | Completed | Independently combined required props, optional props, default values, children, TypeScript types, and component reuse. |
| 5 | Children data-flow challenge | Completed | Correctly explained that parent decides what children to pass and child decides where to render them. |

---

# 10. LEARNING LOG

## Day 1
**Status:** Completed

**Topics:**
- What is React?
- Why React?
- What UI means
- Problems with manually managing complex UI
- Component-based thinking
- Declarative UI
- Imperative vs declarative thinking
- React's basic mental model
- React vs vanilla JavaScript at a high level

**What I understood:**
- React is a JavaScript library for building user interfaces.
- UI represents what the user sees and interacts with.
- As UI complexity grows, coordinating many changing parts becomes harder to reason about and maintain.
- The UI should represent the current application data/state.
- Declarative thinking focuses on describing what the UI should look like for the current state.
- Imperative thinking focuses on step-by-step instructions for changing something.
- Components break a complex UI into smaller, manageable pieces and can be reused when appropriate.
- React is not a replacement for JavaScript.
- React is not automatically better than vanilla JavaScript; the choice depends on the problem and the amount of UI complexity/interactivity.

**What I did not understand:**
- No major conceptual blocker recorded.
- DOM manipulation was mentioned during teaching but is not considered learned; it should not be assumed as prior knowledge.

**Practice completed:**
- Explained how a counter's UI conceptually changes when its data changes.
- Distinguished imperative and declarative examples.
- Explained why components are useful.
- Compared a simple portfolio site with a complex e-commerce application.
- Completed a Todo App mental-model challenge.

**Challenge result:**
- Successfully explained that when Todo data changes, the UI should reflect the new data.
- Correctly connected declarative UI with describing the desired UI for the current state.
- Correctly identified reusable TodoItem components as a useful component structure.

**Mistakes made:**
- Initially phrased React as a "library of JavaScript"; corrected to "a JavaScript library for building user interfaces."
- Initially discussed DOM manipulation before the user had learned the DOM; mentor corrected the teaching path and clarified that DOM knowledge is not yet required.

**Important lessons from mistakes:**
- Do not assume knowledge of prerequisites that have not been taught.
- React should not be described as automatically making everything efficient; performance is a separate concern.
- Do not use "big project = React, small project = JavaScript" as a rigid rule.

**Questions still open:**
- None recorded.

**Confidence:**
- React mental model: 4/5
- React basics overall: 4/5

**Mentor assessment:**
- Day 1 conceptual objectives were successfully completed.
- User demonstrated understanding through reasoning and application rather than only repeating definitions.
- Continue reinforcing the mental model through future practice rather than treating 4/5 as mastery.

**Revision needed:**
- Light revision through future practice; no immediate repeat of Day 1 required.

**Next step:**
- Day 2 — React Project Setup.
---


## Day 3 — JSX
**Status:** Completed

**Phase:** Phase 1 — React Fundamentals

**Topics:**
- What JSX is
- JSX as HTML-like syntax working alongside JavaScript/TypeScript
- JSX vs HTML
- JavaScript expressions inside JSX
- Variables inside JSX
- String literals vs variables vs plain JSX text
- JSX `{}` as a place to evaluate JavaScript expressions
- Expressions such as arithmetic, method calls, and ternary operators
- Expression vs statement distinction
- JSX root element rule
- Fragments
- Self-closing JSX elements
- JSX attributes
- Static attribute values vs JavaScript values
- `className`
- Boolean attributes such as `disabled`
- Distinguishing JavaScript/TypeScript from JSX inside `.tsx`

**What I understood:**
- JSX is an HTML-like syntax that works alongside JavaScript to build user interfaces.
- JSX combines UI structure with JavaScript logic.
- JSX is not HTML and is not a separate programming language.
- JavaScript expressions can be evaluated inside JSX using curly braces `{}`.
- `{name}` evaluates the JavaScript variable `name`.
- `{"name"}` evaluates a string literal and produces `name`.
- `name` without braces is plain JSX text.
- `{}` is not specifically a variable syntax; it is used to evaluate JavaScript expressions inside JSX.
- Expressions such as `{age + 1}`, `{name.toUpperCase()}`, and `{age >= 18 ? "Adult" : "Minor"}` can be used inside JSX.
- `age + 1` calculates a value but does not change the `age` variable.
- A JSX return must have one root element or Fragment at the top level.
- A Fragment `<>...</>` can group multiple elements without adding an extra HTML wrapper element.
- If a single real element such as `<div>` is already the only root, a Fragment around it may be unnecessary.
- JSX elements must be properly closed.
- Elements such as `<img />` and `<input />` use self-closing syntax.
- JSX attributes can contain static values such as `className="profile"` or JavaScript values such as `src={imageUrl}`.
- `src={imageUrl}` evaluates the JavaScript variable, while `src="imageUrl"` uses the literal string `"imageUrl"`.
- JSX uses `className` rather than `class`.
- Boolean attributes such as `disabled` can be written directly.
- A `.tsx` file can contain both JavaScript/TypeScript and JSX.

**Practice completed:**
- Built a JSX greeting using `name` and `age` variables.
- Distinguished `{name}`, `{"name"}`, and plain `name`.
- Predicted the results of arithmetic, ternary, and string-method expressions inside JSX.
- Identified why multiple top-level JSX elements are invalid.
- Identified valid and invalid JSX examples.
- Identified JSX attributes, a boolean attribute, and a self-closing element.
- Distinguished `src={imageUrl}` from `src="imageUrl"`.
- Built an independent profile component using variables, a ternary expression, a `className`, and a Fragment.

**Challenge result:**
- Successfully completed the independent JSX profile challenge after feedback.
- Correctly explained the role of JavaScript expressions inside JSX.
- Correctly identified JSX structure and syntax rules.
- One intermediate classification mistake occurred: a valid `<div>` root was initially marked invalid, then corrected after reviewing the actual structure.

**Mistakes made:**
- Initially marked a valid JSX return containing one `<div>` root as invalid.
- Described `class` as a JavaScript special keyword when explaining `className`; the practical JSX rule was understood, but the terminology was refined.
- Initially called `src="imageUrl"` a "false src"; refined this to "a literal string value."

**Important lessons from mistakes:**
- Apply the root-element rule to the actual top-level structure rather than assuming nested elements create multiple roots.
- Use precise terminology when explaining JSX and JavaScript behavior.
- Distinguish literal strings from evaluated JavaScript variables.
- A valid implementation can still contain unnecessary structure; for example, a Fragment around a single root `<div>` is valid but unnecessary.

**Questions still open:**
- JSX compilation/transformation into JavaScript was not taught in depth.
- Detailed JSX attribute naming rules beyond `className`/`htmlFor` were not taught.
- Conditional rendering will be studied later rather than fully covered during JSX.

**Confidence:**
- JSX: 4/5
- Overall React: 4/5

**Mentor assessment:**
- Day 3 objectives were successfully completed.
- The user demonstrated understanding through independent reasoning and code construction.
- The user can distinguish JSX from HTML and JavaScript, use expressions in JSX, and apply core JSX syntax rules.
- JSX should not be marked as mastered yet; future component and rendering work should reinforce the mental model.

**Revision needed:**
- Light revision: Yes

**Next topic:**
- Day 4 — Components.


# 20. DAY 5 — REACT PROPS

**Status:** Completed

**Topics learned:**
- What props are and the problem they solve.
- Reusable components receiving different data.
- Props as a conceptual object.
- Parent → child data flow.
- Accessing props with `props.property`.
- Props destructuring.
- TypeScript prop typing.
- String, number, and boolean props.
- JSX curly braces for JavaScript expressions.
- Boolean rendering behavior in JSX.
- Required props.
- Optional props using `?`.
- Default prop values.
- Props as read-only inputs from the child's perspective.
- One-way data flow.
- The `children` prop.
- Parent deciding what children to provide versus child deciding where to render them.

**Key concepts understood:**
- Props allow the same reusable component structure to receive different data and produce different UI.
- Props conceptually arrive as an object, for example:
  ```ts
  {
    name: "Ifty",
    age: 22
  }
  ```
- The parent provides props and the child receives and uses them.
- Props can be accessed through `props.name` or destructured immediately.
- Props destructuring is JavaScript object destructuring, not React-specific magic.
- TypeScript can define required and optional prop shapes.
- `role?: string` means the parent may omit the prop.
- A default value such as `role = "Student"` provides a fallback when the prop is omitted or `undefined`.
- JSX `{}` evaluates JavaScript expressions; it is not specifically number syntax.
- Strings and numbers can visibly render in JSX, while booleans such as `true` and `false` do not render as visible text directly.
- Props are read-only from the child's perspective: a child should not directly modify received props.
- One-way data flow keeps ownership clear: parent provides data → child consumes it.
- `children` is a prop containing content placed between a component's opening and closing tags.
- The parent decides what children content to pass; the child decides where `{children}` appears in its own JSX.
- Moving `{children}` inside the child component can change the UI position without changing the parent's usage.

**Concepts still unclear:**
- No major conceptual blocker remained at the end of the session.
- `React.ReactNode` was used as a practical TypeScript type for children, but its full internal type definition was not studied and should not be treated as memorized.
- Props will need reinforcement in unfamiliar situations and later topics involving events, state, and component communication.

**Practice completed:**
- Built a `Student` component receiving typed `name` and `department` props and reused it with different data.
- Explained the conceptual props object created by JSX attributes.
- Compared `props.name` access with immediate object destructuring.
- Typed multiple props with string, number, and boolean values.
- Reasoned about JSX value types and why `{}` evaluates JavaScript expressions.
- Learned that booleans do not render as visible text directly in JSX.
- Predicted optional-prop and default-value behavior.
- Reasoned through read-only props and parent ownership of changes.
- Worked through `children` from a simple text example to multiple JSX elements.
- Built the final reusable `ProfileCard` component independently.

**Challenge result:**
- Successfully completed the combined `ProfileCard` challenge independently.
- Used required props: `name` and `age`.
- Used an optional prop: `role?: string`.
- Used a default value for `role`.
- Used typed `children: React.ReactNode`.
- Used props destructuring.
- Reused the same component with different data and different children.
- Correctly explained the complete parent → props → child flow.
- Correctly reasoned that the child controls where children render in its own UI structure.

**Mistakes made:**
- Initially thought a missing required `age` prop might still allow the component to work; corrected after connecting TypeScript required-property rules to component props.
- Initially understood “read-only props” too broadly and briefly suggested that data might therefore not be passed from the parent; corrected to distinguish receiving data from modifying received data.
- Initially guessed that boolean props such as `true` might visibly render as text; corrected after learning React's rendering behavior.
- Initially confused the direction of `children` flow and needed clarification that `App` provides children while the child component receives them.
- Minor spelling/convention issues such as `Props` instead of conventional lowercase `props`, and `student` instead of the requested `Student` default value.

**Important lessons from mistakes:**
- TypeScript prop definitions determine whether a prop is required at the call site.
- Read-only means “the child should not modify the received value,” not “the parent cannot pass or later change values.”
- `{}` in JSX means evaluate JavaScript here; the resulting value determines what is passed or rendered.
- Parent/child direction must be tracked carefully when reasoning about props and children.
- `children` is still a prop; it is simply populated from content placed between component tags.
- The parent controls what content is provided, while the child controls where that content is rendered.
- Working code can still be improved through naming conventions and clearer type organization.

**Questions still open:**
- No blocking questions.
- Conditional rendering with boolean values is intentionally deferred to Day 7.
- More advanced props patterns and component API design are deferred until later component-design practice.

**Confidence (0–5):**
- Props: 4/5
- Overall React: 4/5

**Mentor assessment:**
- Day 5 objectives were successfully completed.
- The user demonstrated understanding through reasoning, prediction, correction, and independent implementation rather than syntax copying.
- The user can explain why props exist, type and destructure them, distinguish required/optional/default behavior, and reason about one-way parent-to-child data flow.
- Understanding of `children` improved from initial confusion to a correct explanation of both data ownership and rendering position.
- Props should not yet be marked mastered; future Events, State, and component communication lessons should naturally reinforce the model.

**Revision needed:**
- Light revision: Yes
- Revision file created: `Day-05-React-Props-Revision.md`

**Next topic:**
- Day 6 — Events.
---

# 12. COMPLETED TOPICS

Completed topics:

- [x] Day 1 — React mental model / What is React & Why React — 2026-09-01 — 4/5
- [x] Day 2 — React project setup — 2026-09-01 — 4/5
- [x] Day 3 — JSX — 2026-09-02 — 4/5
- [x] Day 4 — Components — 2026-09-02 — 4/5
- [x] Day 5 — Props — 2026-09-02 — 4/5
- [ ] Day 6 — Events
- [ ] Day 7 — Conditional Rendering
- [ ] Day 8 — Lists & Keys
- [ ] Day 9 — Fundamentals Practice Project
- [ ] Day 10 — Understanding State
- [ ] Day 11 — useState
- [ ] Day 12 — Object State
- [ ] Day 13 — Array State
- [ ] Day 14 — Forms
- [ ] Day 15 — Lifting State Up
- [ ] Day 16 — State Practice Project
- [ ] Day 17 — Rendering & Re-rendering
- [ ] Day 18 — Component Design
- [ ] Day 19 — useEffect
- [ ] Day 20 — API Calls
- [ ] Day 21 — API Project
- [ ] Day 22 — Advanced Forms
- [ ] Day 23 — Reusable Form Patterns
- [ ] Day 24 — Search, Filter & Sort
- [ ] Day 25 — Pagination & UI States
- [ ] Day 26 — useRef
- [ ] Day 27 — useMemo
- [ ] Day 28 — useCallback
- [ ] Day 29 — Custom Hooks
- [ ] Day 30 — Hooks Revision Challenge
- [ ] Day 31 — React Router
- [ ] Day 32 — Dynamic Routes
- [ ] Day 33 — Nested Routes
- [ ] Day 34 — Protected Routes
- [ ] Day 35 — Routing Project
- [ ] Day 36 — Context API
- [ ] Day 37 — Context + State
- [ ] Day 38 — Redux Concepts
- [ ] Day 39 — Redux Toolkit
- [ ] Day 40 — State Management Project
- [ ] Day 41 — TypeScript + React Setup
- [ ] Day 42 — Props & Children Types
- [ ] Day 43 — State Types
- [ ] Day 44 — Event Types
- [ ] Day 45 — API Types
- [ ] Day 46 — Typed Custom Hooks
- [ ] Day 47 — TypeScript + React Challenge
- [ ] Day 48 — Project Architecture
- [ ] Day 49 — Reusable UI
- [ ] Day 50 — Performance
- [ ] Day 51 — Error Handling
- [ ] Day 52 — React Patterns
- [ ] Day 53 — TanStack Query
- [ ] Day 54 — Authentication Architecture
- [ ] Day 55+ — Full React Project

When a topic is completed, add the date and confidence level.

# 13. SOURCE / REFERENCE POLICY

Primary learning sources should generally be:

1. Official React documentation
2. Official documentation for related libraries/tools
3. Programming Hero course as supplementary material
4. Carefully selected articles/videos only when they clarify a difficult concept

The mentor should distinguish:
- official/current React behavior
- teaching simplifications
- personal recommendations
- older/legacy React patterns

If a React API or recommended practice may have changed, verify against current official documentation before teaching it as current best practice.

---

# 14. GIT / PROGRESS WORKFLOW

Recommended workflow after meaningful daily progress:

1. Complete learning/practice.
2. Update this master source.
3. Update practice/project files.
4. Review changes.
5. Commit with a clear message.
6. Push to GitHub.

Suggested commit style:

`feat(react): complete day-01 react fundamentals`

or

`docs(react): update learning master source`

---

## Day 2 — React Project Setup
**Status:** Completed

**Phase:** Phase 0 — React Foundations

**Topics:**
- React project setup
- Node.js/npm basics needed for React
- Vite
- `npm create vite@latest`
- `npm install`
- `npm run dev`
- Development server
- Project structure
- `package.json`
- `index.html`
- `main.tsx`
- `App.tsx`
- Basic `import` / `export`
- The `#root` connection
- Browser → React startup flow
- Development-time UI updates

**What I understood:**
- Node.js provides the environment needed to run development tools.
- npm manages packages and runs project scripts.
- Vite is a development/build tool, not React.
- `npm create vite@latest` creates a project using a Vite template.
- `npm install` installs project dependencies.
- `npm run dev` runs the `dev` script from `package.json`, which starts Vite's local development server.
- `package.json` contains project information, dependencies, and scripts.
- `index.html` is the initial HTML document loaded by the browser and provides a container such as `<div id="root"></div>`.
- `main.tsx` is the React entry point that finds the HTML container and connects React to it.
- `main.tsx` imports `App` from `App.tsx`; `App.tsx` is the root React component.
- `import` and `export` are JavaScript/TypeScript module concepts.
- The ID used by `document.getElementById()` must match the corresponding element ID in `index.html`.
- Simplified startup flow: browser loads `index.html` → `main.tsx` finds `#root` → `main.tsx` imports `App` → React renders `<App />` into the root container.
- During development, Vite detects source changes and helps update the browser.

**Practice completed:**
- Explained `npm create vite@latest`, `npm install`, and `npm run dev`.
- Explained why a development server is useful.
- Identified the roles of `src/`, `index.html`, and `package.json`.
- Explained `"dev": "vite"`.
- Explained how `index.html` and `main.tsx` connect through `root`.
- Correctly predicted that changing the HTML ID without changing `main.tsx` would break the expected mounting connection.
- Changed text in `App.tsx` and observed the updated UI.
- Explained the browser-to-React startup flow.

**Challenge result:**
- Correctly connected npm, Vite, `package.json`, `index.html`, `main.tsx`, `App.tsx`, React, and the browser into one mental model.
- Correctly reasoned about mismatched IDs.

**Mistakes made:**
- Initially described `npm run dev` as possibly creating a "live link"; refined this to a local development server.
- Initially described `index.html` as helping render React; refined this to `index.html` providing the container while `main.tsx` connects React to it.
- Initially used `.jsx` terminology before clarifying that this project uses the TypeScript variant and therefore uses `.tsx`.

**Important lessons:**
- A local development server is different from a public deployed website.
- `index.html` provides the container; `main.tsx` connects React to it.
- Keep responsibilities distinct: npm runs scripts, Vite provides development/build tooling, `main.tsx` is the entry point, and `App.tsx` is the root component.

**Questions still open:**
- Exact internal Vite update mechanics are not learned in depth.
- `StrictMode` and the non-null assertion `!` in generated `main.tsx` code have not been taught.
- Component architecture beyond the root `App` component has not been taught.

**Confidence:**
- React project setup: 4/5
- Overall React: 4/5

**Mentor assessment:**
- Day 2 objectives were successfully completed.
- The user demonstrated understanding through reasoning rather than only copying commands.
- The user can explain the core project setup and browser-to-React connection.
- Light revision is recommended, especially explaining the startup flow independently.

**Revision needed:**
- Light revision: Yes

**Next topic:**
- Day 3 — JSX.

---

# 15. ADAPTATION RULES

This roadmap is not a prison.

The mentor may:
- split one day into multiple days
- repeat a topic
- move a topic later
- add prerequisite lessons
- insert revision challenges
- replace a practice project
- remove unnecessary repetition

But any meaningful roadmap change should be recorded in this file.

### Roadmap Change Log

| Date | Change | Reason |
|---|---|---|
| 2026-08-31 | Initial React roadmap created | React learning journey started |
| 2026-09-01 | Completed Day 1 | Built and tested the React mental model; next step is project setup |
| 2026-09-01 | Completed Day 2 | Built and tested the React project setup mental model; next step is JSX |
| 2026-09-02 | Completed Day 3 | Built and tested the JSX mental model and core syntax rules; next step is components |
| 2026-09-02 | Fixed day/phase sequencing | Clarified that Day 1 = React mental model, Day 2 = project setup, and Day 3 = JSX; Day 3 begins Phase 1 |
| 2026-09-02 | Completed Day 4 | Built and tested the React components mental model; next step is props |
| 2026-09-02 | Completed Day 5 | Built and tested the React props mental model, including typed props, defaults, one-way data flow, and children; next step is events |

---

# 16. CURRENT SESSION NOTES

**Current understanding:** Understands Day 1 React mental model, Day 2 project setup, Day 3 JSX, Day 4 Components, and Day 5 Props at approximately 4/5 confidence. Can explain reusable components receiving different data, parent-to-child props flow, props objects, destructuring, TypeScript prop types, optional props, default values, read-only props, one-way data flow, and `children`.

**Important context:** The user selected the TypeScript variant for the Vite React project and has foundational TypeScript knowledge. Use `.tsx` examples rather than `.jsx` examples for this project.

**Important learning note:** The user benefits from precise terminology and reasoning from actual code structure. For Props, reinforce the distinction between JavaScript concepts (object destructuring/default parameters) and React concepts (props and one-way data flow).

**Recent confusion resolved:** `children` initially caused confusion, but the user now correctly understands that the parent provides the content and the child receives it as the `children` prop and decides where to render it.

**Immediate teaching priority:** Teach Day 6 — Events from first principles. Connect user interaction to the existing component and props mental model. Do not assume understanding of event handlers, callback functions in React, or event-driven UI updates.

**Next session:** Day 6 — Events.
---

# 19. DAY 4 — REACT COMPONENTS

**Status:** Completed

**Topics learned:**
- What React components are and the problem they solve.
- Function components and components returning JSX.
- Component naming with PascalCase.
- Defining a component versus using/rendering a component.
- `<Component />` versus manually calling `Component()`.
- Component reuse.
- Component composition.
- Component trees and nested components.
- Parent, direct child, ancestor, and descendant relationships.
- Fragment versus a real DOM wrapper such as `<div>`.
- Basic judgment about when something should or should not become its own component.

**Key concepts understood:**
- A component is a meaningful piece of UI packaged as a reusable unit.
- Large UIs can be broken into smaller components and composed into a complete interface.
- React components are JavaScript/TypeScript functions, but normal React usage is through JSX such as `<Header />`, allowing React to manage rendering.
- Component names should use PascalCase.
- One component definition can be reused multiple times.
- A parent component can compose smaller child components.
- A component tree can distinguish direct children from deeper descendants.
- A Fragment groups JSX without creating an extra browser DOM element.
- A `<div>` creates a real HTML element and is useful when an actual wrapper serves a purpose such as layout or styling.
- Not every HTML element should automatically become its own component; meaningful boundaries matter.

**Concepts still unclear:**
- No major conceptual confusion remained by the end of the session.
- Component behavior with props, dynamic data, and parent-to-child data flow has not yet been learned and should not be assumed.
- More advanced component-boundary decisions will need real project experience.

**Practice completed:**
- Exercise: Built `Header`, `Main`, and `Footer` components and composed them inside `App`.
- Challenge: Built `Navbar`, `Avatar`, `UserInfo`, `Profile`, and `Footer` with nested composition.
- Component-thinking exercises involving product pages and blog card hierarchies.
- Final independent coding challenge: Built `WebsiteHeader`, `ProfileImage`, `ProfileDetails`, `ProfileSection`, and `WebsiteFooter`, then composed them inside `App`.

**Challenge result:**
- Successfully completed all coding challenges independently.
- Correctly identified parent, direct-child, and descendant relationships.
- Demonstrated good early judgment about avoiding unnecessary component fragmentation.
- Correctly reasoned about when a Fragment is sufficient versus when a real wrapper may be useful.

**Mistakes made:**
- Initially assumed that a Fragment and `<div>` essentially do the same work.
- Initially gave an incomplete explanation of the distinction between direct children and descendants.
- Minor requirement mismatch in one challenge: displayed “My Portfolio” instead of the requested “My Profile”; React logic itself was correct.

**Important lessons from mistakes:**
- Fragment and `<div>` can both group JSX, but only `<div>` creates an actual browser DOM element.
- A component can be a descendant of another component without being its direct child.
- Reusability is not the only reason to extract a component; complexity, independent behavior, meaningful UI boundaries, and readability also matter.

**Questions still open:**
- How props make reusable components display different data.
- How data flows from parent components to child components.
- More advanced component architecture and component communication patterns.

**Confidence (0–5):**
- Components: 4/5
- Overall React: 4/5

**Mentor assessment:**
- Day 4 objectives were successfully completed.
- The user demonstrated understanding through reasoning and independent implementation rather than copying only.
- Component composition and component-tree reasoning are strong for the current learning stage.
- The user is beginning to make sensible decisions about component boundaries.
- Props are the correct next topic because they will test and extend the current understanding of reuse.

**Revision needed:**
- Light revision: Yes
- Revision file created: `Day-04-React-Components-Revision.md`

**Next topic:**
- Day 5 — Props.

---

# 17. END-OF-DAY UPDATE TEMPLATE

Copy and update this section after each day:

## Day X — [Topic]

**Status:** Completed / Partially Completed / Needs Revision

**Topics learned:**
- 

**Key concepts understood:**
- 

**Concepts still unclear:**
- 

**Practice completed:**
- 

**Challenge result:**
- 

**Mistakes made:**
- 

**Important lessons from mistakes:**
- 

**Questions still open:**
- 

**Confidence (0–5):**
- Topic:
- Overall React:

**Mentor assessment:**
- 

**Revision needed:**
- Yes / No

**Next topic:**
- 

---

# 18. IMPORTANT INSTRUCTION

This file is the **single source of truth for the React learning journey**.

When this file is provided or available:

**Read the whole file before starting a new learning day.**

Use the information here to determine:
- where the user is
- what they know
- what they don't know
- what they struggled with
- what has already been practiced
- what should come next
- how difficult the next lesson should be

Do not restart from the beginning unless the learning record indicates that a restart/revision is necessary.

The goal is not to finish the roadmap quickly.

The goal is to become capable of **understanding, building, debugging, explaining, and making engineering decisions in React independently.**
