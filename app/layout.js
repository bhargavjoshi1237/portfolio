import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhargav Joshi — Full-Stack Developer (Node & Laravel) | AI / LLM Systems",
  description:
    "Bhargav Joshi — Full-Stack Developer across the Node.js and PHP/Laravel ecosystems, building high-performance web apps and AI/LLM systems (RAG, self-hosted inference, custom agents). Based in Vadodara, Gujarat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`overflow-x-hidden max-w-screen min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
