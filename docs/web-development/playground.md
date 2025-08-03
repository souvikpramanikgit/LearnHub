---
title: Code Playground
sidebar_position: 3
---

# Interactive Code Playground

Practice your web development skills with our interactive code playground! Write HTML, CSS, and JavaScript code and see the results in real-time.

## Try the Playground

import CodePlayground from '@site/src/components/CodePlayground';

<CodePlayground 
  title="Web Development Playground"
  defaultCode={{
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <div class="container">
    <h1>Hello World!</h1>
    <p>Welcome to LearnHub Code Playground</p>
    <button id="demoBtn">Click Me!</button>
    <div id="output"></div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  margin: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

button {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #218838;
  transform: translateY(-2px);
}

#output {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  min-height: 50px;
}`,
    js: `// Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('demoBtn');
  const output = document.getElementById('output');
  let clickCount = 0;
  
  button.addEventListener('click', function() {
    clickCount++;
    output.innerHTML = \`<p>You clicked the button \${clickCount} time(s)! 🎉</p>\`;
    
    // Add some visual feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
  
  // Initial message
  output.innerHTML = '<p>Click the button above to see some magic! ✨</p>';
});`
  }}
/>

## Features

- **Real-time Preview**: See your changes instantly
- **Syntax Highlighting**: Professional code editor
- **Save & Load**: Save your projects locally
- **Download**: Export as HTML files
- **Share**: Copy code to clipboard
- **Responsive**: Works on all devices

## Learning Tips

1. **Start Simple**: Begin with basic HTML structure
2. **Add Style**: Use CSS to make it beautiful
3. **Make it Interactive**: Add JavaScript for functionality
4. **Experiment**: Try different properties and values
5. **Practice**: The more you code, the better you become!

## Next Steps

- Explore the [HTML Basics](/docs/web-development/html-basics) tutorial
- Learn about [CSS Styling](/docs/web-development/css-styling)
- Master [JavaScript Fundamentals](/docs/web-development/javascript-basics)
- Build real projects with the playground!

Happy coding! 🎉 