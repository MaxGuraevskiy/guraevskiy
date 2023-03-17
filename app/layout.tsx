import { Suspense } from "react";
import { Source_Sans_Pro, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
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
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  themeColor: { color: "dark" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ru" className={`${sans_pro.variable} ${manrope.variable}`}>
        <body className="">
          {/* <body className="bg-[url('../public/bg_rocks.jpg')] bg-cover bg-repeat-y"> */}
          <Header />
          <div className=""></div>
          <Suspense fallback={<HomeLoading />}>{children}</Suspense>
          <Footer />
          <Analytics />
        </body>
      </html>
    </>
  );
}
