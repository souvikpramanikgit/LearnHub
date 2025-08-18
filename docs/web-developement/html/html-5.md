---
id: html-block
sidebar_position: 6
title: Html Block and Inline Elements
sidebar_label: Html Block and Inline Elements
---

# HTML Block and Inline Elements

## 🎯 Quick Overview

**Block Elements** = Full width, new line  
**Inline Elements** = Content width, same line

---

## 📋 Block Elements

Block elements always start on a new line and take full width.

### Common Block Elements

| Element | Purpose |
|---------|---------|
| `<div>` | Container |
| `<h1>-<h6>` | Headings |
| `<p>` | Paragraphs |
| `<ul>`, `<ol>` | Lists |
| `<li>` | List items |
| `<section>` | Content sections |
| `<article>` | Independent content |
| `<header>`, `<footer>` | Page structure |
| `<nav>` | Navigation |

### Example
```html
<div>This is a container</div>
<p>This is a paragraph</p>
<h1>This is a heading</h1>
```

**Browser Output:**
```
┌─────────────────────────────────────────┐
│ This is a container                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ This is a paragraph                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ THIS IS A HEADING (large & bold)       │
└─────────────────────────────────────────┘
```

---

## 🔗 Inline Elements

Inline elements flow with text and take only needed space.

### Common Inline Elements

| Element | Purpose |
|---------|---------|
| `<span>` | Generic inline container |
| `<a>` | Links |
| `<strong>` | **Bold** text |
| `<em>` | *Italic* text |
| `<img>` | Images |
| `<code>` | Code snippets |
| `<br>` | Line break |
| `<input>` | Form inputs |
| `<button>` | Buttons |

### Example
```html
<p>This is <strong>bold</strong> and <em>italic</em> text with a <a href="#">link</a>.</p>
```

**Browser Output:**
```
This is bold and italic text with a link.
         ↑       ↑                    ↑
       bold    italic            blue link
```

---

## 🔄 Visual Comparison

### Block Behavior
```html
<h1>Title</h1>
<p>Paragraph text here</p>
<div>Container content</div>
```

**Browser Output:**
```
┌─────────────────────────────────────────┐
│ TITLE (very large & bold)               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Paragraph text here                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Container content                       │
└─────────────────────────────────────────┘
```

### Inline Behavior
```html
<span>Text</span><strong>Bold</strong><em>Italic</em><a href="#">Link</a>
```

**Browser Output:**
```
TextBoldItalicLink (all on one line)
     ↑    ↑      ↑
   bold italic blue
```

### Mixed Example
```html
<div>
  Block container with <strong>bold</strong> and <em>italic</em> inline text.
</div>
<p>Another paragraph with a <a href="#">clickable link</a>.</p>
```

**Browser Output:**
```
┌─────────────────────────────────────────┐
│ Block container with bold and italic    │
│ inline text.                            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Another paragraph with a clickable link │
└─────────────────────────────────────────┘
```

---

## 🎛️ CSS Display Control

```css
/* Change behavior */
span { display: block; }    /* Inline → Block */
div { display: inline; }    /* Block → Inline */
img { display: inline-block; } /* Hybrid */
```

### Display Values
- **`block`** - Full width, new line
- **`inline`** - Content width, same line  
- **`inline-block`** - Content width but can set width/height
- **`none`** - Hide element

---

## 📏 Quick Reference

| Type | Width | New Line | Can Contain | Margins/Padding |
|------|-------|----------|-------------|-----------------|
| **Block** | Full | ✅ Yes | Block + Inline | All sides |
| **Inline** | Content | ❌ No | Inline only | Left/Right only |

---

## 🚫 Nesting Rules

### ✅ Allowed
```html
<div>
  <p>Text with <strong>bold</strong> word</p>
</div>
```

**Browser Output:**
```
┌─────────────────────────────────────────┐
│ Text with bold word                     │
└─────────────────────────────────────────┘
```

### ❌ Not Allowed
```html
<strong>
  <div>Block inside inline</div>  <!-- Wrong! -->
</strong>
```

---

## ✨ Key Takeaways

- **Block** = structure and layout
- **Inline** = text formatting  
- Block elements stack vertically
- Inline elements flow horizontally
- Use CSS `display` to change behavior


