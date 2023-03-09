import { Suspense } from "react";
import { Source_Sans_Pro, Manrope } from "next/font/google";
import type { Metadata } from "next";

import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Blob from './layouts/blob'
import HomeLoading from "./loading";

import "./globals.css";

const sans_pro = Source_Sans_Pro({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans-pro",
  weight: "200",
  display: "optional",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  weight: "200",
  display: "optional",
});

/** @type {import("next").Metadata} */
export const metadata: Metadata = {
  title: "Max Guraevskiy",
  description: "Max Guraevskiy. My portfolio",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Max", url: "https://nextjs.org" }],
  creator: "Maxim Guraevskiy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${sans_pro.variable} ${manrope.variable}`}>
      <body className="bg-[url('../public/bg_rocks.jpg')] bg-cover bg-repeat-y">
        <Header />
        <Suspense fallback={<HomeLoading />}>
          <Blob />
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
