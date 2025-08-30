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

export const reactContextQuiz = [
    {
        id: "context-api-1",
        question: "What is the primary purpose of React Context API?",
        options: [
            "To create reusable UI components",
            "To manage component lifecycle methods",
            "To share data across components without prop drilling",
            "To handle form validations",
        ],
        correctAnswer: "To share data across components without prop drilling",
        explanation:
            "React Context API is designed to solve the 'prop drilling' problem by allowing you to share state and data across your component tree without having to pass props through every level of nested components.",
    },
    {
        id: "context-api-2",
        question: "What will be logged to the console when this component renders?",
        codeSnippet: {
            code: `const ThemeContext = createContext('light');

function DisplayTheme() {
  const theme = useContext(ThemeContext);
  console.log('Current theme:', theme);
  return <div>Theme: {theme}</div>;
}

function App() {
  return (
    <div>
      <DisplayTheme />
    </div>
  );
}`,
            language: "jsx",
        },
        options: [
            "Current theme: undefined",
            "Current theme: light",
            "Current theme: null",
            "Nothing is logged, an error occurs",
        ],
        correctAnswer: "Current theme: light",
        explanation:
            "When no Provider is present in the component tree, useContext returns the default value provided to createContext(). In this case, 'light' was passed as the default value.",
    },
    {
        id: "context-api-3",
        question:
            "Which hook is recommended for consuming Context values in functional components?",
        options: ["useEffect", "useContext", "useState", "useReducer"],
        correctAnswer: "useContext",
        explanation:
            "The useContext hook is the recommended way to consume Context values in functional components. It's cleaner and more intuitive than the Context.Consumer render prop pattern.",
    },
    {
        id: "context-api-4",
        question: "What happens when this button is clicked?",
        codeSnippet: {
            code: `const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
            language: "jsx",
        },
        options: [
            "The count increases by 1 and all consumers re-render",
            "Only the Counter component re-renders",
            "Nothing happens because Context is immutable",
            "An error occurs because setCount is not a function",
        ],
        correctAnswer: "The count increases by 1 and all consumers re-render",
        explanation:
            "When the Context value changes (count is updated), React automatically re-renders all components that consume that Context. The Provider creates a new value object, triggering updates to all consumers.",
    },
    {
        id: "context-api-5",
        question:
            "What is the main performance issue with this Context implementation?",
        codeSnippet: {
            code: `function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{
      user,
      login: (userData) => setUser(userData),
      logout: () => setUser(null)
    }}>
      {children}
    </UserContext.Provider>
  );
}`,
            language: "jsx",
        },
        options: [
            "The user state is not initialized properly",
            "New object and functions are created on every render, causing unnecessary re-renders",
            "The Context value is undefined",
            "There are no performance issues with this code",
        ],
        correctAnswer:
            "New object and functions are created on every render, causing unnecessary re-renders",
        explanation:
            "The value prop creates a new object with new function references on every render. This causes all Context consumers to re-render unnecessarily, even when the actual user data hasn't changed. The solution is to use useMemo and useCallback to stabilize references.",
    },
    {
        id: "context-api-6",
        question: "When should you avoid using Context API?",
        options: [
            "When you need to share data between many components",
            "When data changes very frequently and performance is critical",
            "When implementing global application state",
            "When you want to avoid prop drilling",
        ],
        correctAnswer:
            "When data changes very frequently and performance is critical",
        explanation:
            "Context API causes all consumers to re-render when the value changes. For frequently changing data, this can create performance issues. In such cases, consider alternatives like state management libraries (Redux, Zustand) or keeping state local to components.",
    },
    {
        id: "context-api-7",
        question:
            "What is the benefit of creating custom hooks for Context consumption?",
        options: [
            "Custom hooks make components render faster",
            "They provide better error handling and cleaner API for consumers",
            "They automatically optimize Context performance",
            "They are required by React to use Context",
        ],
        correctAnswer:
            "They provide better error handling and cleaner API for consumers",
        explanation:
            "Custom hooks like 'useTheme' or 'useAuth' encapsulate the useContext call and can provide better error messages when used outside of a Provider. They also create a cleaner, more semantic API for consuming Context values and can include additional logic or derived values.",
    },
];

export const reactHOCQuiz = [
    {
        id: "hoc-basic-1",
        question: "What will be rendered when this HOC is used?",
        codeSnippet: {
            code: `const withGreeting = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} greeting="Hello" />;
  };
};

const DisplayMessage = ({ message, greeting }) => {
  return <div>{greeting} {message}</div>;
};

