import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "alhilalfathi — Fullstack Developer",
  description:
    "Fullstack Developer specializing in scalable backend systems with Go and modern web applications with React/Next.js.",
  keywords: [
    "Fullstack Developer",
    "Go Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
  ],
  authors: [{ name: "Hilal" }],
  openGraph: {
    title: "alhilalfathi — Fullstack Developer",
    description:
      "Building scalable backend systems with Go and crafting modern web apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "alhilalfathi — Fullstack Developer",
    description:
      "Building scalable backend systems with Go and crafting modern web apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
