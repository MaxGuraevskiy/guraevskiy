import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Blob from "./blob";

import me_main_path from "@/public/section1/me_main.jpg";

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

import "./section1.css";

type techStackImage = { src: any; alt: string; className?: string };
const techStackImages: techStackImage[] = [
  { src: typescript_logo, alt: "TypeScript Logo", className: "" },
  { src: js_logo, alt: "JavaScript Logo", className: "" },
  { src: nextjs_logo, alt: "Next JS Logo", className: "" },
  { src: gatsby_logo, alt: "Gatsby Logo", className: "" },
  { src: expo_logo, alt: "Expo Logo", className: "" },
  {
    src: tailwind_logo,
    alt: "Tailwind Logo",
    className: "hidden mobile:block",
  },
  {
    src: react_logo,
    alt: "React Logo",
    className: "hidden mobile:block",
  },
  {
    src: vscode_logo,
    alt: "Visual Studio Code logo",
    className: "hidden mobile:block",
  },
  {
    src: git_logo,
    alt: "GIT logo",
    className: "hidden mobile:block",
  },
];
const GetTechStackImages = ({ src, alt }: techStackImage) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className={`min-w-[8em] min-h-[8em] w-[8vmin] h-[8vmin]`}
      />
    </div>
  );
};

function Section1() {
  return (
    <section id="Home">
      <Blob />
      <div className={classNames("glass space-y-5")}>
        <div className="flex flex-col items-center">
          <Image
            src={me_main_path}
            alt=""
            className="rounded-2xl min-w-[30em] min-h-[30em] w-[47vmin] h-[40vmin]"
            style={{ objectFit: "cover" }}
          />

          <h1 className="font-manrope font-bold text-[3rem] small:text-[4rem] text-center">
            Максим Гураевский
          </h1>

          <div
            className={classNames(
              "typewriter font-sans_pro hidden verysmallscreen:block"
            )}
          >
            <h1>Software Engineer, Front-end Developer</h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-manrope font-bold text-[3rem] ">Стек</h2>
          <div className="flex flex-wrap justify-around px-4 gap-x-10 gap-y-5">
            {techStackImages.map(({ src, alt, className }, i) => (
              <li
                key={`techStackImage${i}`}
                className={`${className} list-none`}
              >
                <GetTechStackImages src={src} alt={alt} />
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
