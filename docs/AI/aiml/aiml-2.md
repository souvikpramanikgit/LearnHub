---
id: types-of-ml
title: Types of Machine Learning
sidebar_position: 3
sidebar_label: Types of ML
---

There are **3 main types** of Machine Learning. Let’s keep it simple and understand them with examples.

---

### 1. Supervised Learning

You **teach** the model using **labeled data**. That means the data already contains the answers.

📌 Example:  
A student learns from a textbook that has **questions and answers**.

🧪 Real-world Examples:
- Predicting house prices
- Email spam detection

```python
# Example: Predict marks based on study hours
from sklearn.linear_model import LinearRegression

X = [[2], [4], [6]]
y = [50, 70, 90]  # marks

model = LinearRegression()
model.fit(X, y)

print(model.predict([[5]]))  # Predict marks for 5 hours of study
```

### 2. Unsupervised Learning
The data has no labels. The model tries to find hidden patterns on its own.

📌 Example:
A student reads a book in a language they don’t know, but tries to group similar words together.

🧪 Real-world Examples:
- Customer segmentation
- Grouping similar images
```python
# Example: Group similar data points
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 2], [1, 4], [10, 2], [10, 4]])
kmeans = KMeans(n_clusters=2).fit(X)

print(kmeans.labels_)
``` 
### 3. Reinforcement Learning
Here, the model learns by trial and error. It gets rewards or penalties for the actions it takes.

📌 Example:
Training a dog to sit by giving it a treat if it does it correctly.

🧪 Real-world Examples:
- Self-driving cars
- Game AI (like AlphaGo)


