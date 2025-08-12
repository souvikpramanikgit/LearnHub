---
id: html-elements
sidebar_position: 3
title: Html Elements
sidebar_label: Html Elements
---

Hey, everyone!  In this guide, we’ll dive into **HTML Elements** — the building blocks of every web page. Understanding how elements work is essential to writing clean, functional HTML. Let's explore their types, syntax, and practical usage.

---

## 1. What is an HTML Element?

An **HTML element** is a complete unit in HTML that defines content and its structure. It consists of:

- An **opening tag** (`<p>`)
- **Content** (`Hello, world!`)
- A **closing tag** (`</p>`)

### Example:
```html
<p>Hello, world!</p>
```

Here, `<p>` is a paragraph element containing the text "Hello, world!".

---

## 2. Types of HTML Elements

HTML elements are categorized into two main types:

### 2.1 Block-level Elements

Block-level elements take up the full width available and start on a new line.

#### Examples:
```html
<h1>This is a heading</h1>
<p>This is a paragraph</p>
<div>This is a division</div>
```

### 2.2 Inline Elements

Inline elements only take up as much width as necessary and do **not** start on a new line.

#### Examples:
```html
<span>This is a span</span>
<a href="#">This is a link</a>
<strong>This is bold</strong>
```

---

## 3. Empty (Void) Elements

Empty elements don’t have any content or closing tags.

### Common Empty Elements:
```html
<br>     <!-- Line break -->
<hr>     <!-- Horizontal rule -->
<img src="image.jpg" alt="An image">
<input type="text">
```

:::tip Note
Empty elements end with a `>` and do not have a closing tag.
:::

---

## 4. Nested HTML Elements

You can place one HTML element inside another — this is called **nesting**.

### Example:
```html
<p>This is a <strong>bold</strong> word inside a paragraph.</p>
```

Always make sure to close the inner tags before closing the outer tag.

---

## 5. Semantic vs Non-Semantic Elements

### Semantic Elements:
These clearly describe their meaning to both the browser and the developer.

#### Examples:
```html
<header>...</header>
<article>...</article>
<footer>...</footer>
```

### Non-Semantic Elements:
These don’t convey meaning about their content.

#### Examples:
```html
<div>...</div>
<span>...</span>
```

---

## 6. Customizing Elements with Attributes

Attributes provide extra information about an element and are written in the opening tag.

### Example:
```html
<a href="https://example.com" target="_blank">Visit Site</a>
```
- `href`: Specifies the URL
- `target="_blank"`: Opens in a new tab

---

## 7. Conclusion

HTML elements form the **core structure** of every web page. By mastering different types of elements, how they behave, and how to use them properly, you lay a strong foundation for becoming a web developer. Keep practicing and experiment with different combinations!

---
