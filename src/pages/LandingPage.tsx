import React from 'react';
import { BookOpen, Users, Award, ArrowRight, Code, Brain, Database, Link, Star, TrendingUp, BarChart3, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import "../stylesheets/LandingPage.css"
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '@/Context/ThemeContext';
const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites and web applications.",
    icon: Code,
    color: "bg-blue-500",
    // students: '15,432',
    // lessons: 45,
    // duration: '12 weeks',
    level: "Beginner to Advanced",
    rating: 4.8,
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Master AI technologies including ChatGPT, DALL-E, and learn to build AI-powered applications.",
    icon: Brain,
    color: "bg-purple-500",
    // students: '8,721',
    // lessons: 32,
    // duration: '8 weeks',
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    description:
      "Build strong programming foundations with essential data structures and algorithmic thinking.",
    icon: Database,
    color: "bg-green-500",
    // students: '12,156',
    // lessons: 38,
    // duration: '10 weeks',
    level: "Beginner to Intermediate",
    rating: 4.7,
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description:
      "Explore cryptocurrency, smart contracts, and decentralized applications on various blockchain platforms.",
    icon: Link,
    color: "bg-orange-500",
    // students: '6,543',
    // lessons: 28,
    // duration: '6 weeks',
    level: "Advanced",
    rating: 4.6,
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description:
      "Hands-on coding exercises and real-world projects that reinforce your learning.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Community",
    description:
      "Connect with industry professionals and fellow learners in our vibrant community.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Earn certificates recognized by top tech companies and boost your career.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Track your progress and see measurable improvements in your technical skills.",
    gradient: "from-orange-500 to-red-500",
  },
];

