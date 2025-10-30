import type { Metadata } from "next";
import {
  Orbitron,
  Noto_Sans_JP,
  DotGothic16,
  Dela_Gothic_One,
  Shippori_Mincho,
  Rampart_One,
} from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllTags } from "@/lib/content";

import "./_styles/reset.css";
import "./_styles/globals.css";

const orbitron = Orbitron({
  variable: "--font-glitch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-gothic-ja",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const dotGothic16 = DotGothic16({
  variable: "--font-dot-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-gothic-accent",
  subsets: ["latin"],
  weight: ["400"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-serif-ja",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rampartOne = Rampart_One({
  variable: "--font-3d",
  subsets: ["latin"],
  weight: ["400"],
});

// Tiny5 is not available in next/font/google, using local or fallback to DotGothic16
// For now, we'll use DotGothic16 as the primary dot font

export const metadata: Metadata = {
  title: "Web Design H/Jack",
  description: "実践的なWebデザイン・コーディングTips学習メディア",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allTags = getAllTags();

  return (
    <html
      lang="ja"
      className={`${orbitron.variable} ${notoSansJP.variable} ${dotGothic16.variable} ${delaGothicOne.variable} ${shipporiMincho.variable} ${rampartOne.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Header allTags={allTags} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
