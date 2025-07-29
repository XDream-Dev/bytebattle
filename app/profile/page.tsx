"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  User,
  BarChart3,
  Trophy,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

// Mock user data
const userData = {
  name: "Nabil Lemriki",
  email: "nabil.lemriki@gmail.com",
  joinDate: "Jan 2023",
  totalScore: 99850,
  quizzesTaken: 86,
  averageScore: 90.6,
  badges: [
    "Quiz CEO",
    "SEO Expert",
    "Full-Stack Master",
    "Perfect Score",
    "Speed Demon",
    "JavaScript Ninja",
    "Python Pro",
    "Java Guru",
    "C# Champion",
    "Prompt Engineer",
    "Database Wizard",
    "AI Enthusiast",
    "Web Developer",
  ],
  recentQuizzes: [
    { id: "1", category: "Science", score: 9, total: 10, date: "2023-03-01" },
    { id: "2", category: "History", score: 8, total: 10, date: "2023-02-28" },
    {
      id: "3",
      category: "Technology",
      score: 10,
      total: 10,
      date: "2023-02-25",
    },
    { id: "4", category: "Geography", score: 7, total: 10, date: "2023-02-20" },
  ],
  categoryPerformance: [
    { category: "Science", score: 92 },
    { category: "History", score: 88 },
    { category: "Technology", score: 95 },
    { category: "Geography", score: 78 },
    { category: "Entertainment", score: 82 },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">BYTEBATTLE</h1>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/categories" className="font-medium hover:text-primary">
              Categories
            </Link>
            <Link
              href="/leaderboard"
              className="font-medium hover:text-primary"
            >
              Leaderboard
            </Link>
            <Link href="/profile" className="font-medium text-primary">
              Profile
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Profile Header */}
            <div className="bg-card rounded-xl p-6 shadow-sm mb-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <p className="text-muted-foreground">{userData.email}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined {userData.joinDate}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Trophy className="h-3 w-3" />
                    {userData.totalScore.toLocaleString()} points
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <BarChart3 className="h-3 w-3" />
                    {userData.quizzesTaken} quizzes
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href="/quiz/new">
                  <Button>Start New Quiz</Button>
                </Link>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="flex border-b mb-8">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "overview"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "history"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("history")}
              >
                Quiz History
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "achievements"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("achievements")}
              >
                Achievements
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {userData.totalScore.toLocaleString()}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Quizzes Taken
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {userData.quizzesTaken}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Average Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {userData.averageScore}%
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Global Rank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">#42</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Category Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle>Category Performance</CardTitle>
                    <CardDescription>
                      Your average scores by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.categoryPerformance.map((category) => (
                        <div key={category.category}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                              {category.category}
                            </span>
                            <span className="text-sm font-medium">
                              {category.score}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: `${category.score}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Quizzes */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Quizzes</CardTitle>
                      <Link href="/profile/history">
                        <Button variant="ghost" size="sm" className="gap-1">
                          View All
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.recentQuizzes.map((quiz) => (
                        <div
                          key={quiz.id}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{quiz.category}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(quiz.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">
                              {quiz.score}/{quiz.total}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {Math.round((quiz.score / quiz.total) * 100)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>
                      Badges you've earned through quizzing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {userData.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "history" && (
              <Card>
                <CardHeader>
                  <CardTitle>Quiz History</CardTitle>
                  <CardDescription>All quizzes you've taken</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...userData.recentQuizzes, ...userData.recentQuizzes].map(
                      (quiz, index) => (
                        <div
                          key={`${quiz.id}-${index}`}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{quiz.category}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(quiz.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-bold">
                                {quiz.score}/{quiz.total}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {Math.round((quiz.score / quiz.total) * 100)}%
                              </p>
                            </div>
                            <Link href={`/quiz/results/${quiz.id}`}>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "achievements" && (
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Earned Badges</CardTitle>
                    <CardDescription>
                      Achievements you've unlocked
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {userData.badges.map((badge) => (
                        <div
                          key={badge}
                          className="bg-muted/50 rounded-lg p-4 text-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <p className="font-medium">{badge}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Earned on Feb 28, 2023
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Available Badges</CardTitle>
                    <CardDescription>Achievements to unlock</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Geography Pro",
                        "Music Maestro",
                        "Entertainment Guru",
                        "100 Quizzes",
                      ].map((badge) => (
                        <div
                          key={badge}
                          className="bg-muted/50 rounded-lg p-4 text-center opacity-60"
                        >
                          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                            <Trophy className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="font-medium">{badge}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Not yet earned
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BYTEBATTLE</span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} XDream-Dev All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
