---
id: JavaScript-Project
title: JavaScript Project 
sidebar_label: JavaScript Projects 
---

 

import CodeBlock from '@theme/CodeBlock';

Sharpen your JavaScript skills with these structured projects — starting simple, moving into advanced concepts, and finally tackling a **Mega Project (Spotify Clone)** 🚀.  

---

## 🟢 Simple Projects


### Counter App
<details>
  <summary>Counter App</summary>

  **Description:**  
  A basic counter with increment, decrement, and reset buttons.  

  **Hint:**  
  Use `addEventListener` to handle button clicks and update the DOM.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="counter">
  <h2 id="count">0</h2>
  <button id="decrease">-</button>
  <button id="reset">Reset</button>
  <button id="increase">+</button>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.counter {
  text-align: center;
  font-family: Arial, sans-serif;
}
button {
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`const count = document.getElementById("count");
let value = 0;

document.getElementById("increase").onclick = () => {
  value++;
  count.textContent = value;
};
document.getElementById("decrease").onclick = () => {
  value--;
  count.textContent = value;
};
document.getElementById("reset").onclick = () => {
  value = 0;
  count.textContent = value;
};`}
  </CodeBlock>
</details>

### To-DO List

<details>
  <summary>To-Do List</summary>

  **Description:**  
  A simple to-do list where users can add and remove tasks.  

  **Hint:**  
  Use `appendChild` for adding items and `removeChild` for deletion.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="todo">
  <input id="task" type="text" placeholder="Enter task" />
  <button id="add">Add</button>
  <ul id="list"></ul>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.todo {
  width: 300px;
  margin: auto;
  font-family: sans-serif;
}
li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
button {
  cursor: pointer;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`const task = document.getElementById("task");
const list = document.getElementById("list");

document.getElementById("add").onclick = () => {
  if (task.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = task.value;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => li.remove();
    li.appendChild(removeBtn);
    list.appendChild(li);
    task.value = "";
  }
};`}
  </CodeBlock>
</details>


### Digital Clock

<details>
  <summary>Digital Clock</summary>

  **Description:**  
  A real-time digital clock that updates every second.  

  **Hint:**  
  Use `setInterval` to update time every second.  

  **HTML:**  
  <CodeBlock language="html">
{`<h1 id="clock"></h1>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`#clock {
  font-size: 48px;
  text-align: center;
  font-family: monospace;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();`}
  </CodeBlock>
</details>


### Background Color Changer

<details>
  <summary>Background Color Changer</summary>

  **Description:**  
  A button that changes the background color randomly.  

  **Hint:**  
  Use `Math.random()` to generate random RGB values.  

  **HTML:**  
  <CodeBlock language="html">
{`<button id="change">Change Background</button>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`button {
  display: block;
  margin: 50px auto;
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`document.getElementById("change").onclick = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = \`rgb(\${r}, \${g}, \${b})\`;
};`}
  </CodeBlock>
</details>


### Image Slider

<details>
  <summary>Image Slider</summary>

  **Description:**  
  A simple image slider with next/previous buttons.  

  **Hint:**  
  Keep track of the current index and update the `src`.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="slider">
  <img id="image" src="https://picsum.photos/400/200?1" />
  <br />
  <button id="prev">Prev</button>
  <button id="next">Next</button>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.slider {
  text-align: center;
}
img {
  max-width: 100%;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`const images = [
  "https://picsum.photos/400/200?1",
  "https://picsum.photos/400/200?2",
  "https://picsum.photos/400/200?3"
];
let index = 0;
const img = document.getElementById("image");

document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  img.src = images[index];
};
document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
};`}
  </CodeBlock>
</details>



## 🔴 Advanced Projects  

### Weather App

