import React from 'react';
import CodePlayground from './index';

interface TemplateProps {
  template: 'basic' | 'responsive' | 'interactive' | 'animation' | 'form';
}

const templates = {
  basic: {
    title: "Basic HTML Structure",
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>Basic Web Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>About Us</h2>
      <p>This is a simple web page to learn HTML basics.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  margin-top: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}

nav a:hover {
  background: #555;
}

main {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}`,
      js: `// Basic JavaScript
console.log("Page loaded successfully!");

// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert('You clicked: ' + this.textContent);
    });
  });
});`
    }
  },
  responsive: {
    title: "Responsive Design",
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>Responsive Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>Responsive Website</h1>
      <nav class="nav">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Services</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>
    </header>
    
    <main class="main">
      <div class="card-grid">
        <div class="card">
          <h3>Card 1</h3>
          <p>This is a responsive card that adapts to different screen sizes.</p>
        </div>
        <div class="card">
          <h3>Card 2</h3>
          <p>Try resizing your browser window to see the responsive design in action!</p>
        </div>
        <div class="card">
          <h3>Card 3</h3>
          <p>Mobile-first design ensures great experience on all devices.</p>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.header h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.main {
  padding: 2rem 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .header {
    padding: 1rem 0;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
}`,
      js: `// Responsive JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for navigation
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add visual feedback
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // Show which link was clicked
      alert('You clicked: ' + this.textContent);
    });
  });
  
  // Add responsive behavior
  function handleResize() {
    const cards = document.querySelectorAll('.card');
    const width = window.innerWidth;
    
    cards.forEach((card, index) => {
      if (width < 768) {
        card.style.animationDelay = \`\${index * 0.1}s\`;
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      }
    });
  }
  
  // Listen for window resize
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
\`;
document.head.appendChild(style);`
    }
  },
  interactive: {
    title: "Interactive Elements",
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>Interactive Elements</title>
</head>
<body>
  <div class="container">
    <h1>Interactive Demo</h1>
    
    <div class="interactive-section">
      <h2>Click Counter</h2>
      <div class="counter">
        <span id="count">0</span>
        <button id="incrementBtn" class="btn">Increment</button>
        <button id="resetBtn" class="btn btn-secondary">Reset</button>
      </div>
    </div>
    
    <div class="interactive-section">
      <h2>Color Changer</h2>
      <div class="color-box" id="colorBox">
        <p>Click to change color!</p>
      </div>
      <button id="randomColorBtn" class="btn">Random Color</button>
    </div>
    
    <div class="interactive-section">
      <h2>Form Validation</h2>
      <form id="demoForm" class="form">
        <input type="text" id="nameInput" placeholder="Enter your name" class="input">
        <input type="email" id="emailInput" placeholder="Enter your email" class="input">
        <button type="submit" class="btn">Submit</button>
      </form>
      <div id="formMessage" class="message"></div>
    </div>
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
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.interactive-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.interactive-section h2 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.counter {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

#count {
  font-size: 2rem;
  font-weight: bold;
  color: #ffd700;
  min-width: 60px;
}

.btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #218838;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #6c757d;
}

.btn-secondary:hover {
  background: #5a6268;
}

.color-box {
  background: #ff6b6b;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-box:hover {
  transform: scale(1.05);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.9);
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #ffd700;
}

.message {
  margin-top: 1rem;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}

.message.success {
  background: rgba(40, 167, 69, 0.3);
  color: #90EE90;
}

.message.error {
  background: rgba(220, 53, 69, 0.3);
  color: #ffcccb;
}

/* Animation for counter */
@keyframes countUp {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.count-animation {
  animation: countUp 0.3s ease;
}`,
      js: `// Interactive JavaScript Demo
document.addEventListener('DOMContentLoaded', function() {
  // Counter functionality
  let count = 0;
  const countElement = document.getElementById('count');
  const incrementBtn = document.getElementById('incrementBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  incrementBtn.addEventListener('click', function() {
    count++;
    countElement.textContent = count;
    countElement.classList.add('count-animation');
    setTimeout(() => {
      countElement.classList.remove('count-animation');
    }, 300);
  });
  
  resetBtn.addEventListener('click', function() {
    count = 0;
    countElement.textContent = count;
  });
  
  // Color changer functionality
  const colorBox = document.getElementById('colorBox');
  const randomColorBtn = document.getElementById('randomColorBtn');
  
  const colors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57',
    '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'
  ];
  
  function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.background = randomColor;
  }
  
  colorBox.addEventListener('click', changeColor);
  randomColorBtn.addEventListener('click', changeColor);
  
  // Form validation
  const form = document.getElementById('demoForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const formMessage = document.getElementById('formMessage');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    // Simple validation
    if (!name) {
      showMessage('Please enter your name', 'error');
      return;
    }
    
    if (!email || !email.includes('@')) {
      showMessage('Please enter a valid email', 'error');
      return;
    }
    
    showMessage('Form submitted successfully!', 'success');
    form.reset();
  });
  
  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = \`message \${type}\`;
    
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'message';
    }, 3000);
  }
  
  // Add some initial interactivity
  console.log('Interactive demo loaded successfully!');
});`
    }
  }
};

const Template: React.FC<TemplateProps> = ({ template }) => {
  const templateData = templates[template];
  
  if (!templateData) {
    return <div>Template not found</div>;
  }
  
  return (
    <CodePlayground
      title={templateData.title}
      defaultCode={templateData.defaultCode}
    />
  );
};

export default Template; 