import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { Typewriter } from "react-simple-typewriter";
import HomepageFeatures from "../components/HomepageFeatures";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/react";
import { ArrowBigLeftDashIcon, ArrowBigRightIcon } from "lucide-react";

// Insert course data at the top of the file
const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites and web applications.",
    icon: require("lucide-react").Code,
    color: styles.courseBlue,
    level: "Beginner to Advanced",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Master AI technologies including ChatGPT, DALL-E, and learn to build AI-powered applications.",
    icon: require("lucide-react").Brain,
    color: styles.coursePurple,
    level: "Intermediate",
  },
  {
    id: "data-structure",
    title: "Data Structures & Algorithms",
    description:
      "Build strong programming foundations with essential data structures and algorithmic thinking.",
    icon: require("lucide-react").Database,
    color: styles.courseGreen,
    level: "Beginner to Intermediate",
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description:
      "Explore cryptocurrency, smart contracts, and decentralized applications on various blockchain platforms.",
    icon: require("lucide-react").Link,
    color: styles.courseOrange,
    level: "Advanced",
  },
];

export default function Home(): React.ReactElement {
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
      description="Master DSA and Full Stack Development in 30 Days"
    >
      <>
        {/* Hero Section */}
        <main className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.statusBadge}>
              <span className={styles.statusIndicator}></span>
              🚀 30-Day Intensive Bootcamp • Next Batch Starts Dec 15
            </div>

            <h1 className={styles.heroTitle}>
              Master <span className={styles.highlight}>DSA</span> and{" "}
              <span className={styles.highlight}>Full Stack Development</span>{" "}
              in Just <span className={styles.highlight}>30 Days</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Learn by building. Practice with 200+ problems. Get placed at top
              companies. Join 50,000+ successful developers who transformed
              their careers with our proven system.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureTitle}>200+ Problems</div>
                <div className={styles.featureDescription}>
                  Curated DSA problems with detailed solutions
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🚀</div>
                <div className={styles.featureTitle}>15 Projects</div>
                <div className={styles.featureDescription}>
                  Full-stack applications for your portfolio
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureTitle}>96% Placement</div>
                <div className={styles.featureDescription}>
                  Guaranteed job assistance and mock interviews
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a href="/docs/intro" className={styles.btnPrimary}>
                🔥 Start Your Journey
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              <a href="#courses-section" className={styles.btnSecondary}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <ArrowBigRightIcon points="5,3 19,12 5,21" />
                </svg>
                See RoadMap
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            {/* Floating Elements */}
            <div className={styles.floatingElement}>
              <div className={styles.floatingCard}>
                <h5>LeetCode Hard ✓</h5>
                <p>Solved in 45ms</p>
              </div>
            </div>
            <div className={styles.floatingElement}>
              <div className={styles.floatingCard}>
                <h5>React App Deployed</h5>
                <p>Portfolio Updated</p>
              </div>
            </div>
            <div className={styles.floatingElement}>
              <div className={styles.floatingCard}>
                <h5>Interview Scheduled</h5>
                <p>Google • Senior SDE</p>
              </div>
            </div>

            <div className={styles.demoContainer}>
              <div className={styles.codeEditor}>
                <div className={styles.editorHeader}>
                  <div className={styles.windowControls}>
                    <span
                      className={`${styles.control} ${styles.close}`}
                    ></span>
                    <span
                      className={`${styles.control} ${styles.minimize}`}
                    ></span>
                    <span
                      className={`${styles.control} ${styles.maximize}`}
                    ></span>
                  </div>
                  <span className={styles.editorTitle}>
                    VS Code - algorithm-practice.js
                  </span>
                  <div className={styles.editorActions}>
                    <button className={styles.actionBtn}>Run</button>
                    <button className={styles.actionBtn}>Debug</button>
                  </div>
                </div>

                <div className={styles.tabsContainer}>
                  <div className={styles.tabs}>
                    <div className={`${styles.tab} ${styles.active}`}></div>
                    <div className={styles.tab}>Dynamic Programming</div>
                    <div className={styles.tab}>System Design</div>
                  </div>
                </div>

                <div className={styles.editorContent}>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumbers}>1</span>
                    <span className={styles.comment}>
                      // LeetCode Problem: Binary Search (Medium)
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumbers}>2</span>
                    <span className={styles.comment}>
                      // Time: O(log n) | Space: O(1)
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>3</span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumbers}>4</span>
                    <span className={styles.keyword}>function</span>{" "}
                    <span className={styles.function}>binarySearch</span>(
                    <span className={styles.keyword}>nums</span>,{" "}
                    <span className={styles.keyword}>target</span>) {"{"}
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>5</span>
                    &nbsp;&nbsp;<span className={styles.keyword}>
                      let
                    </span> left <span className={styles.operator}>=</span>{" "}
                    <span className={styles.number}>0</span>, right{" "}
                    <span className={styles.operator}>=</span> nums.length{" "}
                    <span className={styles.operator}>-</span>{" "}
                    <span className={styles.number}>1</span>;
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>6</span>
                    &nbsp;&nbsp;<span className={styles.keyword}>
                      while
                    </span>{" "}
                    (left <span className={styles.operator}>&lt;=</span> right){" "}
                    {"{"}
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>7</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.keyword}>const</span> mid{" "}
                    <span className={styles.operator}>=</span> Math.
                    <span className={styles.function}>floor</span>((left{" "}
                    <span className={styles.operator}>+</span> right){" "}
                    <span className={styles.operator}>/</span>{" "}
                    <span className={styles.number}>2</span>);
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>8</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.keyword}>if</span> ( nums[mid]{" "}
                    <span className={styles.operator}>===</span> target){" "}
                    <span className={styles.keyword}>return</span> mid;
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>9</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.keyword}>if</span> ( nums[mid]{" "}
                    <span className={styles.operator}>&lt;</span> target) left{" "}
                    <span className={styles.operator}>=</span> mid{" "}
                    <span className={styles.operator}>+</span>{" "}
                    <span className={styles.number}>1</span>;
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>10</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.keyword}>else</span> right{" "}
                    <span className={styles.operator}>=</span> mid{" "}
                    <span className={styles.operator}>-</span>{" "}
                    <span className={styles.number}>1</span>;
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>11</span>
                    &nbsp;&nbsp;{"}"}
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>12</span>
                    &nbsp;&nbsp;<span className={styles.keyword}>
                      return
                    </span>{" "}
                    <span className={styles.operator}>-</span>
                    <span className={styles.number}>1</span>;
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>13</span>
                    {"}"}
                  </div>

                  <div className={styles.achievementPanel}>
                    <div className={styles.achievementContent}>
                      <h4>🎉 Problem Solved Successfully!</h4>
                      <p>
                        Runtime: 42ms (beats 97.8%) • Memory: 41.2MB (beats
                        85.3%)
                      </p>
                    </div>
                    <div className={styles.achievementIcon}>✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>

      {/* Popular Courses Section */}
      <section className={styles.coursesSection} id="courses-section">
        <div className={styles.coursesContainer}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>Popular Courses</h2>
            <p className={styles.coursesSubtitle}>
              Choose from our comprehensive selection of technology courses
              designed by industry experts
            </p>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div key={course.id} className={styles.courseCard}>
                  <div
                    className={`${styles.courseIconWrapper} ${course.color}`}
                  >
                    <Icon className={styles.courseIcon} />
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseMeta}>
                    <span className={styles.courseLevel}>{course.level}</span>
                  </div>
                  <p className={styles.courseDescription}>
                    {course.description}
                  </p>
                  <a
                    href={`/docs/category/${course.id}`}
                    className={styles.courseButton}
                  >
                    Start Course
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTopButton />

      <Analytics />
      <HomepageFeatures />
    </Layout>
  );
}
