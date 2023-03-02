import { Suspense } from "react";

import "./globals.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import SideNav from "./layouts/sideNav";
import HomeLoading from "./loading";

/** @type {import("next").Metadata} */
export const metadata: import("next").Metadata = {
  title: "Max Guraevskiy",
  description: "Max Guraevskiy. My portfolio",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Max", url: "https://nextjs.org" }],
  creator: "Maxim Guraevskiy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <SideNav /> */}
        <Suspense fallback={<HomeLoading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
