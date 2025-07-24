// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2.5 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open h-7 w-7 text-white"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold">LearnHub</span>
              <p className="text-gray-400 text-sm">Master Technology Skills</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Building the future, one developer at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
