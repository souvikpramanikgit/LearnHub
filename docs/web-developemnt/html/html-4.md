---
id: html-headings
sidebar_position: 5
title: Html Headings
sidebar_label: Html Headings
---

# HTML Headings

HTML headings create structure and hierarchy in your web pages. They organize content from main titles to subsections, making pages accessible and SEO-friendly.

## The Six Heading Levels

HTML provides six heading levels from most to least important:

```html
<h1>Main Title</h1>        <!-- Page title -->
<h2>Section Title</h2>     <!-- Major sections -->
<h3>Subsection</h3>        <!-- Under h2 -->
<h4>Minor Section</h4>     <!-- Under h3 -->
<h5>Small Heading</h5>     <!-- Rarely used -->
<h6>Smallest Heading</h6>  <!-- Rarely used -->
```

## Best Practices

### Structure Rules
- **One `<h1>` per page** - Acts as the main title
- **Don't skip levels** - Go from h1 → h2 → h3, not h1 → h3
- **Keep headings descriptive** - Users should understand the content
- **Use for structure, not styling** - Never choose headings for appearance

### Good Example
```html
<h1>Complete Guide to Web Development</h1>
  <h2>Frontend Development</h2>
    <h3>HTML Basics</h3>
    <h3>CSS Styling</h3>
  <h2>Backend Development</h2>
    <h3>Server Setup</h3>
    <h3>Databases</h3>
```

### Common Mistakes
```html
<!-- ❌ Wrong: Skipping levels -->
<h1>Title</h1>
<h3>Subsection</h3>

<!-- ❌ Wrong: Multiple h1 tags -->
<h1>Main Title</h1>
<h1>Another Title</h1>

<!-- ❌ Wrong: Using for styling -->
<h2>This text just needs to be bigger</h2>
```

## Accessibility Features

### Screen Reader Navigation
- Users can jump between headings with keyboard shortcuts
- Screen readers announce heading levels: "Heading level 2, Introduction"
- Proper structure helps users understand page layout

### ARIA Labels (When Needed)
```html
<h2 aria-describedby="section-intro">Getting Started</h2>
<p id="section-intro">This section covers the basics</p>
```

## SEO Benefits

- **Search engines** use headings to understand content structure
- **Keywords in headings** improve search rankings
- **Proper hierarchy** helps content indexing
- **`<h1>` tag** carries the most SEO weight

## Document Outline

Browser creates an outline from your headings:

```
1. Web Development Guide (h1)
   1.1. Frontend Development (h2)
       1.1.1. HTML Basics (h3)
       1.1.2. CSS Styling (h3)
   1.2. Backend Development (h2)
       1.2.1. Server Setup (h3)
```

## Testing Your Structure

### Quick Check Methods
1. **Hide CSS** - Headings should still make sense
2. **Use browser tools** - Check the document outline
3. **Screen reader testing** - Test with assistive technology
4. **Heading plugins** - Browser extensions show heading structure

### Browser DevTools
Most browsers show heading structure in accessibility panels.

## Real-World Examples

### Blog Post
```html
<h1>How to Learn JavaScript</h1>
  <h2>Prerequisites</h2>
  <h2>Learning Path</h2>
    <h3>Beginner Level</h3>
    <h3>Intermediate Level</h3>
  <h2>Practice Projects</h2>
```

### Documentation Page
```html
<h1>API Documentation</h1>
  <h2>Authentication</h2>
    <h3>API Keys</h3>
    <h3>OAuth</h3>
  <h2>Endpoints</h2>
    <h3>Users</h3>
      <h4>Create User</h4>
      <h4>Update User</h4>
```

## Quick Reference

| Tag | Purpose | Usage |
|-----|---------|-------|
| `<h1>` | Page title | One per page |
| `<h2>` | Main sections | Multiple allowed |
| `<h3>` | Subsections | Under h2 |
| `<h4>` | Sub-subsections | Under h3 |
| `<h5>` | Minor headings | Rarely needed |
| `<h6>` | Smallest headings | Very rare |

## Key Takeaways

- Headings create **logical content structure**
- Follow **sequential order** (don't skip levels)
- **One h1** per page for best practices
- Essential for **accessibility** and **SEO**
- Think **outline first**, styling second
