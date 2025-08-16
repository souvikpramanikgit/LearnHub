---
id: html-project
title: HTML Project 
sidebar_label: HTML Projects
---

import CodeBlock from '@theme/CodeBlock';

Curated Collection of HTML Projects for Hands-On Mastery

---

##  🟢 Simple Projects
<!-- PORTFOLIO PROJECT -->

### PORTFOLIO PROJECT
<details>
  <summary>Simple Portfolio</summary>

  **Description:**  
  A basic portfolio website that introduces yourself with your photo, about section, skills, and contact details.

  **Hint:**  
  Use `<h1>`, `<p>`, `<img>`, and `<ul>` tags. Focus on clean structure before styling.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
</head>
<body>
  <h1>John Doe</h1>
  <img src="profile.jpg" alt="Profile Picture" width="150">
  
  <h2>About Me</h2>
  <p>I am a web developer learning HTML.</p>
  
  <h2>Education & Skills</h2>
  <ul>
    <li>B.Sc Computer Science</li>
    <li>HTML, CSS, JavaScript</li>
  </ul>
  
  <h2>Contact</h2>
  <p>Email: john@example.com</p>
  <p>Phone: +91 9876543210</p>
</body>
</html>`}
  </CodeBlock>
</details>

<!-- LANDING PAGE -->

### Landing Page

<details>
  <summary>Landing Page</summary>

  **Description:**  
  A simple landing page for a product or service that includes a header, features section, and a footer with contact info.

  **Hint:**  
  Use semantic tags like `<header>`, `<section>`, and `<footer>`. Start with structure, then later you can style with CSS.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Product Landing Page</title>
</head>
<body>
  <header>
    <h1>SuperCool App</h1>
    <p>The best app to organize your life.</p>
  </header>

  <section>
    <h2>Features</h2>
    <ul>
      <li>Easy to use</li>
      <li>Cross-platform</li>
      <li>Free updates</li>
    </ul>
  </section>

  <footer>
    <p>Contact us at: support@supercool.com</p>
  </footer>
</body>
</html>`}
  </CodeBlock>
</details>



### Blog Page

<details>
  <summary>Blog Page</summary>

  **Description:**  
  Create a blog page that displays posts with a title, content area, and a sidebar for categories or recent posts.

  **Hint:**  
  Use `<article>` for blog posts and `<aside>` for the sidebar. Keep the layout simple.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Blog</title>
</head>
<body>
  <header>
    <h1>Welcome to My Blog</h1>
  </header>

  <main>
    <article>
      <h2>First Post</h2>
      <p>This is my first blog post content.</p>
    </article>

    <aside>
      <h3>Categories</h3>
      <ul>
        <li>Tech</li>
        <li>Lifestyle</li>
        <li>Travel</li>
      </ul>
    </aside>
  </main>
</body>
</html>`}
  </CodeBlock>
</details>



### Form Project

<details>
  <summary>Form Project</summary>

  **Description:**  
  Build a form with multiple input types like text fields, dropdowns, checkboxes, and buttons.

  **Hint:**  
  Use `<form>` with `<input>`, `<select>`, and `<button>`. Always give labels to inputs.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
</head>
<body>
  <h1>Register Here</h1>
  <form>
    <label>Name:</label>
    <input type="text" name="name"><br><br>

    <label>Email:</label>
    <input type="email" name="email"><br><br>

    <label>Gender:</label>
    <select>
      <option>Male</option>
      <option>Female</option>
    </select><br><br>

    <input type="checkbox"> Subscribe to newsletter<br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`}
  </CodeBlock>
</details>



### Recipe Page
<details>
  <summary>Recipe Page</summary>

  **Description:**  
  Create a recipe webpage that shows ingredients, steps, and an image of the dish.

  **Hint:**  
  Use lists (`<ul>` or `<ol>`) for ingredients and steps. Add an image with `<img>`.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Recipe Page</title>
