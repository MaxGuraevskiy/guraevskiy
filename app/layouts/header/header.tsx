"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "./header.module.css";

import me_logo_path from "@/public/header/me_logo.jpg";
import burgerMenu_path from "@/public/header/burgerMenu.svg";
import menu_close_path from "@/public/header/close.svg";

function Header() {
  // Header Links Type
  type headerLinksDataType = { href: string; label: string };
  // Header Links Data
  const headerLinksData: headerLinksDataType[] = [
    { href: "/experience", label: "Работы" },
    { href: "/about", label: "Обо мне" },
  ];
  // Header Links function
  const HeaderLinks = ({ href, label }: headerLinksDataType) => {
    return (
      <div>
        <Link
          className={classNames(styles.link)}
          href={href}
          onClick={() => {
            setIsBurgerOpen(false);
          }}
        >
          <h3 className="font-sans_pro text-[1.6rem] text-[#f9f9f9] hover:text-[#8e57f7]">
            {label}
          </h3>
        </Link>
      </div>
    );
  };

  // Navigation open state
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="">
      <nav className={classNames(styles.content, "small:!px-20 small:!py-4")}>
        {/* Logo and Name */}
        <Link href={"/"} className={styles.logo_container}>
          {/* Image logo container */}
          <div
            className={classNames(
              styles.logo_img_content,
              "small:w-20 small:h-20"
            )}
          >
            {/* Image */}
            <Image
              className={classNames(styles.logo_img, "small:!mr-[1.5rem]")}
              src={me_logo_path}
              alt="me logo"
            />
          </div>
          {/* Name */}
          <h1
            className={classNames(
              styles.logo_sub,
              "font-sans_pro font-bold hover:text-[#8e57f7]"
            )}
          >
            Guraevskiy
          </h1>
        </Link>

        {/* Navigation links (only desktop) */}
        <div className="hidden mobile:!flex">
          <ul className={classNames("flex", {})}>
            {headerLinksData.map(({ href, label }, i) => (
              <li key={`headerlink${i}`}>
                <HeaderLinks href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center space-x-3">
          {/* Download button resume */}
          <a
            href="download/guraevskiymaxim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-pulse hidden verysmallscreen:!flex"
          >
            <h3
              className={classNames(
                styles.link,
                "font-sans_pro hover:text-[#8e57f7]"
              )}
            >
              Резюме
            </h3>
          </a>

          {/* Burger Menu */}
          <div
            // onClick={() => {
            //   setIsBurgerOpen(true);
            // }}
            onPointerDown={() => {
              setIsBurgerOpen(true);
            }}
          >
            <Image
              src={burgerMenu_path}
              alt="burger menu icon"
              className="w-12 h-12"
            />
          </div>
        </div>
      </nav>
      {/* Modal window */}
      <nav
        className={classNames(styles.modal, "transition ", {
          "flex flex-col mobile:flex-row": isBurgerOpen,
        })}
      >
        <button
          onClick={() => {
            setIsBurgerOpen(false);
          }}
          className="fixed right-16 top-16"
        >
          <Image src={menu_close_path} alt="close modal search" />
        </button>

        <ul className={classNames("flex flex-col", {})}>
          {headerLinksData.map(({ href, label }, i) => (
            <li key={`modallink${i}`}>
              <HeaderLinks href={href} label={label} />
            </li>
          ))}
        </ul>

        <Link
          href="download/guraevskiymaxim.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-pulse"
        >
          <h3
            className={classNames(
              styles.link,
              "font-sans_pro hover:text-[#8e57f7]"
            )}
          >
            Резюме
          </h3>
        </Link>

        <div className="flex flex-col">
          <div className="flex flex-col mobile:flex-row justify-center items-center space-y-10 mobile:space-x-10 mobile:space-y-0">
            <Link href="https://t.me/guraevskiy">
              <h2 className="font-manrope text-[1.8rem] font-normal hover:underline">
                Telegram
              </h2>
            </Link>
            <Link href="https://github.com/MaxGuraevskiy">
              <h2 className="font-manrope text-[1.8rem] font-normal hover:underline">
                GitHub
              </h2>
            </Link>
            <Link href="https://linkedin.com">
              <h2 className="font-manrope text-[1.8rem] font-normal hover:underline">
                LinkedIn
              </h2>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
