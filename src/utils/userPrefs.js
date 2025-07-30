// src/utils/userPrefs.js

const PREFERENCES_KEY = 'learnHubUserPreferences';

// Function to get user preferences from localStorage
export const getUserPreferences = () => {
  try {
    const prefs = localStorage.getItem(PREFERENCES_KEY);
    return prefs ? JSON.parse(prefs) : null;
  } catch (error) {
    console.error("Failed to parse user preferences from localStorage", error);
    return null;
  }
};

// Function to save user preferences to localStorage
export const saveUserPreferences = (preferences) => {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error("Failed to save user preferences to localStorage", error);
  }
};

