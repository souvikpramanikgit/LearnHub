export const reactIntroQuestions = [
  {
    id: "react-intro-1",
    question: "What is the purpose of useState in React?",
    options: [
      "To store routing info",
      "To fetch data from an API",
      "To manage component state",
      "To define props",
    ],
    correctAnswer: "To manage component state",
    explanation:
      "'useState' is a React Hook used to manage local state inside a component.",
  },
  {
    id: "react-intro-2",
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "Java Xtreme Syntax",
    ],
    correctAnswer: "JavaScript XML",
    explanation:
      "JSX allows you to write HTML-like syntax directly in JavaScript files.",
  },
  {
    id: "react-intro-3",
    question: "What is the virtual DOM in React?",
    options: [
      "A physical copy of the real DOM",
      "A faster version of the browser DOM",
      "A lightweight in-memory representation of the real DOM",
      "A database for React elements",
    ],
    correctAnswer: "A lightweight in-memory representation of the real DOM",
    explanation:
      "The virtual DOM improves performance by minimizing direct DOM manipulations.",
  },
];

export const reactBasicQuestions = [
  {
    id: "react-basic-1",
    question: "What are props in React?",
    options: [
      "Mutable data that belongs to a component",
      "Read-only data passed from parent to child components",
      "A way to store component state",
      "Functions that update component data",
    ],
    correctAnswer: "Read-only data passed from parent to child components",
    explanation:
      "Props are read-only properties passed from parent components to child components, making components reusable and helping data flow down the component tree.",
  },
  {
    id: "ract-basic-2",
    question: "Which statement is true about React state?",
    options: [
      "State is read-only and cannot be changed",
      "State is passed from parent components",
      "State is mutable data that triggers re-renders when changed",
      "State can only be used in class components",
    ],
    correctAnswer:
      "State is mutable data that triggers re-renders when changed",
    explanation:
      "State is internal, mutable data that belongs to a component. When state changes, React automatically re-renders the component to reflect the new state.",
  },
  {
    id: "react-basic-3",
    question: "What is the Virtual DOM in React?",
    options: [
      "A physical copy of the real DOM",
      "A faster version of the browser DOM",
      "A JavaScript representation of the actual DOM kept in memory",
      "A database for storing React components",
    ],
    correctAnswer:
      "A JavaScript representation of the actual DOM kept in memory",
    explanation:
      "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize performance by comparing virtual DOM trees and updating only the changed parts in the real DOM.",
  },
  {
    id: "react-basic-4",
    question: "What are the three main phases of a React component lifecycle?",
    options: [
      "Creation, Rendering, Destruction",
      "Mounting, Updating, Unmounting",
      "Initialize, Update, Terminate",
      "Start, Process, End",
    ],
    correctAnswer: "Mounting, Updating, Unmounting",
    explanation:
      "React components go through three main lifecycle phases: Mounting (component is created and inserted into DOM), Updating (component re-renders due to prop/state changes), and Unmounting (component is removed from DOM).",
  },
  {
    id: "react-basic-5",
    question: "Why are class components considered legacy in modern React?",
    options: [
      "They are slower than functional components",
      "They don't support JSX syntax",
      "They have more verbose syntax and are harder to optimize",
      "They can't use props or state",
    ],
    correctAnswer: "They have more verbose syntax and are harder to optimize",
    explanation:
      "Class components are considered legacy because they have more verbose syntax, are harder to optimize, have less intuitive lifecycle management, and are no longer actively developed. Functional components are now the recommended approach.",
  },
];

