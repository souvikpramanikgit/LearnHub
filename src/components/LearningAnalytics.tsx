import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Brain,
  TrendingUp,
  Target,
  Award,
  Clock,
  BookOpen,
} from "lucide-react";
import { TopNav } from "./TopNav";

const performanceData = [
  { date: "Jan 15", score: 75, timeSpent: 120 },
  { date: "Jan 16", score: 82, timeSpent: 90 },
  { date: "Jan 17", score: 78, timeSpent: 150 },
  { date: "Jan 18", score: 88, timeSpent: 105 },
  { date: "Jan 19", score: 92, timeSpent: 135 },
  { date: "Jan 20", score: 85, timeSpent: 80 },
  { date: "Jan 21", score: 95, timeSpent: 110 },
];

const skillsData = [
  { skill: "JavaScript", progress: 85, color: "#f59e0b" },
  { skill: "React", progress: 78, color: "#3b82f6" },
  { skill: "Node.js", progress: 65, color: "#10b981" },
  { skill: "DSA", progress: 72, color: "#8b5cf6" },
  { skill: "System Design", progress: 45, color: "#ef4444" },
];

const learningStyleData = [
  { name: "Visual", value: 40, color: "#0088FE" },
  { name: "Practice", value: 35, color: "#00C49F" },
  { name: "Reading", value: 25, color: "#FFBB28" },
];

export default function LearningAnalytics() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <>
  <TopNav onMenuClick={() => {}} sidebarOpen={false} />
  
  <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div className="mx-auto space-y-6 max-w-7xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <Brain className="w-8 h-8 text-green-600" />
            Learning Analytics Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track your progress and optimize your learning journey
          </p>
        </div>
        <Button
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Learning Streak</p>
                <p className="text-2xl font-bold">12 Days</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Problems Solved</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-500" />
            </div>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Study Hours</p>
                <p className="text-2xl font-bold">48h</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="date" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#10b981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Style Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={learningStyleData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {learningStyleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Skills Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Development Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.skill}</span>
                  <Badge variant="outline">{skill.progress}%</Badge>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900">
              <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                Focus Area
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Strengthen your System Design skills - it's your biggest
                growth opportunity
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900">
              <h4 className="mb-2 font-semibold text-green-800 dark:text-green-200">
                Keep It Up!
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Your JavaScript skills are excellent. Consider advanced
                patterns next.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900">
              <h4 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
                Study Tip
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                You learn best through visual content. Try more
                diagram-based learning.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</>

  );
}
