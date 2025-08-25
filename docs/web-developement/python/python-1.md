---
title: Python Basics
sidebar_position: 2
---


# Variables and Syntax in Python

We'll learn the syntax and variables used in Python.

---

##  Printing in Python
Python has a very simple and clean syntax, which makes it beginner-friendly.
```python
print("Hello, World!")
```
Thus prints - Hello, World!
Input and Output : 
```python
name = input("Enter your name: ")
print("Hello,", name, "! Welcome!") 
#Enter your name: Rohan
#Hello, Rohan"! Welcome!
```

##  Variables
In Python, we assign variables some value. 
Below are a few examples.
```python
x = 10           # int
pi = 3.14        # float
name = "Zarine"  # str
is_ok = True     # bool
```
💡 In Python, variables are case-sensitive (Name and name are different).

##  Multiple Assignment
This is how we assign multiple variables at the same time!
```python

a, b, c = 1, 2, 3
x = y = z = 0   # all assigned to 0
```
##  Naming Rules
There are some rules to be followed while naming a variable.
- Can contain letters, numbers, and underscores.
- Cannot start with a number.
- Keywords like for, if, while cannot be used as variable names.

Valid examples:

```python

user_name = "Alice"
marks1 = 90
_total = 100
```
Invalid:

```python

1value = 5       # ❌ cannot start with number
for = 10         # ❌ cannot use keyword
```
##  Comments
Single line:

```python

# This is a comment
```
Multi-line (docstring style):

```python

"""
This is a 
multi-line comment
"""
```
## 📝 Quick Exercise
Create three variables: age, pi, student_name. Assign appropriate values and print them.



---











