---
id: html-attributes
sidebar_position: 4
title: Html Attributes
sidebar_label: Html Attributes
---

Hey, everyone!  In this guide, we’ll explore **HTML Attributes** — the extra bits of information you can add to HTML elements. Attributes modify or define the behavior, appearance, and content of elements. Let's dive into how they work and how to use them effectively!

---

## 1. What are HTML Attributes?

**Attributes** provide **additional information** about HTML elements. They are always specified in the **opening tag** and usually come in `name="value"` pairs.

### Example:

```html
<a href="https://example.com">Visit Example</a>
```

- href is the attribute name

- "https://example.com" is the attribute value

## 2. Commonly Used HTML Attributes

### 2.1 `href` — Hyperlink Reference

Used with the `<a>` tag to define the link destination.

```
<a href="https://openai.com">OpenAI</a>
```

### 2.2 `src` — Source of Media

Used in `<img>`, `<audio>`, and `<video>` to specify the file path.

```
<img src="photo.jpg" alt="A sample image" />
```

### 2.3 `alt` — Alternative Text

Provides a text description for images when they cannot load or for screen readers.

```
<img src="logo.png" alt="Company Logo" />
```

### 2.4 `title` — Tooltip Text

Displays additional information when hovering over the element.

```
<p title="Hover text example">Hover over this paragraph</p>
```

### 2.5 `style` — Inline CSS Styling

Adds CSS styles directly within the HTML element.

```
<p style="color: blue; font-size: 18px;">Styled paragraph</p>
```

## 3. Boolean Attributes

Boolean attributes don’t require a value. If present, they are considered "true".

Example: `disabled` in a button

```
<button disabled>Can't Click Me</button>
```

Other Boolean Attributes:
- `checked` (for checkboxes/radio buttons)

- `readonly` (for input fields)

- `required` (for form fields)

## 4. Global Attributes
These can be applied to any HTML element.

Some useful global attributes:

- `id`: Unique identifier for an element.

- `class`: Assigns a class for CSS or JavaScript use.

- `style`: Adds inline styles.

- `title`: Tooltip text.

- `data-*`: Custom data attributes.

Example:

```
<div id="container" class="box" data-user="admin">Welcome</div>
```

## 5. Data Attributes `(data-*)`

Custom attributes for embedding extra information in HTML without affecting layout or functionality.

Example:

```
<div data-user-id="123" data-role="admin">User Info</div>
```

These values can be accessed with JavaScript for dynamic behavior.

## 6. Best Practices for Using Attributes

- Use attributes that are valid for the specific element.

- Prefer semantic attributes over generic ones for clarity.

- Use double quotes around attribute values.

- Keep attribute names lowercase (HTML is case-insensitive, but lowercase is the standard).

## 7. Conclusion

HTML Attributes let you customize elements and control how they behave or appear. Mastering attributes is key to writing rich and interactive HTML pages. Keep exploring and testing different attributes to build more functional websites!

