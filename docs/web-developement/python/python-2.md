---
id: data-structures
title: Data Structures
sidebar_position: 3
---

# Data Structures in Python

Python comes with built-in data structures that make it powerful and easy to use.

---

##  Lists
- Ordered, mutable (can be changed), allow duplicates.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])     # apple
fruits.append("mango")
print(fruits)        # ['apple', 'banana', 'cherry', 'mango']
```
##  Tuples

Ordered, immutable, allow duplicates.
```python
point = (10, 20)
print(point[1])    # 20
```

##  Sets

Unordered, unique elements, no duplicates.
```python
tags = {"python", "ml", "ece", "python"}
print(tags)   # {'ece', 'ml', 'python'}
```

##  Dictionaries

Key-value pairs, unordered (insertion-ordered since Python 3.7).
```python
student = {"name": "Rohan", "year": 2, "branch": "ECE"}
print(student["name"])     # Rohan
student["year"] = 3
print(student)             # {'name': 'Rohan', 'year': 3, 'branch': 'ECE'}
```

## 📝 Quick Exercises

- Create a list of your 5 favorite movies and print the 2nd one.
- Make a dictionary with your details (name, age, college). Print the age.
- Try to add a duplicate element to a set and see what happens.