import React, { useEffect, useState } from "react";
import styles from "./CourseProgress.module.css";

interface Lesson {
  id: string;
  title: string;
}

interface Props {
  courseId: string;
  lessons: Lesson[];
}

const CourseProgress: React.FC<Props> = ({ courseId, lessons }) => {
  const [completed, setCompleted] = useState<string[]>([]);

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${courseId}`);
    if (saved) setCompleted(JSON.parse(saved));
  }, [courseId]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(`progress-${courseId}`, JSON.stringify(completed));
  }, [completed, courseId]);

  // Toggle lecture completion
  const toggleLesson = (id: string) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const progressPercent = Math.round(
    (completed.length / lessons.length) * 100
  );

  return (
    <div className={styles.progressContainer}>
      <h3 className={styles.progressTitle}>Course Progress</h3>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className={styles.progressText}>
        {completed.length} / {lessons.length} lessons completed ({progressPercent}%)
      </p>
      <ul className={styles.lessonList}>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className={`${styles.lessonItem} ${
              completed.includes(lesson.id) ? styles.completed : ""
            }`}
            onClick={() => toggleLesson(lesson.id)}
          >
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseProgress;


