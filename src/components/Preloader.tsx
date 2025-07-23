import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Code, Database } from 'lucide-react';

interface PreloaderProps {
  fadeOut?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ fadeOut = false }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');

  const loadingTexts = [
    'Initializing...',
    'Loading courses...',
    'Setting up learning environment...',
    'Preparing your dashboard...',
    'Almost ready...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center space-y-8">
        {/* Main Logo/Brand */}
        <div className="relative">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="w-12 h-12 text-blue-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              LearnHub
            </h1>
          </div>
        </div>

        {/* Animated Icons Circle */}
        <div className="relative w-32 h-32">
          {/* Rotating circle container */}
          <div className="absolute inset-0 animate-spin-slow">
            {/* Code Icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform">
                <Code className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Brain Icon */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-75 hover:scale-110 transition-transform">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Database Icon */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-150 hover:scale-110 transition-transform">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* BookOpen Icon */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300 hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Center pulse circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 space-y-2">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-center text-sm text-gray-500 font-medium">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-gray-700 transition-all duration-300">
            {currentText}
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float delay-300"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float delay-700"></div>
      <div className="absolute bottom-10 right-10 w-18 h-18 bg-orange-200 rounded-full opacity-20 animate-float delay-500"></div>
      
      {/* Additional subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-ping delay-1000"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-ping delay-1500"></div>
      <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-green-400 rounded-full opacity-30 animate-ping delay-2000"></div>
    </div>
  );
};

export default Preloader;
