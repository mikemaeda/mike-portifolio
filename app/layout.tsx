import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";

const siteUrl = "https://mikemaeda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mike Maeda | Computer Science & Data Analytics",
  description:
    "Mike Maeda is a Computer Science and Data Analytics student at Alfred University building practical software, data, and research projects.",
  keywords: [
    "Mike Maeda",
    "software engineer",
    "computer science",
    "data analytics",
    "Alfred University",
    "full-stack developer",
  ],
  authors: [{ name: "Mike Maeda" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mike Maeda | Computer Science & Data Analytics",
    description:
      "Practical software, data, and research projects from an Alfred University student.",
    url: siteUrl,
    siteName: "Mike Maeda",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Mike Maeda | Backend Systems, Applied AI, Data Products" }],
  },
  twitter: {
    card: "summary",
    title: "Mike Maeda | Computer Science & Data Analytics",
    description:
      "Practical software, data, and research projects from an Alfred University student.",
    images: ["/og.png"],
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
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
