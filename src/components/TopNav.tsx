import React,{useState,useEffect} from 'react';
import { Menu, BookOpen, ChevronDown, BarChart3,Sun,Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TopNavProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const courses = [
  { id: 'web-development', title: 'Web Development' },
  { id: 'generative-ai', title: 'Generative AI' },
  { id: 'data-structures', title: 'Data Structures & Algorithms' },
  { id: 'blockchain', title: 'Blockchain Development' }
];

export const TopNav = ({ onMenuClick, sidebarOpen }: TopNavProps) => {
  const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      const isDark = localStorage.getItem('theme') === 'dark';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }, []);
  
    const toggleTheme = () => {
      const newTheme = !darkMode;
      setDarkMode(newTheme);
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };
  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCourseSelect = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <nav className="bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5 text-gray-800 dark:text-white" />
          </Button>

          {/* Logo and title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg shadow-md">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">LearnHub</h1>
              <p className="text-xs text-gray-500 dark:text-gray-300">Master Technology Skills</p>
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Analytics Link */}
          <Link
            to="/analytics"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-gray-900 transition-all duration-200 font-medium"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Analytics</span>
          </Link>

          {/* DSA Sheet Link */}
          <Link
            to="/dsa-sheet"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-gray-900 transition-all duration-200 font-medium"
          >
            <span>DSA Sheet</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Analytics Link */}
          <div className="absolute top-4 right-4">
                      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                      ) : (
                      <Moon className="w-5 h-5 text-gray-800" />
                    )}
                    </button>
                    </div>
          <Link
            to="/analytics"
            className="md:hidden flex items-center space-x-1 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-gray-800 dark:text-green-400 font-medium text-sm"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Analytics</span>
          </Link>

          {/* Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center space-x-2 hover:bg-green-50 dark:hover:bg-white dark:text-green-600 hover:border-green-200"
              >
                <span>Courses</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg"
            >
              {courses.map((course) => (
                <DropdownMenuItem
                  key={course.id}
                  onClick={() => handleCourseSelect(course.id)}
                  className="cursor-pointer hover:bg-green-50 dark:hover:bg-gray-800 p-3 rounded-md mx-1 my-1 transition-colors text-gray-800 dark:text-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{course.title}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Start Learning Button */}
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
            onClick={() => navigate('/start-learning')}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </nav>
  );
};
