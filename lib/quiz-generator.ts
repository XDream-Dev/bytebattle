import type { Question } from "./types"

// Mock data for demo purposes
const mockQuestions: Record<string, Question[]> = {
  science: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      correctAnswer: "Au",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Platinum", "Diamond", "Titanium"],
      correctAnswer: "Diamond",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Skin", "Brain"],
      correctAnswer: "Skin",
    },
    {
      question: "Which of these is NOT a state of matter?",
      options: ["Solid", "Liquid", "Gas", "Energy"],
      correctAnswer: "Energy",
    },
  ],
  technology: [
    {
      question: "Who is the co-founder of Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
      correctAnswer: "Bill Gates",
    },
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Processor Utility",
        "Central Program Unit",
      ],
      correctAnswer: "Central Processing Unit",
    },
    {
      question: "Which programming language is known as the 'mother of all languages'?",
      options: ["Java", "C", "Python", "FORTRAN"],
      correctAnswer: "C",
    },
    {
      question: "What year was the first iPhone released?",
      options: ["2005", "2007", "2009", "2010"],
      correctAnswer: "2007",
    },
    {
      question: "Which company developed the first commercially available quantum computer?",
      options: ["IBM", "Google", "Microsoft", "D-Wave"],
      correctAnswer: "D-Wave",
    },
  ],
  history: [
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1950"],
      correctAnswer: "1945",
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
      correctAnswer: "George Washington",
    },
    {
      question: "The ancient city of Rome was built on how many hills?",
      options: ["Five", "Six", "Seven", "Eight"],
      correctAnswer: "Seven",
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Byzantine Empire"],
      correctAnswer: "Mongol Empire",
    },
    {
      question: "The Renaissance period began in which country?",
      options: ["France", "England", "Italy", "Germany"],
      correctAnswer: "Italy",
    },
  ],
  general: [
    {
      question: "Which of these is NOT a primary color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Green",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra",
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "6",
    },
    {
      question: "Which of these animals is NOT a mammal?",
      options: ["Dolphin", "Bat", "Whale", "Penguin"],
      correctAnswer: "Penguin",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
    },
  ],
  javascript: [
    {
      question: "What is the output of console.log(typeof NaN)?",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      correctAnswer: "'number'",
    },
    {
      question: "Which method is used to add one or more elements to the end of an array?",
      options: ["push()", "pop()", "unshift()", "shift()"],
      correctAnswer: "push()",
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: [
        "Checks for equality",
        "Checks for equality without type coercion",
        "Assigns a value",
        "Checks if a variable is defined",
      ],
      correctAnswer: "Checks for equality without type coercion",
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A way to secure your code",
        "A function with access to variables in its outer scope",
        "A method to close a browser window",
        "A type of loop",
      ],
      correctAnswer: "A function with access to variables in its outer scope",
    },
    {
      question: "Which of these is NOT a valid way to declare a variable in JavaScript?",
      options: ["let x = 5;", "const y = 10;", "var z = 15;", "int w = 20;"],
      correctAnswer: "int w = 20;",
    },
  ],
  python: [
    {
      question: "What is the correct way to create a function in Python?",
      options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
      correctAnswer: "def myFunc():",
    },
    {
      question: "Which of the following is used to define a block of code in Python?",
      options: ["Curly braces {}", "Parentheses ()", "Indentation", "Square brackets []"],
      correctAnswer: "Indentation",
    },
    {
      question: "What does the 'len()' function do in Python?",
      options: ["Returns the length of an object", "Rounds a number", "Creates a list", "Defines a new variable"],
      correctAnswer: "Returns the length of an object",
    },
    {
      question: "Which of these is NOT a core data type in Python?",
      options: ["Lists", "Dictionary", "Tuples", "Array"],
      correctAnswer: "Array",
    },
    {
      question: "What is the output of 'print(3 * '7')'?",
      options: ["21", "777", "14", "Error"],
      correctAnswer: "777",
    },
  ],
  java: [
    {
      question: "Which keyword is used to define a constant in Java?",
      options: ["const", "final", "static", "var"],
      correctAnswer: "final",
    },
    {
      question: "What is the parent class of all classes in Java?",
      options: ["Main", "Object", "Super", "Parent"],
      correctAnswer: "Object",
    },
    {
      question: "Which of these is NOT a valid access modifier in Java?",
      options: ["public", "private", "protected", "friend"],
      correctAnswer: "friend",
    },
    {
      question: "What does JVM stand for?",
      options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Monitor", "Java Valid Memory"],
      correctAnswer: "Java Virtual Machine",
    },
    {
      question: "Which of these is used to handle exceptions in Java?",
      options: ["try-catch", "if-else", "for-loop", "switch-case"],
      correctAnswer: "try-catch",
    },
  ],
}

// Function to generate questions using AI
export async function generateQuestions(category: string, difficulty: string, count: number): Promise<Question[]> {
  // For demo purposes, return mock data
  // In a real implementation, we would use the AI SDK to generate questions

  try {
    // This is a placeholder for the AI-generated questions
    // In a real implementation, we would use the AI SDK to generate questions

    // For now, return mock data based on the category
    const availableQuestions = mockQuestions[category] || mockQuestions.javascript

    // Shuffle and return the requested number of questions
    return shuffleArray(availableQuestions).slice(0, count)

    // Example of how to use the AI SDK to generate questions:
    /*
    const prompt = `Generate ${count} multiple-choice quiz questions about ${category} programming language at ${difficulty} difficulty level. 
    Each question should have 4 options with only one correct answer. 
    Format the response as a JSON array of objects, each with 'question', 'options' (array of 4 strings), and 'correctAnswer' (string matching one of the options).`;
    
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    });
    
    return JSON.parse(text) as Question[];
    */
  } catch (error) {
    console.error("Error generating questions:", error)
    // Fallback to mock data
    const availableQuestions = mockQuestions[category] || mockQuestions.javascript
    return shuffleArray(availableQuestions).slice(0, count)
  }
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}
