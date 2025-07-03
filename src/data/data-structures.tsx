import dsIntroContent from './data-structures/ds-intro.md?raw';

export const dataStructuresContent = {
  'ds-intro': {
    markdown: dsIntroContent,
  },
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