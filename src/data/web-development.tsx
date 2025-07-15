import introductionContent from './web-development/introduction.md?raw';
import setupContent from './web-development/setup.md?raw';
import basicsContent from './web-development/basics.md?raw';
import htmlElementsContent from './web-development/html-elements.md?raw';
import htmlAttributesContent from './web-development/html-attributes.md?raw';
import htmlFormsContent from './web-development/html-forms.md?raw';
import cssBasicsContent from './web-development/css-basics.md?raw';
import cssSelectorsContent from './web-development/css-selectors.md?raw';
import cssLayoutContent from './web-development/css-layout.md?raw';
import jsBasicsContent from './web-development/js-basics.md?raw';
import jsDomContent from './web-development/js-dom.md?raw';
import jsEventsContent from './web-development/js-events.md?raw';
import responsiveContent from './web-development/responsive.md?raw';
import frameworksContent from './web-development/frameworks.md?raw';
import deploymentContent from './web-development/deployment.md?raw';

export const webDevelopmentContent = {
  introduction: {
    markdown: introductionContent,
  },
  setup: {
    markdown: setupContent,
  },
  basics: {
    markdown: basicsContent,
  },
  'html-elements': {
    markdown: htmlElementsContent,
  },
  'html-attributes': {
    markdown: htmlAttributesContent,
  },
  'html-forms': {
    markdown: htmlFormsContent,
  },
  'css-basics': {
    markdown: cssBasicsContent,
  },
  'css-selectors': {
    markdown: cssSelectorsContent,
  },
  'css-layout': {
    markdown: cssLayoutContent,
  },
  'js-basics': {
    markdown: jsBasicsContent,
  },
  'js-dom': {
    markdown: jsDomContent,
  },
  'js-events': {
    markdown: jsEventsContent,
  },
  responsive: {
    markdown: responsiveContent,
  },
  frameworks: {
    markdown: frameworksContent,
  },
  deployment: {
    markdown: deploymentContent,
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
