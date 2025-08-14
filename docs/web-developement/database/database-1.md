---
id: database-basics-sql-fundamentals
sidebar_position: 2
title: Database Basics and SQL Fundamentals
sidebar_label: Database Basics & SQL Fundamentals
---

# Database Basics & SQL Fundamentals

This guide is your **step between** the *Database Introduction* and solving real SQL problems.  
We’ll cover the fundamentals you need before jumping into more advanced queries — concepts that will save you from common beginner mistakes and help you write efficient, reliable SQL.
## Why Fundamentals Matter?
Before running queries, it’s important to understand:
- How data is stored and organized.
- How relationships between data work.
- The basic commands and rules that keep data accurate.
Without this foundation, your queries might work *sometimes* — but break when data grows or becomes more complex.

---

## 1. Database Basics

### 1.1 Tables, Rows, and Columns
A **table** stores related data in **rows** (records) and **columns** (fields).

Example:

| id | name   | email             | age |
|----|--------|-------------------|-----|
| 1  | Alice  | alice@mail.com    | 25  |
| 2  | Bob    | bob@mail.com      | 30  |

:::tip  Tip
Think of a table like a spreadsheet, but with strict rules to keep data consistent.
:::



### 1.2 Primary Keys & Foreign Keys
- **Primary Key (PK)** → Unique identifier for each row.  
- **Foreign Key (FK)** → Links data in one table to another.

Example:  
`user_id` in the Orders table can link to `id` in the Users table.


### 1.3 Relationships
- **One-to-One** → Each row in table A matches exactly one row in table B.  
- **One-to-Many** → One row in table A relates to many rows in table B (most common).  
- **Many-to-Many** → Rows in both tables relate to multiple rows in the other.


### 1.4 Indexes (Basic Idea)
An **index** is like a table of contents for your data — it helps the database find information faster.  
But be careful: indexes speed up reads but can slow down inserts and updates.


### 1.5 Data Types
| Type    | Example         | Use Case             |
|---------|-----------------|----------------------|
| INT     | 42              | IDs, counters        |
| VARCHAR | 'Alice'         | Names, emails        |
| DATE    | '2025-08-14'    | Birthdays, deadlines |
| BOOLEAN | TRUE / FALSE    | Status flags         |

:::tip  Did You Know?
`NULL` is **not** equal to `0` or an empty string — it means “unknown”.
:::


---


## 2. Core SQL Commands

SQL (**Structured Query Language**) is the standard way to interact with relational databases.  
It’s split into categories based on what you’re trying to do.

### 2.1 Main Categories
1. **DDL (Data Definition Language)** → Defines and changes database structure.  
   Commands: `CREATE`, `ALTER`, `DROP`
2. **DML (Data Manipulation Language)** → Inserts, updates, or deletes data.  
   Commands: `INSERT`, `UPDATE`, `DELETE`
3. **DQL (Data Query Language)** → Retrieves data.  
   Command: `SELECT`
4. **DCL (Data Control Language)** → Controls access.  
   Commands: `GRANT`, `REVOKE`
5. **TCL (Transaction Control Language)** → Manages changes as a single unit of work.  
   Commands: `COMMIT`, `ROLLBACK`


### 2.2 Basic Examples

#### 1. CREATE TABLE
```sql
CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

```

#### 2. INSERT
```sql
INSERT INTO Students (id, name, age)
VALUES (1, 'Alice', 22);
```

#### 3. SELECT
```sql
SELECT name, age FROM Students;
```

#### 4. UPDATE 
```sql
UPDATE Students
SET age = 23
WHERE id = 1;
```

#### 5. DELETE 
```sql
DELETE FROM Students
WHERE id = 1;
```

:::tip  Tip
Always include a `WHERE` clause when updating or deleting data — unless you really want to change or remove **every** record in the table.
:::



---


## 3. Filtering & Sorting Data

Filtering and sorting help you narrow down results and present them in the desired order. This is essential when working with large datasets.

### 3.1 Filtering with `WHERE`

The `WHERE` clause specifies conditions for selecting rows.  
You can use **comparison operators** and **logical operators** inside it.

**Example:**
```sql
SELECT *
FROM employees
WHERE department = 'Sales';
```

