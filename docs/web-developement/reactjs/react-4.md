---
id: introduction-to-hoc
sidebar_position: 5
title: Higher order components
sidebar_label: Higher order components
---

Higher-Order Components (HOCs) are an advanced technique in React for reusing component logic. HOCs are not part of the React API per se, but rather a pattern that emerges from React's compositional nature.
A Higher-Order Component is a function that takes a component and returns a new component with enhanced functionality.

---

## Table of Contents

- [What is a Higher-Order Component?](#what-is-a-higher-order-component)
- [Basic HOC Pattern](#basic-hoc-pattern)
- [HOC Examples](#hoc-examples)
- [Best Practices](#best-practices)
- [HOCs vs Hooks](#hocs-vs-hooks)
- [Conclusion](#conclusion)

---

## What is a Higher-Order Component?

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

A HOC is a pure function with zero side-effects that:

- Takes a React component as an argument
- Returns a new React component
- The returned component renders the original component with additional props or behavior

## Basic HOC Pattern

### Function Component HOC

```javascript
import React from "react";

// Basic HOC structure
const withEnhancement = (WrappedComponent) => {
  return (props) => {
    // Add logic here
    const enhancedProps = {
      ...props,
      additionalProp: "enhanced value",
    };

    return <WrappedComponent {...enhancedProps} />;
  };
};

// Usage
const MyComponent = ({ message, additionalProp }) => (
  <div>
    <p>{message}</p>
    <p>{additionalProp}</p>
  </div>
);

const EnhancedComponent = withEnhancement(MyComponent);
```

### Class Component HOC (Legacy)

```javascript
import React, { Component } from "react";

const withEnhancement = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} additionalProp="enhanced" />;
    }
  };
};
```

---

## HOC Examples

### Data Fetching HOC

```javascript
const withData = (url) => (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [url]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
};

// Usage
const UserProfile = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Welcome, {data.name}!</div>;
};

const UserProfileWithData = withData("/api/user")(UserProfile);
```

### Theme Provider HOC

```javascript
const withTheme = (WrappedComponent) => {
  return (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
      <div className={`theme-${theme}`}>
        <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} />
      </div>
    );
  };
};
```

---

## Best Practices

### 1. Use Display Names for Debugging

```javascript
const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    // HOC logic here
    return <WrappedComponent {...props} />;
  };

  // Set display name for better debugging
  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return AuthenticatedComponent;
};
```

### 2. Copy Static Methods

```javascript
import hoistNonReactStatics from "hoist-non-react-statics";

const withEnhancement = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    return <WrappedComponent {...props} />;
  };

  // Copy static methods
  hoistNonReactStatics(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};
```

### 3. Don't Use HOCs Inside Render

```javascript
// ❌ Bad: Creates new component on every render
const MyComponent = () => {
  const EnhancedComponent = withAuth(SomeComponent);
  return <EnhancedComponent />;
};

// ✅ Good: Create enhanced component outside
const EnhancedComponent = withAuth(SomeComponent);

const MyComponent = () => {
  return <EnhancedComponent />;
};
```

## HOCs vs Hooks

With the introduction of React Hooks, many HOC patterns can be replaced with custom hooks:

### HOC Pattern

```javascript
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={() => setCount((c) => c + 1)}
      />
    );
  };
};
```

### Hook Pattern

```javascript
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  return { count, increment };
};

// Usage in component
const MyComponent = () => {
  const { count, increment } = useCounter();
  return <button onClick={increment}>Count: {count}</button>;
};
```

### When to Use HOCs vs Hooks

**Use HOCs when:**

- You need to wrap components conditionally
- Working with class components
- Need to modify component behavior at the component level

**Use Hooks when:**

- Working with function components
- Need to share stateful logic
- Want more granular control over what gets shared

## Conclusion

Higher-Order Components are a powerful pattern for code reuse in React applications. While hooks have become the preferred method for sharing stateful logic in modern React applications, HOCs still have their place, especially when working with class components or when you need to conditionally wrap components.

Remember to follow best practices, avoid common pitfalls, and consider whether a custom hook might be a better solution for your use case.

---

_This documentation serves as a comprehensive guide to React HOCs. For more React patterns and best practices, refer to the official React documentation._

---

## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import {reactHOCQuiz} from './quiz.js';

## <Quiz questions={reactHOCQuiz} />
