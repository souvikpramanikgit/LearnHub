---
id: html-formatting
sidebar_position: 8
title: Html Formatting
sidebar_label: Html Formatting
---

# 🎨 HTML Text Formatting 🚀

Master text appearance and structure in HTML using these tags and best practices.

## 🏛️ Core Formatting Tags

### **Bold**: `<b>` & `<strong>` 💪

- `<b>`: Bold, style only  
  `<b>Attention!</b>` → **Attention!**

- `<strong>`: Important, for meaning & accessibility  
  `<strong>Warning!</strong>` → **Warning!**

### **Italics**: `<i>` & `<em>` ✍️

- `<i>`: Italicizes (terms, names)  
  `<i>Book Title</i>` → *Book Title*
- `<em>`: Emphasizes (adds vocal stress)  
  `<em>Really important!</em>` → *Really important!*

### **Underline**: `<u>` ⚠️

- Use sparingly — often confused with links  
  `<u>Caution</u>` → <u>Caution</u>

## ✨ Enhanced Formatting

### **Highlight**: `<mark>` 🖍️

- Highlights text  
  `<mark>Found match</mark>` → <mark>Found match</mark>

### **Small Text**: `<small>` 🔍

- Deemphasized, fine print  
  `<small>Terms apply</small>` → <small>Terms apply</small>

### **Strikethrough & Deleted**: `<s>`, `<del>` 🗑️

- `<del>`: Show deleted from document  
  `<del>Outdated info</del>` → ~~Outdated info~~
- `<s>`: Show no longer correct  
  `<s>Incorrect price</s>` → ~~Incorrect price~~

### **Inserted**: `<ins>` ➕
- Underlined, show additions  
  `<ins>Updated info</ins>` → <ins>Updated info</ins>

### **Subscript & Superscript**: `<sub>`, `<sup>` 🧪
- `<sub>`: Lowered text  
  `H<sub>2</sub>O` → H₂O
- `<sup>`: Raised text  
  `x<sup>2</sup>`, `July 26<sup>th</sup>` → x² , July 26ᵗʰ

### **Quotation & Citation**: `<blockquote>`, `<q>`, `<cite>` 📝

- `<blockquote>`: For long quotations (**adds indentation**)
  ```html
  <blockquote>
      "HTML formatting powers web content."
  </blockquote>
  ```
- `<q>`: For short, inline quotes  
  `<q>Best practices matter.</q>` → "Best practices matter."
- `<cite>`: Reference sources  
  `<cite>MDN Web Docs</cite>` → *MDN Web Docs*

### **Abbreviation & Definition**: `<abbr>`, `<dfn>` 🧠

- `<abbr>`: Show abbreviations with tooltip
  `<abbr title="HyperText Markup Language">HTML</abbr>` → HTML (with tooltip)
- `<dfn>`: Define a term  
  `<dfn>HTML</dfn> means Hypertext Markup Language`

### **Code & Preformatted**: `<code>`, `<pre>`, `<kbd>`, `<samp>`, `<var>` 💻

- `<code>`: Code snippet  
  `<code>console.log('Hi!')</code>` → `console.log('Hi!')`

- `<pre>`: Preformatted (respects whitespace/line breaks)  
  ```html
  <pre>
    This is
    preformatted text
  </pre>
  ```

- `<kbd>`: Keyboard input  
  `<kbd>Ctrl + S</kbd>` → Ctrl + S

- `<samp>`: Sample output  
  `<samp>Success!</samp>` → `Success!`

- `<var>`: Variables in code/math  
  `<var>username</var>` → *username*

## 🌍 Additional Semantic Elements

### **Address & Contact**: `<address>` 📍

- Contact information for article/page author
  ```html
  <address>
    Written by <a href="mailto:john@example.com">John Doe</a><br>
    Visit us at: 123 Main St, City
  </address>
  ```

### **Time & Dates**: `<time>` ⏰

- Machine-readable dates and times
  ```html
  <time datetime="2024-01-15">January 15, 2024</time>
  <time datetime="2024-01-15T14:30">2:30 PM today</time>
  ```

### **Ruby Annotations**: `<ruby>`, `<rt>`, `<rp>` 🈳

