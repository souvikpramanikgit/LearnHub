import React, { useState } from 'react';
import { BookOpen, Code, ArrowRight, ArrowLeft, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  webDevelopmentContent, webDevelopmentStructure,
  generativeAIContent, generativeAIStructure,
  dataStructuresContent, dataStructuresStructure,
  blockchainContent, blockchainStructure
} from '@/data';

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
  const { toast } = useToast();
  
  const courseContent = contentData[courseId] || contentData['web-development'];
  const content = courseContent[activeSection] || courseContent[Object.keys(courseContent)[0]];
  
  // Get all sections in order for navigation
  const currentCourseStructure = courseStructure[courseId] || courseStructure['web-development'];
  const allSections = currentCourseStructure.flatMap((module: any) => module.sections);
  const currentIndex = allSections.findIndex((section: any) => section.id === activeSection);
  
  const previousSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="h-6 w-6 text-green-600" />
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.title}</h1>
        <p className="text-lg text-gray-600">{content.description}</p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <Tabs defaultValue="learn" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span>Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {content.content.overview.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {content.content.objectives && (
              <Card>
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.content.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-green-600" />
                  <span>Code Example</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Example Code</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyCode}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedCode ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{content.codeExample}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => previousSection && handleNavigation(previousSection.id)}
            disabled={!previousSection}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Continue Learning</p>
            <p className="font-medium text-gray-900">
              {nextSection ? nextSection.title : 'Course Complete!'}
            </p>
          </div>
          
          <Button 
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
            onClick={() => nextSection && handleNavigation(nextSection.id)}
            disabled={!nextSection}
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
