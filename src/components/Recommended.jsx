import React, { useState, useEffect } from 'react';
import styles from './Recommended.module.css';

const Recommended = ({ courses, userPrefs }) => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    if (userPrefs && courses) {
      const recommendations = courses.filter(course => {
        return userPrefs.preferredTopics.includes(course.title) || 
               userPrefs.difficultyLevel === course.level.toLowerCase();
      });
      setRecommendedCourses(recommendations);
    }
  }, [userPrefs, courses]);

  if (!recommendedCourses.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recommended for You</h3>
      <div className={styles.grid}>
        {recommendedCourses.map(course => {
          const Icon = course.icon;
          return (
            <div key={course.id} className={styles.card}>
              <div className={`${styles.iconWrapper} ${course.color}`}>
                <Icon className={styles.icon} />
              </div>
              <h4 className={styles.courseTitle}>{course.title}</h4>
              <p className={styles.description}>{course.description}</p>
              <a href={`/docs/category/${course.id}`} className={styles.button}>Start Learning</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
