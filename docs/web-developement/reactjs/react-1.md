---
id: introduction-to-react-basic
sidebar_position: 2
title: React Basic
sidebar_label: React Basic
---

Hey, everyone! In this guide, we’re going to explore some of basic concepts of **React**, like component lifecycle, props, state, and what's difference between props and state. We'll also take brief look into class based components.

## Table of Contents

1. [Introduction to React](#introduction-to-react)
2. [Props](#props)
3. [State](#state)
4. [Component Lifecycle](#component-lifecycle)
5. [Virtual DOM](#virtual-dom)
6. [Class Components (Legacy)](#class-components-legacy)

---

## Introduction to React

React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage application state efficiently.

### Key Concepts

- **Components**: Building blocks of React applications
- **JSX**: JavaScript XML syntax for writing React elements
- **Declarative**: Describe what the UI should look like
- **Component-based**: Build encapsulated components

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

---

## Props

Props are how you pass data from parent to child components. They are read-only and make components reusable.

### Basic Props

```jsx
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<Greeting name="Alice" age={25} />;
```

### Default Values

```jsx
function Button({ text = "Click me", color = "blue", onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}
```

### Type Checking (Modern Approach)

> **Note**: PropTypes were deprecated in April 2017 (v15.5.0). In React 19, we're removing the propType checks from the React package, and using them will be silently ignored. Use TypeScript or another type-checking solution instead.

```tsx
// TypeScript example (recommended)
interface ButtonProps {
  text?: string;
  color?: string;
  onClick: () => void;
}

function Button({ text = "Click me", color = "blue", onClick }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}
```

---

## State

State is mutable data that belongs to a component. When state changes, React re-renders the component.

### Key Characteristics

- **Mutable**: Can be changed over time
- **Local**: Belongs to the component that defines it
- **Triggers Re-renders**: Updates cause component to re-render
- **Asynchronous**: State updates may be batched

For more detials on how we can manage componet state please check `useState` hook example in our <a href="/docs/web-developemnt/reactjs/introduction-to-react-hooks#usestate" target="_blank" rel="noreferrer">React Hooks</a> guide.

### State vs Props

| State                 | Props              |
| --------------------- | ------------------ |
| Mutable               | Immutable          |
| Internal to component | Passed from parent |
| Triggers re-renders   | Read-only          |

### Lifting State Up

```jsx
function App() {
  let temperature = 0;

  const setTemperature = (temp) => {
    temperature = temp;
    // Re-render happens here
  };

  return (
    <div>
      <TemperatureInput onTemperatureChange={setTemperature} />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
}
```

---

## Component Lifecycle

Components go through three main phases: mounting, updating, and unmounting.

### Lifecycle Phases

1. **Mounting**: Component is created and inserted into DOM
2. **Updating**: Component re-renders due to prop/state changes
3. **Unmounting**: Component is removed from DOM

### Common Use Cases

```jsx
// Conceptual lifecycle events
function DataComponent() {
  // On Mount: Fetch data, set up subscriptions
  // On Update: Respond to prop changes, re-fetch data
  // On Unmount: Clean up subscriptions, cancel requests

  return <div>Component Content</div>;
}
```

---

## Virtual DOM

The Virtual DOM is a JavaScript representation of the actual DOM that makes React fast and efficient.

### How It Works

1. **Initial Render**: React creates virtual DOM tree
2. **State Change**: New virtual DOM tree is created
3. **Diffing**: React compares old and new trees
4. **Reconciliation**: Calculate minimum changes needed
5. **Update**: Update only changed parts in real DOM

### Example

```jsx
// When state changes, React:
// 1. Creates new Virtual DOM tree
// 2. Compares with previous tree
// 3. Updates only changed elements in real DOM

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### Benefits

- **Performance**: Minimizes expensive DOM operations
- **Batch Updates**: Groups multiple changes together
- **Predictable**: Makes UI updates more predictable
- **Cross-browser**: Abstracts away browser differences

---

## Class Components (Legacy)

> ⚠️ **Warning**: Class components are legacy. Use functional components for new projects.

### Basic Class Component

```jsx
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Class Component with State

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```

### Lifecycle Methods

```jsx
class DataComponent extends Component {
  componentDidMount() {
    // Fetch data after component mounts
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    // Re-fetch if props changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    // Clean up subscriptions, cancel requests
    this.cleanup();
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
```

### Why Avoid Class Components

- More verbose syntax
- Harder to optimize
- Less intuitive lifecycle management
- Functional components are preferred

---

## Conclusion

React's core concepts provide a solid foundation for building modern web applications:

- **Props**: Read-only data passed between components
- **State**: Mutable data that triggers re-renders
- **Lifecycle**: Understanding component phases
- **Virtual DOM**: React's optimization layer
- **Modern Approach**: Prefer functional components

---

## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import {reactBasicQuestions} from './quiz.js';

## <Quiz questions={reactBasicQuestions} />
