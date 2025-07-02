import React, { useState } from 'react';
import { BookOpen, Code, ArrowRight, ArrowLeft, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface CourseContentProps {
  activeSection: string;
  courseId: string;
  onSectionChange?: (section: string) => void;
}

const contentData: Record<string, Record<string, any>> = {
  'web-development': {
    introduction: {
      title: 'Welcome to Web Development',
      description: 'Learn the fundamentals of modern web development from scratch.',
      content: {
        overview: `Web development is the process of creating websites and web applications that run on the internet. In this comprehensive course, you'll learn HTML, CSS, and JavaScript - the three core technologies that power the modern web.

Modern web development involves creating responsive, interactive, and user-friendly websites. You'll start with the basics of HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build complete web applications from scratch.

Key topics we'll cover include:
- HTML5 semantic elements and document structure
- CSS3 styling, flexbox, and grid layouts
- JavaScript ES6+ features and DOM manipulation
- Responsive design principles
- Modern development tools and workflows`,
        objectives: [
          'Understand the structure of web pages using HTML5',
          'Style websites with CSS3 for beautiful and responsive designs',
          'Add interactivity with JavaScript and DOM manipulation',
          'Build responsive websites that work on all devices',
          'Use modern development tools and best practices',
          'Deploy your projects to the web using various hosting platforms'
        ]
      },
      codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .welcome {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="welcome">
        <h1>Hello, World!</h1>
        <p>Welcome to your web development journey!</p>
        <button onclick="changeMessage()">Click me!</button>
    </div>
    
    <script>
        function changeMessage() {
            alert('You just started your web development journey!');
        }
    </script>
</body>
</html>`
    }
  },
  'generative-ai': {
    'ai-intro': {
      title: 'Introduction to Generative AI',
      description: 'Understand the fundamentals of artificial intelligence and generative models.',
      content: {
        overview: `Generative Artificial Intelligence represents one of the most exciting frontiers in technology today. Unlike traditional AI systems that classify or predict, generative AI creates new content - whether it's text, images, code, or even music.

At its core, generative AI uses machine learning models trained on vast amounts of data to understand patterns and relationships. These models can then generate new, original content that resembles the training data but is entirely unique.

The field has exploded with breakthrough technologies like:
- Large Language Models (LLMs) such as GPT, Claude, and LLaMA
- Image generation models like DALL-E, Midjourney, and Stable Diffusion  
- Code generation tools like GitHub Copilot and CodeT5
- Video and audio generation systems

This course will take you from the fundamentals of AI to building your own generative applications, covering both the theory and practical implementation of these powerful technologies.`,
        objectives: [
          'Understand the fundamental concepts of artificial intelligence and machine learning',
          'Learn about different types of generative models and their applications',
          'Explore Large Language Models and how they work',
          'Master prompt engineering techniques for better AI interactions',
          'Build practical applications using AI APIs and tools',
          'Understand the ethical implications and limitations of generative AI'
        ]
      },
      codeExample: `import openai
from openai import OpenAI

# Initialize OpenAI client
client = OpenAI(api_key="your-api-key-here")

def generate_creative_content(prompt, model="gpt-3.5-turbo"):
    """
    Generate creative content using OpenAI's GPT model
    """
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system", 
                    "content": "You are a creative writing assistant that helps generate engaging content."
                },
                {
                    "role": "user", 
                    "content": prompt
                }
            ],
            max_tokens=500,
            temperature=0.7  # Controls creativity (0-1)
        )
        
        return response.choices[0].message.content
        
    except Exception as e:
        return f"Error generating content: {str(e)}"

# Example usage
prompt = "Write a short story about a robot learning to paint"
story = generate_creative_content(prompt)
print(story)`
    }
  },
  'data-structures': {
    'ds-intro': {
      title: 'Introduction to Data Structures',
      description: 'Learn the fundamental building blocks of efficient programming.',
      content: {
        overview: `Data structures are specialized formats for organizing, storing, and managing data in computer memory. They are the foundation of computer science and essential for writing efficient algorithms and solving complex programming problems.

Think of data structures as different ways to organize information, just like how you might organize books on a shelf, files in a cabinet, or contacts in your phone. Each organization method has its strengths and is optimized for different types of operations.

Understanding data structures is crucial because:
- They directly impact the performance of your programs
- They help you choose the right tool for each problem
- They form the backbone of system design and architecture
- They're essential for technical interviews and competitive programming

We'll explore both linear data structures (arrays, lists, stacks, queues) and non-linear structures (trees, graphs, hash tables), learning when and how to use each one effectively.`,
        objectives: [
          'Understand what data structures are and why they matter',
          'Learn to analyze time and space complexity (Big O notation)',
          'Master fundamental linear data structures like arrays and linked lists', 
          'Implement and use stacks and queues for problem-solving',
          'Explore non-linear structures including trees and graphs',
          'Choose appropriate data structures for different scenarios'
        ]
      },
      codeExample: `class Stack:
    """
    A simple stack implementation using Python lists
    LIFO - Last In, First Out
    """
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add an item to the top of the stack"""
        self.items.append(item)
        print(f"Pushed {item} to stack")
    
    def pop(self):
        """Remove and return the top item from the stack"""
        if not self.is_empty():
            item = self.items.pop()
            print(f"Popped {item} from stack")
            return item
        else:
            print("Stack is empty!")
            return None
    
    def peek(self):
        """Return the top item without removing it"""
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        """Check if the stack is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return the number of items in the stack"""
        return len(self.items)

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print(f"Top item: {stack.peek()}")  # Output: 3
print(f"Stack size: {stack.size()}")  # Output: 3

# Pop all items
while not stack.is_empty():
    stack.pop()`
    }
  },
  'blockchain': {
    'blockchain-intro': {
      title: 'Introduction to Blockchain Technology',
      description: 'Discover the revolutionary technology behind cryptocurrencies and Web3.',
      content: {
        overview: `Blockchain is a revolutionary distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography. Think of it as a digital ledger that's shared across multiple computers, making it nearly impossible to hack or manipulate.

Unlike traditional databases controlled by a single entity, blockchain operates on a decentralized network where multiple participants (nodes) maintain copies of the same ledger. This creates a system that's transparent, secure, and resistant to censorship.

Key characteristics of blockchain include:
- Decentralization: No single point of control or failure
- Immutability: Once data is recorded, it's extremely difficult to change
- Transparency: All transactions are visible to network participants
- Security: Cryptographic hashing and consensus mechanisms protect the data
- Trust: The system enables trust between parties without intermediaries

This technology powers cryptocurrencies like Bitcoin and Ethereum, but its applications extend far beyond digital money to include supply chain management, digital identity, smart contracts, and decentralized applications (DApps).`,
        objectives: [
          'Understand the fundamental concepts of blockchain technology',
          'Learn how cryptographic hashing secures blockchain data',
          'Explore different consensus mechanisms (Proof of Work, Proof of Stake)',
          'Understand cryptocurrencies and digital assets',
          'Introduction to smart contracts and their applications',
          'Explore real-world use cases beyond cryptocurrency'
        ]
      },
      codeExample: `pragma solidity ^0.8.0;

/**
 * Simple Smart Contract demonstrating basic blockchain concepts
 * This contract stores and manages user data on the Ethereum blockchain
 */
contract SimpleStorage {
    // State variables stored on the blockchain
    uint256 private storedData;
    address public owner;
    mapping(address => uint256) public userBalances;
    
    // Events for logging blockchain activities
    event DataStored(uint256 indexed value, address indexed sender, uint256 timestamp);
    event BalanceUpdated(address indexed user, uint256 newBalance);
    
    // Constructor runs once when contract is deployed
    constructor() {
        owner = msg.sender;
        storedData = 0;
    }
    
    // Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    /**
     * Store a value on the blockchain
     * This function costs gas to execute
     */
    function set(uint256 x) public {
        storedData = x;
        userBalances[msg.sender] += 1; // Reward user for storing data
        
        emit DataStored(x, msg.sender, block.timestamp);
        emit BalanceUpdated(msg.sender, userBalances[msg.sender]);
    }
    
    /**
     * Retrieve the stored value
     * This is a view function (read-only, no gas cost)
     */
    function get() public view returns (uint256) {
        return storedData;
    }
    
    /**
     * Increment the stored value by 1
     */
    function increment() public {
        storedData += 1;
        emit DataStored(storedData, msg.sender, block.timestamp);
    }
    
    /**
     * Get user's balance (number of times they've stored data)
     */
    function getMyBalance() public view returns (uint256) {
        return userBalances[msg.sender];
    }
}`
    }
  }
};

