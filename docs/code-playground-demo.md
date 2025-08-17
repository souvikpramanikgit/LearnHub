---
title: Interactive Code Playground
sidebar_position: 2
slug: /code-playground-demo
---

# Interactive Code Playground

Welcome to the LearnHub Interactive Code Playground! This feature allows you to write, test, and experiment with HTML, CSS, and JavaScript code in real-time.

## Features

- **Live Preview**: See your code changes instantly
- **Syntax Highlighting**: Professional code editor with syntax highlighting
- **Save & Load**: Save your projects and load them later
- **Download**: Export your code as HTML files
- **Share**: Copy your code to clipboard for sharing
- **Responsive Design**: Works perfectly on desktop and mobile

## Try It Out

Below is a fully functional code playground. You can:

1. **Edit HTML**: Structure your web page
2. **Style with CSS**: Make it look beautiful
3. **Add JavaScript**: Make it interactive
4. **See Live Results**: Watch your changes in real-time

import CodePlayground from '@site/src/components/CodePlayground';

<CodePlayground 
  title="LearnHub Interactive Playground"
  defaultCode={{
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Awesome Website</title>
</head>
<body>
  <div class="container">
    <h1>Welcome to LearnHub!</h1>
    <p>This is a live code playground where you can experiment with web technologies.</p>
    <button id="demoBtn" class="demo-button">Click Me!</button>
    <div id="output" class="output"></div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.demo-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;
}

.demo-button:hover {
  background: #218838;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.output {
  margin-top: 20px;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  min-height: 100px;
}

.highlight {
  background: #ffd700;
  color: #333;
  padding: 2px 6px;
  border-radius: 4px;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,
    js: `// Interactive JavaScript Demo
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('demoBtn');
  const output = document.getElementById('output');
  let clickCount = 0;
  
  button.addEventListener('click', function() {
    clickCount++;
    const messages = [
      'Great job! You clicked the button! 🎉',
      'Keep going! You\'re doing amazing! ⭐',
      'Wow! You\'re on fire! 🔥',
      'Incredible! You\'re unstoppable! 💪',
      'Legendary clicking skills! 🏆'
    ];
    
    const message = messages[Math.min(clickCount - 1, messages.length - 1)];
    output.innerHTML = \`<div class="highlight">\${message}</div>\`;
    
    // Add some visual feedback
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
  });
  
  // Add some initial content
  output.innerHTML = '<p>Click the button above to see some magic! ✨</p>';
});`
  }}
/>

## How to Use

### 1. **HTML Tab**
Write your HTML structure here. This is where you define the content and structure of your web page.

### 2. **CSS Tab**
Add styling to make your page look beautiful. You can use modern CSS features like Flexbox, Grid, and animations.

### 3. **JavaScript Tab**
Add interactivity to your page. You can manipulate the DOM, handle events, and create dynamic content.

### 4. **Live Preview**
Watch your changes happen in real-time as you type. The preview updates automatically!

## Controls

- **Run**: Manually refresh the preview
- **Save**: Save your current code to browser storage
- **Load**: Load previously saved code
- **Download**: Export your code as an HTML file
- **Share**: Copy your code to clipboard
- **Reset**: Clear the editor and start fresh

## Tips for Learning

1. **Start Simple**: Begin with basic HTML structure
2. **Add Style**: Use CSS to make it visually appealing
3. **Make it Interactive**: Add JavaScript for user interactions
4. **Experiment**: Try different properties and values
5. **Break Things**: Don't be afraid to make mistakes - that's how you learn!

## Examples to Try

### Basic Layout
```html
<div class="card">
  <h2>My Card</h2>
  <p>This is a simple card layout.</p>
</div>
```

### Responsive Design
```css
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 20px;
}

@media (max-width: 768px) {
  .card {
    margin: 10px;
    padding: 15px;
  }
}
```

### Interactive Elements
```javascript
document.querySelector('.card').addEventListener('click', function() {
  this.style.transform = 'rotate(5deg)';
  setTimeout(() => {
    this.style.transform = 'rotate(0deg)';
  }, 200);
});
```

## Browser Compatibility

The Code Playground works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

If you encounter any issues:

1. **Code not running**: Check the browser console for errors
2. **Preview not updating**: Try clicking the "Run" button
3. **Save not working**: Make sure your browser supports localStorage
4. **Download not working**: Check if your browser allows downloads

## Next Steps

Now that you've tried the Code Playground, you can:

1. **Explore the Tutorials**: Learn more about web development concepts
2. **Build Projects**: Create your own websites and applications
3. **Share Your Code**: Use the share feature to show others your work
4. **Practice Regularly**: The more you code, the better you'll become!

Happy coding! 🎉 