import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useProgress } from '@site/src/context/ProgressContext';
import './styles.css';

export default function FooterWrapper(props) {
  const { activeDoc: metadata } = useActiveDocContext();
  const { progress, markAsComplete, markAsIncomplete } = useProgress();

  const isCompleted = progress[metadata.id];

  const handleToggleComplete = () => {
    if (isCompleted) {
      markAsIncomplete(metadata.id);
    } else {
      markAsComplete(metadata.id);
    }
  };

  return (
    <>
      <div className="completion-button-container">
        <button
          className={`completion-button ${isCompleted ? 'completed' : ''}`}
          onClick={handleToggleComplete}
        >
          {isCompleted ? '✓ Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
      <Footer {...props} />
    </>
  );
}