:::tip  Tip
Always double-check your `WHERE` clause in a `SELECT` query before using it in `UPDATE` or `DELETE`.
:::

### 3.2 Comparison Operators

| Operator     | Meaning               | Example           |
| ------------ | --------------------- | ----------------- |
| `=`          | Equal to              | `WHERE age = 30`  |
| `!=` or `<>` | Not equal to          | `WHERE age != 30` |
| `<`          | Less than             | `WHERE age < 30`  |
| `>`          | Greater than          | `WHERE age > 30`  |
| `<=`         | Less than or equal    | `WHERE age <= 30` |
| `>=`         | Greater than or equal | `WHERE age >= 30` |



### 3.3 Logical Operators

| Operator | Meaning                             |
| -------- | ----------------------------------- |
| `AND`    | All conditions must be true         |
| `OR`     | At least one condition must be true |
| `NOT`    | Negates a condition                 |

**Example:**
```sql
SELECT name, salary
FROM employees
WHERE department = 'IT'
  AND salary > 50000;
```

### 3.4 Pattern Matching with LIKE

| Symbol | Meaning                          |
| ------ | -------------------------------- |
| `%`    | Matches zero or more characters  |
| `_`    | Matches exactly one character    |

**Example:**
```sql
SELECT *
FROM customers
WHERE name LIKE 'A%';
-- Finds names starting with 'A'
```


### 3.5 Sorting with ORDER BY

Sorts results in ascending (`ASC`) or descending (`DESC`) order.  
Default order is ascending.

**Example:**
```sql
SELECT *
FROM products
ORDER BY price DESC;
```

---


## 4. Joins & Data Analysis

**What it covers:**

- **Joins:** `INNER`, `LEFT`, `RIGHT` joins with examples using two tables.  
- **Aggregations & Grouping:** Using `COUNT`, `SUM`, `AVG`, `MIN`, `MAX` along with `GROUP BY` and `HAVING` for summarizing and filtering grouped results.

:::tip  Tip
When using `GROUP BY`, every non-aggregated column in the `SELECT` clause must appear in the `GROUP BY`.
:::


**Join Example:**
```sql
SELECT o.order_id, c.customer_name
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;
```
- **What it does:**  
This query uses an `INNER JOIN` to fetch matching rows from the `Orders` table (`o`) and the `Customers` table (`c`), based on the `customer_id` column.

- **Result:**  
You get a list of order IDs with their corresponding customer names. Only orders that have a matching customer in the `Customers` table will be shown.


**Aggregation Example:**
```sql
SELECT customer_id, COUNT(order_id) AS total_orders
FROM Orders
GROUP BY customer_id
HAVING COUNT(order_id) > 5;
```

- **What it does:**
   - `GROUP BY customer_id` → Groups orders by each customer.
   - `COUNT(order_id)` → Counts how many orders each customer placed.
   - `HAVING COUNT(order_id) > 5` → Filters to only include customers who placed more than 5 orders.

- **Result:**  
You get a list of customers (by ID) along with the number of orders they placed, but only for those with more than 5 orders.

:::tip 💡 Tip
Always remember — in SQL, `HAVING` filters **after** grouping, while `WHERE` filters **before** grouping.
:::

---


## 5. Constraints & Data Integrity

| Constraint   | Description                                         |
| ------------ | --------------------------------------------------- |
| `NOT NULL`   | Ensures a column cannot have `NULL` values.          |
| `UNIQUE`     | Prevents duplicate values in a column.               |
| `DEFAULT`    | Assigns a default value if none is provided.         |
| `CHECK`      | Enforces a condition on column values.               |


**Example:**
```sql
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10, 2) DEFAULT 30000,
    age INT CHECK (age >= 18)
);
```

---

## Summary
This section introduces core database concepts, covering relational database basics, SQL fundamentals, and how to work with data effectively. It explains essential commands for creating, reading, updating, and deleting records (**CRUD**), demonstrates filtering and sorting with `WHERE`, `ORDER BY`, and `LIMIT`, and shows how to retrieve related data using joins. Aggregation and grouping with `GROUP BY` and `HAVING` enable meaningful data analysis, while constraints like `NOT NULL`, `UNIQUE`, `DEFAULT`, and `CHECK` ensure data integrity and reliability.

---



