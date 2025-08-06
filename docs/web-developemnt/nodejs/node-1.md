---
id: create-a-server
sidebar_position: 2
title: Create your own Server
sidebar_label: Node.js Server
---
###  1. Node.js Core Modules
Node.js comes with built-in modules (no need to install them with npm). Some important ones are:
- http → Create web servers
- fs → File System operations (read/write files)
- path → Work with file paths
- os → System information
- events → Event handling
👉 Example: Reading a file using fs:
```js

const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Content:", data);
});
```
### 2. Creating a Basic Server with http
With Node.js, you don’t need Apache or Nginx — you can create your own server!

```js

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World! 🌎');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```
#### Run it with:

```bash

node server.js
Open your browser → http://localhost:3000 🎉
```

###  3. Handling Different Routes
We can handle different pages (routes) based on the URL:

```js

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page 🏠');
  } else if (req.url === "/about") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Us Page ℹ️');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found ❌');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```
###  4. Serving HTML Files
Instead of plain text, let’s serve an HTML page:

```js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```
👉 Create a file index.html in the same folder:

```html

<!DOCTYPE html>
<html>
<head>
  <title>My Node Server</title>
</head>
<body>
  <h1>Welcome to Node.js Server 🎉</h1>
</body>
</html>
```
### Summary
- Learned about core modules (http, fs, etc.)
- Created a basic web server with Node.js
- Served different routes and an HTML file

