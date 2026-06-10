import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mikemaeda.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mike Maeda — Computer Science & Data Analytics",
  description:
    "Mike Maeda is a Computer Science & Data Analytics student at Alfred University building data-backed software, full-stack apps, and AI/ML research. Seeking software engineering internships.",
  keywords: [
    "Mike Maeda",
    "software engineer",
    "computer science",
    "data analytics",
    "Alfred University",
    "software engineering internship",
    "full-stack developer",
  ],
  authors: [{ name: "Mike Maeda" }],
  openGraph: {
    title: "Mike Maeda — Computer Science & Data Analytics",
    description:
      "CS & Data Analytics student building data-backed software, full-stack apps, and AI/ML research. Seeking software engineering internships.",
    url: siteUrl,
    siteName: "Mike Maeda",
    type: "website",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Mike Maeda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Maeda — Computer Science & Data Analytics",
    description:
      "CS & Data Analytics student building data-backed software, full-stack apps, and AI/ML research.",
    images: ["/profile.jpg"],
  },
  alternates: { canonical: siteUrl },
};

// Runs before first paint to set the theme from storage (or system
// preference), so there's no flash of the wrong theme on load.
const noFlashTheme = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
