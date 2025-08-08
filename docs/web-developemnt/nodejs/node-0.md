---
id: introduction-to-node
sidebar_position: 1
title: Introduction to Node.js
sidebar_label: Node.js Introduction
---
# Getting Started with Node.js 

Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript outside the browser and is widely used for building fast, scalable backend applications.  

---

##  Why Learn Node.js?
- **JavaScript everywhere** – use the same language for frontend & backend.
- **Fast & scalable** – event-driven, non-blocking I/O.
- **Huge ecosystem** – over a million npm packages.
- **Community support** – large developer community and open-source projects.

---

##  Setting Up Node.js
1. Download and install from [Node.js official site](https://nodejs.org/).
2. Verify installation:
   ```bash
   node -v
   npm -v
3. Create your first file app.js:

   ```javascript
   console.log("Hello, Node.js!");
4. Run it:

   ```bash
   node app.js
###  npm Basics
npm (Node Package Manager) comes with Node.js.
Example: Install Express (popular web framework):

   ```bash

   npm init -y
   npm install express 
   ```
###  Your First Server
Create a simple server with Express:

```javascript

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js 🚀");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```
### Run:

```bash

node app.js
```
###  Connecting to a Database
Install MongoDB driver (or Mongoose):

```bash
npm install mongoose
```
Example connection:

```javascript

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error(err));
  ```
##  Next Steps
- Learn Asynchronous JavaScript (callbacks, promises, async/await).
- Explore popular frameworks:
- Express.js → REST APIs
- Nest.js → enterprise apps
- Socket.io → real-time apps

## Build projects
- Todo API
- Chat application
- Authentication system

## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import quiz from './quiz.json';

<Quiz questions={quiz} />

##  Conclusion
Node.js gives you the power to use JavaScript everywhere, making development seamless. Whether you're building APIs, real-time apps, or full-stack solutions, Node.js is a must-have in your toolkit.

