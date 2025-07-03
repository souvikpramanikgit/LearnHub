export const webDevelopmentContent = {
  introduction: {
    title: 'Welcome to Web Development',
    description: 'Learn the fundamentals of modern web development from scratch.',
    content: {
      overview: `Web development is the process of creating websites and web applications that run on the internet. In this comprehensive course, you'll learn HTML, CSS, and JavaScript - the three core technologies that power the modern web.\n\nModern web development involves creating responsive, interactive, and user-friendly websites. You'll start with the basics of HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build complete web applications from scratch.\n\nKey topics we'll cover include:\n- HTML5 semantic elements and document structure\n- CSS3 styling, flexbox, and grid layouts\n- JavaScript ES6+ features and DOM manipulation\n- Responsive design principles\n- Modern development tools and workflows`,
      objectives: [
        'Understand the structure of web pages using HTML5',
        'Style websites with CSS3 for beautiful and responsive designs',
        'Add interactivity with JavaScript and DOM manipulation',
        'Build responsive websites that work on all devices',
        'Use modern development tools and best practices',
        'Deploy your projects to the web using various hosting platforms'
      ]
    },
    codeExample: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My First Web Page</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n        .welcome {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            color: white;\n            padding: 2rem;\n            border-radius: 10px;\n            text-align: center;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"welcome\">\n        <h1>Hello, World!</h1>\n        <p>Welcome to your web development journey!</p>\n        <button onclick=\"changeMessage()\">Click me!</button>\n    </div>\n    \n    <script>\n        function changeMessage() {\n            alert('You just started your web development journey!');\n        }\n    </script>\n</body>\n</html>`
  }
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
