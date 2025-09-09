---
id: javascript-introduction
sidebar_position: 1
title: Introduction to JavaScript
sidebar_label: JavaScript Introduction
---

Hey, everyone! 👋 In this guide, we’re going to explore **JavaScript**, one of the most powerful and popular programming languages used in web development. With JavaScript, you can bring your websites to life by adding interactivity, dynamic content, and real-time updates that engage users and make your pages more functional. Let’s dive into the basics!

---

## 1. What is JavaScript?

**JavaScript** is a high-level, interpreted scripting language used to create and control dynamic website content. Unlike HTML and CSS—which handle structure and style—JavaScript adds behavior and interactivity to your web pages. It runs in the browser and can manipulate HTML and CSS in real-time to create rich user experiences.

### Key Features:
- **Client-side Execution**: Runs directly in the user's browser, making interactions fast and seamless.
- **Dynamic and Interactive**: Responds to user actions such as clicks, keyboard inputs, and more.
- **Lightweight and Fast**: Designed for quick execution and responsiveness.
- **Versatile**: Used both on the frontend (in browsers) and backend (via Node.js).

---

### Quick Example: JavaScript in Action

Here’s a simple example that shows how JavaScript can respond when a user clicks a button:

```html
<button onclick="alert('Hello, world!')">Click me</button>
```
:::tip Fun Fact
JavaScript was created in just 10 days by Brendan Eich in 1995!
:::

---

## 2. What Can JavaScript Do?

- Show/hide elements on a page
- Validate form inputs before submission
- Create animations and effects
- Fetch and display data without reloading the page (AJAX)
- Handle browser events (click, keypress, mouseover, etc.)

---

## 3. JavaScript Syntax: A Quick Look

Here’s a simple example of JavaScript in action:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Example</title>
  </head>
  <body>
    <h1 id="demo">Hello!</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
      function changeText() {
        document.getElementById("demo").innerText = "You clicked the button!";
      }
    </script>
  </body>
</html>
```

### Explanation:
- **HTML** sets up the page structure and defines the elements (like the heading and button).
- **JavaScript** adds interactivity by handling the button click event and dynamically updating the text inside the heading.
- This interaction shows how JavaScript can manipulate the content of a webpage without needing to reload it.

---

## 4. Adding JavaScript to Web Pages

You can add JavaScript in three ways:

### 4.1 Inline
```html
<button onclick="alert('Hi!')">Click</button>
```

### 4.2 Internal (within `<script>` tags)
```html
<script>
  console.log("Hello from JavaScript!");
</script>
```

### 4.3 External (linked via `.js` file)
```html
<script src="script.js"></script>
```

Use the `defer` or `async` attributes to control when the script runs.

---

## 5. Tools and Platforms That Use JavaScript

- **Frontend Frameworks**: React, Vue, Angular
- **Backend**: Node.js, Express.js
- **Mobile Apps**: React Native, Ionic
- **Game Dev**: Phaser, Three.js
- **APIs and AJAX**: Fetch, XMLHttpRequest

---

## 6. Conclusion

JavaScript is the **engine of interactivity** on the web. It empowers developers to create responsive, engaging, and powerful web applications. Mastering JavaScript opens doors to frontend, backend, mobile, and even game development. Stay tuned for more JS tutorials and hands-on examples!

## 7. Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import quiz from './quiz.json';

<Quiz questions={quiz} />

---
