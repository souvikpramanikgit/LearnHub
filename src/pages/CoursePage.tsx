
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { CourseContent } from '@/components/CourseContent';
import { TopNav } from '@/components/TopNav';

const CoursePage = () => {
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <TopNav 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          courseId={courseId || 'web-development'}
        />
        
        <main className="flex-1 lg:ml-64">
          <CourseContent 
            activeSection={activeSection} 
            courseId={courseId || 'web-development'} 
            onSectionChange={setActiveSection}
          />
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
