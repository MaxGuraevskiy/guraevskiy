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

type techStackImage = { src: any; alt: string; className: string };
const techStackImages: techStackImage[] = [
  { src: typescript_logo, alt: "TypeScript Logo", className: "w-28 h-28" },
  { src: js_logo, alt: "JavaScript Logo", className: "w-28 h-28" },
  { src: nextjs_logo, alt: "Next JS Logo", className: "w-28 h-28" },
  { src: gatsby_logo, alt: "Gatsby Logo", className: "w-28 h-28" },
  { src: expo_logo, alt: "Expo Logo", className: "w-28 h-28" },
  { src: tailwind_logo, alt: "Tailwind Logo", className: "w-28 h-28" },
  {
    src: react_logo,
    alt: "React Logo",
    className: "w-28 h-28 hidden mobile:block",
  },
  {
    src: vscode_logo,
    alt: "Visual Studio Code logo",
    className: "w-28 h-28 hidden mobile:block",
  },
  {
    src: git_logo,
    alt: "GIT logo",
    className: "w-28 h-28 hidden mobile:block",
  },
];
const GetTechStackImages = ({ src, alt, className }: techStackImage) => {
  return (
    <div>
      <Image src={src} alt={alt} className={className} />
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
            className="rounded-full w-60 h-60 verysmallscreen:w-80 verysmallscreen:h-80 small:w-96 small:h-96 medium:w-[36rem] medium:h-[36rem]"
            style={{ objectFit: "cover" }}
          />

          <h1 className="font-sans_pro font-bold text-[4rem] ">
            Привет, это я,<br></br>Максим Гураевский
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
          <h2 className="font-sans_pro font-bold text-[4rem] ">Стек</h2>
          <div className="flex flex-wrap justify-around px-4 gap-x-10 gap-y-5">
            {techStackImages.map(({ src, alt, className }, i) => (
              <li key={`techStackImage${i}`} className="list-none">
                <GetTechStackImages src={src} alt={alt} className={className} />
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
