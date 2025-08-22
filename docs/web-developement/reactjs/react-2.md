---
id: introduction-to-react-hooks
sidebar_position: 3
title: React Hooks
sidebar_label: React Hooks
---

Hey, everyone! In this guide, we’re diving into React Hooks—a powerful feature that lets you use state and other React features in your functional components. Introduced in React 16.8, Hooks make it easier than ever to write clean, reusable, and stateful logic without needing class components. Let’s learn what Hooks are and why they’ve become essential for modern React development!

---

## What are React Hooks?

**Hooks** are special functions that let you “hook into” React state and lifecycle features from your functional components. Before Hooks, only class components could manage state and side effects, but Hooks bring these superpowers to functional components as well. Hooks also helps us in performing react lifecycle methods in functional components. We'll deep dive into that in later part of this doc.

#### Key Features:

- **Stateful logic in functions**: Use [useState](#usestate) and others directly in your component functions.
- **Code reuse**: Easily share logic between components with custom Hooks.
- **Cleaner code**: No need to refactor into class components to use state or lifecycle methods.
- **Community standard**: Most of the new React are compnents are funtional component.

:::tip Did You Know?
Hooks were officially added to React in February 2019, changing how most React code is written today.
:::

---

## Why Use Hooks?

- Simplifies components—no need for classes for state or side effects.
- Reusable logic through custom Hooks.
- Excellent for separating UI from business logic.
- Adds new capabilities like easily reacting to props/state changes.

---

## Few of widely used React Hooks

Below are a few of the most widely used React Hooks. We'll deep dive into each Hook separately and also explore some of the new Hooks added recently in React v18 and v19:

- [useState](#usestate)
- [useEffect](#useeffect)
- [useMemo](#usememo)
- [useCallback](#usecallback)
- [useReducer](#usereducer)

---

### useState

Lets you add state to functional components. It returns a state variable and a function to update it, enabling components to remember and update values between renders.

**Purpose:** Manage state in functional components

**Syntax:**

```javascript
const [state, setState] = useState(initialValue);
```

**Example:**

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### useEffect

Used for performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It combines the behavior of many class lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

**Purpose:** Handle side effects and lifecycle events

**Syntax:**

```javascript
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]); // Optional dependency array
```

**Examples:**

```javascript
import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  // Run once on mount
  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then(setData);
  }, []); // Empty dependency array

  // Run when data changes
  useEffect(() => {
    document.title = `Data: ${data?.name || "Loading"}`;
  }, [data]); // Runs when 'data' changes

  return <div>{data?.name}</div>;
}
```

---

### useMemo

Optimizes expensive calculations by memoizing a value and recomputing it only when its dependencies change, improving performance by avoiding unnecessary recalculations.

**Purpose:** Memoize expensive calculations

**Syntax:**

```javascript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]); // Dependencies
```

**Example:**

```javascript
import { useMemo, useState } from "react";

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering items..."); // Only runs when items/filter change
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {filteredItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

### useCallback

Returns a memoized version of a callback function that only changes if one of its dependencies changes. Useful to prevent unnecessary re-renders in child components that rely on stable function references.

**Purpose:** Memoize functions to prevent unnecessary re-renders

**Syntax:**

```javascript
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);
```

**Example:**

```javascript
import { useCallback, useState, memo } from "react";

// Child component that only re-renders when props actually change
const ChildComponent = memo(({ onButtonClick, value }) => {
  console.log("Child rendered");
  return <button onClick={onButtonClick}>{value}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependencies, so function never changes

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ChildComponent onButtonClick={handleClick} value={count} />
    </div>
  );
}
```

---

### useReducer

An alternative to useState for managing complex state logic. It works like a reducer in Redux, allowing state transitions based on dispatched actions and a reducer function.

**Purpose:** Manage complex state logic with actions

**Syntax:**

```javascript
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case "ACTION_TYPE":
      return newState;
    default:
      return state;
  }
}
```

**Example:**

```javascript
import { useReducer } from "react";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
```

---

## Few of React v18, v19 Hooks

### 1. useTransition

**Purpose:** Mark state updates as non-urgent to keep UI responsive

**Syntax:**

```javascript
const [isPending, startTransition] = useTransition();
```

**Example:**

```javascript
import { useTransition, useState } from "react";

function SearchApp() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value); // Urgent update

    startTransition(() => {
      // Non-urgent update - won't block input typing
      const filtered = heavyFilterOperation(e.target.value);
      setList(filtered);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <div>Updating results...</div>}
      <ResultsList list={list} />
    </div>
  );
}
```

---

### 2. useDeferredValue

**Purpose:** Defer updating non-critical UI parts until more urgent updates complete

**Syntax:**

```javascript
const deferredValue = useDeferredValue(value);
```

**Example:**

```javascript
import { useDeferredValue, useState, useMemo } from "react";

function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    // This expensive calculation uses deferred value
    // Won't block typing in the search input
    return searchItems(deferredQuery);
  }, [deferredQuery]);

  return (
    <div>
      <div>Searching for: {deferredQuery}</div>
      {results.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SearchResults query={query} />
    </div>
  );
}
```

---

### 3. useId

**Purpose:** Generate unique IDs for accessibility attributes

**Syntax:**

```javascript
const id = useId();
```

**Example:**

```javascript
import { useId } from "react";

