import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import classNames from "classnames";

import me_main_path from "@/public/me_main.jpg";

import css_logo from "@/public/techStack/css_logo.svg";
import expo_logo from "@/public/techStack/expo_logo.svg";
import gatsby_logo from "@/public/techStack/gatsby_logo.svg";
import git_logo from "@/public/techStack/git_logo.svg";
import github_logo from "@/public/techStack/github_logo.svg";
import html_logo from "@/public/techStack/html_logo.svg";
import js_logo from "@/public/techStack/js_logo.svg";
import nextjs_logo from "@/public/techStack/nextjs_logo.svg";
import react_logo from "@/public/techStack/react_logo.svg";
import tailwind_logo from "@/public/techStack/tailwind_logo.svg";
import typescript_logo from "@/public/techStack/typescript_logo.svg";
import vscode_logo from "@/public/techStack/vscode_logo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section id={"Home"} className={styles.firstSection}>
        <div className={classNames(styles.glass, "space-y-5")}>
          <div className="flex flex-col items-center">
            <Image
              src={me_main_path}
              alt=""
              className="rounded-full w-[20rem] h-[20rem]"
              style={{ objectFit: "cover" }}
            />

            <h1 className="font-sans_pro font-bold text-[4rem] ">
              Привет, это я,<br></br>Максим Гураевский
            </h1>

            <div
              className={classNames(
                styles.typewriter,
                "font-sans_pro hidden verysmallscreen:block"
              )}
            >
              <h1>Software Engineer, Front-end Developer</h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-sans_pro font-bold text-[4rem] ">Стек</h2>
            <div className="flex flex-wrap justify-around px-4 gap-x-10 gap-y-5">
              <Image
                src={typescript_logo}
                alt="TypeScript Logo"
                className="w-28 h-28"
              />
              <Image
                src={js_logo}
                alt="JavaScript Logo"
                className="w-28 h-28"
              />
              <Image
                src={nextjs_logo}
                alt="Next JS Logo"
                className="w-28 h-28"
              />
              <Image
                src={gatsby_logo}
                alt="Gatsby Logo"
                className="w-28 h-28"
              />
              <Image src={expo_logo} alt="Expo Logo" className="w-28 h-28" />
              <Image
                src={tailwind_logo}
                alt="Tailwind Logo"
                className="w-28 h-28"
              />
              <Image
                src={react_logo}
                alt="Tailwind Logo"
                className="w-28 h-28 hidden mobile:block"
              />
              <Image
                src={vscode_logo}
                alt="Tailwind Logo"
                className="w-28 h-28 hidden mobile:block"
              />
              <Image
                src={git_logo}
                alt="Tailwind Logo"
                className="w-28 h-28 hidden mobile:block"
              />
            </div>
          </div>
        </div>
      </section>
      <section id={"About"}></section>
    </main>
  );
}