<details>
  <summary>Weather App (API)</summary>

  **Description:**  
  Fetch real-time weather data using an API.  

  **Hint:**  
  Use `fetch` with [OpenWeather API](https://openweathermap.org/api).  

  **HTML:**  
  <CodeBlock language="html">
{`<input id="city" placeholder="Enter city"/>
<button id="getWeather">Get Weather</button>
<p id="result"></p>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`body { text-align: center; font-family: Arial; }
input, button { padding: 8px; margin: 5px; }`}
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`document.getElementById("getWeather").onclick = () => {
  const city = document.getElementById("city").value;
  fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY&units=metric\`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").textContent =
        \`\${data.name}: \${data.main.temp}°C, \${data.weather[0].description}\`;
    })
    .catch(() => alert("City not found"));
};`}
  </CodeBlock>
</details>


### Expense Tracker

<details>
  <summary>Expense Tracker</summary>

  **Description:**  
  Track income and expenses dynamically.  

  **Hint:**  
  Use arrays to store transactions and update totals.  

  **HTML:**  
  <CodeBlock language="html">
{`<h2>Expense Tracker</h2>
<input id="desc" placeholder="Description"/>
<input id="amount" type="number" placeholder="Amount"/>
<button id="add">Add</button>
<ul id="transactions"></ul>
<h3 id="balance">Balance: 0</h3>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`body { font-family: sans-serif; text-align: center; }
input { margin: 5px; }`}
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`let balance = 0;
document.getElementById("add").onclick = () => {
  const desc = document.getElementById("desc").value;
  const amount = Number(document.getElementById("amount").value);
  if (desc && amount) {
    balance += amount;
    const li = document.createElement("li");
    li.textContent = \`\${desc}: \${amount}\`;
    document.getElementById("transactions").appendChild(li);
    document.getElementById("balance").textContent = \`Balance: \${balance}\`;
  }
};`}
  </CodeBlock>
</details>


### Quiz App

<details>
  <summary>Quiz App</summary>

  **Description:**  
  A multiple-choice quiz with score tracking.  

  **Hint:**  
  Use arrays for questions and answers.  

  **HTML:**  
  <CodeBlock language="html">
{`<div id="quiz"></div>
<p id="result"></p>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`#quiz { margin: 20px; }
button { margin-top: 10px; }`}
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`const questions = [
  { q: "2+2?", options: ["3", "4"], answer: "4" },
  { q: "Capital of France?", options: ["Paris", "Rome"], answer: "Paris" }
];
let score = 0, i = 0;

function loadQuestion() {
  if (i < questions.length) {
    const q = questions[i];
    document.getElementById("quiz").innerHTML =
      \`<p>\${q.q}</p>\` +
      q.options.map(opt => \`<button onclick="check('\${opt}')">\${opt}</button>\`).join("");
  } else {
    document.getElementById("result").textContent = \`Score: \${score}/\${questions.length}\`;
  }
}
function check(ans) {
  if (ans === questions[i].answer) score++;
  i++;
  loadQuestion();
}
loadQuestion();`}
  </CodeBlock>
</details>



## 🧮  Mega Project  

<details>
  <summary>Spotify Clone</summary>

  **Description:**  
  Build a **Spotify-like music player** with play, pause, next, and previous functionality.  

  **Hint:**  
  Use `<audio>` element and control it with JavaScript events.  

  **HTML:**  
  <CodeBlock language="html">
{`<div class="player">
  <h2 id="title">Song Title</h2>
  <audio id="audio" src="song1.mp3"></audio>
  <button id="prev">⏮</button>
  <button id="play">▶</button>
  <button id="next">⏭</button>
</div>`}
  </CodeBlock>

  **CSS:**  
  <CodeBlock language="css">
{`.player {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
button {
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
}` }
  </CodeBlock>

  **JS:**  
  <CodeBlock language="javascript">
{`const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");

document.getElementById("play").onclick = () => {
  if (audio.paused) audio.play();
  else audio.pause();
};
document.getElementById("next").onclick = () => {
  index = (index + 1) % songs.length;
  audio.src = songs[index];
  title.textContent = songs[index];
  audio.play();
};
document.getElementById("prev").onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  audio.src = songs[index];
  title.textContent = songs[index];
  audio.play();
};`}
  </CodeBlock>
</details>
