import React, { useState, useEffect } from 'react';
import { getUserStats } from '../utils/progressTracker';
import styles from './ProgressTracker.module.css';

const ProgressTracker = () => {
  const [userStats, setUserStats] = useState({
    totalXP: 0,
    streak: 0,
    completedCourses: 0,
    totalModulesCompleted: 0,
    achievements: 0
  });

  useEffect(() => {
    setUserStats(getUserStats());
  }, []);

  const progressData = [
    { label: 'Week 1', modules: 2, xp: 50 },
    { label: 'Week 2', modules: 5, xp: 120 },
    { label: 'Week 3', modules: 8, xp: 210 },
    { label: 'Week 4', modules: 12, xp: 350 },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Your Learning Progress</h3>
      <div className={styles.progressCards}>
        {progressData.map((week, index) => (
          <div key={week.label} className={styles.progressCard}>
            <h4 className={styles.weekTitle}>{week.label}</h4>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{week.modules}</span>
                <span className={styles.statLabel}>Modules</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{week.xp}</span>
                <span className={styles.statLabel}>XP</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
