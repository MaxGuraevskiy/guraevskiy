"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import "./footer.css";

const nav = [
  {
    href: "/",
    title: "Начальная",
  },
  {
    href: "/experience",
    title: "Работы",
  },
  {
    href: "/about",
    title: "Обо мне",
  },
];

const links = [
  {
    href: "https://t.me/guraevskiy",
    title: "Telegram",
  },
  {
    href: "https://github.com/MaxGuraevskiy",
    title: "GitHub",
  },
  {
    href: "https://linkedin.com",
    title: "LinkedIn",
  },
];

const GetLinks = (links: { href: string; title: string }[], title: string) => {
  return (
    <div className="footer-section">
      <h1 className="footer-section-title font-manrope">{title}</h1>
      <div className="footer-section-links">
        {links.map((e, index) => (
          <li key={`${e.title}${index}`} className="list-none">
            {GetLink(e)}
          </li>
        ))}
      </div>
    </div>
  );
};

const GetLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} key={title}>
      <h2 className="footer-section-link font-sans_pro">{title}</h2>
    </Link>
  );
};

function Footer() {
  const wrapper = useRef<HTMLDivElement>(null);

  const animateBubble = (x: number) => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";
    bubble.style.left = `${x}px`;

    wrapper.current?.appendChild(bubble);

    setTimeout(() => wrapper.current?.removeChild(bubble), 2000);
  };

  useEffect(() => {
    window.onmousemove = (e) => animateBubble(e.clientX);
  }, []);

  return (
    <footer id="footer">
      <div id="bubble-wrapper" ref={wrapper}></div>
      <div id="footer-content">
        {GetLinks(nav, "Навигация")}
        {GetLinks(links, "Ссылки")}
      </div>
    </footer>
  );
}

export default Footer;
