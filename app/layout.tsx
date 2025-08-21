import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ClerkThemeProvider from "@/components/ClerkThemeProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker AI App",
  description: "An application developed by Khumbo Klein Chilamwa for tracking expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider>
            <ClerkThemeProvider>
              <NavBar />
              {children}
              <Footer />
            </ClerkThemeProvider>
        </ThemeProvider>
        </body>
      </html>
    
  );
}
