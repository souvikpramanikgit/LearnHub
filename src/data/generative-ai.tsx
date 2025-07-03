export const generativeAIContent = {
  'ai-intro': {
    title: 'Introduction to Generative AI',
    description: 'Understand the fundamentals of artificial intelligence and generative models.',
    content: {
      overview: `Generative Artificial Intelligence represents one of the most exciting frontiers in technology today. Unlike traditional AI systems that classify or predict, generative AI creates new content - whether it's text, images, code, or even music.\n\nAt its core, generative AI uses machine learning models trained on vast amounts of data to understand patterns and relationships. These models can then generate new, original content that resembles the training data but is entirely unique.\n\nThe field has exploded with breakthrough technologies like:\n- Large Language Models (LLMs) such as GPT, Claude, and LLaMA\n- Image generation models like DALL-E, Midjourney, and Stable Diffusion  \n- Code generation tools like GitHub Copilot and CodeT5\n- Video and audio generation systems\n\nThis course will take you from the fundamentals of AI to building your own generative applications, covering both the theory and practical implementation of these powerful technologies.`,
      objectives: [
        'Understand the fundamental concepts of artificial intelligence and machine learning',
        'Learn about different types of generative models and their applications',
        'Explore Large Language Models and how they work',
        'Master prompt engineering techniques for better AI interactions',
        'Build practical applications using AI APIs and tools',
        'Understand the ethical implications and limitations of generative AI'
      ]
    },
    codeExample: `import openai\nfrom openai import OpenAI\n\n# Initialize OpenAI client\nclient = OpenAI(api_key=\"your-api-key-here\")\n\ndef generate_creative_content(prompt, model=\"gpt-3.5-turbo\"):\n    \"\"\"\n    Generate creative content using OpenAI's GPT model\n    \"\"\"\n    try:\n        response = client.chat.completions.create(\n            model=model,\n            messages=[\n                {\n                    \"role\": \"system\", \n                    \"content\": \"You are a creative writing assistant that helps generate engaging content.\"\n                },\n                {\n                    \"role\": \"user\", \n                    \"content\": prompt\n                }\n            ],\n            max_tokens=500,\n            temperature=0.7  # Controls creativity (0-1)\n        )\n        \n        return response.choices[0].message.content\n        \n    except Exception as e:\n        return f\"Error generating content: {str(e)}\"\n\n# Example usage\nprompt = \"Write a short story about a robot learning to paint\"\nstory = generate_creative_content(prompt)\nprint(story)`
  }
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