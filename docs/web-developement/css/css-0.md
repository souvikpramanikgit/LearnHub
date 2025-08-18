---
id: introduction-to-css
sidebar_position: 1
title: Introduction to CSS
sidebar_label: CSS Introduction
---

Welcome to the world of **CSS** – short for **Cascading Style Sheets**. If HTML is the structure of a webpage, CSS is its skin, clothes, and style. Let’s explore what CSS is all about, why it matters, and how it works.

---

## 1. What is CSS?

**CSS (Cascading Style Sheets)** is a language used to style and layout HTML elements on a webpage.

### Key Points:
- Controls the **visual appearance** of web elements (fonts, colors, margins, layouts, etc.).
- Separates **content (HTML)** from **presentation (CSS)**.
- Makes web pages **attractive, responsive**, and **user-friendly**.

:::tip Fun Fact
CSS was first proposed by Håkon Wium Lie in 1994 while working with Tim Berners-Lee!
:::

---

## 2. Why Use CSS?

- **Design Consistency**: Apply a consistent style across all web pages.
- **Reusability**: Use one CSS file to style multiple HTML files.
- **Responsiveness**: Adapt websites for desktops, tablets, and mobiles.
- **Improved Performance**: Cleaner HTML and faster loading.

---

## 3. Types of CSS

| Type             | How It's Used                     | Example |
|------------------|------------------------------------|---------|
| Inline CSS       | Directly in HTML tag              | `<p style="color:red;">Hello</p>` |
| Internal CSS     | Inside a `<style>` tag in HTML    | `<style> p { color: red; } </style>` |
| External CSS     | In a separate `.css` file         | `style.css` linked using `<link>` |

---

## 4. Basic Syntax

```css
selector {
  property: value;
}
```

### Example:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

---

## 5. CSS Selectors

Selectors are used to **target HTML elements** for styling.

| Selector       | Description                | Example |
|----------------|----------------------------|---------|
| `*`            | All elements                | `* { margin: 0; }` |
| `element`      | Specific element            | `p { color: black; }` |
| `.class`       | Elements with class         | `.box { border: 1px solid; }` |
| `#id`          | Element with an ID          | `#header { font-weight: bold; }` |
| `element, element` | Multiple elements        | `h1, h2 { font-family: Arial; }` |

---

## 6. CSS Properties

Some commonly used CSS properties include:

- `color`
- `background-color`
- `font-size`
- `margin`
- `padding`
- `border`
- `display`
- `position`
- `flex`, `grid`

---

## 7. Responsive Design with CSS

CSS allows developers to create **responsive** web designs using:

- **Media Queries**: Apply styles based on screen size
- **Flexbox & Grid**: Advanced layout techniques
- **Units like % and vw/vh**: Flexible sizing

---

## 8. Conclusion

CSS is the **backbone of web design**. It gives your HTML structure the styling it needs to become a visually engaging experience. From basic colors to complex layouts — CSS does it all. Master it, and you'll unlock a world of creative possibilities!

## 9. Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import quiz from './quiz.json';

<Quiz questions={quiz} />
---
