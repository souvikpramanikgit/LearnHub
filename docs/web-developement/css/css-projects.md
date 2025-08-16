---
id: css-projects
title: CSS Project 
sidebar_label: CSS Projects
---

 

import CodeBlock from '@theme/CodeBlock';

Here are some curated **CSS practice projects** with description, hints, and example code.  

---

## 🟢 Simple Projects  

### Styled Portfolio
<!-- PROJECT 1: Styled Portfolio -->
<details>
  <summary>Styled Portfolio</summary>

  **Description:**  
  Add CSS styling to your HTML portfolio (colors, fonts, layouts).

  **Hint:**  
  Use `font-family`, `color`, `margin`, and `padding`. Keep it clean and minimal.  

  **HTML:**  
  <CodeBlock language="html">
{`<body>
  <h1>My Portfolio</h1>
  <img src="profile.jpg" alt="Profile Picture" width="150">
  <p>Hello! I'm learning CSS.</p>
</body>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background: #f4f4f4;
}
h1 {
  color: #2c3e50;
}
img {
  border-radius: 50%;
}
`}
  </CodeBlock>
</details>


### Button Hover Effects

<!-- PROJECT 2: Button Hover Effects -->
<details>
  <summary>Button Hover Effects</summary>

  **Description:**  
  Create buttons that change color, size, or add shadows when hovered.  

  **Hint:**  
  Use `:hover` pseudo-class and `transition`.  

  **HTML:**  
  <CodeBlock language="html">
{`<button>Click Me</button>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`button {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: #2980b9;
  transform: scale(1.1);
}
`}
  </CodeBlock>
</details>


### Navigation Bar

<!-- PROJECT 3: Navigation Bar -->
<details>
  <summary>Navigation Bar</summary>

  **Description:**  
  Style a horizontal navigation bar with hover effects.  

  **Hint:**  
  Use `display: flex` and remove list styles with `list-style: none`.  

  **HTML:**  
  <CodeBlock language="html">
{`<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`nav ul {
  display: flex;
  list-style: none;
  background: #333;
}
nav li {
  padding: 15px;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a:hover {
  color: yellow;
}
`}
  </CodeBlock>
</details>



### Card Design
<!-- PROJECT 4: Card Design -->
<details>
  <summary>Card Design</summary>

  **Description:**  
  Create card-style containers with shadows and rounded corners.  

  **Hint:**  
  Use `box-shadow`, `border-radius`, and `padding`.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="card">
  <h2>Card Title</h2>
  <p>This is a simple card.</p>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.card {
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  padding: 20px;
  background: white;
  margin: 20px;
}
`}
  </CodeBlock>
</details>



### Resposive Grid
<!-- PROJECT 5: Responsive Grid -->
<details>
  <summary>Responsive Grid</summary>

  **Description:**  
  Make a grid layout that adjusts with screen size.  

  **Hint:**  
  Use `display: grid` and `grid-template-columns: repeat(auto-fit, minmax(...))`.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="gallery">
  <img src="img1.jpg" alt="Image 1">
  <img src="img2.jpg" alt="Image 2">
  <img src="img3.jpg" alt="Image 3">
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
.gallery img {
  width: 100%;
  border-radius: 8px;
}
`}
  </CodeBlock>
</details>



### Animated Loader
<!-- PROJECT 6: Animated Loader -->
<details>
  <summary>Animated Loader</summary>

  **Description:**  
  Create a spinning circle loader animation.  

  **Hint:**  
  Use `@keyframes` and `animation`.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="loader"></div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`}
  </CodeBlock>
</details>



### Tooltip
<!-- PROJECT 7: Tooltip -->
<details>
  <summary>Tooltip</summary>

  **Description:**  
  Create a tooltip that appears when hovering over text.  

  **Hint:**  
  Use `position: relative` for parent and `absolute` for tooltip.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="tooltip">
  Hover over me
  <span class="tooltip-text">Tooltip text</span>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip-text {
  visibility: hidden;
  position: absolute;
  background: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  top: -30px;
  left: 0;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}
`}
  </CodeBlock>
</details>



## 🔴 Advanced Projects  

### Pricing Table
<!-- PROJECT 8: Pricing Table -->
<details>
  <summary>Pricing Table</summary>

  **Description:**  
  Design a 3-column pricing table with hover effects.  

  **Hint:**  
  Use `flexbox` and `:hover` for highlighting a plan.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="pricing">
  <div class="plan">Basic</div>
  <div class="plan">Pro</div>
  <div class="plan">Premium</div>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.pricing {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.plan {
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: 0.3s;
}
.plan:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  border-color: #3498db;
}
`}
  </CodeBlock>
</details>



### Dark Mode Toggle
<!-- PROJECT 9: Dark Mode Toggle -->
<details>
  <summary>Dark Mode Toggle</summary>

  **Description:**  
  Style a website with both light and dark mode themes.  

  **Hint:**  
  Use `body.dark-mode` with different colors.  

  **HTML:**  
  <CodeBlock language="html">
{`<button onclick="document.body.classList.toggle('dark-mode')">
  Toggle Dark Mode
</button>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`body {
  background: white;
  color: black;
}
body.dark-mode {
  background: #121212;
  color: white;
}
`}
  </CodeBlock>
</details>



### Animated Progress Bar
<!-- PROJECT 10: Animated Progress Bar -->
<details>
  <summary>Animated Progress Bar</summary>

  **Description:**  
  Create a progress bar that fills up smoothly.  

  **Hint:**  
  Use `@keyframes` and `width` animation.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="progress">
  <div class="progress-bar"></div>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.progress {
  width: 100%;
  background: #eee;
  border-radius: 10px;
}
.progress-bar {
  height: 20px;
  width: 0%;
  background: #27ae60;
  border-radius: 10px;
  animation: load 3s forwards;
}
@keyframes load {
  0% { width: 0%; }
  100% { width: 80%; }
}
`}
  </CodeBlock>
</details>



##  🧮 MEGA PROJECT

### E-Commerce Landing Page 

<details>
  <summary>E-commerce Landing Page</summary>

  **Description:**  
  Build a stylish landing page for an e-commerce store. Include a header, hero section with a call-to-action, product grid, and footer.  

  **Hint:**  
  Use **Flexbox/Grid** for layout, a **hero banner** for attraction, and **cards** for products.  

  **HTML:**  
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-commerce Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <h1>ShopEase</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h2>Your One-Stop Shop</h2>
    <p>Trendy collections at unbeatable prices.</p>
    <a href="#" class="btn">Shop Now</a>
  </section>

  <section class="products">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <div class="card">
        <img src="https://via.placeholder.com/200" alt="Product 1">
        <h3>Product 1</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/200" alt="Product 2">
        <h3>Product 2</h3>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/200" alt="Product 3">
        <h3>Product 3</h3>
        <p>$19.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>&copy; 2025 ShopEase. All rights reserved.</p>
  </footer>
</body>
</html>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  line-height: 1.6;
}

.header {
  background: #2c3e50;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header ul {
  list-style: none;
  display: flex;
}

.header ul li {
  margin-left: 20px;
}

.header ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  background: url('https://via.placeholder.com/1200x400') no-repeat center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero .btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: #e67e22;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.products {
  padding: 40px 20px;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card img {
  max-width: 100%;
  border-radius: 8px;
}

.card button {
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background: #27ae60;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.card button:hover {
  background: #219150;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
}`}

  </CodeBlock>
</details>
