import aiIntroContent from './generative-ai/ai-intro.md?raw';

export const generativeAIContent = {
  'ai-intro': {
    markdown: aiIntroContent,
  },
  // Add other sections here as needed
};

export const generativeAIStructure = [
  {
    title: 'AI Fundamentals',
    sections: [
      { id: 'ai-intro', title: 'What is AI?' },
      { id: 'machine-learning', title: 'Machine Learning Basics' },
      { id: 'neural-networks', title: 'Neural Networks' },
    ]
  },
  {
    title: 'Generative Models',
    sections: [
      { id: 'gpt-models', title: 'GPT & Language Models' },
      { id: 'image-generation', title: 'Image Generation' },
      { id: 'multimodal-ai', title: 'Multimodal AI' },
    ]
  },
  {
    title: 'Practical Applications',
    sections: [
      { id: 'prompt-engineering', title: 'Prompt Engineering' },
      { id: 'ai-apis', title: 'Working with AI APIs' },
      { id: 'building-apps', title: 'Building AI Apps' },
    ]
  }
]; 