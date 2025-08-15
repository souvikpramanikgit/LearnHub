import React, { useState, useEffect } from 'react';
import { User, BookOpen, Target, Settings } from 'lucide-react';
import { getUserPreferences, saveUserPreferences } from '../utils/userPrefs';
import styles from './UserProfile.module.css';

const UserProfile = ({ isOpen, onClose }) => {
  const [userPrefs, setUserPrefs] = useState({
    name: '',
    preferredTopics: [],
    learningGoals: [],
    difficultyLevel: 'beginner'
  });

  const topics = [
    'Web Development',
    'Data Structures & Algorithms',
    'Generative AI',
    'Blockchain Development',
    'DevOps',
    'Machine Learning',
    'Mobile Development',
    'Cybersecurity'
  ];

  const difficultyLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  useEffect(() => {
    const savedPrefs = getUserPreferences();
    if (savedPrefs) {
      setUserPrefs(savedPrefs);
    }
  }, []);

  const handleTopicToggle = (topic) => {
    setUserPrefs(prev => ({
      ...prev,
      preferredTopics: prev.preferredTopics.includes(topic)
        ? prev.preferredTopics.filter(t => t !== topic)
        : [...prev.preferredTopics, topic]
    }));
  };

  const handleGoalAdd = (goal) => {
    if (goal.trim() && !userPrefs.learningGoals.includes(goal.trim())) {
      setUserPrefs(prev => ({
        ...prev,
        learningGoals: [...prev.learningGoals, goal.trim()]
      }));
    }
  };

  const handleGoalRemove = (goalToRemove) => {
    setUserPrefs(prev => ({
      ...prev,
      learningGoals: prev.learningGoals.filter(goal => goal !== goalToRemove)
    }));
  };

  const handleSave = () => {
    saveUserPreferences(userPrefs);
    onClose();
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent('userPrefsUpdated', { detail: userPrefs }));
  };

  const handleGoalKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGoalAdd(e.target.value);
      e.target.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <User size={24} />
          </div>
          <h2>User Profile & Learning Preferences</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.content}>
          {/* User Info Section */}
          <div className={styles.section}>
            <h3>
              <User size={18} />
              Personal Information
            </h3>
            <input
              type="text"
              placeholder="Enter your name"
              value={userPrefs.name}
              onChange={(e) => setUserPrefs(prev => ({ ...prev, name: e.target.value }))}
              className={styles.input}
            />
          </div>

          {/* Preferred Topics Section */}
          <div className={styles.section}>
            <h3>
              <BookOpen size={18} />
              Preferred Learning Topics
            </h3>
            <div className={styles.topicsGrid}>
              {topics.map(topic => (
                <button
                  key={topic}
                  className={`${styles.topicChip} ${
                    userPrefs.preferredTopics.includes(topic) ? styles.selected : ''
                  }`}
                  onClick={() => handleTopicToggle(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Learning Goals Section */}
          <div className={styles.section}>
            <h3>
              <Target size={18} />
              Learning Goals
            </h3>
            <input
              type="text"
              placeholder="Add a learning goal (press Enter)"
              onKeyPress={handleGoalKeyPress}
              className={styles.input}
            />
            <div className={styles.goalsList}>
              {userPrefs.learningGoals.map((goal, index) => (
                <div key={index} className={styles.goalItem}>
                  <span>{goal}</span>
                  <button
                    onClick={() => handleGoalRemove(goal)}
                    className={styles.removeGoal}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty Level Section */}
          <div className={styles.section}>
            <h3>
              <Settings size={18} />
              Preferred Difficulty Level
            </h3>
            <div className={styles.difficultyOptions}>
              {difficultyLevels.map(level => (
                <label key={level.value} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="difficulty"
                    value={level.value}
                    checked={userPrefs.difficultyLevel === level.value}
                    onChange={(e) => setUserPrefs(prev => ({ ...prev, difficultyLevel: e.target.value }))}
                  />
                  <span className={styles.radioText}>{level.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.saveButton} onClick={handleSave}>
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
