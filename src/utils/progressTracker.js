// src/utils/progressTracker.js

const PROGRESS_KEY = 'learnHubProgress';
const ACHIEVEMENTS_KEY = 'learnHubAchievements';

// Initialize progress data structure
const initializeProgress = () => ({
  courses: {},
  totalXP: 0,
  streak: 0,
  lastVisit: new Date().toISOString().split('T')[0],
  achievements: []
});

// Get progress data from localStorage
export const getProgressData = () => {
  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : initializeProgress();
  } catch (error) {
    console.error("Failed to get progress data", error);
    return initializeProgress();
  }
};

// Save progress data to localStorage
export const saveProgressData = (progressData) => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressData));
  } catch (error) {
    console.error("Failed to save progress data", error);
  }
};

// Update course progress
export const updateCourseProgress = (courseId, moduleId, completed = true) => {
  const progressData = getProgressData();
  
  if (!progressData.courses[courseId]) {
    progressData.courses[courseId] = {
      modules: {},
      totalModules: 0,
      completedModules: 0,
      lastVisited: new Date().toISOString(),
      xpEarned: 0
    };
  }

  const course = progressData.courses[courseId];
  
  if (!course.modules[moduleId]) {
    course.modules[moduleId] = {
      completed: false,
      visitedAt: new Date().toISOString(),
      xp: 0
    };
    course.totalModules++;
  }

  if (completed && !course.modules[moduleId].completed) {
    course.modules[moduleId].completed = true;
    course.modules[moduleId].xp = 25; // 25 XP per module
    course.completedModules++;
    course.xpEarned += 25;
    progressData.totalXP += 25;
    
    // Check for achievements
    checkAchievements(progressData, courseId);
  }

  course.lastVisited = new Date().toISOString();
  
  // Update streak
  updateStreak(progressData);
  
  saveProgressData(progressData);
  return progressData;
};

// Update learning streak
const updateStreak = (progressData) => {
  const today = new Date().toISOString().split('T')[0];
  const lastVisit = progressData.lastVisit;
  
  if (lastVisit === today) {
    // Already visited today, no change
    return;
  }
  
  const lastVisitDate = new Date(lastVisit);
  const todayDate = new Date(today);
  const diffTime = Math.abs(todayDate - lastVisitDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    // Consecutive day
    progressData.streak++;
  } else if (diffDays > 1) {
    // Streak broken
    progressData.streak = 1;
  }
  
  progressData.lastVisit = today;
};

// Check and award achievements
const checkAchievements = (progressData, courseId) => {
  const achievements = [
    {
      id: 'first_module',
      title: 'First Steps',
      description: 'Complete your first module',
      condition: () => progressData.totalXP >= 25,
      icon: '🎯'
    },
    {
      id: 'hundred_xp',
      title: 'XP Hunter',
      description: 'Earn 100 XP',
      condition: () => progressData.totalXP >= 100,
      icon: '⚡'
    },
    {
      id: 'streak_7',
      title: 'Weekly Warrior',
      description: 'Maintain a 7-day learning streak',
      condition: () => progressData.streak >= 7,
      icon: '🔥'
    },
    {
      id: 'course_complete',
      title: 'Course Master',
      description: 'Complete your first course',
      condition: () => Object.values(progressData.courses).some(course => 
        course.completedModules >= course.totalModules && course.totalModules > 0
      ),
      icon: '🏆'
    }
  ];

  achievements.forEach(achievement => {
    if (!progressData.achievements.includes(achievement.id) && achievement.condition()) {
      progressData.achievements.push(achievement.id);
      // Trigger achievement notification
      window.dispatchEvent(new CustomEvent('achievementUnlocked', { 
        detail: achievement 
      }));
    }
  });
};

// Get course progress percentage
export const getCourseProgress = (courseId) => {
  const progressData = getProgressData();
  const course = progressData.courses[courseId];
  
  if (!course || course.totalModules === 0) return 0;
  
  return Math.round((course.completedModules / course.totalModules) * 100);
};

// Get all achievements
export const getAchievements = () => {
  const allAchievements = [
    {
      id: 'first_module',
      title: 'First Steps',
      description: 'Complete your first module',
      icon: '🎯'
    },
    {
      id: 'hundred_xp',
      title: 'XP Hunter',
      description: 'Earn 100 XP',
      icon: '⚡'
    },
    {
      id: 'streak_7',
      title: 'Weekly Warrior',
      description: 'Maintain a 7-day learning streak',
      icon: '🔥'
    },
    {
      id: 'course_complete',
      title: 'Course Master',
      description: 'Complete your first course',
      icon: '🏆'
    }
  ];

  const progressData = getProgressData();
  
  return allAchievements.map(achievement => ({
    ...achievement,
    unlocked: progressData.achievements.includes(achievement.id)
  }));
};

// Get user stats
export const getUserStats = () => {
  const progressData = getProgressData();
  const completedCourses = Object.values(progressData.courses).filter(
    course => course.completedModules >= course.totalModules && course.totalModules > 0
  ).length;
  
  const totalModulesCompleted = Object.values(progressData.courses)
    .reduce((sum, course) => sum + course.completedModules, 0);

  return {
    totalXP: progressData.totalXP,
    streak: progressData.streak,
    completedCourses,
    totalModulesCompleted,
    achievements: progressData.achievements.length
  };
};
