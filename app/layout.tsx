import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";

const siteUrl = "https://mikemaeda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mike Maeda | Backend Engineer & Applied AI Builder",
  description:
    "Mike Maeda builds dependable backend systems, applied AI tools, and data products. Computer Science and Data Analytics at Alfred University.",
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
    title: "Mike Maeda | Backend Engineer & Applied AI Builder",
    description:
      "Backend systems, applied AI, and data products, built with curiosity and tested with care.",
    url: siteUrl,
    siteName: "Mike Maeda",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Mike Maeda | Backend Systems, Applied AI, Data Products" }],
  },
  twitter: {
    card: "summary",
    title: "Mike Maeda | Backend Engineer & Applied AI Builder",
    description:
      "Backend systems, applied AI, and data products, built with curiosity and tested with care.",
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
