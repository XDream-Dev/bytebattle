"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Trophy, BarChart3, Menu, X } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b bg-background/80 backdrop-blur transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-2xl font-bold text-primary">BYTEBATTLE</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/categories", label: "Languages" },
              { href: "/leaderboard", label: "Leaderboard" },
              { href: "/profile", label: "Profile" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative hover:text-primary transition"
              >
                {label}
                <span
                  className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-primary
              transition-all duration-300 ease-in-out
              hover:w-full
            "
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex gap-2">
            <Link href="/login" passHref>
              <Button variant="outline" as="a">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col gap-3 font-medium">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/categories"
                onClick={() => setMobileOpen(false)}
                className="hover:text-primary"
              >
                Languages
              </Link>
              <Link
                href="/leaderboard"
                onClick={() => setMobileOpen(false)}
                className="hover:text-primary"
              >
                Leaderboard
              </Link>
              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="hover:text-primary"
              >
                Profile
              </Link>
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className="relative py-16 md:py-32 overflow-hidden"
        >
          {/* Falling Stars Background */}
          <div className="absolute inset-0 -z-20">
            {/* stars unchanged */}
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0.5s" }}
            ></div>
            {/* ... other stars ... */}
          </div>

          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
          <div className="absolute inset-0 backdrop-blur-[1px] -z-10" />

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-12">
            {/* Text content */}
            <div className="w-full md:w-1/2 space-y-6 relative z-10">
              <h1
                className={`text-3xl sm:text-4xl md:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                  visibleSections.has("hero")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Master Programming with{" "}
                <span className="text-primary">AI-Powered</span> Quizzes
              </h1>
              <p
                className={`text-base sm:text-lg text-muted-foreground transition-all duration-1000 ease-out delay-200 ${
                  visibleSections.has("hero")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                BYTEBATTLE generates fresh, challenging questions across various
                programming languages, adapting to your skill level for a
                personalized learning experience.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 ease-out delay-400 ${
                  visibleSections.has("hero")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <Link href="/quiz/new" passHref>
                  <Button
                    size="lg"
                    className="gap-2 backdrop-blur-sm bg-primary/90 hover:bg-primary/80 border border-white/20 w-full sm:w-auto"
                    onClick={() => console.log("Start Quiz button clicked")}
                  >
                    <Zap className="h-5 w-5" />
                    Start Coding Quiz
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 w-full sm:w-auto"
                  >
                    Explore Languages
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image/Visual content */}
            <div
              className={`w-full md:w-1/2 relative z-10 transition-all duration-1200 ease-out delay-300 ${
                visibleSections.has("hero")
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
            >
              <div className="relative w-full max-w-lg h-[300px] sm:h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 shadow-2xl mx-auto">
                {/* floating boxes and brain icon unchanged */}
                <div
                  className={`absolute top-10 left-10 w-36 h-36 bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-4 rotate-6 animate-float border border-white/30 transition-all duration-800 ease-out delay-600 ${
                    visibleSections.has("hero")
                      ? "opacity-100 translate-y-0 rotate-6"
                      : "opacity-0 translate-y-4 rotate-12"
                  }`}
                >
                  {/* content */}
                </div>
                <div
                  className={`absolute bottom-10 right-10 w-44 h-44 bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-4 -rotate-3 animate-bounce-slow border border-white/30 transition-all duration-800 ease-out delay-800 ${
                    visibleSections.has("hero")
                      ? "opacity-100 translate-y-0 -rotate-3"
                      : "opacity-0 translate-y-4 -rotate-6"
                  }`}
                >
                  {/* content */}
                </div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-white/30 backdrop-blur-lg rounded-full shadow-2xl flex items-center justify-center border border-white/40 transition-all duration-1000 ease-out delay-1000 ${
                    visibleSections.has("hero")
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  <Brain className="h-16 w-16 text-primary drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Language Carousel Section */}
        <section className="py-12 bg-background" data-animate>
          <div className="container mx-auto px-4">
            <div className="w-full overflow-hidden">
              {/* Animation Wrapper */}
              <div
                className="flex gap-10 whitespace-nowrap text-2xl md:text-3xl font-semibold text-muted-foreground"
                style={{
                  animation: "scrollLeft 30s linear infinite",
                  display: "inline-flex",
                }}
              >
                {[
                  "JavaScript",
                  "Python",
                  "Java",
                  "C#",
                  "C++",
                  "Ruby",
                  "Go",
                  "TypeScript",
                  "JavaScript",
                  "Python",
                  "Java",
                  "C#",
                  "C++",
                  "Ruby",
                  "Go",
                  "TypeScript",
                ].map((lang, i) => (
                  <div
                    key={i}
                    className="min-w-max px-4 py-2 bg-card rounded-lg shadow-md hover:scale-105 transition-transform"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inline style tag with keyframes */}
          <style jsx>{`
            @keyframes scrollLeft {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section
          id="features"
          data-animate
          className={`py-20 relative overflow-hidden transition-all duration-1000 ease-out delay-200 ${
            visibleSections.has("features")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-accent/10"></div>

          {/* Floating Stars for Features Section */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-20 left-1/4 w-0.5 h-0.5 bg-primary rounded-full animate-pulse opacity-60"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-40 right-1/3 w-1 h-1 bg-accent rounded-full animate-bounce opacity-40"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-60 right-1/4 w-1 h-1 bg-primary rounded-full animate-bounce opacity-50"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute top-60 left-1/2 w-0.5 h-0.5 bg-accent rounded-full animate-pulse opacity-80"
              style={{ animationDelay: "1.8s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`text-center mb-16 transition-all duration-800 ease-out delay-300 ${
                visibleSections.has("features")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                BYTEBATTLE combines cutting-edge AI with engaging gameplay to
                create a unique coding quiz experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI-Generated Questions Card */}
              <div
                className={`group relative transition-all duration-700 ease-out delay-500 ${
                  visibleSections.has("features")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-card/80 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-white/40 transform group-hover:-translate-y-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                    <Brain className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    AI-Generated Questions
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Our AI creates fresh, original coding questions that adapt
                    to your skill level and learning pace
                  </p>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Personalized Learning Card */}
              <div
                className={`group relative transition-all duration-700 ease-out delay-700 ${
                  visibleSections.has("features")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="relative bg-card/80 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-white/40 transform group-hover:-translate-y-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-accent/30">
                    <BarChart3 className="h-6 w-6 text-accent group-hover:text-accent/80 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    Personalized Learning
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Track your coding progress and receive personalized
                    recommendations based on your performance
                  </p>
                  <div
                    className="absolute top-2 right-2 w-2 h-2 bg-accent/60 rounded-full animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </div>
              </div>

              {/* Competitive Leaderboards Card */}
              <div
                className={`group relative transition-all duration-700 ease-out delay-900 ${
                  visibleSections.has("features")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative bg-card/80 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-white/40 transform group-hover:-translate-y-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                    <Trophy className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Competitive Leaderboards
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Compete with fellow coders and climb the global and
                    language-specific leaderboards
                  </p>
                  <div
                    className="absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full animate-ping"
                    style={{ animationDelay: "0.7s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Additional Visual Elements */}
            <div
              className={`flex justify-center mt-16 transition-all duration-800 ease-out delay-1100 ${
                visibleSections.has("features")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 animate-pulse"></div>
                <div className="relative bg-card/60 backdrop-blur-md rounded-full px-8 py-3 border border-white/30">
                  <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ✨ Powered by Advanced AI Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Animated Background */}
        <section
          id="cta"
          data-animate
          className={`relative overflow-hidden py-20 text-primary-foreground transition-all duration-1000 ease-out ${
            visibleSections.has("cta")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200" />

          <div className="container mx-auto px-4 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-800 ease-out delay-200 ${
                visibleSections.has("cta")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Ready to Level Up Your Coding Skills?
            </h2>
            <p
              className={`text-xl mb-8 max-w-2xl mx-auto opacity-90 transition-all duration-800 ease-out delay-400 ${
                visibleSections.has("cta")
                  ? "opacity-90 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Start your first coding quiz now and discover the power of
              AI-generated learning
            </p>
            <div
              className={`transition-all duration-800 ease-out delay-600 ${
                visibleSections.has("cta")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <Link href="/quiz/new">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Zap className="h-5 w-5" />
                  Start Coding Quiz Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Tailwind-style Custom CSS */}
          <style jsx>{`
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradientShift 10s ease infinite;
            }

            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BYTEBATTLE</span>
            </div>
            <div className="flex flex-wrap gap-8 text-muted-foreground">
              <a
                href="mailto:nabil.lemriki@gmail.com"
                className="hover:text-primary transition"
              >
                nabil.lemriki@gmail.com
              </a>
              <a
                href="tel:+212637101785"
                className="hover:text-primary transition"
              >
                +212 6 37 10 17 85
              </a>
              <a
                href="https://www.linkedin.com/in/nabil-lemriki"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/XDream-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} BYTEBATTLE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
