---
id: html-basics
sidebar_position: 2
title: Html Basics
sidebar_label: Html Basics
---

Hey, everyone!  In this guide, we’re going to explore the **basics of HTML**, the building block of the web. If you're just starting your web development journey, mastering HTML basics is the first crucial step. Let's get started!

---

## 1. HTML Document Structure

Every HTML page follows a standard structure. Here's what a basic HTML document looks like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Page</h1>
    <p>This is a basic HTML structure.</p>
  </body>
</html>
```

### Breakdown:
- `<!DOCTYPE html>`: Declares the document as HTML5.
- `<html>`: The root element containing all content.
- `<head>`: Contains metadata like title and links to stylesheets.
- `<body>`: Contains all visible content shown to users.

:::tip Pro Tip
Always start your HTML files with `<!DOCTYPE html>` to ensure proper rendering across browsers.
:::

---

## 2. Common HTML Tags

HTML uses **tags** to define elements. Here are some basic and frequently used tags:

### Headings
```html
<h1>This is a heading</h1>
<h2>This is a sub-heading</h2>
```
There are six levels of headings: `<h1>` to `<h6>`.

### Paragraphs
```html
<p>This is a paragraph of text.</p>
```

### Links
```html
<a href="https://example.com">Visit Example</a>
```

### Images
```html
<img src="image.jpg" alt="A sample image" />
```

### Lists
**Ordered List:**
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

**Unordered List:**
```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

---

## 3. Attributes in HTML

Attributes provide additional information about HTML elements. They are always included in the opening tag.

### Example:
```html
<a href="https://openai.com" target="_blank">OpenAI</a>
```
- `href`: Specifies the URL.
- `target="_blank"`: Opens the link in a new tab.

### Image with `alt` Attribute:
```html
<img src="logo.png" alt="Company Logo" />
```
- `alt`: Describes the image for screen readers or if the image fails to load.

---

## 4. Nesting and Indentation

HTML elements can be **nested** inside one another. Proper indentation improves readability.

```html
<ul>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Subitem A</li>
    </ul>
  </li>
</ul>
```

:::tip Best Practice
Keep your code clean and consistently indented to make it easier to read and maintain.
:::

---

## 5. Comments in HTML

Use comments to explain code or leave notes.

```html
<!-- This is a comment -->
<p>This will be visible.</p>
```

Comments do not appear on the webpage.

---

## 6. Conclusion

You've just learned the **fundamentals of HTML**! These basics form the core of every webpage. Practice creating simple pages using the tags and principles you’ve learned here. Stay tuned for more guides as we dive deeper into web development!

---
