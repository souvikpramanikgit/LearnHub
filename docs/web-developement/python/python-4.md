---
id: projects
title: Beginner Projects
sidebar_position: 5
---

# Projects with Python Basics

Now that you know **variables, data structures, and functions**, let’s build some small projects.

---

##  1. Calculator
Uses **variables + functions**.

```python
def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b
def div(a, b): return a / b

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Addition:", add(a, b))
print("Subtraction:", sub(a, b))
print("Multiplication:", mul(a, b))
print("Division:", div(a, b))
```
## 2. Student Information Manager

Uses dictionaries + functions.
```python

def add_student(name, branch, year):
    return {"name": name, "branch": branch, "year": year}

student1 = add_student("Zarine", "ECE", 2)
print(student1)
```

## 3. To-Do List App

Uses lists + loops.
```python

tasks = []

def add_task(task):
    tasks.append(task)

def show_tasks():
    print("Your Tasks:")
    for i, t in enumerate(tasks, 1):
        print(f"{i}. {t}")

add_task("Study Python")
add_task("Complete Assignment")
show_tasks()
```
## 4. Word Counter

Uses strings + functions.
```python
def word_count(text):
    words = text.split()
    return len(words)

sentence = "Python makes programming fun"
print("Word count:", word_count(sentence))
```

## 5. Guess the Number Game

Uses loops + conditions + random module.
```python
import random

secret = random.randint(1, 10)
guess = int(input("Guess a number (1-10): "))

if guess == secret:
    print("🎉 Correct!")
else:
    print("❌ Wrong! The number was", secret)
```

## 📝 Mini Challenges for You

- Extend the Calculator to handle exponentiation (a ** b).
- Add a "remove task" option in the To-Do List App.
- Modify Word Counter to also count characters.
- Make Guess the Number keep running until the user guesses correctly.