import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { ExternalLink, Target, BookOpen, Code2 } from "lucide-react";
import styles from './index.module.css';

// Roadmap data structure
const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Complete roadmap for frontend development including HTML, CSS, JavaScript, React, and modern tools",
    icon: Code2,
    url: "https://roadmap.sh/frontend",
    color: "#3b82f6",
    skills: [
      "HTML & CSS Fundamentals",
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "State Management",
      "Build Tools & Bundlers",
      "Testing",
      "Performance Optimization"
    ],
    estimatedTime: "6-12 months",
    difficulty: "Beginner to Advanced"
  },
  {
    id: "backend",
    title: "Backend Developer", 
    description: "Comprehensive backend development path covering server-side technologies, databases, and APIs",
    icon: BookOpen,
    url: "https://roadmap.sh/backend",
    color: "#10b981",
    skills: [
      "Programming Language (Python/Node.js/Java)",
      "Databases (SQL & NoSQL)",
      "APIs & RESTful Services",
      "Authentication & Security",
      "Caching & Performance",
      "DevOps Basics",
      "Testing & Monitoring",
      "System Design"
    ],
    estimatedTime: "8-15 months",
    difficulty: "Intermediate to Advanced"
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    description: "Complete full stack development journey combining frontend and backend technologies",
    icon: Target,
    url: "https://roadmap.sh/full-stack",
    color: "#8b5cf6",
    skills: [
      "Frontend Technologies",
      "Backend Development",
      "Database Management",
      "Version Control (Git)",
      "Deployment & Hosting",
      "API Development",
      "Security Best Practices",
      "Project Management"
    ],
    estimatedTime: "12-18 months",
    difficulty: "Beginner to Advanced"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Essential DSA concepts for programming interviews and problem-solving skills",
    icon: BookOpen,
    url: "https://roadmap.sh/computer-science",
    color: "#f59e0b",
    skills: [
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & Graphs",
      "Dynamic Programming",
      "Sorting & Searching",
      "Recursion & Backtracking",
      "System Design Basics"
    ],
    estimatedTime: "6-12 months",
    difficulty: "Beginner to Advanced"
  }
];

const RoadmapCard = ({ roadmap }) => {
  const IconComponent = roadmap.icon;
  
  return (
    <div className={styles.roadmapCard}>
      <div className={styles.roadmapHeader}>
        <div className={styles.roadmapIcon} style={{ backgroundColor: `${roadmap.color}20` }}>
          <IconComponent size={32} color={roadmap.color} />
        </div>
        <div className={styles.roadmapTitle}>
          <h3>{roadmap.title}</h3>
          <span className={styles.difficulty}>{roadmap.difficulty}</span>
        </div>
      </div>
      
      <p className={styles.roadmapDescription}>{roadmap.description}</p>
      
      <div className={styles.roadmapMeta}>
        <div className={styles.estimatedTime}>
          <strong>Estimated Time:</strong> {roadmap.estimatedTime}
        </div>
      </div>
      
      <div className={styles.skillsList}>
        <h4>Key Skills You'll Learn:</h4>
        <ul>
          {roadmap.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.roadmapActions}>
        <a 
          href={roadmap.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.viewRoadmapBtn}
          style={{ backgroundColor: roadmap.color }}
        >
          View Interactive Roadmap
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default function RoadmapsPage() {
  return (
    <Layout>
      <Head>
        <title>Learning Roadmaps - LearnHub</title>
        <meta 
          name="description" 
          content="Explore comprehensive learning roadmaps for web development, data structures, algorithms, and more. Plan your learning journey with our curated paths."
        />
      </Head>
      
      <main className="container margin-vert--lg">
        <div className={styles.roadmapsHeader}>
          <h1>Learning Roadmaps</h1>
          <p className={styles.roadmapsSubtitle}>
            Choose your learning path and follow structured roadmaps to master your chosen technology stack. 
            These roadmaps are curated from <strong>roadmap.sh</strong> - the community-driven platform for developer roadmaps.
          </p>
        </div>

        <div className={styles.benefitsSection}>
          <h2>Why Follow a Roadmap?</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>
              <Target size={24} color="#3b82f6" />
              <div>
                <h3>Clear Learning Path</h3>
                <p>Get a structured sequence of topics to study, eliminating confusion about what to learn next.</p>
              </div>
            </div>
            <div className={styles.benefit}>
              <BookOpen size={24} color="#10b981" />
              <div>
                <h3>Goal-Oriented Learning</h3>
                <p>Plan your 30-day learning schedule effectively with milestone-based progression.</p>
              </div>
            </div>
            <div className={styles.benefit}>
              <Code2 size={24} color="#8b5cf6" />
              <div>
                <h3>Industry-Standard Skills</h3>
                <p>Learn skills that are in high demand and follow industry best practices.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.roadmapsGrid}>
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>

        <div className={styles.callToAction}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Select a roadmap that aligns with your goals and start learning today. 
            Each roadmap provides detailed guidance on topics, resources, and the optimal learning sequence.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/docs/intro" className={styles.ctaButton + " " + styles.primary}>
              Browse Course Materials
            </a>
            <a href="/lectures" className={styles.ctaButton + " " + styles.secondary}>
              Watch Video Lectures
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}