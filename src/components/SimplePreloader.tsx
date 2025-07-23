import React from 'react';
import { BookOpen } from 'lucide-react';

interface SimplePreloaderProps {
  fadeOut?: boolean;
}

const SimplePreloader: React.FC<SimplePreloaderProps> = ({ fadeOut = false }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <BookOpen className="w-10 h-10 text-blue-600 animate-spin" />
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            LearnHub
          </h1>
        </div>

        {/* Simple spinner */}
        <div className="w-8 h-8 border-4 border-blue-200 rounded-full border-t-blue-600 animate-spin"></div>
        
        {/* Loading text */}
        <p className="font-medium text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default SimplePreloader;