- For East Asian typography (pronunciation guides)
  ```html
  <ruby>
    漢字 <rp>(</rp><rt>Kanji</rt><rp>)</rp>
  </ruby>
  ```

### **Bidirectional Text**: `<bdi>`, `<bdo>` 🔄

- `<bdi>`: Isolate text with different direction
- `<bdo>`: Override text direction
  ```html
  <bdo dir="rtl">This text goes right to left</bdo>
  ```

### **Generic Containers**: `<span>`, `<div>` 📦

- `<span>`: Inline generic container
- `<div>`: Block-level generic container
  ```html
  <p>This is <span class="highlight">highlighted text</span> in a paragraph.</p>
  ```

## 🏆 Best Practices

**HTML = Structure & Meaning**  
**CSS = Style & Appearance**

```html
<strong class="highlight">Alert: Action required now!</strong>
```
```css
.highlight { background: yellow; color: black; font-style: italic; }
```

### 🎯 Key Guidelines

- **Use semantic tags** for accessibility & SEO
- **Separate content from presentation** - keep styling with CSS
- **Choose tags by meaning**, not appearance
- **Test with screen readers** for accessibility
- **Validate your HTML** for browser compatibility

## 🌟 Complete Reference Table

| Tag           | Purpose                  | Example                            | Output |
|:--------------|:-------------------------|:-----------------------------------|:-------|
| `<b>`         | Bold (style)             | `<b>Bold</b>`                     | **Bold** |
| `<strong>`    | Bold (importance)        | `<strong>Important</strong>`      | **Important** |
| `<i>`         | Italic (style)           | `<i>Italic</i>`                   | *Italic* |
| `<em>`        | Italic (emphasis)        | `<em>Emphasis</em>`               | *Emphasis* |
| `<u>`         | Underline                | `<u>Underline</u>`                | <u>Underline</u> |
| `<mark>`      | Highlight                | `<mark>Highlight</mark>`          | <mark>Highlight</mark> |
| `<small>`     | Small text               | `<small>Footnote</small>`         | <small>Footnote</small> |
| `<del>`       | Deleted (strike)         | `<del>Deleted</del>`              | ~~Deleted~~ |
| `<s>`         | Strikethrough            | `<s>Wrong</s>`                    | ~~Wrong~~ |
| `<ins>`       | Inserted                 | `<ins>Added</ins>`                | <ins>Added</ins> |
| `<sub>`       | Subscript                | `H<sub>2</sub>O`                  | H₂O |
| `<sup>`       | Superscript              | `x<sup>2</sup>`                   | x² |
| `<blockquote>`| Long quote               | `<blockquote>Quote</blockquote>`  | Indented quote |
| `<q>`         | Short quote (inline)     | `<q>Short quote</q>`              | "Short quote" |
| `<cite>`      | Citation                 | `<cite>Source</cite>`             | *Source* |
| `<abbr>`      | Abbreviation             | `<abbr title="World Wide Web">WWW</abbr>` | WWW (tooltip) |
| `<dfn>`       | Definition               | `<dfn>Word</dfn>`                 | *Word* |
| `<code>`      | Code                     | `<code>alert()</code>`            | `alert()` |
| `<pre>`       | Preformat                | `<pre>text</pre>`                 | Preformatted |
| `<kbd>`       | Keyboard input           | `<kbd>Ctrl+C</kbd>`               | Ctrl+C |
| `<samp>`      | Sample output            | `<samp>Output</samp>`             | `Output` |
| `<var>`       | Variable                 | `<var>variable</var>`             | *variable* |
| `<time>`      | Date/time                | `<time>2024-01-15</time>`         | 2024-01-15 |
| `<address>`   | Contact info             | `<address>Contact</address>`      | Contact info |

## Let's Have a quick recap

import { Quiz } from '@site/src/components/Quiz';
import quiz from './quiz.json';

<Quiz questions={quiz} />

## 🔗 Additional Resources

- [MDN HTML Text Formatting](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C HTML Specification](https://html.spec.whatwg.org/)
- [WebAIM Accessibility Guidelines](https://webaim.org/articles/semanticstructure/)


##                                Happy Coding! 👨‍💻✨