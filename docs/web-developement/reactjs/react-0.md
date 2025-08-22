---
id: introduction-to-react
sidebar_position: 1
title: Introduction to React
sidebar_label: React Introduction
---

Hey, everyone! In this guide, we’re going to explore **React**, one of the most popular JavaScript libraries for building user interfaces. Developed and maintained by Facebook, React helps developers create fast, dynamic, and scalable web applications with ease. Let’s jump into what makes React so powerful and widely used!

---

## 1. What is React?

**React** is a declarative, component-based JavaScript library used for building interactive UIs. It's especially great for building **single-page applications (SPAs)** where you need real-time updates and efficient rendering.

### Key Features:

- **Component-Based**: Break your UI into reusable pieces.
- **Virtual DOM**: Improves performance by updating only the parts of the UI that change.
- **Declarative**: Describe what the UI should look like, and React takes care of the rest.
- **Unidirectional Data Flow**: Makes data changes predictable and easier to debug.

:::tip Did You Know?
React was first released in 2013 and powers major apps like Facebook, Instagram, and WhatsApp Web!
:::

---

## 2. Why Use React?

- Easy to create interactive UIs.
- Encourages reusable code with components.
- Huge ecosystem (React Router, Redux, etc.).
- Backed by a strong community and corporate support.

---

## 3. A Simple React Example

Here’s what a basic React component looks like:

```jsx
import React from "react";

function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;
```

### Rendering to the DOM:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
```

This code will display:  
**"Hello, React!"**

---

## 4. JSX: JavaScript + XML

**JSX** is a syntax extension that lets you write HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello, world!</h1>;
```

- Easier to visualize component structure.
- Compiled down to `React.createElement()` calls.

---

## 5. Components in React

### Functional Component:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Most modern React apps use **functional components** with **Hooks**.

---

## 6. Adding React to Your Project

### 6.1 Using CDN (Quick Start):

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### 6.2 Using Create React App:

```bash
npx create-react-app my-app
cd my-app
npm start
```

---

## 7. React Ecosystem

- **React Router**: Routing for SPAs
- **Redux / Zustand**: State management
- **Next.js**: React framework with SSR
- **React Native**: Build mobile apps with React

---

## 8. Conclusion

React makes building modern web interfaces intuitive and efficient. Whether you're building a simple site or a complex web app, React's component-driven approach and powerful ecosystem make it a top choice. Stick around to learn about Hooks, State, Props, and more in upcoming guides!

---

## 9. Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import {reactIntroQuestions} from './quiz.js';

## <Quiz questions={reactIntroQuestions} />
