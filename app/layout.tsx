import Head from "next/head";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BYTEBATTLE - AI-Powered Quiz App",
  description:
    "Challenge yourself with AI-generated quizzes across various categories created by XDream-Dev",
  generator: "XDream-Dev",
  // You can keep or remove icons here if you want:
  // icons: { icon: "/XDream1.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/XDream1.png" type="image/png" />
        {/* You can add fallback ico like this:
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
