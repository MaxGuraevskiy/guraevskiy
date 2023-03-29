"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import keyboard from "@/public/imageCarousel/keyboard.jpg";
import building from "@/public/imageCarousel/building.jpg";
import cars from "@/public/imageCarousel/cars.jpg";
import gym from "@/public/imageCarousel/gym.jpg";
// import gym_deadlift from "@/public/imageCarousel/gym_deadlift.jpg";
import maverick from "@/public/imageCarousel/maverick.jpg";
import guitars from "@/public/imageCarousel/guitars.jpg";
import keyboard_with_kitten from "@/public/imageCarousel/keyboard_with_kitten.jpg";

import "./section3.css";

function Section3() {
  const track = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);

  const image1 = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const image4 = useRef<HTMLImageElement>(null);
  const image5 = useRef<HTMLImageElement>(null);
  const image6 = useRef<HTMLImageElement>(null);
  const image7 = useRef<HTMLImageElement>(null);

  const data = [
    {
      imgRef: image1,
      imgPath: keyboard_with_kitten,
      alt: "Photo of my custom keyboard and ma kitten",
    },
    {
      imgRef: image2,
      imgPath: maverick,
      alt: "Photo of my maverick 1000R XMR",
    },
    {
      imgRef: image3,
      imgPath: guitars,
      alt: "My guitars",
    },
    {
      imgRef: image4,
      imgPath: keyboard,
      alt: "My custom setup",
    },
    {
      imgRef: image5,
      imgPath: cars,
      alt: "Cars meet",
    },
    {
      imgRef: image6,
      imgPath: building,
      alt: "Me checking father`s drill machine",
    },
    {
      imgRef: image7,
      imgPath: gym,
      alt: "Me on the gym",
    },
  ];

  const DownHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    setMouseDownAt(e.clientX);
  };
  const UpHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const MoveHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mouseDownAt === 0) return;
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage2 = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage2;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    setPercentage(nextPercentage);
    SwipeAnimation(nextPercentage);
  };

  const SwipeAnimation = (nextPercentage: number) => {
    const children = data.map((e) => e.imgRef.current);
    // const count = children.length;
    // const widths = children.map((e) => e?.clientWidth);
    track.current!.style.transform = `translate(${
      (nextPercentage / 100) * children.length * 34
    }vmin, 0%)`;

    for (const image of children) {
      image!.style.objectPosition = `${100 + nextPercentage}% center`;
    }
    setNextPercentage(nextPercentage);
  };

  // keyframes don't work as they should on older devices, so I'm using
  // the usual transition here. Here is the code if keyframes supported
  // older versions of browsers

  // track.current?.animate(
  //   {
  //     transform: `translate(${
  //       (nextPercentage / 100) * children.length * 34
  //     }vmin, 0%)`,
  //     // translate: `${(nextPercentage / 100) * children.length * 34}vmin`,
  //   },
  //   { duration: 0, fill: "forwards" }
  // );

  // image?.animate(
  //   {
  //     objectPosition: `${100 + nextPercentage}% center`,
  //   },
  //   { duration: 0, fill: "forwards" }
  // );

  return (
    <section id="hobbies">
      <h1 className="font-manrope text-[3rem] small:text-[4rem] pb-10 z-[3]">
        Увлечения
      </h1>
      <div
        className="w-full"
        onPointerDown={(e) => {
          DownHandle(e);
        }}
        onPointerUp={(e) => {
          UpHandle(e);
        }}
        onPointerMove={(e) => {
          MoveHandle(e);
        }}
        onPointerLeave={(e) => {
          UpHandle(e);
        }}
      >
        <div id="image-track" ref={track}>
          {data.map((e, index) => (
            <Image
              key={index}
              src={e.imgPath}
              alt={e.alt}
              ref={e.imgRef}
              className="image"
              draggable={false}
            />
          ))}
        </div>
      </div>

      <h3 className="font-manrope">Можешь попробовать свайп</h3>
      <input
        id="rangeSwiper"
        type={"range"}
        min={-100}
        max={0}
        value={nextPercentage}
        onChange={(x) => SwipeAnimation(parseFloat(x.target.value))}
        step="any"
      />
    </section>
  );
}

export default Section3;