const courseStructure: Record<string, any> = {
  'web-development': [
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
  ],
  'generative-ai': [
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
  ],
  'data-structures': [
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
  ],
  'blockchain': [
    {
      title: 'Blockchain Basics',
      sections: [
        { id: 'blockchain-intro', title: 'What is Blockchain?' },
        { id: 'cryptocurrency', title: 'Cryptocurrency Fundamentals' },
        { id: 'consensus', title: 'Consensus Mechanisms' },
      ]
    },
    {
      title: 'Smart Contracts',
      sections: [
        { id: 'solidity', title: 'Solidity Programming' },
        { id: 'ethereum', title: 'Ethereum Development' },
        { id: 'dapps', title: 'Decentralized Apps' },
      ]
    },
    {
      title: 'Advanced Topics',
      sections: [
        { id: 'defi', title: 'DeFi Protocols' },
        { id: 'nfts', title: 'NFTs & Digital Assets' },
        { id: 'web3', title: 'Web3 Integration' },
      ]
    }
  ]
};

export const CourseContent = ({ activeSection, courseId, onSectionChange }: CourseContentProps) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const { toast } = useToast();
  
  const courseContent = contentData[courseId] || contentData['web-development'];
  const content = courseContent[activeSection] || courseContent[Object.keys(courseContent)[0]];
  
  // Get all sections in order for navigation
  const currentCourseStructure = courseStructure[courseId] || courseStructure['web-development'];
  const allSections = currentCourseStructure.flatMap((module: any) => module.sections);
  const currentIndex = allSections.findIndex((section: any) => section.id === activeSection);
  
  const previousSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

  const handleNavigation = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(content.codeExample);
      setCopiedCode(true);
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="h-6 w-6 text-green-600" />
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.title}</h1>
        <p className="text-lg text-gray-600">{content.description}</p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <Tabs defaultValue="learn" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span>Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {content.content.overview.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {content.content.objectives && (
              <Card>
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.content.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-green-600" />
                  <span>Code Example</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Example Code</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyCode}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedCode ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{content.codeExample}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => previousSection && handleNavigation(previousSection.id)}
            disabled={!previousSection}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Continue Learning</p>
            <p className="font-medium text-gray-900">
              {nextSection ? nextSection.title : 'Course Complete!'}
            </p>
          </div>
          
          <Button 
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
            onClick={() => nextSection && handleNavigation(nextSection.id)}
            disabled={!nextSection}
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
