import introductionContent from './web-development/introduction.md?raw';
import setupContent from './web-development/setup.md?raw';

export const webDevelopmentContent = {
  introduction: {
    markdown: introductionContent,
  },
  setup: {
    markdown: setupContent,
  },
  // Add other sections here as needed
};

export const webDevelopmentStructure = [
  {
    title: 'Getting Started',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'setup', title: 'Environment Setup' },
      { id: 'basics', title: 'HTML Basics' },
    ]
  },
  {
    title: 'HTML Fundamentals',
    sections: [
      { id: 'html-elements', title: 'HTML Elements' },
      { id: 'html-attributes', title: 'HTML Attributes' },
      { id: 'html-forms', title: 'HTML Forms' },
    ]
  },
  {
    title: 'CSS Styling',
    sections: [
      { id: 'css-basics', title: 'CSS Basics' },
      { id: 'css-selectors', title: 'CSS Selectors' },
      { id: 'css-layout', title: 'CSS Layout' },
    ]
  },
  {
    title: 'JavaScript',
    sections: [
      { id: 'js-basics', title: 'JavaScript Basics' },
      { id: 'js-dom', title: 'DOM Manipulation' },
      { id: 'js-events', title: 'Event Handling' },
    ]
  },
  {
    title: 'Advanced Topics',
    sections: [
      { id: 'responsive', title: 'Responsive Design' },
      { id: 'frameworks', title: 'CSS Frameworks' },
      { id: 'deployment', title: 'Deployment' },
    ]
  }
];
