---
id: build-your-first-ml-model
title: Build Your First ML Model
sidebar_position: 4
sidebar_label: First ML Model
---

Let's build our **first Machine Learning model**!  
We'll predict **student marks** based on how many hours they studied. 🎯

We’ll use:
- `Jupyter lab` or `Google Colab` for coding 
- `pandas` to handle data
- `numpy` for math
- `matplotlib` to plot
- `scikit-learn` to build the model

---

###  Step 1: Import Libraries on Jupyter Lab

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
```
###  Step 2: Create a Dataset
```python 
data = {
    "Hours": [1, 2, 3, 4, 5, 6, 7],
    "Marks": [10, 20, 30, 40, 50, 60, 70]
}

df = pd.DataFrame(data)
print(df)
```
###  Step 3: Visualize the Data
```python

plt.scatter(df["Hours"], df["Marks"])
plt.title("Study Hours vs Marks")
plt.xlabel("Hours")
plt.ylabel("Marks")
plt.show()
```
###  Step 4: Train the Model
```python

X = df[["Hours"]]  # Features
y = df["Marks"]    # Target

model = LinearRegression()
model.fit(X, y)
```
### Step 5: Make Predictions
```python

predicted = model.predict([[5]])
print(f"Predicted Marks for 5 hours of study: {predicted[0]:.2f}")
```
### Step 6: Plot the Line
```python

plt.scatter(X, y)
plt.plot(X, model.predict(X), color='red')  # Best fit line
plt.title("Study Hours vs Marks (Model)")
plt.xlabel("Hours")
plt.ylabel("Marks")
plt.show()
```
### What You Just Did ✨
- Built your first Supervised Learning model
- Understood the use of `pandas`, `numpy`, `matplotlib`, and `scikit-learn`.
- Learned how ML predicts future data 

