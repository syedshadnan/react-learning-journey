# ⚛️ Day 2 — React Project Setup

I’ve read the master source and confirmed your current state: **Day 1 is completed at ~4/5 confidence**, and today’s next topic is **React project setup**. 

Today we’ll keep it practical. By the end, you should understand **what happens from creating a React project to seeing React in the browser**—not just memorize commands.

### Today’s path

1. Node.js & npm — only what React needs
2. What Vite is
3. Create a React project
4. Understand the important files
5. Development server
6. React entry point
7. How the browser receives the React app
8. Your first small modification
9. A short challenge

---

## 1. First: What do we actually need?

React itself runs in the browser, but during development we usually use some **tools** around React.

Think of the setup as:

```text
You write React code
       ↓
Development tools process it
       ↓
Browser receives JavaScript
       ↓
React runs
       ↓
UI appears
```

Two important tools today:

### Node.js

Node.js lets JavaScript run **outside the browser**.

You don't need to become a Node.js developer to use React.

For now, think:

> **Node.js gives us the environment needed to run development tools.**

### npm

npm is a package manager that comes with Node.js.

It helps us install and manage packages such as React.

For example:

```bash
npm install
```

means roughly:

> "Install the packages this project needs."

---

# 2. What is Vite?

This is where beginners often get confused.

**Vite is not React.**

React is the UI library.

Vite is a **development/build tool** that helps us develop and package the application.

A useful mental model:

```text
React
  ↓
Build UI

Vite
  ↓
Help develop/build the application
```

So when you create a React project with Vite, you're essentially saying:

> "Give me a project environment where I can develop a React application."

---

# 3. Let's create the project

If you already have Node.js installed, open your terminal and run:

```bash
npm create vite@latest
```

Vite will ask you some questions.

You'll typically choose:

```text
Project name: react-day-2
Framework: React
Variant: JavaScript
```

Then:

```bash
cd react-day-2
npm install
npm run dev
```

You should get something similar to:

```text
Local: http://localhost:5173/
```

Open that address in your browser.

---

## 🧠 Pause here

Don't just run the commands.

Look at this:

```bash
npm create vite@latest
```

and this:

```bash
npm install
```

and this:

```bash
npm run dev
```

They do **three different things**.

### Your turn:

In your own words, what do you think each command does?

**A.**

```bash
npm create vite@latest
```

**B.**

```bash
npm install
```

**C.**

```bash
npm run dev
```

Don't worry about being technically perfect.

Give me your understanding of **A, B, and C**, and I'll correct it before we continue to the project structure.