</head>
<body>
  <h1>Chocolate Cake</h1>
  <img src="cake.jpg" alt="Chocolate Cake" width="300">

  <h2>Ingredients</h2>
  <ul>
    <li>Flour</li>
    <li>Sugar</li>
    <li>Cocoa Powder</li>
  </ul>

  <h2>Steps</h2>
  <ol>
    <li>Mix ingredients</li>
    <li>Bake in oven</li>
    <li>Serve and enjoy!</li>
  </ol>
</body>
</html>`}
  </CodeBlock>
</details>



## 🔴 Advanced Projects


### Music Playlist

<details>
  <summary>Music Playlist</summary>

  **Description:**  
  Create a music playlist page with a list of songs and audio controls.

  **Hint:**  
  Use `<audio>` tag with `controls` to play songs.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Playlist</title>
</head>
<body>
  <h1>Favorite Songs</h1>
  <ul>
    <li>
      Song 1 <br>
      <audio controls>
        <source src="song1.mp3" type="audio/mpeg">
      </audio>
    </li>
    <li>
      Song 2 <br>
      <audio controls>
        <source src="song2.mp3" type="audio/mpeg">
      </audio>
    </li>
  </ul>
</body>
</html>`}
  </CodeBlock>
</details>



### Photo Gallery

<details>
  <summary>Photo Gallery</summary>

  **Description:**  
  Create a gallery that displays multiple images in a grid.

  **Hint:**  
  Use `<img>` tags inside a `<div>`. Later you can style with CSS grid or table.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Photo Gallery</title>
</head>
<body>
  <h1>My Gallery</h1>
  <div>
    <img src="img1.jpg" width="200">
    <img src="img2.jpg" width="200">
    <img src="img3.jpg" width="200">
  </div>
</body>
</html>`}
  </CodeBlock>
</details>



### Resume Page

<details>
  <summary>Resume Page</summary>

  **Description:**  
  Create a resume webpage with your profile, education, experience, and contact info.

  **Hint:**  
  Use headings `<h1>`, `<h2>` for sections, and lists `<ul>` for experiences/skills.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Resume</title>
</head>
<body>
  <h1>John Doe</h1>
  <h2>Education</h2>
  <p>BSc in Computer Science</p>

  <h2>Experience</h2>
  <ul>
    <li>Intern at ABC Corp</li>
    <li>Web Developer at XYZ</li>
  </ul>

  <h2>Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Contact</h2>
  <p>Email: john@example.com</p>
</body>
</html>`}
  </CodeBlock>
</details>



### Product Catalog

<details>
  <summary>Product Catalog</summary>

  **Description:**  
  Build a product catalog that shows items with names, prices, and images.

  **Hint:**  
  Use `<table>` or `<div>` cards to display product info.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Product Catalog</title>
</head>
<body>
  <h1>Shop Catalog</h1>
  <div>
    <h2>Product 1</h2>
    <p>Price: $10</p>
    <img src="p1.jpg" width="150">
  </div>

  <div>
    <h2>Product 2</h2>
    <p>Price: $20</p>
    <img src="p2.jpg" width="150">
  </div>
</body>
</html>`}
  </CodeBlock>
</details>

## 🧮  Mega Project 

### Travel Website

<details>
  <summary>Travel Website</summary>

  **Description:**  
  Create a travel website homepage with a destination list, images, and contact info.

  **Hint:**  
  Use sections for destinations and footer for contact.

  **Code:**
  <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Travel With Us</title>
</head>
<body>
  <header>
    <h1>Explore the World</h1>
  </header>

  <section>
    <h2>Popular Destinations</h2>
    <ul>
      <li>Paris</li>
      <li>Tokyo</li>
      <li>New York</li>
    </ul>
  </section>

  <footer>
    <p>Contact: info@travel.com</p>
  </footer>
</body>
</html>`}
  </CodeBlock>
</details>
