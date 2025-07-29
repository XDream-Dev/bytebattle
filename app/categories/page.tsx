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
  Code,
  Globe,
  Atom,
  Music,
  Film,
  BookOpen,
  Dumbbell,
  Building,
} from "lucide-react";

const categories = [
  {
    id: "javascript",
    name: "JavaScript",
    code: "JS",
    description:
      "Dynamic, prototype-based language primarily used for interactive web development. Runs on the V8 engine.",
    icon: Code,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
    questionCount: 500,
  },
  {
    id: "python",
    name: "Python",
    code: "PY",
    description:
      "Interpreted, high-level language known for its readability and wide use in data science, scripting, and automation.",
    icon: Brain,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
    questionCount: 480,
  },
  {
    id: "java",
    name: "Java",
    code: "JV",
    description:
      "Object-oriented language running on the JVM with strong typing and cross-platform bytecode compilation.",
    icon: BookOpen,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 470,
  },
  {
    id: "csharp",
    name: "C#",
    code: "C#",
    description:
      "Multi-paradigm language developed by Microsoft for .NET with strong support for object-oriented programming.",
    icon: Dumbbell,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 460,
  },
  {
    id: "cpp",
    name: "C++",
    code: "C++",
    description:
      "Compiled language with low-level memory access and object-oriented features. Often used in systems and game development.",
    icon: Atom,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 450,
  },
  {
    id: "ruby",
    name: "Ruby",
    code: "RB",
    description:
      "Dynamic, object-oriented scripting language focused on simplicity and productivity. Known for Rails framework.",
    icon: Building,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 420,
  },
  {
    id: "go",
    name: "Go",
    code: "GO",
    description:
      "Statically typed, compiled language designed at Google. Known for concurrency and performance in backend systems.",
    icon: Globe,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
    questionCount: 400,
  },
  {
    id: "typescript",
    name: "TypeScript",
    code: "TS",
    description:
      "Typed superset of JavaScript that compiles to plain JS. Enhances developer experience with static typing.",
    icon: Code,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 490,
  },
];

export default function CategoriesPage() {
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
            <Link href="/categories" className="font-medium text-primary">
              Categories
            </Link>
            <Link
              href="/leaderboard"
              className="font-medium hover:text-primary"
            >
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
            <h1 className="text-4xl font-bold mb-4">Quiz Categories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of categories to test your knowledge and
              challenge yourself with AI-generated questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardHeader className={`${category.color}`}>
                  <div className="flex justify-between items-start">
                    <category.icon
                      className={`h-8 w-8 ${category.iconColor}`}
                    />
                    <Badge variant="secondary">
                      {category.questionCount}+ Questions
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{category.name}</CardTitle>
                  <CardDescription className="text-foreground/70">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Easy</Badge>
                    <Badge variant="outline">Medium</Badge>
                    <Badge variant="outline">Hard</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/quiz/new?category=${category.id}`}
                    className="w-full"
                  >
                    <Button className="w-full">Start Quiz</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
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
