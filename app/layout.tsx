import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import DiscoEdges from "../components/DiscoEdges";

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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mike Maeda — Computer Science & Data Analytics",
    description:
      "CS & Data Analytics student building data-backed software, full-stack apps, and AI/ML research. Seeking software engineering internships.",
    url: siteUrl,
    siteName: "Mike Maeda",
    type: "website",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Mike Maeda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Maeda — Computer Science & Data Analytics",
    description:
      "CS & Data Analytics student building data-backed software, full-stack apps, and AI/ML research.",
    images: ["/profile.png"],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <DiscoEdges />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
