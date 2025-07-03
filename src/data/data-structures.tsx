export const dataStructuresContent = {
  'ds-intro': {
    title: 'Introduction to Data Structures',
    description: 'Learn the fundamental building blocks of efficient programming.',
    content: {
      overview: `Data structures are specialized formats for organizing, storing, and managing data in computer memory. They are the foundation of computer science and essential for writing efficient algorithms and solving complex programming problems.\n\nThink of data structures as different ways to organize information, just like how you might organize books on a shelf, files in a cabinet, or contacts in your phone. Each organization method has its strengths and is optimized for different types of operations.\n\nUnderstanding data structures is crucial because:\n- They directly impact the performance of your programs\n- They help you choose the right tool for each problem\n- They form the backbone of system design and architecture\n- They're essential for technical interviews and competitive programming\n\nWe'll explore both linear data structures (arrays, lists, stacks, queues) and non-linear structures (trees, graphs, hash tables), learning when and how to use each one effectively.`,
      objectives: [
        'Understand what data structures are and why they matter',
        'Learn to analyze time and space complexity (Big O notation)',
        'Master fundamental linear data structures like arrays and linked lists', 
        'Implement and use stacks and queues for problem-solving',
        'Explore non-linear structures including trees and graphs',
        'Choose appropriate data structures for different scenarios'
      ]
    },
    codeExample: `class Stack:\n    \"\"\"\n    A simple stack implementation using Python lists\n    LIFO - Last In, First Out\n    \"\"\"\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        \"\"\"Add an item to the top of the stack\"\"\"\n        self.items.append(item)\n        print(f\"Pushed {item} to stack\")\n    \n    def pop(self):\n        \"\"\"Remove and return the top item from the stack\"\"\"\n        if not self.is_empty():\n            item = self.items.pop()\n            print(f\"Popped {item} from stack\")\n            return item\n        else:\n            print(\"Stack is empty!\")\n            return None\n    \n    def peek(self):\n        \"\"\"Return the top item without removing it\"\"\"\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        \"\"\"Check if the stack is empty\"\"\"\n        return len(self.items) == 0\n    \n    def size(self):\n        \"\"\"Return the number of items in the stack\"\"\"\n        return len(self.items)\n\n# Example usage\nstack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\n\nprint(f\"Top item: {stack.peek()}\")  # Output: 3\nprint(f\"Stack size: {stack.size()}\")  # Output: 3\n\n# Pop all items\nwhile not stack.is_empty():\n    stack.pop()`
  }
  // Add other sections here as needed
};

export const dataStructuresStructure = [
  {
    title: 'Basic Concepts',
    sections: [
      { id: 'ds-intro', title: 'Introduction to Data Structures' },
      { id: 'complexity', title: 'Time & Space Complexity' },
      { id: 'arrays', title: 'Arrays & Lists' },
    ]
  },
  {
    title: 'Linear Structures',
    sections: [
      { id: 'stacks', title: 'Stacks' },
      { id: 'queues', title: 'Queues' },
      { id: 'linked-lists', title: 'Linked Lists' },
    ]
  },
  {
    title: 'Non-Linear Structures',
    sections: [
      { id: 'trees', title: 'Trees' },
      { id: 'graphs', title: 'Graphs' },
      { id: 'hash-tables', title: 'Hash Tables' },
    ]
  },
  {
    title: 'Algorithms',
    sections: [
      { id: 'sorting', title: 'Sorting Algorithms' },
      { id: 'searching', title: 'Searching Algorithms' },
      { id: 'dynamic-programming', title: 'Dynamic Programming' },
    ]
  }
]; 