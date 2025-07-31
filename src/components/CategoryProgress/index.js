import React from 'react';
import { useProgress } from '@site/src/context/ProgressContext';
import './styles.css';

export default function CategoryProgress({ docIds }) {
  const { progress } = useProgress();

  if (!docIds || docIds.length === 0) {
    return null;
  }

  const totalDocs = docIds.length;
  const completedDocs = docIds.filter(id => progress[id]).length;
  const percentage = Math.round((completedDocs / totalDocs) * 100);

  if (percentage === 0) {
    return null; // Don't show the bar until there's progress
  }

  return (
    <div className="card-progress-container">
      <div className="card-progress-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
};