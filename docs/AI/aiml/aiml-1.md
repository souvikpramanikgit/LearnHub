---
id: introduction-to-ml
title: Introduction to Machine Learning
sidebar_position: 2
sidebar_label: Introduction to ML
---

Let's take a quick and simple look into **Machine Learning (ML)**!

---

##  What is Machine Learning?

ML is all about teaching computers to learn patterns from data **without being explicitly programmed**.

In simple words: give the computer examples, and it figures out rules on its own.

---

##  What You Need to Start

To begin with ML, you typically use Python and the following libraries:

###  NumPy
- Stands for "Numerical Python"
- Used for **fast mathematical operations** on large datasets.
- Think of it like Python lists, but **faster and more powerful**.

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr.mean())  # Output: 2.0
```
###   Pandas
- Helps you work with tabular data (like Excel).
- Very useful for data cleaning and analysis.

```python
import pandas as pd

data = {'Name': ['Alice', 'Bob'], 'Score': [85, 90]}
df = pd.DataFrame(data)
print(df.head())
```
###  Matplotlib
- Used to plot graphs and charts.
- Helps you visualize patterns in your data.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [2, 4, 1]

plt.plot(x, y)
plt.title('Sample Plot')
plt.show()
```