function FormField({ label, type = "text" }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} aria-describedby={`${id}-help`} />
      <div id={`${id}-help`}>Help text for {label}</div>
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <FormField label="Username" />
      <FormField label="Password" type="password" />
    </form>
  );
}
```

---

### 4. use (Experimental)

**Purpose:** Read promises and context values directly in components

**Syntax:**

```javascript
const value = use(promise);
const value = use(context);
```

**Example:**

```javascript
import { use, Suspense } from "react";

// Promise-based data fetching
function UserProfile({ userId }) {
  const user = use(fetchUser(userId)); // Reads promise directly

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Context reading
const ThemeContext = React.createContext();

function ThemedButton() {
  const theme = use(ThemeContext); // Alternative to useContext

  return (
    <button style={{ backgroundColor: theme.primaryColor }}>
      Themed Button
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value={{ primaryColor: "blue" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfile userId="123" />
        <ThemedButton />
      </Suspense>
    </ThemeContext.Provider>
  );
}
```

---

### 5. useFormStatus

**Purpose:** Get status of form submissions

**Syntax:**

```javascript
const { pending, data, method, action } = useFormStatus();
```

**Example:**

```javascript
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function ContactForm() {
  async function submitForm(formData) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", Object.fromEntries(formData));
  }

  return (
    <form action={submitForm}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />

      <SubmitButton />
    </form>
  );
}
```

---

## What are Custom Hooks?

Custom hooks are **JavaScript functions** that:

- Start with the prefix `use` (convention)
- Can call other hooks inside them
- Allow you to extract component logic into reusable functions
- Share stateful logic between components

---

## Basic Custom Hook Examples

### 1. useCounter

**Purpose:** Reusable counter logic

```javascript
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);
  const setValue = (value) => setCount(value);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}

// Usage
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

### 2. useToggle

**Purpose:** Toggle boolean state

```javascript
import { useState, useCallback } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  };
}

// Usage
function ToggleComponent() {
  const { value: isVisible, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Show</button>
      <button onClick={setFalse}>Hide</button>
      {isVisible && <div>I'm visible!</div>}
    </div>
  );
}
```

---

## Rules for Custom Hooks

1. **Must start with `use`** - React convention
2. **Only call hooks at the top level** - No conditions, loops, or nested functions
3. **Only call from React functions** - Components or other custom hooks
4. **Keep them pure** - Same inputs should return same outputs
5. **Handle cleanup** - Use useEffect cleanup for subscriptions, timers, etc.

---

## Conclusion

Hooks make React development more flexible and functional. They open the door for simpler code, stateful logic in functions, and easy logic sharing between components. Most new projects and libraries use Hooks as the standard way to build with React.

## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import {reactHooksQuiz} from './quiz.js';

## <Quiz questions={reactHooksQuiz} />