export const reactHooksQuiz = [
  {
    id: "react-hooks-1",
    question:
      "What will be the initial state value when this component renders?",
    codeSnippet: {
      code: `function Counter() {
  const [count, setCount] = useState(10);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      language: "jsx",
    },
    options: ["0", "10", "undefined", "null"],
    correctAnswer: "10",
    explanation:
      "useState(10) initializes the count state with the value 10, so the initial render will display 'Count: 10'.",
  },

  {
    id: "react-hooks-2",
    question: "How many times will the useEffect run in this component?",
    codeSnippet: {
      code: `function MyComponent() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(25);
  
  useEffect(() => {
    console.log('Effect ran');
  }, []);
  
  return (
    <div>
      <button onClick={() => setName('Jane')}>Change Name</button>
      <button onClick={() => setAge(30)}>Change Age</button>
    </div>
  );
}`,
      language: "jsx",
    },
    options: [
      "Every time name or age changes",
      "Only once after initial render",
      "Never runs",
      "Twice - once for name, once for age",
    ],
    correctAnswer: "Only once after initial render",
    explanation:
      "The useEffect has an empty dependency array [], which means it runs only once after the initial render, regardless of state changes.",
  },

  {
    id: "react-hooks-3",
    question: "What is the primary purpose of useMemo hook?",
    options: [
      "To memorize user inputs",
      "To cache expensive calculations and prevent unnecessary recalculations",
      "To remember component state between renders",
      "To create memoized components",
    ],
    correctAnswer:
      "To cache expensive calculations and prevent unnecessary recalculations",
    explanation:
      "useMemo is used to memoize expensive calculations so they only run when their dependencies change, helping optimize performance by avoiding unnecessary recalculations on every render.",
  },

  {
    id: "react-hooks-4",
    question: "What's the difference between useMemo and useCallback?",
    options: [
      "There is no difference, they are aliases",
      "useMemo memoizes values, useCallback memoizes functions",
      "useMemo is for class components, useCallback is for functional components",
      "useMemo is faster than useCallback",
    ],
    correctAnswer: "useMemo memoizes values, useCallback memoizes functions",
    explanation:
      "useMemo memoizes the result of a computation (values), while useCallback memoizes the function itself. useCallback is essentially useMemo for functions.",
  },

  {
    id: "react-hooks-5",
    question: "What will happen when the button is clicked in this code?",
    codeSnippet: {
      code: `function TodoApp() {
  const [todos, setTodos] = useState(['Learn React', 'Build App']);
  
  const addTodo = useCallback(() => {
    setTodos(prev => [...prev, 'New Todo']);
  }, []);
  
  return (
    <div>
      {todos.map((todo, index) => <p key={index}>{todo}</p>)}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}`,
      language: "jsx",
    },
    options: [
      "Nothing happens",
      "A new todo 'New Todo' is added to the list",
      "All todos are replaced with 'New Todo'",
      "An error occurs",
    ],
    correctAnswer: "A new todo 'New Todo' is added to the list",
    explanation:
      "The useCallback memoized function uses the functional update pattern with setTodos(prev => [...prev, 'New Todo']), which spreads the previous todos array and adds 'New Todo' at the end.",
  },

  {
    id: "react-hooks-6",
    question: "When should you use useReducer instead of useState?",
    options: [
      "Always, it's more modern",
      "When you have complex state logic with multiple sub-values or actions",
      "When you want better performance",
      "Only in class components",
    ],
    correctAnswer:
      "When you have complex state logic with multiple sub-values or actions",
    explanation:
      "useReducer is preferable when you have complex state logic involving multiple sub-values, when the next state depends on the previous one, or when you want more predictable state updates through actions.",
  },

  {
    id: "react-hooks-7",
    question: "What is the main benefit of React v18's useTransition hook?",
    options: [
      "It speeds up all state updates",
      "It allows marking state updates as non-urgent to keep UI responsive",
      "It automatically batches all state updates",
      "It replaces useEffect for better performance",
    ],
    correctAnswer:
      "It allows marking state updates as non-urgent to keep UI responsive",
    explanation:
      "useTransition allows you to mark state updates as non-urgent (transitions), letting React prioritize more urgent updates like user input, keeping the UI responsive during heavy computations.",
  },

  {
    id: "react-hooks-8",
    question: "What's wrong with this custom hook code?",
    codeSnippet: {
      code: `function useCounter(initialValue) {
  if (initialValue < 0) {
    return { count: 0, increment: () => {} };
  }
  
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(prev => prev + 1);
  
  return { count, increment };
}`,
      language: "jsx",
    },
    options: [
      "Nothing is wrong with this code",
      "useState is called conditionally, violating the Rules of Hooks",
      "The function name should not start with 'use'",
      "Custom hooks cannot return objects",
    ],
    correctAnswer:
      "useState is called conditionally, violating the Rules of Hooks",
    explanation:
      "Hooks must always be called in the same order on every render. Calling useState conditionally violates the Rules of Hooks. The hook should call useState unconditionally and handle the logic differently, such as: const [count, setCount] = useState(initialValue < 0 ? 0 : initialValue);",
  },
];
