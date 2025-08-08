import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
export const ProgressContext = createContext();

// Create the Provider component
export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});

  // On initial load, try to get progress data from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('learnhub_progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to parse progress from localStorage", error);
    }
  }, []);

  // Function to save progress to both state and localStorage
  const updateProgress = (newProgress) => {
    try {
      setProgress(newProgress);
      localStorage.setItem('learnhub_progress', JSON.stringify(newProgress));
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  };

  // Function to mark a specific lesson as complete
  const markAsComplete = (lessonId) => {
    const newProgress = { ...progress, [lessonId]: true };
    updateProgress(newProgress);
  };
  
  // Function to mark a specific lesson as incomplete
  const markAsIncomplete = (lessonId) => {
    const newProgress = { ...progress };
    delete newProgress[lessonId];
    updateProgress(newProgress);
  };


  return (
    <ProgressContext.Provider value={{ progress, markAsComplete, markAsIncomplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook to easily use the progress context in other components
export const useProgress = () => {
  return useContext(ProgressContext);
};