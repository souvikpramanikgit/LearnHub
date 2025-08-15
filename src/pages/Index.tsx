import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { Typewriter } from 'react-simple-typewriter';
import HomepageFeatures from '../components/HomepageFeatures';
import UserProfile from '../components/UserProfile';
import Recommended from '../components/Recommended';
import Achievements from '../components/Achievements';
import AchievementNotification from '../components/AchievementNotification';
import SearchBar from '../components/SearchBar';
import { getUserPreferences } from '../utils/userPrefs';
import { User, Trophy } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollProgressBar from '../components/ScrollProgressBar';

// Insert course data at the top of the file
const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites and web applications.",
    icon: require('lucide-react').Code,
    color: styles.courseBlue,
    level: "Beginner to Advanced",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Master AI technologies including ChatGPT, DALL-E, and learn to build AI-powered applications.",
    icon: require('lucide-react').Brain,
    color: styles.coursePurple,
    level: "Intermediate",
  },
  {
    id: "data-structure",
    title: "Data Structures & Algorithms",
    description:
      "Build strong programming foundations with essential data structures and algorithmic thinking.",
    icon: require('lucide-react').Database,
    color: styles.courseGreen,
    level: "Beginner to Intermediate",
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description:
      "Explore cryptocurrency, smart contracts, and decentralized applications on various blockchain platforms.",
    icon: require('lucide-react').Link,
    color: styles.courseOrange,
    level: "Advanced",
  },
];

export default function Home(): React.ReactElement {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userPrefs, setUserPrefs] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    // Load user preferences on component mount
    const savedPrefs = getUserPreferences();
    setUserPrefs(savedPrefs);
  }, []);

  useEffect(() => {
    // Listen for user preferences updates
    const handlePrefsUpdate = (event) => {
      setUserPrefs(event.detail);
    };
    
    window.addEventListener('userPrefsUpdated', handlePrefsUpdate);
    return () => window.removeEventListener('userPrefsUpdated', handlePrefsUpdate);
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = courses.filter(
        course => 
          course.title.toLowerCase().includes(lowercasedQuery) ||
          course.description.toLowerCase().includes(lowercasedQuery) ||
          course.level.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  };

   useEffect(() => {
    const logoEl = document.querySelector(".navbar__title");

    if (!logoEl) return;

    const handleClick = (e: MouseEvent) => {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    logoEl.addEventListener("click", handleClick);

    return () => {
      logoEl.removeEventListener("click", handleClick);
    };
  }, []);

  

  return (
    <Layout
      title="Launch Your Tech Career in 30 Days"
      description="Master DSA and Full Stack Development in 30 Days">
      {/* Floating Action Buttons */}
      <div className={styles.floatingActions}>
        <button 
          className={styles.floatingButton}
          onClick={() => setIsProfileOpen(true)}
          title="User Profile"
        >
          <User size={20} />
        </button>
        <button 
          className={styles.floatingButton}
          onClick={() => setShowAchievements(!showAchievements)}
          title="Achievements"
        >
          <Trophy size={20} />
        </button>
      </div>
      
      {/* Achievement Notification */}
      <AchievementNotification />
      
      {/* User Profile Modal */}
      <UserProfile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
      <header className={styles.heroBanner}>
        <div className={styles.heroContentWrapper}>

          {/* Left Hero Text Content */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>🚀 Launch Your Tech Career in 30 Days</div>

            <h1 className={styles.heroTitle}>
              Master <span className={styles.highlightGreen}>DSA</span> and{' '}
              <span className={styles.highlightGreen}>Full Stack Development</span><br />
              in Just <span className={styles.highlightGreen}>30 Days</span>
            </h1>

            {/* 🔁 Updated with Typewriter */}
            <p className={styles.heroCerts}>
              <Typewriter
                words={[
                  'Explore Courses',
                  'Master Web Dev, GenAI, DSA, Blockchain etc.',
                  'Earn Certificates Recognized by Tech Leaders',
                  'Upskill with Industry-Ready Courses',
                  'Learn by Building Real-World Projects',
                  'Code Connect & Grow with LearnHub'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <p className={styles.heroSubtitle}> Zero fluff. One roadmap. Your path to becoming a complete developer starts now. </p>

            <div className={styles.buttons}>
              <a className="button button--primary button--lg" href="/docs/intro">
                🚀 Get Started Free
              </a>
              <a className="button button--secondary button--lg" href="#courses-section">
                &lt;/&gt; See Roadmap
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className={styles.heroRight}>
            {/* VS Code style code card (from LearnHub) */}
            <div
              className={styles.codeCard + 'tilt-on-hover'}
              style={{
                background: '#181f2a',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                width: '100%',
                maxWidth: 400,
                textAlign: 'left',
                border: '1px solid #232b3a',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* VS Code style top bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '0.5rem 1rem',
                background: '#232b3a',
                borderTopLeftRadius: '1.5rem',
                borderTopRightRadius: '1.5rem',
                borderBottom: '1px solid #374151',
              }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f87171', display: 'inline-block' }}></span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#fde68a', display: 'inline-block' }}></span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
                <span style={{ marginLeft: 8, fontSize: 12, color: '#9ca3af', fontFamily: 'monospace' }}>
                  VS Code + LeetCode
                </span>
              </div>
              {/* Code content */}
              <div style={{ padding: '1rem 1rem 0.5rem 1rem' }}>
                <pre style={{
                  fontFamily: 'monospace',
                  color: '#4ade80',
                  fontSize: 14,
                  background: 'transparent',
                  margin: 0,
                  padding: '0.5rem',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>{`// Day 1: Binary Search + React Setup
function binarySearch(arr, target) {
  return recursiveSearch(arr, 0, arr.length-1, target);
}`}</pre>
                <span style={{ display: 'block', color: '#fde68a', fontSize: 12, fontFamily: 'monospace', marginBottom: 8 }}>
                  // Building TodoApp with optimized search...
                </span>
              </div>
              {/* Project deployed banner */}
              <div style={{
                background: 'linear-gradient(90deg, #22c55e 0%, #3b82f6 100%)',
                borderBottomLeftRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem',
                padding: '0.75rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderTop: '1px solid #374151',
              }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>
                  ✅ Project Deployed
                </span>
                <span style={{ color: '#fff', fontSize: 12 }}>
                  Portfolio + 150 DSA Problems Solved
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HomepageFeatures />
      
      {/* Search Bar Section */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <SearchBar courses={courses} onSearch={handleSearch} />
        </div>
      </section>
      
      {/* Personalized Recommendations */}
      {userPrefs && userPrefs.preferredTopics && userPrefs.preferredTopics.length > 0 && (
        <Recommended courses={courses} userPrefs={userPrefs} />
      )}
      
      {/* Achievements Section */}
      {showAchievements && (
        <section className={styles.achievementsSection}>
          <Achievements />
        </section>
      )}
      {/* Popular Courses Section */}
      <section className={styles.coursesSection} id="courses-section">
        <div className={styles.coursesContainer}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>Popular Courses</h2>
            <p className={styles.coursesSubtitle}>
              Choose from our comprehensive selection of technology courses designed by industry experts
            </p>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div key={course.id} className={styles.courseCard}>
                  <div className={`${styles.courseIconWrapper} ${course.color}`}>
                    <Icon className={styles.courseIcon} />
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseMeta}>
                    <span className={styles.courseLevel}>{course.level}</span>
                  </div>
                  <p className={styles.courseDescription}>{course.description}</p>
                  <a href={`/docs/category/${course.id}`} className={styles.courseButton}>
                    Start Course
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </Layout>
  );
}
