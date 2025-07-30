import React, { useState, useEffect } from 'react';
import { getAchievements, getUserStats } from '../utils/progressTracker';
import { Trophy, Star, Zap, Flame } from 'lucide-react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [userStats, setUserStats] = useState({});

  useEffect(() => {
    setAchievements(getAchievements());
    setUserStats(getUserStats());
  }, []);

  useEffect(() => {
    const handleAchievementUnlocked = (event) => {
      setAchievements(getAchievements());
      setUserStats(getUserStats());
    };

    window.addEventListener('achievementUnlocked', handleAchievementUnlocked);
    return () => window.removeEventListener('achievementUnlocked', handleAchievementUnlocked);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.statsSection}>
        <h3 className={styles.title}>
          <Trophy size={24} />
          Your Progress
        </h3>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⚡</div>
            <div className={styles.statValue}>{userStats.totalXP || 0}</div>
            <div className={styles.statLabel}>Total XP</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔥</div>
            <div className={styles.statValue}>{userStats.streak || 0}</div>
            <div className={styles.statLabel}>Day Streak</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📚</div>
            <div className={styles.statValue}>{userStats.totalModulesCompleted || 0}</div>
            <div className={styles.statLabel}>Modules Done</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏆</div>
            <div className={styles.statValue}>{userStats.achievements || 0}</div>
            <div className={styles.statLabel}>Achievements</div>
          </div>
        </div>
      </div>

      <div className={styles.achievementsSection}>
        <h3 className={styles.title}>
          <Star size={24} />
          Achievements
        </h3>
        <div className={styles.achievementsGrid}>
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`${styles.achievementCard} ${
                achievement.unlocked ? styles.unlocked : styles.locked
              }`}
            >
              <div className={styles.achievementIcon}>
                {achievement.icon}
              </div>
              <h4 className={styles.achievementTitle}>{achievement.title}</h4>
              <p className={styles.achievementDescription}>{achievement.description}</p>
              {achievement.unlocked && (
                <div className={styles.unlockedBadge}>Unlocked!</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
