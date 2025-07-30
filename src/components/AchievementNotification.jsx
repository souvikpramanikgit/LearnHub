import React, { useState, useEffect } from 'react';
import styles from './AchievementNotification.module.css';

const AchievementNotification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleAchievement = (event) => {
      setNotification(event.detail);
      setTimeout(() => {
        setNotification(null);
      }, 5000); // Hide after 5 seconds
    };

    window.addEventListener('achievementUnlocked', handleAchievement);
    return () => window.removeEventListener('achievementUnlocked', handleAchievement);
  }, []);

  if (!notification) return null;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{notification.icon}</div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Achievement Unlocked!</div>
        <div className={styles.description}>{notification.title}</div>
      </div>
    </div>
  );
};

export default AchievementNotification;
