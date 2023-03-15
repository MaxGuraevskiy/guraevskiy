"use client";
import React, { useRef } from "react";
import Image from "next/image";

import sneaker_path from "@/public/section2/sneaker.svg";
import checkpoint_path from "@/public/section2/checkpoint.svg";
import construction_crane_path from "@/public/section2/construction_crane.svg";
import typography_path from "@/public/section2/typography.svg";
import profile_path from "@/public/section2/profile.svg";
import more_path from "@/public/section2/more.svg";

import "./section2.css";

function getCard({
  cardRef,
  imgPath,
  title,
  description,
  alt,
}: {
  cardRef: React.RefObject<HTMLDivElement>;
  imgPath: any;
  title: string;
  description: string;
  alt: string;
}) {
  return (
    <div className="card" ref={cardRef}>
      <div className="card-content">
        <div className="card-image">
          <Image src={imgPath} alt={alt} className="card-image" />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h3 className="font-sans_pro">{title}</h3>
              <h4 className="font-manrope">{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  const card1 = useRef<HTMLDivElement>(null),
    card2 = useRef<HTMLDivElement>(null),
    card3 = useRef<HTMLDivElement>(null),
    card4 = useRef<HTMLDivElement>(null),
    card5 = useRef<HTMLDivElement>(null),
    card6 = useRef<HTMLDivElement>(null);

  const data = [
    {
      cardRef: card1,
      imgPath: sneaker_path,
      title: "FlyBoots",
      description: "Маркетплейс для заказа товаров с Poizon",
      alt: "Sneaker Icon",
    },
    {
      cardRef: card2,
      imgPath: checkpoint_path,
      title: "CheckPoint",
      description: "Кроссплатформенное мобильное приложение для КПП",
      alt: "Checkpoint Icon",
    },
    {
      cardRef: card3,
      imgPath: construction_crane_path,
      title: "Legion",
      description: "Лендинг для девелоперской компании Legion",
      alt: "Construction Crane Icon",
    },
    {
      cardRef: card4,
      imgPath: typography_path,
      title: "Typography",
      description: "Веб-приложение для осуществления деятельности типографии",
      alt: "Printer Icon",
    },
    {
      cardRef: card5,
      imgPath: profile_path,
      title: "Guraevskiy",
      description: "You are already here!",
      alt: "Profile Icon",
    },
    {
      cardRef: card6,
      imgPath: more_path,
      title: "Другие",
      description: 'Вы можете посмотреть другие работы на странице "РАБОТЫ"',
      alt: "More Icon",
    },
  ];

  return (
    <section id="Works">
      <h1 className="font-sans_pro text-[5rem] pb-10">Работы</h1>

      <div
        id="cards"
        onPointerMove={(e) => {
          for (const card of data.map((e) => e.cardRef.current)) {
            const rect = (card as Element).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card?.style.setProperty("--mouse-x", `${x}px`);
            card?.style.setProperty("--mouse-y", `${y}px`);
          }
        }}
      >
        {data.map((e) => (
          <>{getCard(e)}</>
        ))}
      </div>
    </section>
  );
}

export default Section2;