const EnhancedComponent = withGreeting(DisplayMessage);

function App() {
  return <EnhancedComponent message="World" />;
}`,
            language: "jsx",
        },
        options: [
            "<div>Hello World</div>",
            "<div>World</div>",
            "<div>Hello</div>",
            "Nothing renders, an error occurs",
        ],
        correctAnswer: "<div>Hello World</div>",
        explanation:
            "The HOC withGreeting adds a 'greeting' prop with value 'Hello' to the wrapped component. The DisplayMessage component receives both the original 'message' prop ('World') and the injected 'greeting' prop ('Hello'), rendering 'Hello World'.",
    },
    {
        id: "hoc-props-2",
        question: "What props will MyComponent receive?",
        codeSnippet: {
            code: `const withData = (WrappedComponent) => {
  return (props) => {
    const data = { id: 1, name: 'John' };
    return <WrappedComponent {...props} data={data} enhanced={true} />;
  };
};

const MyComponent = (props) => {
  console.log(Object.keys(props));
  return <div>Component</div>;
};

const Enhanced = withData(MyComponent);

function App() {
  return <Enhanced title="Test" value={42} />;
}`,
            language: "jsx",
        },
        options: [
            "['title', 'value']",
            "['data', 'enhanced']",
            "['title', 'value', 'data', 'enhanced']",
            "['data']",
        ],
        correctAnswer: "['title', 'value', 'data', 'enhanced']",
        explanation:
            "The HOC spreads all original props (...props) and adds new props (data and enhanced). MyComponent receives all props: the original ones ('title', 'value') and the ones added by the HOC ('data', 'enhanced').",
    },
    {
        id: "hoc-conditional-3",
        question: "What will be rendered when isVisible is false?",
        codeSnippet: {
            code: `const withConditionalRender = (WrappedComponent) => {
  return ({ isVisible, ...props }) => {
    if (!isVisible) {
      return <div>Component is hidden</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const Content = ({ text }) => <p>{text}</p>;

const ConditionalContent = withConditionalRender(Content);

function App() {
  return <ConditionalContent text="Hello" isVisible={false} />;
}`,
            language: "jsx",
        },
        options: [
            "<p>Hello</p>",
            "<div>Component is hidden</div>",
            "Nothing renders",
            "An error occurs",
        ],
        correctAnswer: "<div>Component is hidden</div>",
        explanation:
            "The HOC checks the isVisible prop. When isVisible is false, it returns the fallback div instead of rendering the wrapped component. The Content component never receives the props in this case.",
    },
    {
        id: "hoc-composition-4",
        question: "What will be the final props received by BaseComponent?",
        codeSnippet: {
            code: `const withA = (Component) => (props) => 
  <Component {...props} a="valueA" />;

const withB = (Component) => (props) => 
  <Component {...props} b="valueB" />;

const BaseComponent = (props) => {
  console.log(props);
  return <div>Base</div>;
};

const Enhanced = withA(withB(BaseComponent));

function App() {
  return <Enhanced original="test" />;
}`,
            language: "jsx",
        },
        options: [
            "{ original: 'test', a: 'valueA' }",
            "{ original: 'test', b: 'valueB' }",
            "{ original: 'test', a: 'valueA', b: 'valueB' }",
            "{ a: 'valueA', b: 'valueB' }",
        ],
        correctAnswer: "{ original: 'test', a: 'valueA', b: 'valueB' }",
        explanation:
            "HOCs are composed from right to left. withB wraps BaseComponent first, adding prop 'b'. Then withA wraps the result, adding prop 'a'. All props are spread through, so BaseComponent receives the original prop plus both added props.",
    },
    {
        id: "hoc-state-5",
        question:
            "How many times will 'Counter rendered' be logged when the button is clicked twice?",
        codeSnippet: {
            code: `const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    
    return (
      <WrappedComponent 
        {...props} 
        count={count} 
        increment={() => setCount(c => c + 1)} 
      />
    );
  };
};

const Counter = ({ count, increment }) => {
  console.log('Counter rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const EnhancedCounter = withCounter(Counter);

`,
            language: "jsx",
        },
        options: ["2 times", "3 times", "4 times", "6 times"],
        correctAnswer: "3 times",
        explanation:
            "The Counter component renders: 1) Once on initial mount, 2) Once when count changes from 0 to 1 (first click), 3) Once when count changes from 1 to 2 (second click). Each state change in the HOC triggers a re-render of the wrapped component.",
    },
];