---
id: functions
title: Functions
sidebar_position: 4
---

# Functions in Python

Functions let you organize code into reusable blocks.

---

##  Defining a Function
We define a function in Python with the use of def(). Below is an example.
```python
def greet():
    print("Hello, welcome to Python!")
    
greet()
```
## Parameters and Arguments
We pass parameters and arguments through functions like in the example below. 
```python
def add(a, b):
    return a + b

result = add(10, 5)
print(result)   # 15
```
## Default Parameters
```python
def greet_user(name="Guest"):
    print(f"Hello, {name}!")

greet_user()         # Hello, Guest!
greet_user("Zarine") # Hello, Zarine!
```

## Keyword Arguments
```python
def student_info(name, branch, year):
    print(f"{name} studies {branch} in year {year}")

student_info(branch="ECE", year=2, name="Zarine")
```
## Variable Arguments (*args, **kwargs)
```python
def add_all(*nums):
    return sum(nums)

print(add_all(1, 2, 3, 4))  # 10
```

## Lambda Functions

```python
square = lambda x: x * x
print(square(5))   # 25
```

## 📝 Quick Exercises
- Write a function multiply(x, y) that returns the product.
- Write a function is_even(num) that prints "Even" or "Odd".
- Create a lambda function that reverses a string.


---


