import aiIntroContent from './generative-ai/ai-intro.md?raw';
import machineLearningContent from './generative-ai/machine-learning.md?raw';
import neuralNetworksContent from './generative-ai/neural-networks.md?raw';
import gptModelsContent from './generative-ai/gpt-models.md?raw';
import imageGenerationContent from './generative-ai/image-generation.md?raw';
import multimodalAIContent from './generative-ai/multimodal-ai.md?raw';
import promptEngineeringContent from './generative-ai/prompt-engineering.md?raw';
import aiAPIsContent from './generative-ai/ai-apis.md?raw';
import buildingAppsContent from './generative-ai/building-apps.md?raw';

export const generativeAIContent = {
  'ai-intro': {
    markdown: aiIntroContent,
  },
  'machine-learning': {
    markdown: machineLearningContent,
  },
  'neural-networks': {
    markdown: neuralNetworksContent,
  },
  'gpt-models': {
    markdown: gptModelsContent,
  },
  'image-generation': {
    markdown: imageGenerationContent,
  },
  'multimodal-ai': {
    markdown: multimodalAIContent,
  },
  'prompt-engineering': {
    markdown: promptEngineeringContent,
  },
  'ai-apis': {
    markdown: aiAPIsContent,
  },
  'building-apps': {
    markdown: buildingAppsContent,
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