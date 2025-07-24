import React, { useState, useEffect } from 'react';
import { BookOpen, Code, ArrowRight, ArrowLeft, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  webDevelopmentContent, webDevelopmentStructure,
  generativeAIContent, generativeAIStructure,
  dataStructuresContent, dataStructuresStructure,
  blockchainContent, blockchainStructure
} from '@/data';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

interface CourseContentProps {
  activeSection: string;
  courseId: string;
  onSectionChange?: (section: string) => void;
}

const contentData: Record<string, Record<string, any>> = {
  'web-development': webDevelopmentContent,
  'generative-ai': generativeAIContent,
  'data-structures': dataStructuresContent,
  'blockchain': blockchainContent,
};

const courseStructure: Record<string, any> = {
  'web-development': webDevelopmentStructure,
  'generative-ai': generativeAIStructure,
  'data-structures': dataStructuresStructure,
  'blockchain': blockchainStructure,
};

export const CourseContent = ({ activeSection, courseId, onSectionChange }: CourseContentProps) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [tocItems, setTocItems] = useState<{id: string, title: string, level: number}[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const courseContent = contentData[courseId] || contentData['web-development'];
  const content = courseContent[activeSection] || courseContent[Object.keys(courseContent)[0]];

  const currentCourseStructure = courseStructure[courseId] || courseStructure['web-development'];
  const allSections = currentCourseStructure.flatMap((module: any) => module.sections);
  const currentIndex = allSections.findIndex((section: any) => section.id === activeSection);

  const previousSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

  // NEW: Build TOC from all sections in course structure
  useEffect(() => {
    const buildTOCFromStructure = () => {
      const toc: { id: string, title: string, level: number }[] = [];
      currentCourseStructure.forEach((module: any) => {
        module.sections.forEach((section: any) => {
          toc.push({ id: section.id, title: section.title, level: 2 });
        });
      });
      setTocItems(toc);
    };

    buildTOCFromStructure();
  }, [currentCourseStructure]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .section-heading');
      let current = '';

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
        }
      });

      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  const handleNavigation = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(content.codeExample);
      setCopiedCode(true);
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard.",
        variant: "destructive",
      });
    }
  };

  const scrollToHeading = (headingId: string) => {
    handleNavigation(headingId);
  };

  return (
    <div className="flex max-w-7xl mx-auto text-gray-900 dark:text-gray-100">
      <div className="p-4 sm:p-6 pt-6 max-w-full sm:max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-green-600" />
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900">
              {courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{content.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{content.description}</p>
        </div>

        <div className="mb-6">
          <Button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition" onClick={() => navigate('/')}> <ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Button>
        </div>

        <div className="space-y-8 pr-6">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <CardContent>
              {content.markdown && (
                <div className="prose prose-gray max-w-none pt-6 dark:prose-invert">
                  <ReactMarkdown 
                    components={{
                      h1: ({node, children, ...props}) => <h1 id={children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}>{children}</h1>,
                      h2: ({node, children, ...props}) => <h2 id={children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}>{children}</h2>,
                    }}
                  >{content.markdown}</ReactMarkdown>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="hidden xl:block w-72 p-6 pt-6">
        <div className="sticky top-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-400 mb-4">On This Page</h3>
          <nav className="space-y-1">
            {tocItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToHeading(item.id)}
                className={`w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${activeHeading === item.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 hover:text-gray-900'}`}
                style={{ paddingLeft: `${8 + (item.level - 1) * 12}px` }}
              >
                {item.title}
              </button>
            ))}
            {tocItems.length === 0 && (
              <p className="text-sm text-gray-500 italic px-2 py-1.5">
                No headings found in this content
              </p>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
