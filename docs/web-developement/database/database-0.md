---
id: introduction-to-databases
sidebar_position: 1
title: Introduction to Databases
sidebar_label: Database Introduction
---

Hey, everyone! In this guide, we’re going to explore **Databases**, the backbone of modern applications.  
From storing user information to managing large-scale analytics, databases make it possible to store, retrieve, and manipulate data efficiently.  
Let’s dive into the fundamentals you need to know! 

---

## 1. What is a Database?

A **database** is an organized collection of data that allows for efficient storage, retrieval, and management.  
Instead of scattering information across multiple files, databases store data in a **structured** and **centralized** way.

### Key Features:
- **Structured Storage** → Keeps data in a well-organized format.
- **Efficient Retrieval** → Query and get the data you need quickly.
- **Data Integrity** → Ensures data remains accurate and consistent.
- **Security Controls** → Restricts unauthorized access.
- **Scalability** → Handles growth in data and users.

:::tip Did You Know?
Databases power almost every app you use — from Instagram’s feed to your online banking transactions!
:::

---

## 2. SQL vs NoSQL

Databases generally fall into two main categories: **SQL (Relational)** and **NoSQL (Non-Relational)**.

| Feature | SQL (Relational) | NoSQL (Non-relational) |
|---------|------------------|------------------------|
| Structure | Tables (rows & columns) | Flexible formats (JSON, key-value, graph) |
| Schema | Fixed | Dynamic |
| Query Language | SQL | API-based or custom |
| Scaling | Vertical | Horizontal |
| Examples | MySQL, PostgreSQL, SQLite | MongoDB, Redis, Cassandra |

### SQL Databases:
- Store data in **tables**.
- Use **Structured Query Language (SQL)** for queries.
- Great for structured, related data.
- **Examples:** MySQL, PostgreSQL, SQLite.

### NoSQL Databases:
- Store data in flexible formats.
- Ideal for dynamic or unstructured data.
- **Examples:** MongoDB, Cassandra, Firebase.

---

## 3. Basic CRUD Operations

CRUD stands for:
- **Create** – Insert new data.
- **Read** – Retrieve data.
- **Update** – Modify existing data.
- **Delete** – Remove data.

### SQL Example:
```sql
-- Create
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

-- Read
SELECT * FROM users;

-- Update
UPDATE users SET email = 'john.doe@example.com' WHERE id = 1;

-- Delete
DELETE FROM users WHERE id = 1;
``` 

---

## 4. Popular Databases

### 1. MySQL
- **Type:** Relational, open-source  
- **Use Case:** Widely used for web applications  
- **Key Advantage:** Strong community support  

### 2. MongoDB
- **Type:** NoSQL document database  
- **Data Format:** Stores data in BSON format  
- **Key Advantage:** Great for flexible schemas  

### 3. PostgreSQL
- **Type:** Advanced relational database  
- **Features:** Supports JSON, indexing, full-text search  
- **Key Advantage:** Open-source and highly extensible  


---


## 5. Connecting Databases to Backend Frameworks

Connecting a database to your backend allows you to store, retrieve, and manipulate application data dynamically.
General Steps to Connect Any DB to a Backend Framework

1. **Install the relevant driver or ORM**  
   Examples: `mysql2`, `mongoose`, `pg`, `prisma`
2. **Import the library**  
   Add it to your backend code using `require` or `import`.
3. **Configure connection parameters**  
   Include:- Host, Username, Password, Database name
4. **Open the connection**  
   Establish the connection before handling API requests.
5. **Perform CRUD operations**  
   Use the connection to Create, Read, Update, and Delete data.
6. **Close the connection gracefully**  
   Ensure cleanup when the application stops.


---


## Quiz Time

import { Quiz } from '@site/src/components/Quiz';
import quiz from './quiz.json';

<Quiz questions={quiz} />

 

