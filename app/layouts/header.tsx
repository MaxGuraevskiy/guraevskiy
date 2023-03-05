"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import burgerMenu_path from "@/public/burgerMenu.svg";
import styles from "./header.module.css";

import me_logo_path from "@/public/me_logo.jpg";
import me_main_path from "@/public/me_main.jpg";
import sun_path from "@/public/sun.svg";
import moon_path from "@/public/moon.svg";
import menu_close_path from "@/public/close.svg";

function Header() {
  // Header Links Type
  type headerLinksDataType = { href: string; label: string };
  // Header Links Data
  const headerLinksData: headerLinksDataType[] = [
    { href: "/experience", label: "Работы" },
    { href: "/about", label: "Обо мне" },
  ];
  // Header Links function
  const HeaderLinks = ({ href, label }: { href: string; label: string }) => {
    return (
      <div>
        <Link
          className={classNames(
            styles.link,
            "font-sans_pro text-[#f9f9f9] hover:text-[#8e57f7]"
          )}
          href={href}
          onClick={() => {
            setIsBurgerOpen(false);
          }}
        >
          {label}
        </Link>
      </div>
    );
  };

  // Navigation open state
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="bg-darkBg">
      <div className={classNames(styles.content, "small:!px-20 small:!py-4")}>
        {/* Logo and Name */}
        <Link href={"/"} className={styles.logo_container}>
          {/* Image logo container */}
          <div
            className={classNames(
              styles.logo_img_content,
              "small:!w-20 small:!h-20 small:!mr-[1.5rem]"
            )}
          >
            {/* Image */}
            <Image
              className={styles.logo_img}
              src={me_logo_path}
              alt="me logo"
            />
          </div>
          {/* Name */}
          <h2
            className={classNames(
              styles.logo_sub,
              "font-sans_pro font-bold hover:text-[#8e57f7]"
            )}
          >
            Guraevskiy
          </h2>
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

        <div className="flex flex-row space-x-3">
          {/* Download button resume */}
          <a
            href="download/guraevskiymaxim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-pulse hidden verysmallscreen:!flex"
          >
            <p
              className={classNames(
                styles.link,
                "font-sans_pro hover:text-[#8e57f7]"
              )}
            >
              Резюме
            </p>
          </a>

          {/* Burger Menu */}
          <button
            onClick={() => {
              setIsBurgerOpen(true);
            }}
          >
            <Image src={burgerMenu_path} alt="burger menu icon" />
          </button>
        </div>
      </div>
      {/* Modal window */}
      <div
        className={classNames(styles.modal, "transition", {
          "flex flex-col mobile:flex-row": isBurgerOpen,
        })}
      >
        <button
          onClick={() => {
            setIsBurgerOpen(false);
          }}
          className="fixed right-4 top-4"
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

        <a
          href="download/guraevskiymaxim.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-pulse"
        >
          <p
            className={classNames(
              styles.link,
              "font-sans_pro hover:text-[#8e57f7]"
            )}
          >
            Резюме
          </p>
        </a>

        <div className="flex flex-col">
          <h2 className="font-manrope text-[2rem] font-semibold">Ссылки</h2>
          <div className="flex flex-col mobile:flex-row justify-center items-center space-y-10 mobile:space-x-10 mobile:space-y-0">
            <Link href="https://t.me/guraevskiy">
              <p className="font-manrope text-[1.8rem] font-normal">Telegram</p>
            </Link>
            <Link href="https://t.me/guraevskiy">
              <p className="font-manrope text-[1.8rem] font-normal">Telegram</p>
            </Link>
            <Link href="https://t.me/guraevskiy">
              <p className="font-manrope text-[1.8rem] font-normal">Telegram</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
