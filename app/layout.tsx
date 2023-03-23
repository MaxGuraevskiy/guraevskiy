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
  keywords: ["Guraevskiy", "Max Guraevskiy", "Next.js", "React", "JavaScript"],
  authors: [{ name: "Max Guraevskiy", url: "https://guraevskiy.vercel.app/" }],
  creator: "Maxim Guraevskiy",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  themeColor: { color: "dark" },
  icons: {
    icon: "./icon.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Max Guraevskiy",
    description: "Max Guraevskiy. My portfolio",
    url: "https://guraevskiy.vercel.app/",
    siteName: "Max Guraevskiy",
    locale: "ru_ru",
    type: "website",
  },
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