export const LandingPage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  const handleStartLearning = () => {
    navigate("/course/web-development");
  };

  const handleViewCourses = () => {
    document
      .getElementById("courses-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <nav className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 px-4 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2.5 rounded-xl">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                LearnHub
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Master Technology Skills
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full border border-gray-300 dark:border-gray-600"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
            </Button>
            <Button variant="ghost" onClick={handleViewCourses}>Courses</Button>
            <RouterLink to="/cs-fundamentals">
              <Button variant="ghost">
                CS Fundamentals
              </Button>
            </RouterLink>
            {/* DSA Sheet */}
            <button
              onClick={() => navigate('/dsa-sheet')}
              className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              DSA Sheet
            </button>

            {/* Analytics */}
            <button
              onClick={() => navigate('/analytics')}
              className="flex flex-row items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 transition-all duration-200"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </button>

            {/* Start Learning Button */}
            <Button
              onClick={handleStartLearning}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              Start Learning
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => navigate('/analytics')}
              className="flex items-center space-x-1 text-purple-600 px-2 py-1"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm">Analytics</span>
            </button>
            <Button
              size="sm"
              onClick={handleStartLearning}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Start
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge className="hover:text-white hover:bg-green-700 hover:scale-105 transition-transform duration-500 mb-6 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700 px-4 py-2 text-base font-medium">
              🚀 Launch Your Tech Career in 30 Days
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Master <span className="text-green-700 dark:text-green-400">DSA</span> and{" "}
              <span className="text-green-700 dark:text-green-400">Full Stack Development</span>
              <br />
              in Just <span className="text-green-700 dark:text-green-400">30 Days</span>
            </h1>
            {/* Typewriter animation below heading */}
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              <Typewriter
                words={[
                  "Explore Courses",
                  "Master Web Dev, GenAI, DSA, Blockchain etc.",
                  "Earn Certificates Recognized by Tech Leaders",
                  "Upskill with Industry-Ready Courses",
                  "Learn by Building Real-World Projects",
                  "Code Connect & Grow with LearnHub",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Zero fluff. One roadmap. Your path to becoming a complete
              developer starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                onClick={handleStartLearning}
                className="bg-green-700 hover:bg-green-800 text-lg px-8 py-6 rounded-xl font-semibold flex items-center gap-2"
              >
                🚀 Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleViewCourses}
                className="text-lg px-8 py-6 rounded-xl border-2 font-semibold flex items-center gap-2 dark:border-gray-500"
              >
                <Code className="h-5 w-5" /> See Roadmap
              </Button>
            </div>
          </div>
          {/* Right: Code Card */}
          <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 tilt-on-hover">
            <div className=" bg-[#181f2a] rounded-2xl shadow-2xl p-0 w-full max-w-md text-left relative border border-gray-800 ">
              {/* VS Code style top bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#232b3a] rounded-t-2xl border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="ml-2 text-xs text-gray-400 font-mono">
                  VS Code + LeetCode
                </span>
              </div>
              {/* Code content */}
              <div className="px-4 pt-4 pb-2">
                <pre className="font-mono text-green-400 text-sm leading-relaxed mb-2 bg-transparent px-2 py-1 whitespace-pre-wrap break-words">
                  {`// Day 1: Binary Search + React Setup
function binarySearch(arr, target) {
  return recursiveSearch(arr, 0, arr.length-1, target);
}`}
                </pre>
                <span className="block text-yellow-400 text-xs font-mono mb-2">
                  // Building TodoApp with optimized search...
                </span>
              </div>
              {/* Project deployed banner */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-b-2xl px-4 py-3 flex items-center gap-2 border-t border-gray-700">
                <span className="text-white font-semibold text-base">
                  ✅ Project Deployed
                </span>
                <br />
                <span className="text-white text-xs">
                  Portfolio + 150 DSA Problems Solved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose LearnHub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience a new way of learning with our innovative platform
              designed for modern developers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive selection of technology courses
              designed by industry experts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg min-h-[300px] flex flex-col justify-between align-center bg-white dark:bg-gray-800"
                onClick={() => handleCourseClick(course.id)}
              >
                {/* Grouping CardHeader and CardContent inside one container to separate them visually and structurally from the Button section below.*/}
                <div className="transition-all">
                  <CardHeader className="pb-4">
                    <div
                      className={`${course.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4`}
                    >
                      <course.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1 text-gray-700 dark:text-gray-200">
                          {course.rating}
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-300 dark:text-gray-900">
                        {course.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          {/* <Users className="h-4 w-4 mr-1" />
                        {course.students} */}
                        </span>
                        <span className="flex items-center">
                          {/* <Clock className="h-4 w-4 mr-1" />
                        {course.duration} */}
                        </span>
                      </div>
                      {/* <div className="flex justify-between">
                      <span>{course.lessons} lessons</span>
                    </div> */}
                    </div>
                  </CardContent>
                </div>

                <div className="p-4 pt-0">
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white dark:from-green-700 dark:to-blue-700 dark:hover:from-green-800 dark:hover:to-blue-800 mt-4">
                    Start Course <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CS Fundamentals Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CS Fundamentals</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              All the core Computer Science subjects you need for interviews and real-world engineering: OS, DBMS, CN, OOP, and more.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-blue-700 to-teal-600 text-white w-80 dark:from-blue-800 dark:to-teal-700">
              <CardHeader className="pb-4">
                <div className="bg-blue-700 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">CS Fundamentals</CardTitle>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge variant="secondary" className="text-xs bg-white text-blue-700 dark:bg-gray-200 dark:text-blue-800">
                    Core Subjects
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white text-sm leading-relaxed">
                  OS, DBMS, CN, OOP and more. All the core subjects you need for interviews and real-world engineering.
                </p>
                <RouterLink to="/cs-fundamentals">
                  <Button className="w-full bg-white text-blue-700 font-semibold rounded-lg mt-4 hover:bg-blue-100 dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-blue-800 transition">
                    Explore CS Fundamentals <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </RouterLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of successful learners who have accelerated their
            careers with LearnHub's comprehensive technology courses.
          </p>
          <Button
            size="lg"
            onClick={handleStartLearning}
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Start Learning Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2.5 rounded-xl">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">LearnHub</span>
                <p className="text-gray-400 text-sm">
                  Master Technology Skills
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                &copy; 2025 LearnHub. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Building the future, one developer at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};