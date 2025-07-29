import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Trophy, Medal, Award } from "lucide-react";

// Mock data for leaderboard
const leaderboardData = [
  {
    id: "1",
    name: "Nabil Lemriki",
    score: 9850,
    quizzesTaken: 42,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "XDream-Dev",
    score: 8720,
    quizzesTaken: 38,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "XDream1",
    score: 8450,
    quizzesTaken: 35,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Achraf Tekken",
    score: 7980,
    quizzesTaken: 31,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Nadia Adr",
    score: 7650,
    quizzesTaken: 29,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Aymane Bou",
    score: 7320,
    quizzesTaken: 27,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "7",
    name: "Souad Chachai",
    score: 6890,
    quizzesTaken: 25,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    name: "Abd-Elillah",
    score: 6540,
    quizzesTaken: 23,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "9",
    name: "Ralli007",
    score: 6210,
    quizzesTaken: 21,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "10",
    name: "Noooooob",
    score: 5980,
    quizzesTaken: 19,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

// Mock data for category leaders
const categoryLeaders = [
  { category: "Science", name: "Alex Johnson", score: 2450 },
  { category: "Technology", name: "Jamie Smith", score: 2180 },
  { category: "History", name: "Taylor Brown", score: 1950 },
  { category: "Geography", name: "Jordan Wilson", score: 1820 },
];

export default function LeaderboardPage() {
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
            <Link href="/leaderboard" className="font-medium text-primary">
              Leaderboard
            </Link>
            <Link href="/profile" className="font-medium hover:text-primary">
              Profile
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how you stack up against other BYTEBATTLE players from around
              the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Top 3 Players */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {leaderboardData.slice(0, 3).map((player, index) => (
                <Card
                  key={player.id}
                  className={`overflow-hidden ${
                    index === 0
                      ? "border-yellow-400 border-2"
                      : index === 1
                      ? "border-gray-400 border-2"
                      : "border-amber-700 border-2"
                  }`}
                >
                  <div
                    className={`h-2 ${
                      index === 0
                        ? "bg-yellow-400"
                        : index === 1
                        ? "bg-gray-400"
                        : "bg-amber-700"
                    }`}
                  ></div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-600"
                          : index === 1
                          ? "bg-gray-100 text-gray-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {index === 0 ? (
                        <Trophy className="h-6 w-6" />
                      ) : index === 1 ? (
                        <Medal className="h-6 w-6" />
                      ) : (
                        <Award className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{player.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Rank #{index + 1}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Score</p>
                        <p className="text-2xl font-bold">
                          {player.score.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Quizzes</p>
                        <p className="text-2xl font-bold">
                          {player.quizzesTaken}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Leaderboard */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Global Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboardData.map((player, index) => (
                      <div
                        key={player.id}
                        className={`flex items-center gap-4 p-3 rounded-lg ${
                          index < 3 ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="w-8 text-center font-bold text-muted-foreground">
                          #{index + 1}
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={player.avatar || "/placeholder.svg"}
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{player.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {player.quizzesTaken} quizzes
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">
                            {player.score.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            points
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Category Leaders */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Category Champions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryLeaders.map((leader) => (
                      <div
                        key={leader.category}
                        className="p-3 rounded-lg bg-muted/50"
                      >
                        <p className="text-sm text-muted-foreground">
                          {leader.category}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="font-medium">{leader.name}</p>
                          <p className="font-bold">
                            {leader.score.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Your Ranking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6">
                    <p className="text-muted-foreground mb-4">
                      Sign in to see your ranking
                    </p>
                    <Link href="/login">
                      <Button>Login</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
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
