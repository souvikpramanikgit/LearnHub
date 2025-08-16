---
id: React-Project
title: React Projects
sidebar_label: React Projects
---

import CodeBlock from '@theme/CodeBlock';

Sharpen your **React skills** with these structured projects — starting with simple components, advancing into state management and API integration, and finishing with a **Mega Project (Netflix Clone)** 🎬.  

---

## 🟢 Simple Projects  

### React Counter App
<details>
  <summary>React Counter App</summary>

  **Description:**  
  A simple counter app using React state.  

  **Hint:**  
  Use `useState` for managing counter value.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
  </CodeBlock>
</details>



### React Todo List
<details>
  <summary>React Todo List</summary>

  **Description:**  
  A to-do list with add and delete functionality.  

  **Hint:**  
  Use `useState` with an array to store tasks.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => setTodos(todos.filter((_, idx) => idx !== i))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
  </CodeBlock>
</details>



### React Digital Clock
<details>
  <summary>React Digital Clock</summary>

  **Description:**  
  A live updating digital clock in React.  

  **Hint:**  
  Use `useEffect` with `setInterval`.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h1 style={{ textAlign: "center" }}>{time.toLocaleTimeString()}</h1>;
}`}
  </CodeBlock>
</details>



## 🔴 Advanced Projects  

### React Weather App
<details>
  <summary>React Weather App</summary>

  **Description:**  
  A weather app that fetches real-time data using an API.  

  **Hint:**  
  Use `fetch` inside `useEffect` and store results in state.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY&units=metric\`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>
      {weather && <p>{weather.name}: {weather.main.temp}°C, {weather.weather[0].description}</p>}
    </div>
  );
}`}
  </CodeBlock>
</details>



### React Expense Tracker
<details>
  <summary>React Expense Tracker</summary>

  **Description:**  
  Track income and expenses with state updates.  

  **Hint:**  
  Store transactions in an array and calculate totals dynamically.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useState } from "react";

export default function ExpenseTracker() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = () => {
    if (desc && amount) {
      setTransactions([...transactions, { desc, amount: Number(amount) }]);
      setDesc("");
      setAmount("");
    }
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Expense Tracker</h2>
      <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <button onClick={addTransaction}>Add</button>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t.desc}: {t.amount}</li>
        ))}
      </ul>
      <h3>Balance: {balance}</h3>
    </div>
  );
}`}
  </CodeBlock>
</details>



## 🧮 Mega Project  

### Netflix Clone
<details>
  <summary>Netflix Clone</summary>

  **Description:**  
  Build a **Netflix-like UI** with movie posters fetched from an API.  

  **Hint:**  
  Use [TMDB API](https://www.themoviedb.org/) to fetch movies.  

  **React Code:**  
  <CodeBlock language="jsx">
{`import React, { useEffect, useState } from "react";

export default function NetflixClone() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(\`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY\`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Clone 🎬</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <img src={\`https://image.tmdb.org/t/p/w200\${movie.poster_path}\`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
  </CodeBlock>
</details>
