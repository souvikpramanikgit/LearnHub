---
id: introduction-to-context-api
sidebar_position: 4
title: Context Api
sidebar_label: Context Api
---

Hey, everyone! In this guide, we're diving deep into React Context API—a powerful built-in feature that lets you share state and data across your component tree without prop drilling. Introduced in React 16.3 and enhanced with Hooks in 16.8, Context API makes it easier than ever to manage global application state, themes, user authentication, and other cross-cutting concerns in your React applications. Let's explore what Context API is and why it's become essential for modern React development!

---

## Table of Contents

- [Introduction](#introduction)
- [When to Use Context](#when-to-use-context)
- [Basic Concepts](#basic-concepts)
- [Creating Context](#creating-context)
- [Using Context](#using-context)
- [Best Practices](#best-practices)
- [Examples](#examples)

---

## Introduction

The React Context API is a powerful feature that allows you to share data between components without having to pass props down through multiple levels of the component tree. It's designed to solve the "prop drilling" problem and provides a way to create global state that can be accessed by any component in your React application.

Context is built into React and provides a clean, efficient way to manage state that needs to be accessible across many components at different nesting levels.

---

## When to Use Context

Context is ideal for data that can be considered "global" for a tree of React components, such as:

- **Theme data** (e.g., dark/light mode)
- **User authentication status** and user information
- **Language/localization preferences**
- **Application settings and configuration**
- **Shopping cart data in e-commerce apps**
- **Current user preferences**

### When NOT to Use Context

- **Component-specific state** that only affects a single component
- **Frequently changing data** that causes performance issues
- **Simple parent-to-child communication** (use props instead)
- **When you just want to avoid passing props through 2-3 levels** (prop drilling isn't always bad)

---

## Basic Concepts

### 1. Context Object

Created using `React.createContext()`, this object holds the shared data.

### 2. Provider Component

Wraps components that need access to the context data and provides the value.

### 3. Consumer Component/Hook

Components that read the context data using either `useContext` hook or Context.Consumer.

## Creating Context

### Step 1: Create the Context

```javascript
import { createContext } from "react";

// Create context with default value
const ThemeContext = createContext("light");

// Or with no default value
const UserContext = createContext();

// With default object value
const AppContext = createContext({
  theme: "light",
  user: null,
  toggleTheme: () => {},
});
```

### Step 2: Create a Provider Component

```javascript
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
```

---

## Using Context

### Method 1: useContext Hook (Recommended)

```javascript
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Method 2: Context.Consumer

```javascript
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div className={`app ${theme}`}>
          <h1>Current theme: {theme}</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
```

---

## Best Practices

### 1. Create Custom Hooks

Create custom hooks to encapsulate context logic and provide better error handling:

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Split Contexts for Different Concerns

Instead of one large context, create multiple smaller contexts:

```javascript
// User context
const UserContext = createContext();

// Theme context
const ThemeContext = createContext();

// Settings context
const SettingsContext = createContext();
```

### 3. Use TypeScript for Better Type Safety

```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

### 4. Memoize Context Values

Prevent unnecessary re-renders by memoizing context values:

```javascript
import { createContext, useMemo, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## Examples

#### Example 1: Simple Theme Context

```javascript
import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Usage
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </header>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
```

#### Example 2: Counter Context with Actions

```javascript
import { createContext, useContext, useReducer } from "react";

// Counter reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

// Create context
const CounterContext = createContext();

// Provider component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within CounterProvider");
  }
  return context;
};

// Usage components
const CounterDisplay = () => {
  const { state } = useCounter();
  return <h2>Count: {state.count}</h2>;
};

const CounterControls = () => {
  const { dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  );
}
```

#### Example 3: User Context with Local Storage

```javascript
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save user to localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

// Usage components
const LoginButton = () => {
  const { login } = useUser();

  const handleLogin = () => {
    login({ name: "John Doe", email: "john@example.com" });
  };

  return <button onClick={handleLogin}>Login</button>;
};

const UserProfile = () => {
  const { user, logout } = useUser();

  if (!user) {
    return <LoginButton />;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}
```

## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import {reactContextQuiz} from './quiz.js';

## <Quiz questions={reactContextQuiz} />
