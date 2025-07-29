export interface Question {
  question: string
  options: string[]
  correctAnswer: string
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
  score: number
  quizzesTaken: number
}

export interface QuizResult {
  id: string
  userId: string
  category: string
  difficulty: string
  score: number
  totalQuestions: number
  timeSpent: number
  date: Date
}
