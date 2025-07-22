import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
} from "recharts"
import { Brain, TrendingUp, Target, Award, Clock, BookOpen } from 'lucide-react'

const performanceData = [
  { date: "Jan 15", score: 75, timeSpent: 120 },
  { date: "Jan 16", score: 82, timeSpent: 90 },
  { date: "Jan 17", score: 78, timeSpent: 150 },
  { date: "Jan 18", score: 88, timeSpent: 105 },
  { date: "Jan 19", score: 92, timeSpent: 135 },
  { date: "Jan 20", score: 85, timeSpent: 80 },
  { date: "Jan 21", score: 95, timeSpent: 110 },
]

const skillsData = [
  { skill: "JavaScript", progress: 85, color: "#f59e0b" },
  { skill: "React", progress: 78, color: "#3b82f6" },
  { skill: "Node.js", progress: 65, color: "#10b981" },
  { skill: "DSA", progress: 72, color: "#8b5cf6" },
  { skill: "System Design", progress: 45, color: "#ef4444" },
]

const learningStyleData = [
  { name: "Visual", value: 40, color: "#0088FE" },
  { name: "Practice", value: 35, color: "#00C49F" },
  { name: "Reading", value: 25, color: "#FFBB28" },
]

export default function LearningAnalytics() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const runAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Brain className="h-8 w-8 text-green-600" />
              Learning Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Track your progress and optimize your learning journey</p>
          </div>
          <Button onClick={runAnalysis} disabled={isAnalyzing} className="bg-green-600 hover:bg-green-700">
            {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
              <Progress value={78} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Learning Streak</p>
                  <p className="text-2xl font-bold">12 Days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Problems Solved</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-500" />
              </div>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Study Hours</p>
                  <p className="text-2xl font-bold">48h</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Learning Style */}
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
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {learningStyleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
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
                  <div className="flex justify-between items-center">
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
              <Award className="h-5 w-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Focus Area</h4>
                <p className="text-sm text-blue-700">
                  Strengthen your System Design skills - it's your biggest growth opportunity
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Keep It Up!</h4>
                <p className="text-sm text-green-700">
                  Your JavaScript skills are excellent. Consider advanced patterns next.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Study Tip</h4>
                <p className="text-sm text-yellow-700">
                  You learn best through visual content. Try more diagram-based learning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}