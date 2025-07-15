import dsIntroContent from './data-structures/ds-intro.md?raw';
import complexityContent from './data-structures/complexity.md?raw';
import arraysContent from './data-structures/arrays.md?raw';
import stacksContent from './data-structures/stacks.md?raw';
import queuesContent from './data-structures/queues.md?raw';
import linkedListsContent from './data-structures/linked-lists.md?raw';
import treesContent from './data-structures/trees.md?raw';
import graphsContent from './data-structures/graphs.md?raw';
import hashTablesContent from './data-structures/hash-tables.md?raw';
import sortingContent from './data-structures/sorting.md?raw';
import searchingContent from './data-structures/searching.md?raw';
import dynamicProgrammingContent from './data-structures/dynamic-programming.md?raw';

export const dataStructuresContent = {
  'ds-intro': {
    markdown: dsIntroContent,
  },
  'complexity': {
    markdown: complexityContent,
  },
  'arrays': {
    markdown: arraysContent,
  },
  'stacks': {
    markdown: stacksContent,
  },
  'queues': {
    markdown: queuesContent,
  },
  'linked-lists': {
    markdown: linkedListsContent,
  },
  'trees': {
    markdown: treesContent,
  },
  'graphs': {
    markdown: graphsContent,
  },
  'hash-tables': {
    markdown: hashTablesContent,
  },
  'sorting': {
    markdown: sortingContent,
  },
  'searching': {
    markdown: searchingContent,
  },
  'dynamic-programming': {
    markdown: dynamicProgrammingContent,
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