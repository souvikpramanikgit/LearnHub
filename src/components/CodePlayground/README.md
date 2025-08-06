# CodePlayground Component

A React component that provides an interactive code editor with live preview for HTML, CSS, and JavaScript.

## Features

- **Monaco Editor**: Professional code editor with syntax highlighting
- **Live Preview**: Real-time iframe preview of the code
- **Tabbed Interface**: Switch between HTML, CSS, and JavaScript
- **Save/Load**: Local storage functionality for saving projects
- **Download**: Export code as HTML files
- **Share**: Copy code to clipboard
- **Responsive Design**: Works on desktop and mobile
- **Dark Mode Support**: Automatic dark mode detection

## Usage

### Basic Usage

```jsx
import CodePlayground from '@site/src/components/CodePlayground';

<CodePlayground />
```

### With Custom Default Code

```jsx
<CodePlayground 
  title="My Custom Playground"
  defaultCode={{
    html: '<h1>Hello World</h1>',
    css: 'h1 { color: blue; }',
    js: 'console.log("Hello!");'
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Interactive Code Playground"` | Title displayed in the header |
| `defaultCode` | `object` | See below | Initial HTML, CSS, and JS code |

### Default Code Structure

```typescript
interface DefaultCode {
  html: string;
  css: string;
  js: string;
}
```

## Examples

### Basic HTML Structure

```jsx
<CodePlayground 
  title="Basic HTML Tutorial"
  defaultCode={{
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
    css: `body { font-family: Arial; }`,
    js: `console.log("Page loaded");`
  }}
/>
```

### Responsive Design Example

```jsx
<CodePlayground 
  title="Responsive Design"
  defaultCode={{
    html: `<div class="container">
  <h1>Responsive Design</h1>
  <div class="card">Content</div>
</div>`,
    css: `.container { max-width: 800px; margin: 0 auto; }
@media (max-width: 768px) { .container { padding: 10px; } }`,
    js: `// Add interactivity here`
  }}
/>
```

## Styling

The component uses CSS modules and includes:

- **Responsive Design**: Adapts to different screen sizes
- **Dark Mode**: Automatic dark mode detection
- **Modern UI**: Clean, professional appearance
- **Smooth Animations**: Hover effects and transitions

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies

- `@monaco-editor/react`: Code editor
- `lucide-react`: Icons
- `react`: React framework

## Local Storage

The component saves projects to localStorage with the key `learnhub-playground`. The saved data includes:

```typescript
interface SavedProject {
  code: {
    html: string;
    css: string;
    js: string;
  };
  timestamp: string;
  title: string;
}
```

## Security

- Uses iframe sandbox for code execution
- Sanitizes HTML output
- Prevents XSS attacks through proper isolation

## Contributing

To extend the component:

1. Add new features to `index.tsx`
2. Update styles in `CodePlayground.css`
3. Add new templates to `Template.tsx`
4. Test across different browsers
5. Update this documentation

## Troubleshooting

### Common Issues

1. **Editor not loading**: Check if Monaco Editor is properly installed
2. **Preview not updating**: Ensure iframe sandbox permissions are correct
3. **Save not working**: Verify localStorage is available in the browser
4. **Styling issues**: Check if CSS is properly imported

### Performance Tips

- The component is optimized for performance
- Large code files may cause slight delays
- Consider code splitting for multiple playgrounds on one page 